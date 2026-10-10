import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book",
  description:
    "Book a private online yoga session or enquire about group and event yoga with Head & Heart Yoga in Stirling.",
};

export default function BookPage() {
  return (
    <>
      <section className="section-pad pt-32 md:pt-40">
        <div className="site-container">
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
              Book online
            </p>
            <h1 className="mt-3 max-w-2xl font-display text-[clamp(2.6rem,5vw,4rem)] leading-[1.05]">
              Sessions shaped around you
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Choose a private online hour, or ask about yoga for a workplace,
              family gathering, or group of friends. Booking requests go straight
              to Vicky.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-[clamp(4.5rem,10vw,7.5rem)]">
        <div className="site-container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={(index + 1) as 1 | 2}>
                <article className="border-t border-sage/25 pt-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h2 className="font-display text-2xl md:text-3xl">
                      {service.title}
                    </h2>
                    <p className="text-[0.78rem] tracking-[0.14em] text-rosewood uppercase">
                      {service.duration} · {service.price}
                    </p>
                  </div>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft">
                    {service.detail}
                  </p>
                  <a
                    href={`${site.emailHref}&body=${encodeURIComponent(`Hi Vicky,%0A%0AI'd like to book: ${service.title}%0A%0A`)}`}
                    className="mt-5 inline-flex rounded-full bg-rosewood px-5 py-2.5 text-[0.75rem] tracking-[0.14em] text-white uppercase transition hover:bg-rosewood-deep"
                  >
                    {service.cta}
                  </a>
                </article>
              </Reveal>
            ))}

            <Reveal delay={3}>
              <p className="pt-4 text-sm text-ink-soft">
                Prefer the existing booking flow?{" "}
                <a
                  href="https://www.headandheartyoga.com/book-online"
                  target="_blank"
                  rel="noreferrer"
                  className="text-rosewood underline-offset-4 hover:underline"
                >
                  Open the live booking page
                </a>
                .
              </p>
            </Reveal>
          </div>

          <Reveal delay={2}>
            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/studio.jpg"
                alt="Vicky sitting in her yoga studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-sage/20 bg-mist/60 section-pad">
        <div className="site-container flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <h2 className="font-display text-3xl">Not sure which session fits?</h2>
            <p className="mt-3 max-w-xl text-ink-soft">
              Send a note with where you are in your practice — beginner,
              returning, or looking for something specific — and Vicky will help
              you choose.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <Link
              href="/contact"
              className="rounded-full border border-rosewood/40 px-6 py-3 text-[0.78rem] tracking-[0.16em] text-rosewood uppercase transition hover:bg-rosewood hover:text-white"
            >
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
