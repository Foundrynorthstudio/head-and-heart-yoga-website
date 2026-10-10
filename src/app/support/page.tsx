import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { supportLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Further support",
  description:
    "Organisations Vicky points students toward. She is a yoga teacher, not a clinician.",
};

export default function SupportPage() {
  return (
    <section className="section-pad pt-32 md:pt-40">
      <div className="site-container max-w-3xl">
        <Reveal>
          <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
            Further support
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.6rem,5vw,4rem)] leading-[1.05]">
            When you need more than a class
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Vicky is often asked for advice on medical conditions after class.
            Yoga can be a healing practice. She is a qualified yoga teacher, and
            she is not qualified to diagnose or treat any physical or
            psychological condition. This list is a starting point, not a
            complete one. Your GP is usually a good place to begin.
          </p>
        </Reveal>

        <ul className="mt-12 space-y-5">
          {supportLinks.map((link) => (
            <li key={link.href} className="border-t border-sage/25 pt-5">
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-display text-2xl text-rosewood underline-offset-4 hover:underline"
              >
                {link.name}
              </a>
              <p className="mt-1 text-ink-soft">{link.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
