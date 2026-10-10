import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Vicky at Head & Heart Yoga in Stirling — class questions, private sessions, and event enquiries.",
};

export default function ContactPage() {
  return (
    <section className="section-pad pt-32 md:pt-40">
      <div className="site-container grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
            Contact
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.6rem,5vw,4rem)] leading-[1.05]">
            Say hello
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
            Questions about classes, private sessions, or whether yoga is right
            for you right now? Drop Vicky a note.
          </p>
          <div className="mt-8 space-y-2 text-sm">
            <p>
              <a
                href={site.emailHref}
                className="text-rosewood underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
            </p>
            <p className="text-ink-soft">Stirling, Scotland · Online worldwide</p>
          </div>
          <div className="relative mt-10 hidden min-h-[280px] overflow-hidden rounded-[1.75rem] lg:block">
            <Image
              src="/images/practice-alt.jpg"
              alt="Portrait of Vicky"
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="rounded-[1.75rem] bg-white/70 p-6 shadow-[0_20px_60px_rgba(28,36,33,0.06)] md:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
