import type { Metadata } from "next";
import Link from "next/link";
import { journalPosts } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes from Vicky on practice, shame, and staying with the hard bits.",
};

export default function JournalPage() {
  return (
    <section className="section-pad pt-32 md:pt-40">
      <div className="site-container max-w-3xl">
        <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
          Journal
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.6rem,5vw,4rem)] leading-[1.05]">
          Notes from the mat
        </h1>
        <div className="mt-14 space-y-10">
          {journalPosts.map((post) => (
            <article key={post.slug} className="border-t border-sage/25 pt-8">
              <p className="text-[0.78rem] tracking-[0.14em] text-sage uppercase">
                {post.dateLabel}
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight">
                <Link href={`/journal/${post.slug}`} className="hover:text-rosewood">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                {post.paragraphs[1] ?? post.paragraphs[0]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
