import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { eventPages } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Two in-person gatherings in the next six months, including YOU-GA at The Yoga Tree.",
};

const covers: Record<string, string> = {
  "you-ga": "/images/vicky-hero-up.jpg",
  "pg-13": "/images/vicky-class.jpg",
  "practice-of-being-human": "/images/practice.jpg",
  maya: "/images/practice-alt.jpg",
};

const featured = eventPages[0];

export default function EventsPage() {
  return (
    <div className="bg-[#121816] text-white">
      <section className="relative min-h-[78vh] pt-28 md:pt-32">
        <Image
          src={covers[featured.slug]}
          alt=""
          fill
          priority
          className="object-cover object-[center_22%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,24,22,0.92)_0%,rgba(18,24,22,0.72)_42%,rgba(18,24,22,0.2)_100%)]" />
        <div className="site-container relative flex min-h-[78vh] flex-col justify-end pb-16 pt-16">
          <p className="text-[0.72rem] tracking-[0.22em] text-sky-soft uppercase">
            Vicky · two gatherings in six months
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(3rem,6vw,5.4rem)] leading-[0.95]">
            {featured.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            {featured.summary}
          </p>
          <p className="mt-4 text-[0.78rem] tracking-[0.16em] text-sky-soft uppercase">
            {featured.meta}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/events/${featured.slug}`} className="btn">
              Read this gathering
            </Link>
            <Link href="/live" className="btn btn-quiet">
              Join the weekly class
            </Link>
          </div>
        </div>
      </section>

      <section className="site-container pb-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[0.72rem] tracking-[0.2em] text-sky-soft uppercase">
              The shelf
            </p>
            <h2 className="mt-3 font-display text-4xl">All gatherings</h2>
          </div>
          <p className="hidden max-w-xs text-sm text-white/60 md:block">
            Two in the next six months. If a workshop is more than you want
            right now, the weekly class is £10 a week.
          </p>
        </div>
        <div className="mt-8 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">
          {eventPages.map((event) => (
            <Link
              key={event.slug}
              href={`/events/${event.slug}`}
              className="group w-[min(16rem,70vw)] shrink-0 snap-start"
            >
              <div className="relative aspect-[2/3] overflow-hidden rounded-[1.25rem] bg-black">
                <Image
                  src={covers[event.slug]}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  sizes="256px"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.88)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[0.68rem] tracking-[0.16em] text-sky-soft uppercase">
                    {event.meta}
                  </p>
                  <h3 className="mt-2 font-display text-2xl leading-tight">{event.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
