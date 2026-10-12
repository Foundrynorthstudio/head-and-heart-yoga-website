import type { Metadata } from "next";
import { AddToBasket } from "@/components/AddToBasket";
import { formatPounds, liveClass, products } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Join the weekly class, book a private hour, or ask for a group session.",
};

const offers = [
  {
    product: "live" as const,
    price: `${formatPounds(liveClass.pricePence)} a week`,
    name: liveClass.name,
    detail: liveClass.summary,
  },
  {
    product: "private" as const,
    price: formatPounds(products.private.pricePence),
    name: products.private.name,
    detail: products.private.summary,
  },
  {
    product: "group" as const,
    price: formatPounds(products.group.pricePence),
    name: products.group.name,
    detail: products.group.summary,
  },
];

export default function JoinPage() {
  return (
    <section className="section-pad pt-32 md:pt-40">
      <div className="site-container">
        <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">Join</p>
        <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.6rem,5vw,4rem)] leading-[1.05]">
          Choose what to add
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          The weekly class, a private hour, or a group. Courses stay on their
          own page. Add what you want, then pay from the basket.
        </p>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {offers.map((offer) => (
            <article key={offer.product} className="rounded-[1.5rem] border border-sage/25 bg-white/80 p-6">
              <p className="text-[0.72rem] tracking-[0.14em] text-rosewood uppercase">
                {offer.price}
              </p>
              <h2 className="mt-3 font-display text-3xl">{offer.name}</h2>
              <p className="mt-3 text-ink-soft">{offer.detail}</p>
              <div className="mt-6">
                <AddToBasket product={offer.product} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
