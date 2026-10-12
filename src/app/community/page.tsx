import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ThursdayCalendar } from "@/components/ThursdayCalendar";
import { Yours } from "@/components/Yours";
import { communityCourses, libraryPreview, thisWeekClass } from "@/lib/community";

export const metadata: Metadata = {
  title: "Community",
  description:
    "The weekly class, the course shelf, and the Thursday circle at The Yoga Tree. Open to look around, before a sign-in.",
};

export default function CommunityPage() {
  return (
    <article className="section-pad pt-32 md:pt-40">
      <div className="site-container">
        <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
          Community
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.6rem,5vw,4.2rem)] leading-[1.05]">
          Come back to the same room
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          This is the house for the weekly class, the courses, and the Thursday
          circle. A sign-in will keep it for members. For now the door is open,
          so you can look around.
        </p>

        <Yours />

        <section className="mt-16">
          <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
            The studio
          </p>
          <h2 className="mt-3 font-display text-3xl">Empty, until people are in it</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            This is the gathering place for the £10 week and the eight at The
            Yoga Tree. There are no notes yet, because there is no one here to
            have written them.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="rounded-[1.25rem] border border-dashed border-sage/40 p-5">
              <p className="text-[0.72rem] tracking-[0.14em] text-sage uppercase">
                This week’s practice
              </p>
              <p className="mt-3 font-display text-2xl">No note yet</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                When a class has been recorded, the one idea from it will sit here.
              </p>
            </article>
            <article className="rounded-[1.25rem] border border-dashed border-sage/40 p-5">
              <p className="text-[0.72rem] tracking-[0.14em] text-sage uppercase">
                Thursday circle
              </p>
              <p className="mt-3 font-display text-2xl">Eight spaces open</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                The £10 week includes a place when one is free. No space has been taken on this page yet.
              </p>
            </article>
            <article className="rounded-[1.25rem] border border-dashed border-sage/40 p-5">
              <p className="text-[0.72rem] tracking-[0.14em] text-sage uppercase">
                A place for a note
              </p>
              <p className="mt-3 font-display text-2xl">Nothing here</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Student notes will appear when people are in the studio. None are invented.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-16">
          <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
            This week
          </p>
          <h2 className="mt-3 font-display text-3xl">The class, then the shelf</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[1.5rem] bg-white/80 p-6">
              <p className="text-[0.72rem] tracking-[0.14em] text-rosewood uppercase">
                £10 a week
              </p>
              <h3 className="mt-3 font-display text-3xl">Weekly online class</h3>
              <p className="mt-3 text-ink-soft">
                Recorded at Vicky’s studio, then taught again on Thursday. Watch
                live or later. The recording is made even if nobody is watching.
              </p>
              <Link href={`/community/class/${thisWeekClass.slug}`} className="btn mt-6">
                This week’s class
              </Link>
            </article>
            <article className="rounded-[1.5rem] border border-sage/25 p-6">
              <p className="text-[0.72rem] tracking-[0.14em] text-rosewood uppercase">
                Included
              </p>
              <h3 className="mt-3 font-display text-3xl">Thursday at The Yoga Tree</h3>
              <p className="mt-3 text-ink-soft">
                Eight places each Thursday at The Yoga Tree. Pick a week.
              </p>
              <ThursdayCalendar />
            </article>
          </div>
          <div className="mt-8 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
            {libraryPreview.map((item) => (
              <Link
                key={item.slug}
                href={`/community/class/${item.slug}`}
                className="w-[min(16rem,72vw)] shrink-0 snap-start overflow-hidden rounded-[1.25rem] bg-white shadow-[0_16px_40px_rgba(28,36,33,0.05)]"
              >
                <div className="relative aspect-video">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                </div>
                <div className="px-4 py-4">
                  <h3 className="font-display text-xl leading-tight">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">
                    {item.date} · {item.length}
                  </p>
                  <p className="mt-3 text-[0.72rem] tracking-[0.14em] text-rosewood uppercase">
                    Preview
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-4 max-w-2xl text-sm text-ink-soft">
            A preview of the library. Real classes are added the week they are
            recorded.
          </p>
        </section>

        <section className="mt-16">
          <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
            Courses
          </p>
          <h2 className="mt-3 font-display text-3xl">A shelf you can return to</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            One course is released each month. Open a cover, then choose a
            lesson. The films are not playing here yet.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {communityCourses.map((course) => (
              <Link
                key={course.slug}
                href={`/community/courses/${course.slug}`}
                className="group overflow-hidden rounded-[1.5rem] bg-sage-deep text-white"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={course.image}
                    alt=""
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(28,36,33,0.82)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[0.72rem] tracking-[0.16em] text-sky-soft uppercase">
                      {course.priceLabel}
                    </p>
                    <h3 className="mt-2 font-display text-3xl leading-tight">
                      {course.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </article>
  );
}
