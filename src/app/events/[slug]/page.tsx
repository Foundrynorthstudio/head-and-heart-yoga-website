import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckoutButton } from "@/components/CheckoutButton";
import { eventPage, eventPages } from "@/lib/events";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return eventPages.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = eventPage(slug);
  return {
    title: event?.title ?? "Event",
    description: event?.summary,
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = eventPage(slug);
  if (!event) notFound();

  const contactHref = `${site.emailHref.split("?")[0]}?subject=${encodeURIComponent(
    event.cta.type === "contact" ? event.cta.subject : event.title,
  )}`;

  return (
    <article className="section-pad pt-32 md:pt-40">
      <div className="site-container max-w-3xl">
        <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
          <Link href="/events" className="hover:text-rosewood">
            Events
          </Link>
        </p>
        <p className="mt-4 text-[0.78rem] tracking-[0.14em] text-sage uppercase">
          {event.meta}
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.08]">
          {event.title}
        </h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
          {event.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10">
          {event.cta.type === "checkout" ? (
            <CheckoutButton product="pg13" label={event.cta.label} />
          ) : event.cta.type === "stripe" ? (
            <a href={event.cta.href} className="btn" rel="noreferrer">
              {event.cta.label}
            </a>
          ) : (
            <a href={contactHref} className="btn">
              {event.cta.label}
            </a>
          )}
        </div>
        <p className="mt-6 text-sm text-ink-soft">
          Not ready for this one?{" "}
          <Link href="/live" className="text-rosewood underline-offset-4 hover:underline">
            Join the weekly class
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
