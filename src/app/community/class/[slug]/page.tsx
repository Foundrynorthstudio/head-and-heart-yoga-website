import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { libraryClass, libraryPreview } from "@/lib/community";

export function generateStaticParams() {
  return libraryPreview.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = libraryClass(slug);
  return {
    title: item?.title ?? "Class",
    description: item ? `${item.title}. ${item.length}.` : undefined,
  };
}

export default async function WeeklyClassLessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = libraryClass(slug);
  if (!item) notFound();

  return (
    <article className="section-pad pt-32 md:pt-40">
      <div className="site-container max-w-3xl">
        <Link
          href="/community"
          className="text-[0.72rem] tracking-[0.16em] text-sage uppercase"
        >
          Community
        </Link>
        <p className="mt-6 text-[0.72rem] tracking-[0.14em] text-rosewood uppercase">
          {item.date} · {item.length}
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.05]">
          {item.title}
        </h1>
        <div className="mt-8 overflow-hidden rounded-[1.5rem] bg-sage-deep">
          <div className="relative aspect-video">
            <Image
              src={item.image}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 768px) 720px, 100vw"
              priority
            />
          </div>
          <div className="px-6 py-6 text-white">
            <p className="text-sm text-sky-soft">
              This is where the week’s film sits. It is not playing yet. The
              recording is added when the class is filmed.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
