import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CourseStage } from "@/components/CourseStage";
import { communityCourse, communityCourses } from "@/lib/community";

export function generateStaticParams() {
  return communityCourses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = communityCourse(slug);
  return {
    title: course?.title ?? "Course",
    description: course?.summary,
  };
}

function CourseFallback() {
  return (
    <article className="section-pad pt-32 md:pt-40">
      <div className="site-container">
        <p className="text-[0.72rem] tracking-[0.16em] text-sage uppercase">Community</p>
        <h1 className="mt-3 font-display text-4xl">Opening the course</h1>
      </div>
    </article>
  );
}

async function CourseBody({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = communityCourse(slug);
  if (!course) notFound();
  const lesson = course.lessons[0];

  return (
    <article className="section-pad pt-32 md:pt-40">
      <div className="site-container">
        <Link
          href="/community"
          className="text-[0.72rem] tracking-[0.16em] text-sage uppercase"
        >
          Community
        </Link>
        <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.05]">
          {course.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">{course.summary}</p>
        <CourseStage course={course} lesson={lesson} />
      </div>
    </article>
  );
}

export default function CommunityCoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<CourseFallback />}>
      <CourseBody params={params} />
    </Suspense>
  );
}
