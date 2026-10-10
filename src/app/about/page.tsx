import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Vicky",
  description:
    "Meet Vicky — yoga teacher in Stirling offering inclusive Integrative Vinyasa classes online and in her home studio.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-pad pt-32 md:pt-40">
        <div className="site-container grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative mx-auto aspect-[5/6] w-full max-w-md overflow-hidden rounded-[2rem]">
              <Image
                src="/images/vicky.jpg"
                alt="Portrait of Vicky, Head & Heart Yoga teacher"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 420px"
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={1}>
            <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
              About Vicky
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.6rem,5vw,4rem)] leading-[1.05]">
              A teacher still deeply in practice
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              I’ve been practising yoga since the late ’90s, when I found a class
              in the local fitness centre in Ayr. I practised as regularly as I
              could — and fell in love with yoga.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-[clamp(4.5rem,10vw,7.5rem)]">
        <div className="site-container max-w-3xl space-y-6 text-lg leading-relaxed text-ink-soft">
          <Reveal>
            <p>
              In 2010 life threw me a curve ball with the sudden loss of my
              partner, and I immersed myself in yoga. I showed up to class weekly
              and developed a regular home practice.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <p>
              In 2014 I enrolled — and one year later completed — my first 200hr
              Yoga Teacher Training at the Seasonal Yoga Academy in Glasgow. I’ve
              been teaching ever since. In January 2021, I completed another
              200hr Teacher Training in Integrative Vinyasa Yoga with Coral
              Brown.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p>
              I’m also a keen student of yoga philosophy, currently studying with
              Alexandria Crow. I live in Stirling, Scotland with my daughter, and
              teach online and in my small home studio.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-sage/20 bg-[color-mix(in_srgb,var(--mist)_70%,white)] section-pad">
        <div className="site-container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl">
              Want to know how classes feel?
            </h2>
            <p className="mt-3 max-w-xl text-ink-soft">
              Read about the teaching style, who classes are for, and what to
              expect on the mat.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <Link
              href="/practice"
              className="rounded-full bg-ink px-6 py-3 text-[0.78rem] tracking-[0.16em] text-white uppercase transition hover:bg-sage-deep"
            >
              The practice
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
