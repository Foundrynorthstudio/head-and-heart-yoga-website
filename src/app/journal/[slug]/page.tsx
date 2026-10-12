import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { journalPost, journalPosts } from "@/lib/journal";

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPost(slug);
  return { title: post?.title ?? "Journal" };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = journalPost(slug);
  if (!post) notFound();

  return (
    <article className="section-pad pt-32 md:pt-40">
      <div className="site-container max-w-3xl">
        <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
          {post.dateLabel}
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.08]">
          {post.title}
        </h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
          {post.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-12 border-t border-sage/25 pt-8">
          <h2 className="font-display text-3xl">Practise with Vicky</h2>
          <p className="mt-3 text-ink-soft">
            The weekly class is £10 a week, recorded at her studio, until you cancel.
          </p>
          <Link href="/live" className="btn mt-6">
            Join the weekly class
          </Link>
        </div>
      </div>
    </article>
  );
}
