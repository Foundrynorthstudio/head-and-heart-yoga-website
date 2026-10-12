import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CourseStage } from "@/components/CourseStage";
import {
  communityCourse,
  communityCourses,
  communityLesson,
} from "@/lib/community";

export function generateStaticParams() {
  return communityCourses.flatMap((course) =>
    course.lessons.map((lesson) => ({
      slug: course.slug,
      lesson: lesson.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; lesson: string }>;
}): Promise<Metadata> {
  const { slug, lesson: lessonSlug } = await params;
  const course = communityCourse(slug);
  const lesson = course ? communityLesson(course, lessonSlug) : undefined;
  return {
    title: lesson ? `${lesson.title} · ${course?.title}` : "Lesson",
    description: lesson?.detail,
  };
}

function LessonFallback() {
  return (
    <article className="section-pad pt-32 md:pt-40">
      <div className="site-container">
        <p className="text-[0.72rem] tracking-[0.16em] text-sage uppercase">Community</p>
        <h1 className="mt-3 font-display text-4xl">Opening the lesson</h1>
      </div>
    </article>
  );
}

async function LessonBody({
  params,
}: {
  params: Promise<{ slug: string; lesson: string }>;
}) {
  const { slug, lesson: lessonSlug } = await params;
  const course = communityCourse(slug);
  if (!course) notFound();
  const lesson = communityLesson(course, lessonSlug);
  if (!lesson) notFound();

  return (
    <article className="bg-[#121816] pt-32 text-white md:pt-40">
      <div className="site-container pb-20">
        <Link
          href="/courses"
          className="text-[0.72rem] tracking-[0.16em] text-sky-soft uppercase"
        >
          All courses
        </Link>
        <p className="mt-6 text-[0.72rem] tracking-[0.16em] text-white/60 uppercase">
          Vicky
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.6rem,5vw,4.4rem)] leading-[0.98]">
          {course.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/75">{course.summary}</p>
        <CourseStage course={course} lesson={lesson} />
      </div>
    </article>
  );
}

export default function CommunityLessonPage({
  params,
}: {
  params: Promise<{ slug: string; lesson: string }>;
}) {
  return (
    <Suspense fallback={<LessonFallback />}>
      <LessonBody params={params} />
    </Suspense>
  );
}
