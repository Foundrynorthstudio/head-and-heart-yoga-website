import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketing",
  description:
    "The six-month targets for Head & Heart Yoga: ten £10-a-week subscribers, a Thursday room of eight, and the weekly content that has to go out.",
};

const targets = [
  {
    name: "Thursday",
    line: "8 students in the room every week. Early weeks can be 2 or 4. The target is still 8.",
  },
  {
    name: "Month 2",
    line: "10 paying £10-a-week subscribers. In person and online are the same list. That is the first win.",
  },
  {
    name: "How the 10 arrive",
    line: "About one or two new paying people a week for eight weeks. Not ten on day one.",
  },
  {
    name: "Month 6",
    line: "20 paying subscribers. Ten is the first win. Twenty is the next rung.",
  },
];

const months = [
  {
    month: "Month 1",
    line: "Record the class at home every week, and teach it again on Thursday. PG-13 is the course campaign. YOU-GA can be the first of two events.",
  },
  {
    month: "Month 2",
    line: "The week of clips, email, and journal does not slip. The list reaches 10 paying subscribers.",
  },
  {
    month: "Month 3",
    line: "A new course is the month’s campaign. Keep adding one or two people a week. The Thursday room moves toward 8.",
  },
  {
    month: "Month 4",
    line: "The second event is planned here or in month 5. Mention it for the three weeks before it, inside the same weekly posts.",
  },
  {
    month: "Month 5",
    line: "Another course. The list should be climbing from 10 toward 20. A full Thursday room is 8, not a second count of the same people.",
  },
  {
    month: "Month 6",
    line: "Review. The win to keep is 20 paying subscribers, a library that got longer, and two events, not twelve.",
  },
];

const week = [
  {
    step: "Home studio",
    title: "Record the class",
    detail: "The online version of this week’s class. It is recorded even if nobody is watching.",
  },
  {
    step: "Thursday",
    title: "Teach it again",
    detail: "The same class, in person, at The Yoga Tree. Eight places.",
  },
  {
    step: "Public",
    title: "Three clips",
    detail: "Cut from those two teachings. Instagram and TikTok get the same three.",
  },
  {
    step: "Friday",
    title: "Email and journal",
    detail: "One idea, two lengths. The email is short. The journal is the longer one.",
  },
];

const fuel = [
  {
    name: "Instagram",
    count: "3 clips and 4 stories",
    line: "Each one ends on the £10 week. Once a month, one clip points at that month’s course instead.",
  },
  {
    name: "TikTok",
    count: "The same 3 clips",
    line: "Posted there too. Not three new films.",
  },
  {
    name: "Email",
    count: "1, on Friday",
    line: "One idea, one link. This is how Thursday spaces and the course are offered.",
  },
  {
    name: "Journal",
    count: "1 post",
    line: "The same idea as the email, written longer.",
  },
];

const eightWeeks = [
  "24 clips",
  "32 stories",
  "8 emails",
  "8 journal posts",
];

