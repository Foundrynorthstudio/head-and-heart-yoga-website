import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { events } from "@/lib/site";

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
              Workshops in the room, and courses you can start from here. If a
              workshop is more than you want right now, the Monday class is £10
              a week.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-[clamp(4.5rem,10vw,7.5rem)]">
        <div className="site-container max-w-3xl space-y-16">
          {events.map((event, index) => (
            <Reveal key={event.title} delay={([1, 2, 3, 3] as const)[index]}>
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
                {event.href.startsWith("/") ? (
                  <Link href={event.href} className="btn mt-6">
                    {event.cta}
                  </Link>
                ) : (
                  <a
                    href={event.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn mt-6"
                  >
                    {event.cta}
                  </a>
                )}
                {event.href.startsWith("http") ? (
                  <p className="mt-4 text-sm text-ink-soft">
                    Not ready for a workshop?{" "}
                    <Link href="/live" className="text-rosewood underline-offset-4 hover:underline">
                      Join Monday Online Yoga Flow
                    </Link>
                    .
                  </p>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
