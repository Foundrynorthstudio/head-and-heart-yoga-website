"use client";

import { useEffect, useState } from "react";
import { addToBasket, CART_EVENT, readBasket } from "@/lib/cart";
import type { CheckoutProduct } from "@/lib/catalog";

export function AddToBasket({
  product,
  className = "btn",
}: {
  product: CheckoutProduct;
  className?: string;
}) {
  const [inBasket, setInBasket] = useState(false);

  useEffect(() => {
    const sync = () => setInBasket(readBasket().includes(product));
    sync();
    window.addEventListener(CART_EVENT, sync);
    return () => window.removeEventListener(CART_EVENT, sync);
  }, [product]);

  return (
    <button
      type="button"
      className={className}
      onClick={() => addToBasket(product)}
    >
      {inBasket ? "In the basket" : "Add to basket"}
    </button>
  );
}
