"use client";

import { useState } from "react";
import type { CheckoutProduct } from "@/lib/catalog";

type CheckoutButtonProps = {
  product: CheckoutProduct;
  label: string;
  className?: string;
  slot?: string;
  location?: string;
  disabled?: boolean;
};

export function CheckoutButton({
  product,
  label,
  className = "btn",
  slot,
  location,
  disabled = false,
}: CheckoutButtonProps) {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function pay() {
    setPending(true);
    setMessage(null);
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product, slot, location }),
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
    <div>
      <button
        type="button"
        className={className}
        onClick={pay}
        disabled={disabled || pending}
      >
        {pending ? "Opening checkout…" : label}
      </button>
      {message ? <p className="mt-3 max-w-md text-sm text-ink-soft">{message}</p> : null}
    </div>
  );
}
