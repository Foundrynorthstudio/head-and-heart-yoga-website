import type { Metadata } from "next";
import { CheckoutButton } from "@/components/CheckoutButton";
import { formatPounds, products } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "On-demand courses from Head & Heart Yoga, including PG-13: Parenting through a Yoga Lens.",
};

export default function CoursesPage() {
  return (
    <section className="section-pad pt-32 md:pt-40">
      <div className="site-container max-w-3xl">
        <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
          Courses
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.6rem,5vw,4rem)] leading-[1.05]">
          Study in your own time
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          Short courses you can return to. After payment, Vicky emails the
          lessons. There is no login to manage.
        </p>

        <article id="pg-13" className="mt-14 border-t border-sage/25 pt-8">
          <p className="text-[0.78rem] tracking-[0.14em] text-rosewood uppercase">
            {formatPounds(products.pg13.pricePence)} · introductory price
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,2.8rem)] leading-tight">
            {products.pg13.name}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            {products.pg13.summary} The full price later is £225.
          </p>
          <ul className="mt-5 space-y-2 text-ink-soft">
            <li>One 1-hour grounding yoga class</li>
            <li>One 30-minute yoga nidra</li>
            <li>A short guide to the yoga wisdom tools</li>
          </ul>
          <div className="mt-6">
            <CheckoutButton product="pg13" label="Buy PG-13" />
          </div>
        </article>

        <article id="maya" className="mt-14 border-t border-sage/25 pt-8">
          <h2 className="font-display text-[clamp(2rem,4vw,2.8rem)] leading-tight">
            Maya and the Mask
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Yoga philosophy for anyone who thinks it isn’t for them, told
            through a story you already know. There isn’t a current public
            price on the new site, so purchase stays on Vicky’s existing page.
            She emails the recording after payment.
          </p>
          <a
            href="https://www.headandheartyoga.com/maya-and-the-mask"
            target="_blank"
            rel="noreferrer"
            className="btn mt-6"
          >
            Maya and the Mask
          </a>
        </article>
      </div>
    </section>
  );
}
