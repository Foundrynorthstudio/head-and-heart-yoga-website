import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { formatPounds, products } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Book",
  description:
    "Book a private online yoga hour or a group session with Head & Heart Yoga.",
};

const offerings = [
  {
    href: "/book/private",
    title: products.private.name,
    detail: products.private.summary,
    price: `${formatPounds(products.private.pricePence)} · or four hours for ${formatPounds(products.block.pricePence)}`,
    cta: "Choose an hour",
  },
  {
    href: "/book/group",
    title: products.group.name,
    detail: products.group.summary,
    price: formatPounds(products.group.pricePence),
    cta: "Choose an hour",
  },
] as const;

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
              Private hours and group events share one calendar: Monday to
              Friday, 9am to 9pm, UK time. A paid hour is held for that booking
              only.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-[clamp(4.5rem,10vw,7.5rem)]">
        <div className="site-container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            {offerings.map((service, index) => (
              <Reveal key={service.href} delay={(index + 1) as 1 | 2}>
                <article className="border-t border-sage/25 pt-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h2 className="font-display text-2xl md:text-3xl">
                      {service.title}
                    </h2>
                    <p className="text-[0.78rem] tracking-[0.14em] text-rosewood uppercase">
                      {service.price}
                    </p>
                  </div>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft">
                    {service.detail}
                  </p>
                  <Link href={service.href} className="btn mt-5">
                    {service.cta}
                  </Link>
                </article>
              </Reveal>
            ))}
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
    </>
  );
}
