import { liveClass, products, type CheckoutProduct } from "@/lib/catalog";

export const BASKET_KEY = "hh-basket";
export const OWNED_KEY = "hh-owned";
export const CART_EVENT = "hh-cart";

const ids = new Set<string>(["live", "private", "group", "block", "pg13"]);

export function isCheckoutProduct(value: string): value is CheckoutProduct {
  return ids.has(value);
}

export function readList(key: string): CheckoutProduct[] {
  if (typeof window === "undefined") return [];
  try {
    const parsed = JSON.parse(window.localStorage.getItem(key) ?? "[]") as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is CheckoutProduct => typeof item === "string" && isCheckoutProduct(item));
  } catch {
    return [];
  }
}

function writeList(key: string, items: CheckoutProduct[]) {
  window.localStorage.setItem(key, JSON.stringify(items));
  window.dispatchEvent(new Event(CART_EVENT));
}

export function readBasket() {
  return readList(BASKET_KEY);
}

export function readOwned() {
  return readList(OWNED_KEY);
}

export function addToBasket(product: CheckoutProduct) {
  const basket = readBasket();
  if (!basket.includes(product)) basket.push(product);
  writeList(BASKET_KEY, basket);
}

export function removeFromBasket(product: CheckoutProduct) {
  writeList(
    BASKET_KEY,
    readBasket().filter((item) => item !== product),
  );
}

export function addOwned(productsToKeep: CheckoutProduct[]) {
  const owned = new Set(readOwned());
  for (const product of productsToKeep) owned.add(product);
  writeList(OWNED_KEY, [...owned]);
  writeList(
    BASKET_KEY,
    readBasket().filter((item) => !owned.has(item)),
  );
}

export function productName(product: CheckoutProduct) {
  return product === "live" ? liveClass.name : products[product].name;
}

export function productPrice(product: CheckoutProduct) {
  return product === "live" ? liveClass.pricePence : products[product].pricePence;
}
