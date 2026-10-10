import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative h-[68vh] min-h-[460px] max-h-[680px] overflow-hidden">
        <div className="absolute inset-0 hero-media">
          <Image
            src="/images/vicky-hero-up.jpg"
            alt="Vicky teaching a class in front of a carved wooden panel"
            fill
            priority
            className="object-cover object-[center_28%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,250,247,0.78)_0%,rgba(247,250,247,0.62)_46%,rgba(247,250,247,0.5)_100%)]" />
        </div>

        <div className="site-container relative flex h-full flex-col justify-end pb-10 pt-28 md:pb-12">
          <p className="hero-animate font-display text-[clamp(3rem,8vw,5.6rem)] leading-[0.92] tracking-[-0.03em] text-ink">
            Head &amp; Heart
            <span className="block text-[0.72em] text-rosewood">Yoga</span>
          </p>
          <p className="hero-animate-delay mt-4 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
            Inclusive classes in Stirling and online — shaped around your body,
            your pace, and a deeper understanding of mind and self.
          </p>
          <div className="hero-animate-delay-2 mt-6 flex flex-wrap items-center gap-3">
            <Link href="/live" className="btn">
              Join Monday class
            </Link>
            <Link href="/book" className="btn btn-quiet">
              Book a session
            </Link>
          </div>
        </div>
      </section>

      <section className="pt-8 pb-0 md:pt-10">
        <div className="site-container grid gap-6 md:grid-cols-3">
          {[
            {
              href: "/live",
              title: "Monday Online Yoga Flow",
              body: "One live class a week. £10, until you cancel.",
            },
            {
              href: "/courses",
              title: "Courses",
              body: "Browse my course and follow along in your own time.",
            },
            {
              href: "/book/private",
              title: "A private hour",
              body: "One hour on Zoom, shaped around you. £60.",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[1.5rem] border border-sage/20 bg-white/70 px-6 py-7 transition hover:border-rosewood"
            >
              <h2 className="font-display text-2xl">{item.title}</h2>
              <p className="mt-3 text-ink-soft">{item.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="pt-8 pb-[clamp(4.5rem,10vw,7.5rem)] md:pt-10">
        <div className="site-container grid items-end gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
              Stirling &amp; Online
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.05] text-ink">
              Practices as unique
              <span className="block text-rosewood">as you are</span>
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-ink-soft">
            Your individuality sits at the heart of every class. We move and
            adapt in ways that meet real bodies — deepening understanding of
            mind and body, not chasing shapes on the mat.
          </p>
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
              className="btn mt-8"
            >
              About Vicky
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="pt-[clamp(4.5rem,10vw,7.5rem)] pb-8 md:pb-10">
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

      <section className="section-pad pt-0">
        <div className="site-container">
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
              Student stories
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(2.2rem,4vw,3.3rem)] leading-[1.08]">
              Let’s hear from Vicky’s students
            </h2>
          </Reveal>
          <div className="mt-8 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
            {testimonials.map((item) => (
              <blockquote
                key={item.name}
                className="w-[min(18rem,78vw)] shrink-0 snap-start rounded-[1.5rem] bg-white/80 px-5 py-6 shadow-[0_16px_40px_rgba(28,36,33,0.05)]"
              >
                <p className="text-[1.02rem] leading-relaxed text-ink">
                  “{item.quote}”
                </p>
                <footer className="mt-4 text-[0.78rem] tracking-[0.16em] text-rosewood uppercase">
                  — {item.name}
                </footer>
              </blockquote>
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
                <Link href="/live" className="btn">
                  Join Monday class
                </Link>
                <Link href="/book/private" className="btn btn-quiet">
                  Book a private hour
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
