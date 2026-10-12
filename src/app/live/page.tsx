import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AddToBasket } from "@/components/AddToBasket";
import { formatPounds, liveClass } from "@/lib/catalog";
import { libraryPreview } from "@/lib/community";

export const metadata: Metadata = {
  title: "Weekly class",
  description:
    "£10 a week for the online class and a Thursday place at The Yoga Tree. Watch live or later.",
};

export default function LivePage() {
  return (
    <section className="section-pad pt-32 md:pt-40">
      <div className="site-container">
        <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
          Weekly class
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.6rem,5vw,4rem)] leading-[1.05]">
          {liveClass.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {liveClass.summary}
        </p>
        <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-2">
          <article className="rounded-[1.5rem] bg-white/80 p-6 md:p-8">
            <p className="text-[0.72rem] tracking-[0.14em] text-rosewood uppercase">
              {formatPounds(liveClass.pricePence)} a week · {liveClass.timeLabel}
            </p>
            <h2 className="mt-3 font-display text-3xl">Watch, then catch up</h2>
            <ul className="mt-5 space-y-3 text-ink-soft">
              <li>The same class is taught again on Thursday at The Yoga Tree.</li>
              <li>Watch live, or later in the library.</li>
              <li>The class is recorded even if nobody is watching.</li>
              <li>Billed weekly until you cancel.</li>
            </ul>
            <div className="mt-8">
              <AddToBasket product="live" />
            </div>
          </article>
          <article className="rounded-[1.5rem] bg-sage-deep p-6 text-white md:p-8">
            <p className="text-[0.72rem] tracking-[0.14em] text-sky-soft uppercase">
              Only eight
            </p>
            <p className="mt-3 font-display text-7xl leading-none">8</p>
            <h2 className="mt-4 font-display text-3xl">Thursday at The Yoga Tree</h2>
            <p className="mt-3 max-w-md text-white/80">
              Eight people in the room in Stirling. The £10 week includes a
              place when one is free. An empty place can be booked as a one-off.
            </p>
            <Link href="/community" className="btn btn-quiet mt-8">
              Ask about a Thursday space
            </Link>
          </article>
        </div>
      </div>

      <div className="site-container mt-16">
        <h2 className="font-display text-3xl">Class library</h2>
        <p className="mt-3 max-w-2xl text-lg text-ink-soft">
          This row is a preview of the shelf. Each real class is added the week
          it is recorded, and it stays while you are subscribed.
        </p>
        <div className="mt-8 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
          {libraryPreview.map((item) => (
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
              </div>
              <div className="px-4 py-4">
                <h3 className="font-display text-xl leading-tight">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">
                  {item.date} · {item.length}
                </p>
                <p className="mt-3 text-[0.72rem] tracking-[0.14em] text-rosewood uppercase">
                  Preview · included with a subscription
                </p>
              </div>
            </article>
          ))}
        </div>
        <Link href="/community" className="btn mt-8">
          Join our community
        </Link>
      </div>
    </section>
  );
}
