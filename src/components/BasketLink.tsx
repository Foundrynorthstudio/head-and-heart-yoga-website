"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CART_EVENT, readBasket } from "@/lib/cart";

export function BasketLink({ className = "" }: { className?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const sync = () => setCount(readBasket().length);
    sync();
    window.addEventListener(CART_EVENT, sync);
    return () => window.removeEventListener(CART_EVENT, sync);
  }, []);

  return (
    <Link href="/basket" className={`text-[0.8rem] tracking-[0.14em] text-ink-soft uppercase hover:text-rosewood ${className}`}>
      Basket{count > 0 ? ` ${count}` : ""}
    </Link>
  );
}
