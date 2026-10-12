export const liveClass = {
  id: "live",
  name: "Weekly class",
  pricePence: 1000,
  interval: "week" as const,
  timeLabel: "Recording day to be confirmed",
  summary:
    "£10 a week covers the online class and a Thursday place at The Yoga Tree, when one of the eight is free. The class is recorded at Vicky’s studio, or from the van when she is away, even if nobody is watching. Watch live or later. The recording stays in the library while you are subscribed.",
} as const;

export const products = {
  private: {
    id: "private",
    name: "1hr 1:1 online private session",
    pricePence: 6000,
    summary:
      "An hour on Zoom or at Vicky’s home, shaped around your body, your practice, and what you need that day.",
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
