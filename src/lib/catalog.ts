export const liveClass = {
  id: "live",
  name: "Monday Online Yoga Flow",
  pricePence: 1000,
  interval: "week" as const,
  timeLabel: "Time to be confirmed",
  summary:
    "One live online class each week. £10, billed weekly, until you cancel. If you miss the class, a recording is sent within 48 hours.",
} as const;

export const products = {
  private: {
    id: "private",
    name: "1hr 1:1 online private session",
    pricePence: 6000,
    summary:
      "An hour on Zoom, shaped around your body, your practice, and what you need that day.",
  },
  block: {
    id: "block",
    name: "Block of four private hours",
    pricePence: 14000,
    summary:
      "Four one-hour private sessions at a reduced rate. Vicky confirms the four times with you after payment.",
  },
  group: {
    id: "group",
    name: "External group / event yoga",
    pricePence: 20000,
    summary:
      "A one-hour session for a work event, family gathering, or group of friends. Adults only.",
  },
  pg13: {
    id: "pg13",
    name: "PG-13: Parenting through a Yoga Lens",
    pricePence: 17500,
    summary:
      "On-demand lessons from the Yoga Sutras and the Bhagavad Gita for parents of teenagers, plus a grounding class, a yoga nidra, and a short guide.",
  },
} as const;

export type CheckoutProduct = keyof typeof products | typeof liveClass.id;

export function formatPounds(pence: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(pence / 100);
}
