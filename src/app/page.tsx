import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0 hero-media">
          <Image
            src="/images/hero-practice.jpg"
            alt="Hands resting in a quiet yoga practice"
            fill
            priority
            className="object-cover object-[center_55%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,250,247,0.2)_0%,rgba(28,36,33,0.08)_42%,rgba(28,36,33,0.72)_100%)]" />
        </div>

        <div className="site-container relative flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:pb-20">
          <p className="hero-animate font-display text-[clamp(3.4rem,12vw,7.5rem)] leading-[0.92] tracking-[-0.03em] text-white">
            Head &amp; Heart
            <span className="block text-[0.72em] text-sky-soft">Yoga</span>
          </p>
          <p className="hero-animate-delay mt-5 max-w-xl text-lg leading-relaxed text-white/92 md:text-xl">
            Inclusive classes in Stirling and online — shaped around your body,
            your pace, and a deeper understanding of mind and self.
          </p>
          <div className="hero-animate-delay-2 mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/book"
              className="rounded-full bg-white px-6 py-3 text-[0.78rem] tracking-[0.16em] text-ink uppercase transition hover:bg-sky-soft"
            >
              Book a session
            </Link>
            <Link
              href="/practice"
              className="rounded-full border border-white/55 px-6 py-3 text-[0.78rem] tracking-[0.16em] text-white uppercase transition hover:bg-white/10"
            >
              What to expect
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container grid items-end gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
              Stirling &amp; Online
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.05] text-ink">
              Practices as unique
              <span className="block text-rosewood">as you are</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-lg leading-relaxed text-ink-soft">
              Your individuality sits at the heart of every class. We move and
              adapt in ways that meet real bodies — deepening understanding of
              mind and body, not chasing shapes on the mat.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/studio-alt.jpg"
            alt="Vicky in her home yoga studio"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,36,33,0.78)_0%,rgba(28,36,33,0.45)_55%,rgba(28,36,33,0.25)_100%)]" />
        </div>
        <div className="site-container relative grid min-h-[70vh] items-center py-20 md:grid-cols-2">
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.2em] text-sky-soft uppercase">
              Meet Vicky
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.3rem,4.5vw,3.5rem)] leading-[1.05] text-white">
              Teaching that makes space for every body
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/85">
              Practising since the late ’90s and teaching since 2015, Vicky
              brings Integrative Vinyasa, functional movement, and yoga
              philosophy into warm, welcoming classes.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex rounded-full border border-white/50 px-6 py-3 text-[0.78rem] tracking-[0.16em] text-white uppercase transition hover:bg-white/10"
            >
              About Vicky
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container">
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
              How we practise
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(2.2rem,4vw,3.3rem)] leading-[1.08]">
              Vinyasa roots. Inclusive movement. Philosophy underneath it all.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Natural mobility",
                body: "Classes work with the body you have today — functional patterns, alternatives, and no pressure to perform.",
              },
              {
                title: "Evenness of mind",
                body: "Yoga here is less about achievement and more about self-awareness as you move through life’s ups and downs.",
              },
              {
                title: "Come as you are",
                body: "You don’t need to be flexible. If you can comfortably get up and down from the floor, you are welcome.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={(index + 1) as 1 | 2 | 3}>
                <div className="border-t border-sage/30 pt-6">
                  <h3 className="font-display text-2xl text-rosewood">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[clamp(4.5rem,10vw,7.5rem)]">
        <div className="site-container overflow-hidden rounded-[2rem] bg-sage-deep px-8 py-14 text-white md:px-14">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <Reveal>
              <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.08]">
                Ready to practise beyond the boundaries?
              </h2>
              <p className="mt-4 max-w-xl text-white/80">
                Book a private online session, ask about group events, or simply
                say hello — Vicky would love to hear from you.
              </p>
            </Reveal>
            <Reveal delay={1}>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[0.78rem] tracking-[0.16em] text-ink uppercase transition hover:bg-sky-soft"
                >
                  View services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/45 px-6 py-3 text-[0.78rem] tracking-[0.16em] text-white uppercase transition hover:bg-white/10"
                >
                  Contact
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
