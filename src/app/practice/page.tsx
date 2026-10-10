import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The Practice",
  description:
    "What to expect in a Head & Heart Yoga class — inclusive vinyasa, natural mobility, and philosophy at the centre.",
};

export default function PracticePage() {
  return (
    <>
      <section className="relative min-h-[58vh] overflow-hidden pt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/practice-alt.jpg"
            alt="Quiet moment of yoga practice"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,36,33,0.45),rgba(28,36,33,0.7))]" />
        </div>
        <div className="site-container relative flex min-h-[58vh] items-end pb-14">
          <div className="max-w-2xl">
            <p className="hero-animate text-[0.72rem] tracking-[0.2em] text-sky-soft uppercase">
              What to expect
            </p>
            <h1 className="hero-animate-delay mt-3 font-display text-[clamp(2.6rem,6vw,4.4rem)] leading-[1.02] text-white">
              No expectations on the mat — just honest practice
            </h1>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight text-rosewood md:text-4xl">
              Finding a teacher who feels right matters
            </h2>
          </Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
            <Reveal delay={1}>
              <p>
                Becoming a yoga teacher is a commitment not only to students, but
                to continued growth as a practitioner. There are more teachers
                and styles than ever — so here’s a clearer sense of how Vicky
                teaches.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p>
                Through years of practice she expected a lot from herself on the
                mat. Deeper training in teaching technique, anatomy, and
                philosophy showed that personal practice needed to become kinder
                — and teaching more inclusive.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-sage-deep text-white section-pad">
        <div className="site-container max-w-3xl">
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.2em] text-sky-soft uppercase">
              The heart of it
            </p>
            <p className="mt-5 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.2]">
              “Dedication to healthier movement, further study of the philosophy,
              and deepening self-inquiry — that’s yoga. At its roots it is not
              about achievement on the mat, but evenness of mind.”
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container grid gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl">In class</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Content varies to stay fresh, while the format stays familiar so
              you feel settled. Classes are based on the vinyasa model, with real
              changes for functional, inclusive movement. You’ll work with your
              natural mobility. Philosophy underpins everything — always coming
              back to why we practise.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-3xl">Who it’s for</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              You don’t need to be flexible. If you can comfortably get up and
              down off the floor, you are welcome. The aim is for you to feel
              empowered and uplifted — free to have fun and, quite literally, go
              with the flow.
            </p>
            <Link
              href="/contact"
              className="btn mt-8"
            >
              Ask a question
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
