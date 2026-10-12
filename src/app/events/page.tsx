import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { eventPages } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Workshops and courses from Head & Heart Yoga, including YOU-GA and PG-13: Parenting through a Yoga Lens.",
};

export default function EventsPage() {
  return (
    <>
      <section className="section-pad pt-32 md:pt-40">
        <div className="site-container max-w-3xl">
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
              Events
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.6rem,5vw,4rem)] leading-[1.05]">
              Workshops and courses
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              One in-person gathering is offered each month. The full stories
              live here. If a workshop is more than you want right now, the
              weekly class is £10 a week.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-[clamp(4.5rem,10vw,7.5rem)]">
        <div className="site-container max-w-3xl space-y-16">
          {eventPages.map((event, index) => (
            <Reveal key={event.slug} delay={([1, 2, 3, 3] as const)[index]}>
              <article className="border-t border-sage/25 pt-8">
                <p className="text-[0.78rem] tracking-[0.14em] text-sage uppercase">
                  {event.meta}
                </p>
                <h2 className="mt-3 font-display text-[clamp(2rem,4vw,2.8rem)] leading-tight text-ink">
                  {event.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                  {event.summary}
                </p>
                <Link href={`/events/${event.slug}`} className="btn mt-6">
                  Read more
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
