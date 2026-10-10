import type { Metadata } from "next";
import { CheckoutButton } from "@/components/CheckoutButton";
import { formatPounds, liveClass } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Monday Online Yoga Flow",
  description:
    "A weekly live online yoga class with Vicky. £10 a week, cancel any time.",
};

export default function LivePage() {
  return (
    <section className="section-pad pt-32 md:pt-40">
      <div className="site-container max-w-3xl">
        <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
          Live class
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.6rem,5vw,4rem)] leading-[1.05]">
          {liveClass.name}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          {liveClass.summary}
        </p>
        <p className="mt-4 text-[0.78rem] tracking-[0.14em] text-rosewood uppercase">
          {formatPounds(liveClass.pricePence)} a week · {liveClass.timeLabel}
        </p>
        <ul className="mt-8 space-y-3 text-lg text-ink-soft">
          <li>One live stream each week.</li>
          <li>Billed weekly until you cancel.</li>
          <li>Miss the class and a recording arrives within 48 hours.</li>
        </ul>
        <div className="mt-8">
          <CheckoutButton product="live" label="Subscribe for £10 a week" />
        </div>
      </div>
    </section>
  );
}
