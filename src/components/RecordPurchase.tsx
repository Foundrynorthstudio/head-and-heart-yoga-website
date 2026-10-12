"use client";

import { useEffect } from "react";
import { addOwned, isCheckoutProduct } from "@/lib/cart";
import type { CheckoutProduct } from "@/lib/catalog";

export function RecordPurchase({ products }: { products: string }) {
  useEffect(() => {
    const items = products
      .split(",")
      .map((item) => item.trim())
      .filter(isCheckoutProduct);
    if (items.length) addOwned(items);
  }, [products]);

  return null;
}
