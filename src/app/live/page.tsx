import type { Metadata } from "next";
import Image from "next/image";
import { CheckoutButton } from "@/components/CheckoutButton";
import { formatPounds, liveClass } from "@/lib/catalog";

const library = [
  {
    title: "Monday Flow · Steady breath",
    date: "5 October 2026",
    length: "60 min",
    image: "/images/studio-alt.jpg",
  },
  {
    title: "Monday Flow · Soft strength",
    date: "28 September 2026",
    length: "60 min",
    image: "/images/vicky-class.jpg",
  },
  {
    title: "Monday Flow · Quiet hips",
    date: "21 September 2026",
    length: "58 min",
    image: "/images/studio.jpg",
  },
  {
    title: "Monday Flow · Long spine",
    date: "14 September 2026",
    length: "61 min",
    image: "/images/session.jpg",
  },
  {
    title: "Monday Flow · Ease in the shoulders",
    date: "7 September 2026",
    length: "60 min",
    image: "/images/vicky.jpg",
  },
  {
    title: "Monday Flow · Ground and rise",
    date: "31 August 2026",
    length: "59 min",
    image: "/images/practice-alt.jpg",
  },
] as const;

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

      <div className="site-container mt-16">
        <h2 className="font-display text-3xl">Class library</h2>
        <p className="mt-3 max-w-2xl text-lg text-ink-soft">
          Once you are subscribed, every Monday recording is here to watch
          whenever you like.
        </p>
        <div className="mt-8 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
          {library.map((item) => (
            <article
              key={item.date}
              className="w-[min(16rem,72vw)] shrink-0 snap-start overflow-hidden rounded-[1.25rem] bg-white shadow-[0_16px_40px_rgba(28,36,33,0.05)]"
            >
              <div className="relative aspect-video">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="256px"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-rosewood shadow">
                    <span className="ml-1 inline-block h-0 w-0 border-y-[7px] border-l-[12px] border-y-transparent border-l-current" />
                  </span>
                </span>
              </div>
              <div className="px-4 py-4">
                <h3 className="font-display text-xl leading-tight">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">
                  {item.date} · {item.length}
                </p>
                <p className="mt-3 text-[0.72rem] tracking-[0.14em] text-rosewood uppercase">
                  Included with your subscription
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