export default function MarketingPage() {
  return (
    <article className="section-pad pt-32 md:pt-40">
      <div className="site-container">
        <p className="text-[0.72rem] tracking-[0.2em] text-rosewood uppercase">
          For Vicky
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.6rem,5vw,4.2rem)] leading-[1.05]">
          Ten people in two months
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          The old site has taken no money. Ten paying subscribers by the end of
          month 2 is the first win. Twenty by month 6 is the next rung. The
          Thursday room is a target of 8 every week. Those 8 are part of the
          list, not a second list.
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
          The site can take the £10. Nobody arrives unless the week goes out.
          Build it and they will come does not work.
        </p>

        <section className="mt-16">
          <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
            The offer
          </p>
          <h2 className="mt-3 font-display text-3xl">One membership</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            £10 a week is one list. Someone who comes on Thursday gets the
            online class and the catch-up. Someone who joins online can take a
            Thursday space. Vicky teaches that same class twice.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-[1.25rem] bg-white/80 p-5">
              <p className="text-[0.72rem] tracking-[0.14em] text-rosewood uppercase">
                At home
              </p>
              <h3 className="mt-3 font-display text-2xl">Recorded for online</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                The garden studio. The class is recorded even if the live room
                is empty. The van is only for a week she is already away.
              </p>
            </article>
            <article className="rounded-[1.25rem] bg-white/80 p-5">
              <p className="text-[0.72rem] tracking-[0.14em] text-rosewood uppercase">
                Thursday
              </p>
              <h3 className="mt-3 font-display text-2xl">Eight at The Yoga Tree</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                The same class, in their room in Stirling. Not another Monday.
                A group does not come to the house. A 1-2-1 is the only
                in-person teaching at home.
              </p>
            </article>
          </div>
          <p className="mt-4 max-w-2xl text-sm text-ink-soft">
            The 8 places can be taken with the £10 week, or booked as a one-off
            on the site. A one-off is a single Thursday. The working price is
            £15, so four drop-ins cost more than staying on the week. That
            price is not on a checkout until Vicky confirms it.{" "}
            <Link href="/live" className="text-rosewood underline-offset-4 hover:underline">
              The weekly class page
            </Link>{" "}
            is where the £10 is said.
          </p>
        </section>

        <section className="mt-16">
          <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
            The numbers
          </p>
          <h2 className="mt-3 font-display text-3xl">What a win is</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {targets.map((item) => (
              <article key={item.name} className="rounded-[1.25rem] border border-sage/25 p-5">
                <h3 className="font-display text-2xl">{item.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.line}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-ink-soft">
            Ten people at £10 is about £100 a week once they are all on.
            Joining across eight weeks means the first two months take less
            than £800. One course is the campaign every month. PG-13 is month
            one. Events are two in the six months, not one a month. YOU-GA on
            24 October can be the first. The second sits around month 4 or 5.
          </p>
        </section>

        <section className="mt-16">
          <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
            Six months
          </p>
          <h2 className="mt-3 font-display text-3xl">The path to 20</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {months.map((item, index) => (
              <li
                key={item.month}
                className="rounded-[1.25rem] border border-sage/25 bg-white/80 p-4"
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
          <h2 className="mt-3 font-display text-3xl">Teach it twice, then publish</h2>
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
        </section>

        <section className="mt-16">
          <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
            The fuel
          </p>
          <h2 className="mt-3 font-display text-3xl">What has to go out</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            The films are cut from the two teachings. She does not write four
            posts. Below this volume, ten subscribers is a hope.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {fuel.map((item) => (
              <article key={item.name} className="rounded-[1.25rem] bg-white/80 p-5">
                <p className="text-[0.72rem] tracking-[0.14em] text-sage uppercase">{item.name}</p>
                <h3 className="mt-3 font-display text-2xl">{item.count}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.line}</p>
              </article>
            ))}
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {eightWeeks.map((item) => (
              <li
                key={item}
                className="rounded-[1.25rem] border border-sage/25 px-5 py-4 font-display text-2xl"
              >
                {item}
                <span className="mt-1 block text-sm font-sans text-ink-soft">
                  in the eight weeks to the first win
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-2xl text-sm text-ink-soft">
            Each of the two events is mentioned for the three weeks before it,
            inside this same week. It is not a new content machine.
          </p>
        </section>

        <section className="mt-16">
          <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
            What she sends
          </p>
          <h2 className="mt-3 font-display text-3xl">Twice, then one note</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <article className="rounded-[1.25rem] bg-white/80 p-5">
              <p className="text-[0.72rem] tracking-[0.14em] text-rosewood uppercase">Home studio</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                The raw recording of the online class, every week.
              </p>
            </article>
            <article className="rounded-[1.25rem] bg-white/80 p-5">
              <p className="text-[0.72rem] tracking-[0.14em] text-rosewood uppercase">Thursday</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                A short phone clip from The Yoga Tree. The place, in a few words.
              </p>
            </article>
            <article className="rounded-[1.25rem] bg-white/80 p-5">
              <p className="text-[0.72rem] tracking-[0.14em] text-rosewood uppercase">One voice note</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Two minutes. The one idea for the email and the journal. She
                doesn’t need to write, cut, or design.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-16 rounded-[1.5rem] bg-sage-deep px-6 py-8 text-white md:px-10">
          <p className="text-[0.72rem] tracking-[0.2em] text-sky-soft uppercase">
            The test
          </p>
          <h2 className="mt-3 font-display text-3xl">Month 2, then month 6</h2>
          <ul className="mt-6 space-y-3 text-lg">
            <li>10 paying subscribers by the end of month 2.</li>
            <li>20 paying subscribers by month 6.</li>
            <li>Thursday aimed at 8, without counting those 8 twice.</li>
            <li>Six monthly courses. Two events. A library that got longer every week.</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
