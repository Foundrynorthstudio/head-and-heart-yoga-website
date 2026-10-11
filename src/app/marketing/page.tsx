import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing",
  description:
    "A draft growth plan for Head & Heart Yoga: the Central Belt, online teachers, a campervan Monday, and six months of steady work.",
};

const studios = [
  {
    name: "The Yoga Tree, Stirling",
    does: "Hybrid studio and online classes at £7–£15. Monday morning yoga and Monday evening nidra are already £10.",
    skip: "Do not add another indoor Monday at the same price.",
  },
  {
    name: "Kings Park Yoga",
    does: "Local blocks, and day retreats in the Trossachs.",
    skip: "Do not compete on retreat catering. Use the landscape as the backdrop of a weekly class.",
  },
  {
    name: "The Yoga Room, Edinburgh",
    does: "Term-based Ashtanga in a boutique room.",
    skip: "Do not become a lineage school.",
  },
  {
    name: "Yoga Jo’s, Glasgow",
    does: "A full studio, membership, and teacher training.",
    skip: "Do not build a training school this year.",
  },
  {
    name: "Kaliyoga, Linlithgow",
    does: "Small local classes, including mum-and-baby and antenatal.",
    skip: "Do not stretch into every specialist class.",
  },
];

const teachers = [
  {
    name: "Yoga with Adriene",
    does: "A warm voice, a free front door, and a repeating challenge. The paid library is about $13 a month.",
    skip: "Do not try to film hundreds of free classes.",
  },
  {
    name: "Yoga with Kassandra",
    does: "Short, consistent classes and a library people can return to.",
    skip: "Do not drop the live hour. That is the part they mostly do not offer.",
  },
  {
    name: "Cat Meffan",
    does: "The closer UK example: challenges, a community, and one clear next purchase.",
    skip: "Do not launch a new offer every month.",
  },
];

const months = [
  {
    month: "Month 1",
    line: "Google profile, page titles, a newsletter list, four van Mondays, four posts.",
  },
  {
    month: "Month 2",
    line: "The email and the post become a habit. Clips go out on class day. Ask for short quotes.",
  },
  {
    month: "Month 3",
    line: "Point the list at the £10 class and the library. Mention PG-13 once.",
  },
  {
    month: "Month 4",
    line: "One deeper piece: a short van day, or a philosophy evening. Keep the week.",
  },
  {
    month: "Month 5",
    line: "One deeper piece again. Write the next posts from the phrases people actually searched.",
  },
  {
    month: "Month 6",
    line: "Review the six months. Keep what brought people in. Drop what did not.",
  },
];

const week = [
  { step: "Monday", title: "Van class", detail: "Live hour, outdoors when the weather allows." },
  { step: "Monday", title: "Two clips", detail: "Short vertical films for Instagram and TikTok." },
  { step: "Tuesday", title: "Journal", detail: "One post, written on the same day each week." },
  { step: "Wednesday", title: "Email", detail: "Where the van was, one idea, one link." },
];

const pieces = [
  {
    kind: "Still",
    goes: "Instagram and the email header",
    link: "The view, then the £10 class.",
  },
  {
    kind: "Vertical clip",
    goes: "Instagram and TikTok",
    link: "A few seconds of the place, then the £10 class.",
  },
  {
    kind: "Email",
    goes: "The inbox",
    link: "One idea from the class, then the library.",
  },
];

const subjects = [
  "The view from this Monday",
  "What we kept, and what we left out",
  "A rope, not a snake",
  "Shame does not belong on the mat",
  "Love and light, without the sugar",
  "Your body, your practice",
  "One hour, then the recording",
  "If you only do one thing this week",
];

const topics = [
  { group: "Place", items: ["A lay-by above Stirling", "The van in the rain", "A still loch before class"] },
  { group: "Teaching", items: ["The mat as a mirror", "Shame and the pose", "Love and light, plainly"] },
  { group: "Search", items: ["Online yoga Stirling", "Yoga for real bodies", "Yoga philosophy for beginners"] },
];

