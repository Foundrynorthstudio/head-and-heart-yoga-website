import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { liveClass, products, type CheckoutProduct } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Payment received",
};

const names: Record<string, string> = {
  private: products.private.name,
  group: products.group.name,
  block: products.block.name,
  pg13: products.pg13.name,
  live: liveClass.name,
};

async function SuccessMessage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await searchParams;
  const name = product ? names[product as CheckoutProduct] : undefined;

  return (
    <p className="mt-5 text-lg leading-relaxed text-ink-soft">
      {name
        ? `${name} is confirmed. Vicky will email the details.`
        : "Vicky will email the details of your purchase."}{" "}
      {product === "live"
        ? "The Monday class time will be in that note, and a missed class is recorded within 48 hours."
        : null}
      {product === "pg13" ? " The course lessons will arrive by email." : null}
      {product === "block"
        ? " She will confirm the four session times with you."
        : null}
    </p>
  );
}

export default function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  return (
    <section className="section-pad pt-32 md:pt-40">
      <div className="site-container max-w-2xl">
        <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
          Thank you
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.6rem,5vw,4rem)] leading-[1.05]">
          You’re booked in
        </h1>
        <Suspense
          fallback={
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Vicky will email the details of your purchase.
            </p>
          }
        >
          <SuccessMessage searchParams={searchParams} />
        </Suspense>
        <Link href="/" className="btn mt-8">
          Back home
        </Link>
      </div>
    </section>
  );
}
