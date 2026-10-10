import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Student stories",
  description:
    "Hear from students of Head & Heart Yoga with Vicky in Stirling.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="section-pad pt-32 md:pt-40">
        <div className="site-container max-w-3xl">
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
              Student stories
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.6rem,5vw,4rem)] leading-[1.05]">
              Let’s hear from Vicky’s students
            </h1>
          </Reveal>

          <div className="mt-14 space-y-12">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={(index + 1) as 1 | 2 | 3}>
                <blockquote className="border-l-2 border-sky pl-6 md:pl-8">
                  <p className="font-display text-[clamp(1.35rem,2.5vw,1.75rem)] leading-[1.45] text-ink">
                    “{item.quote}”
                  </p>
                  <footer className="mt-5 text-[0.78rem] tracking-[0.16em] text-rosewood uppercase">
                    — {item.name}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-sage/20 section-pad">
        <div className="site-container flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <h2 className="font-display text-3xl">Come and practise</h2>
            <p className="mt-2 text-ink-soft">
              Welcoming classes for every body — Stirling and online.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <Link
              href="/book"
              className="btn"
            >
              Book a session
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
