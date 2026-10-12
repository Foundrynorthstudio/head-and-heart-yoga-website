import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckoutButton } from "@/components/CheckoutButton";
import { communityCourses } from "@/lib/community";
import { formatPounds, products } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "On-demand courses from Head & Heart Yoga, taught by Vicky. A new course each month.",
};

const featured = communityCourses[0];

export default function CoursesPage() {
  return (
    <div className="bg-[#121816] text-white">
      <section className="relative min-h-[78vh] pt-28 md:pt-32">
        <Image
          src={featured.image}
          alt=""
          fill
          priority
          className="object-cover object-[center_20%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,24,22,0.92)_0%,rgba(18,24,22,0.72)_42%,rgba(18,24,22,0.2)_100%)]" />
        <div className="site-container relative flex min-h-[78vh] flex-col justify-end pb-16 pt-16">
          <p className="text-[0.72rem] tracking-[0.22em] text-sky-soft uppercase">
            Vicky · a new course each month
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(3rem,6vw,5.4rem)] leading-[0.95]">
            {featured.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            {featured.summary} The full price later is £225.
          </p>
          <p className="mt-4 text-[0.78rem] tracking-[0.16em] text-sky-soft uppercase">
            {formatPounds(products.pg13.pricePence)} now · {featured.lessons.length} lessons
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CheckoutButton product="pg13" label="Start this course" />
            <Link href={`/community/courses/${featured.slug}`} className="btn btn-quiet">
              Watch the lessons
            </Link>
          </div>
        </div>
      </section>

      <section className="site-container pb-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[0.72rem] tracking-[0.2em] text-sky-soft uppercase">
              The shelf
            </p>
            <h2 className="mt-3 font-display text-4xl">All courses</h2>
          </div>
          <p className="hidden max-w-xs text-sm text-white/60 md:block">
            Open a cover. The film sits in the lesson. After you buy, it still
            arrives by email until it can play here.
          </p>
        </div>
        <div className="mt-8 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">
          {communityCourses.map((course) => (
            <Link
              key={course.slug}
              href={`/community/courses/${course.slug}`}
              className="group w-[min(16rem,70vw)] shrink-0 snap-start"
            >
              <div className="relative aspect-[2/3] overflow-hidden rounded-[1.25rem] bg-black">
                <Image
                  src={course.image}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  sizes="256px"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.88)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[0.68rem] tracking-[0.16em] text-sky-soft uppercase">
                    Vicky · {course.lessons.length} {course.lessons.length === 1 ? "lesson" : "lessons"}
                  </p>
                  <h3 className="mt-2 font-display text-2xl leading-tight">{course.title}</h3>
                  <p className="mt-2 text-xs tracking-[0.12em] text-white/70 uppercase">
                    {course.priceLabel}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {featured.lessons.map((lesson, index) => (
            <Link
              key={lesson.slug}
              href={`/community/courses/${featured.slug}/${lesson.slug}`}
              className="group overflow-hidden rounded-[1.25rem] bg-white/5"
            >
              <div className="relative aspect-video">
                <Image
                  src={lesson.image}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
              </div>
              <div className="p-5">
                <p className="text-[0.68rem] tracking-[0.16em] text-sky-soft uppercase">
                  Lesson {index + 1} · {lesson.length}
                </p>
                <h3 className="mt-2 font-display text-2xl">{lesson.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{lesson.detail}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
