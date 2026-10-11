import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Marketing",
  description:
    "A draft growth plan for Head & Heart Yoga: the Central Belt, online teachers, a Wednesday class from the van, and six months of steady work.",
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
    line: "Google profile, page titles, a newsletter list, four van Wednesdays, four posts.",
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
  { step: "Wednesday", title: "Van class", detail: "Live midweek recharge, from wherever the van is parked." },
  { step: "Wednesday", title: "Two clips", detail: "Short vertical films for Instagram and TikTok." },
  { step: "Thursday", title: "Journal", detail: "One post, drafted from the voice note." },
  { step: "Friday", title: "Email", detail: "Where the van was, one idea, one link." },
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
  "The view from this Wednesday",
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

const accounts = [
  {
    name: "Instagram",
    href: site.social.instagram,
    handle: "@headandheartyoga",
    size: "Followers and views are private until Insights is opened.",
    note: "Best place for the two short clips. People already looking for yoga.",
  },
  {
    name: "Facebook",
    href: site.social.facebook,
    handle: "Head & Heart Yoga",
    size: "Page likes and reach are private until Insights is opened.",
    note: "Worth one post of the same clip, for the people already following the page.",
  },
  {
    name: "TikTok",
    href: site.social.tiktok,
    handle: "@headandheartyoga",
    size: "390 followers. 1,535 accounts followed. 997 likes, public, October 2026.",
    note: "A small account. The bio already points at the site. One clip a week is enough while the library is the main job.",
  },
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
          menu when the meeting is done. The Yoga Tree already fills Monday, so
          this plan uses a Wednesday midweek recharge from the van, a library of
          those classes, a weekly note, and a weekly post.
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
            Recordings collect in the{" "}
            <Link href="/live" className="text-rosewood underline-offset-4 hover:underline">
              class library
            </Link>
            . Posts point back to the £10 class, not to a new offer. The live
            page can keep the name Monday Online Yoga Flow until the day is confirmed.
          </p>
        </section>

        <section className="mt-16">
          <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
            The van
          </p>
          <h2 className="mt-3 font-display text-3xl">The van is the studio</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-[1.25rem] bg-white/80 p-5">
              <p className="text-[0.72rem] tracking-[0.14em] text-sage uppercase">Dry day</p>
              <p className="mt-3 text-ink-soft">
                Cameras and Vicky outside, with the landscape behind her.
              </p>
            </article>
            <article className="rounded-[1.25rem] bg-white/80 p-5">
              <p className="text-[0.72rem] tracking-[0.14em] text-sage uppercase">Wet day</p>
              <p className="mt-3 text-ink-soft">
                The wind-out awning stays out. Cameras sit inside the van, in the
                dry, looking out. She practises on the mat in front of that
                opening. The rain stays in the recording.
              </p>
            </article>
          </div>
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {[
              "A full off-grid pack and inverter run the camera, the stream, and the lights without a hookup.",
              "Starlink means the class can go out from a lay-by, a forestry track, or a beach with no phone signal.",
              "Lights are for a flat day or shade under the awning. The place should still read as Scotland.",
            ].map((item) => (
              <li key={item} className="rounded-[1.25rem] border border-sage/25 p-5 text-sm leading-relaxed text-ink-soft">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-2xl text-sm text-rosewood">
            Wind that will not hold the awning is the only reason to move fully inside.
          </p>
        </section>

        <section className="mt-16">
          <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
            £200 a month
          </p>
          <h2 className="mt-3 font-display text-3xl">What Vicky sends</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            £200 covers editing, YouTube, the email, and posting. It does not
            cover her showing up, or deciding what the class was about. The six
            months only happen if the Wednesday bundle arrives.
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <article className="rounded-[1.25rem] bg-white/80 p-5">
              <p className="text-[0.72rem] tracking-[0.14em] text-rosewood uppercase">Once</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                <li>Access to YouTube, Instagram, TikTok, the email tool, and the Google Business Profile.</li>
                <li>Three photos she is happy to use.</li>
                <li>A yes or no on her face, the van, and any place she will not name.</li>
                <li>How the awning, the inverter, and the lights are stowed, so the wet-weather setup is the same each time.</li>
              </ul>
            </article>
            <article className="rounded-[1.25rem] bg-white/80 p-5">
              <p className="text-[0.72rem] tracking-[0.14em] text-rosewood uppercase">Every Wednesday</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                <li>The raw class recording.</li>
                <li>A phone clip of the place, even if it is only the van in the rain.</li>
                <li>The place name, in a few words.</li>
                <li>A voice note of two minutes at most: the one idea she wants people to remember.</li>
              </ul>
            </article>
            <article className="rounded-[1.25rem] bg-white/80 p-5">
              <p className="text-[0.72rem] tracking-[0.14em] text-rosewood uppercase">Only when she has them</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                <li>A short quote a student sends her.</li>
                <li>A change of date, price, or workshop.</li>
                <li>Nothing else is required for the week to go out.</li>
              </ul>
            </article>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-soft">
            From that bundle: one YouTube class in the library, two clips the
            same day, a journal post drafted for Thursday, and an email drafted
            for Friday. She approves in one reply, or it goes out as drafted if
            she has not replied by Thursday evening. She doesn’t need to write
            the post, cut the film, or design the email.
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

        <section className="mt-16">
          <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
            The accounts
          </p>
          <h2 className="mt-3 font-display text-3xl">Small, and that is fine</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            The job of a clip is a visit to the £10 class, not a follower count.
            Instagram and Facebook hide their numbers. TikTok does not.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {accounts.map((account) => (
              <article key={account.name} className="rounded-[1.25rem] bg-white/80 p-5">
                <h3 className="font-display text-2xl">{account.name}</h3>
                <a
                  href={account.href}
                  className="mt-2 block text-sm text-rosewood underline decoration-rosewood/30 underline-offset-4"
                >
                  {account.handle}
                </a>
                <p className="mt-4 text-sm leading-relaxed text-ink">{account.size}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{account.note}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-ink-soft">
            A quiet account with a class people can join beats a busy account
            that never asks. The first month’s measure is the Insights numbers,
            plus whether the weekly clips actually went out.
          </p>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
              Newsletter
            </p>
            <h2 className="mt-3 font-display text-3xl">Eight first subjects</h2>
            <p className="mt-3 text-ink-soft">
              One email a week, on Friday. Where the van was, one idea, one link.
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
            <li>Wednesday for the live class, or another day that is not Monday.</li>
            <li>Which tool sends the weekly email.</li>
            <li>Which search phrase leads: online yoga Stirling, yoga for real bodies, or yoga philosophy for beginners.</li>
          </ol>
        </section>
      </div>
    </article>
  );
}
