import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { RecordPurchase } from "@/components/RecordPurchase";
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
  searchParams: Promise<{ product?: string; products?: string }>;
}) {
  const params = await searchParams;
  const list = (params.products ?? params.product ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  const product = list[0];
  const name = list
    .map((item) => names[item as CheckoutProduct])
    .filter(Boolean)
    .join(", ");

  return (
    <>
      <RecordPurchase products={list.join(",")} />
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        {name
          ? `${name} is confirmed. It is waiting in the community.`
          : "Vicky will email the details of your purchase."}{" "}
        {product === "live"
          ? "The weekly class time will be in that note, and a missed class is recorded within 48 hours."
          : null}
        {list.includes("pg13") ? " The course lessons will arrive by email." : null}
        {list.includes("block")
          ? " She will confirm the four session times with you."
          : null}
      </p>
      <Link href="/community" className="btn mt-8">
        Open the community
      </Link>
    </>
  );
}

export default function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string; products?: string }>;
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
        <Link href="/" className="mt-4 inline-block text-sm text-rosewood">
          Back home
        </Link>
      </div>
    </section>
  );
}
