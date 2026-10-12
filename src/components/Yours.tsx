"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CART_EVENT, productName, readOwned } from "@/lib/cart";
import { thisWeekClass } from "@/lib/community";
import type { CheckoutProduct } from "@/lib/catalog";

const links: Partial<Record<CheckoutProduct, { href: string; note: string }>> = {
  live: {
    href: `/community/class/${thisWeekClass.slug}`,
    note: "This week’s class is open.",
  },
  pg13: {
    href: "/community/courses/pg-13",
    note: "The lessons are on the shelf.",
  },
  private: {
    href: "/book/private",
    note: "Vicky will confirm the hour.",
  },
  group: {
    href: "/contact",
    note: "Vicky will confirm the group.",
  },
  block: {
    href: "/book/private",
    note: "Vicky will confirm the four hours.",
  },
};

export function Yours() {
  const [owned, setOwned] = useState<CheckoutProduct[]>([]);

  useEffect(() => {
    const sync = () => setOwned(readOwned());
    sync();
    window.addEventListener(CART_EVENT, sync);
    return () => window.removeEventListener(CART_EVENT, sync);
  }, []);

  if (owned.length === 0) return null;

  return (
    <section className="mt-16">
      <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">Yours</p>
      <h2 className="mt-3 font-display text-3xl">From your basket</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {owned.map((product) => {
          const link = links[product];
          return (
            <article key={product} className="rounded-[1.25rem] bg-white/80 p-5">
              <h3 className="font-display text-2xl">{productName(product)}</h3>
              <p className="mt-2 text-sm text-ink-soft">{link?.note}</p>
              {link ? (
                <Link href={link.href} className="btn mt-5">
                  Open it
                </Link>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