export default function MarketingPage() {
  return (
    <article className="section-pad pt-32 md:pt-40">
      <div className="site-container">
        <p className="text-[0.72rem] tracking-[0.2em] text-rosewood uppercase">
          Draft for Vicky
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.6rem,5vw,4.2rem)] leading-[1.05]">
          A plan for the next six months
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          This page is a briefing, not a finished campaign. It can leave the
          menu when the meeting is done. The work is a live Monday class from
          the van, a library of those classes, a weekly note, and a weekly post.
        </p>

        <section className="mt-16">
          <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
            Six months
          </p>
          <h2 className="mt-3 font-display text-3xl">The path</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {months.map((item, index) => (
              <li
                key={item.month}
                className="relative rounded-[1.25rem] border border-sage/25 bg-white/80 p-4"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rosewood text-sm text-white">
                  {index + 1}
                </span>
                <p className="mt-4 text-[0.72rem] tracking-[0.14em] text-sage uppercase">
                  {item.month}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink">{item.line}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16">
          <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
            Every week
          </p>
          <h2 className="mt-3 font-display text-3xl">The routine</h2>
          <ol className="mt-8 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-stretch">
            {week.map((item, index) => (
              <li key={item.title} className="contents">
                <div className="rounded-[1.25rem] bg-white/80 p-5">
                  <p className="text-[0.72rem] tracking-[0.14em] text-rosewood uppercase">
                    {item.step}
                  </p>
                  <p className="mt-2 font-display text-2xl">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.detail}</p>
                </div>
                {index < week.length - 1 ? (
                  <span
                    aria-hidden
                    className="hidden items-center justify-center text-2xl text-rosewood md:flex"
                  >
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {pieces.map((item) => (
              <article key={item.kind} className="rounded-[1.25rem] border border-sage/25 p-5">
                <p className="text-[0.72rem] tracking-[0.14em] text-sage uppercase">{item.kind}</p>
                <p className="mt-3 font-display text-2xl">{item.goes}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.link}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 max-w-2xl text-sm text-ink-soft">
            The class is filmed from the van, in a different bit of nearby wild
            Scotland when the weather allows, and from the same reliable setup
            when it does not. Recordings collect in the{" "}
            <Link href="/live" className="text-rosewood underline-offset-4 hover:underline">
              class library
            </Link>
            . Posts point back to the £10 class, not to a new offer.
          </p>
        </section>

        <section className="mt-16">
          <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
            Central Belt
          </p>
          <h2 className="mt-3 font-display text-3xl">Who is already here</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            A scan of public class pages, not a census. Prices sit around £7–£15
            a class, or a block of four to six weeks.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {studios.map((studio) => (
              <article key={studio.name} className="rounded-[1.25rem] bg-white/80 p-5">
                <h3 className="font-display text-2xl">{studio.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{studio.does}</p>
                <p className="mt-3 text-sm leading-relaxed text-rosewood">{studio.skip}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-2xl font-display text-2xl leading-snug text-rosewood">
            The gap is a live online hour, a real body, and a Scottish place you can see.
          </p>
        </section>

        <section className="mt-16">
          <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
            Online teachers
          </p>
          <h2 className="mt-3 font-display text-3xl">What to learn, not copy</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {teachers.map((teacher) => (
              <article key={teacher.name} className="rounded-[1.25rem] border border-sage/25 p-5">
                <h3 className="font-display text-2xl">{teacher.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{teacher.does}</p>
                <p className="mt-3 text-sm leading-relaxed text-rosewood">{teacher.skip}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
              Newsletter
            </p>
            <h2 className="mt-3 font-display text-3xl">Eight first subjects</h2>
            <p className="mt-3 text-ink-soft">
              One email a week, the morning after class. Where the van was, one
              idea, one link.
            </p>
            <ol className="mt-6 space-y-2">
              {subjects.map((subject, index) => (
                <li key={subject} className="flex gap-3 text-ink">
                  <span className="text-rosewood">{index + 1}</span>
                  <span>{subject}</span>
                </li>
              ))}
            </ol>
            <Link href="/contact" className="btn mt-6">
              Leave your name for the list
            </Link>
          </div>
          <div>
            <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
              Journal
            </p>
            <h2 className="mt-3 font-display text-3xl">The rotation</h2>
            <p className="mt-3 text-ink-soft">One post a week, on the same day, for six months.</p>
            <div className="mt-6 grid gap-4">
              {topics.map((topic) => (
                <article key={topic.group} className="rounded-[1.25rem] bg-white/80 p-5">
                  <p className="text-[0.72rem] tracking-[0.14em] text-sage uppercase">
                    {topic.group}
                  </p>
                  <ul className="mt-3 space-y-1 text-ink">
                    {topic.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
            Search
          </p>
          <h2 className="mt-3 font-display text-3xl">Be findable, then be patient</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {[
              "Claim a Google Business Profile for Stirling.",
              "Give each public page one plain title and description.",
              "Write the journal posts around the phrases above. No ads in month one.",
            ].map((item) => (
              <li key={item} className="rounded-[1.25rem] border border-sage/25 p-5 text-ink-soft">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 rounded-[1.5rem] bg-sage-deep px-6 py-8 text-white md:px-10">
          <p className="text-[0.72rem] tracking-[0.2em] text-sky-soft uppercase">
            Tomorrow
          </p>
          <h2 className="mt-3 font-display text-3xl">Three decisions</h2>
          <ol className="mt-6 space-y-3 text-lg">
            <li>Van day, and a fixed indoor backup when the weather will not hold.</li>
            <li>Which tool sends the weekly email.</li>
            <li>Which search phrase leads: online yoga Stirling, yoga for real bodies, or yoga philosophy for beginners.</li>
          </ol>
        </section>
      </div>
    </article>
  );
}
