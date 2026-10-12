import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckoutButton } from "@/components/CheckoutButton";
import { formatPounds, liveClass } from "@/lib/catalog";
import { libraryPreview } from "@/lib/community";

export const metadata: Metadata = {
  title: "Weekly online class",
  description:
    "A weekly class recorded at Vicky’s studio. £10 a week. Watch live or later, and subscribers are offered Thursday at The Yoga Tree first.",
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
          <li>Recorded at her studio. From the van only when she is already away.</li>
          <li>Watch live, or later in the library.</li>
          <li>The class is recorded even if nobody is watching.</li>
          <li>Billed weekly until you cancel.</li>
        </ul>
        <div className="mt-8">
          <CheckoutButton product="live" label="Subscribe for £10 a week" />
        </div>
        <article className="mt-10 rounded-[1.25rem] border border-sage/25 p-5">
          <p className="text-[0.72rem] tracking-[0.14em] text-rosewood uppercase">
            Thursday at The Yoga Tree
          </p>
          <p className="mt-3 text-ink-soft">
            Eight people can join Vicky in the room in Stirling. A subscriber is
            asked first. When the spaces are gone, the stream is the way in.
            The time is still to be set, and so is the price, so a space is an
            enquiry for now.
          </p>
          <Link href="/contact" className="btn mt-5">
            Ask about a Thursday space
          </Link>
        </article>
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
          Open the community
        </Link>
      </div>
    </section>
  );
}
