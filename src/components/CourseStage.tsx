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
    <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1.5fr_0.7fr]">
      <div>
        <div className="overflow-hidden rounded-[1.25rem] bg-black">
          <div className="relative aspect-video">
            <Image
              src={lesson.image}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 68vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.82)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-[0.72rem] tracking-[0.16em] text-sky-soft uppercase">
                {lesson.length}
              </p>
              <h2 className="mt-2 font-display text-3xl">{lesson.title}</h2>
            </div>
          </div>
          <div className="px-6 py-5 text-white">
            <p className="max-w-xl text-white/80">{lesson.detail}</p>
            <p className="mt-3 text-sm text-white/55">
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
                className={`flex gap-3 overflow-hidden rounded-[1rem] border ${
                  current
                    ? "border-white/80 bg-white/10"
                    : "border-white/15 bg-white/5 hover:border-white/40"
                }`}
                aria-current={current ? "true" : undefined}
              >
                <div className="relative h-20 w-28 shrink-0">
                  <Image src={item.image} alt="" fill className="object-cover" sizes="112px" />
                </div>
                <span className="py-3 pr-3">
                  <span className="block text-[0.68rem] tracking-[0.14em] text-sky-soft uppercase">
                    Lesson {index + 1} · {item.length}
                  </span>
                  <span className="mt-1 block font-display text-xl leading-tight text-white">
                    {item.title}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
