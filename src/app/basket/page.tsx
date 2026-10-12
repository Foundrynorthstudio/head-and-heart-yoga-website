"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  productName,
  productPrice,
  readBasket,
  removeFromBasket,
} from "@/lib/cart";
import { formatPounds, type CheckoutProduct } from "@/lib/catalog";

export default function BasketPage() {
  const [items, setItems] = useState<CheckoutProduct[]>([]);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    setItems(readBasket());
  }, []);

  const total = items.reduce((sum, item) => sum + productPrice(item), 0);

  async function pay() {
    setPending(true);
    setMessage(null);
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    });
    const data = (await response.json().catch(() => null)) as {
      url?: string;
      error?: string;
    } | null;
    if (data?.url) {
      window.location.href = data.url;
      return;
    }
    setPending(false);
    setMessage(
      data?.error === "not_configured"
        ? "Online checkout is not switched on yet. Add the Stripe keys and this button will take payment."
        : data?.error || "Something went wrong. Try again.",
    );
  }

  return (
    <section className="section-pad pt-32 md:pt-40">
      <div className="site-container max-w-2xl">
        <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">Basket</p>
        <h1 className="mt-3 font-display text-[clamp(2.6rem,5vw,4rem)] leading-[1.05]">
          Ready to pay
        </h1>
        {items.length === 0 ? (
          <p className="mt-5 text-lg text-ink-soft">
            The basket is empty.{" "}
            <Link href="/join" className="text-rosewood underline-offset-4 hover:underline">
              Join
            </Link>{" "}
            or browse the{" "}
            <Link href="/courses" className="text-rosewood underline-offset-4 hover:underline">
              courses
            </Link>
            .
          </p>
        ) : (
          <>
            <ul className="mt-8 divide-y divide-sage/25">
              {items.map((item) => (
                <li key={item} className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="font-display text-2xl">{productName(item)}</p>
                    <p className="text-sm text-ink-soft">
                      {formatPounds(productPrice(item))}
                      {item === "live" ? " a week" : ""}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="text-sm text-rosewood"
                    onClick={() => {
                      removeFromBasket(item);
                      setItems(readBasket());
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-lg">
              {formatPounds(total)}
              {items.includes("live") ? ", with the class each week" : ""}
            </p>
            <button type="button" className="btn mt-6" onClick={pay} disabled={pending}>
              {pending ? "Opening checkout…" : "Complete purchase"}
            </button>
            {message ? <p className="mt-3 max-w-md text-sm text-ink-soft">{message}</p> : null}
          </>
        )}
      </div>
    </section>
  );
}
