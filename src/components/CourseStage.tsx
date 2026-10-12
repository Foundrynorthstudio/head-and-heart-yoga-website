import Image from "next/image";
import Link from "next/link";
import { CheckoutButton } from "@/components/CheckoutButton";
import {
  type CommunityCourse,
  type CommunityLesson,
} from "@/lib/community";

export function CourseStage({
  course,
  lesson,
}: {
  course: CommunityCourse;
  lesson: CommunityLesson;
}) {
  return (
    <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1.4fr_0.8fr]">
      <div>
        <div className="overflow-hidden rounded-[1.5rem] bg-sage-deep">
          <div className="relative aspect-video">
            <Image
              src={lesson.image}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 60vw, 100vw"
              priority
            />
          </div>
          <div className="px-6 py-6 text-white">
            <p className="text-[0.72rem] tracking-[0.16em] text-sky-soft uppercase">
              {lesson.length}
            </p>
            <h2 className="mt-2 font-display text-3xl">{lesson.title}</h2>
            <p className="mt-3 max-w-xl text-white/80">{lesson.detail}</p>
            <p className="mt-4 text-sm text-sky-soft">
              The film is not playing here yet. After you buy, it arrives by
              email, until it can play on this page.
            </p>
          </div>
        </div>
        <div className="mt-6">
          {course.buy.type === "checkout" ? (
            <CheckoutButton product={course.buy.product} label="Buy this course" />
          ) : (
            <a href={course.buy.href} className="btn" rel="noreferrer">
              {course.buy.label}
            </a>
          )}
        </div>
      </div>
      <ol className="space-y-3">
        {course.lessons.map((item, index) => {
          const current = item.slug === lesson.slug;
          return (
            <li key={item.slug}>
              <Link
                href={`/community/courses/${course.slug}/${item.slug}`}
                className={`block rounded-[1.25rem] border px-4 py-4 ${
                  current
                    ? "border-rosewood bg-white"
                    : "border-sage/25 bg-white/70 hover:border-rosewood"
                }`}
                aria-current={current ? "true" : undefined}
              >
                <p className="text-[0.72rem] tracking-[0.14em] text-sage uppercase">
                  Lesson {index + 1} · {item.length}
                </p>
                <p className="mt-1 font-display text-2xl">{item.title}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
