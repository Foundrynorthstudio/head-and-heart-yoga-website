import { randomUUID } from "node:crypto";
import Stripe from "stripe";
import { isBookableSlot } from "@/lib/availability";
import { holdSlot, releaseHold } from "@/lib/bookings";
import { liveClass, products, type CheckoutProduct } from "@/lib/catalog";

const productIds = new Set<CheckoutProduct>([
  "private",
  "group",
  "block",
  "pg13",
  "live",
]);

function stripeClient() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key);
}

function originFrom(request: Request) {
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const proto = request.headers.get("x-forwarded-proto") ?? "http";
  return `${proto}://${host}`;
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    product?: string;
    items?: string[];
    slot?: string;
    location?: string;
  } | null;

  const fromBasket = Array.isArray(body?.items);
  const requested = fromBasket ? body?.items ?? [] : body?.product ? [body.product] : [];
  const items = requested.filter((item): item is CheckoutProduct =>
    productIds.has(item as CheckoutProduct),
  );

  if (!body || items.length === 0) {
    return Response.json({ error: "Choose a product to continue." }, { status: 400 });
  }

  const product = items[0];
  const needsSlot = !fromBasket && (product === "private" || product === "group");
  const location = body.location?.trim();

  if (needsSlot) {
    if (!body.slot || !isBookableSlot(body.slot)) {
      return Response.json({ error: "Choose an open hour." }, { status: 400 });
    }
  }

  if (!fromBasket && product === "group" && !location) {
    return Response.json(
      { error: "Add where the group is meeting." },
      { status: 400 },
    );
  }

  const stripe = stripeClient();
  if (!stripe) {
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const bookingId = randomUUID();
  if (needsSlot && body.slot) {
    const held = holdSlot({
      id: bookingId,
      product,
      slot: body.slot,
      location,
    });
    if (!held) {
      return Response.json(
        { error: "That hour has just been taken. Choose another." },
        { status: 409 },
      );
    }
  }

  const origin = originFrom(request);
  const hasLive = items.includes("live");

  try {
    const session = await stripe.checkout.sessions.create({
      mode: hasLive ? "subscription" : "payment",
      customer_email: undefined,
      success_url: `${origin}/book/success?products=${items.join(",")}`,
      cancel_url: fromBasket
        ? `${origin}/basket`
        : product === "live"
          ? `${origin}/live`
          : product === "pg13"
            ? `${origin}/courses`
            : `${origin}/book/${product === "group" ? "group" : "private"}`,
      metadata: {
        product: items.join(","),
        bookingId: needsSlot ? bookingId : "",
        slot: body.slot ?? "",
      },
      line_items: items.map((item) => {
        const priced = item === "live" ? liveClass : products[item];
        return {
          quantity: 1,
          price_data: {
            currency: "gbp",
            unit_amount: priced.pricePence,
            product_data: { name: priced.name },
            ...(item === "live" ? { recurring: { interval: "week" as const } } : {}),
          },
        };
      }),
    });

    if (!session.url) {
      if (needsSlot) releaseHold(bookingId);
      return Response.json({ error: "Checkout could not be opened." }, { status: 502 });
    }

    return Response.json({ url: session.url });
  } catch {
    if (needsSlot) releaseHold(bookingId);
    return Response.json({ error: "Checkout could not be opened." }, { status: 502 });
  }
}
