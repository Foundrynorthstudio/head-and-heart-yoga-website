import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Marketing",
  description:
    "A plain-language plan for Head & Heart Yoga: three offers, a Thursday class at The Yoga Tree, and a weekly recording from the home studio.",
};

const studios = [
  {
    name: "The Yoga Tree, Stirling",
    does: "Hybrid studio and online classes at £7–£15. Monday morning yoga and Monday evening nidra are already £10.",
    skip: "Do not add another Monday. Thursday, eight spaces, in their room.",
  },
  {
    name: "Kings Park Yoga",
    does: "Local blocks, and day retreats in the Trossachs.",
    skip: "Do not compete on retreat catering. The van is the backdrop only on weeks she is already away.",
  },
  {
    name: "The Yoga Room, Edinburgh",
    does: "Term-based Ashtanga in a boutique room.",
    skip: "Do not become a lineage school.",
  },
  {
    name: "Yoga Jo’s, Glasgow",
    does: "A full studio, membership, and teacher training.",
    skip: "Do not build a training school this year. The community area is the membership, and it stays small.",
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
    skip: "Do not launch a new offer every week. One course a month is enough.",
  },
];

const months = [
  {
    month: "Month 1",
    line: "Four classes recorded from the home studio, even if nobody buys. The community area is open. A Google profile. No ads.",
  },
  {
    month: "Month 2",
    line: "The Friday email and the two clips become a habit. Subscribers are offered Thursday first.",
  },
  {
    month: "Month 3",
    line: "Point people at the £10 week. PG-13 is the course on the shelf.",
  },
  {
    month: "Month 4",
    line: "One in-person event, and the next course. Keep recording every week.",
  },
  {
    month: "Month 5",
    line: "Write the next posts from the phrases people actually searched. Keep the week.",
  },
  {
    month: "Month 6",
    line: "Review. Success is money taken, and a library that got longer. Keep what brought people in.",
  },
];

const week = [
  {
    step: "Recording day",
    title: "Home studio",
    detail: "The £10 class is recorded even if nobody is watching live. The day is still open, so it does not sit on top of Thursday.",
  },
  {
    step: "Thursday",
    title: "Eight spaces",
    detail: "The Yoga Tree in Stirling. Subscribers are asked first. This hour is not the subscriber film.",
  },
  {
    step: "Friday",
    title: "Two clips",
    detail: "Short vertical films, cut from that week’s home-studio recording.",
  },
  {
    step: "Friday",
    title: "Email",
    detail: "Where the class was, one idea, and one link back to the £10 week.",
  },
];

const places = [
  {
    name: "The Yoga Tree",
    line: "Thursday, eight people, in their room in Stirling. Not another Monday. Not her house.",
  },
  {
    name: "Home studio",
    line: "The garden studio is for the camera: the weekly class, and workshop recordings. A group does not come there for a class.",
  },
  {
    name: "The van",
    line: "Only when she is already away. The awning, the inverter, and Starlink still cover a wet week on the road.",
  },
  {
    name: "A 1-2-1",
    line: "The only in-person teaching at home. Everyone else in person is at The Yoga Tree, or at the monthly event.",
  },
];

const funnel = [
  {
    step: "1",
    title: "A short clip",
    line: "Someone sees the place, or a few seconds of the class. That is the fuel.",
  },
  {
    step: "2",
    title: "The website",
    line: "The site is the engine. It holds the offers and takes the booking.",
  },
  {
    step: "3",
    title: "The £10 week",
    line: "The first ask. Live or later, and the library grows every week.",
  },
  {
    step: "4",
    title: "Then the rest",
    line: "A course once a month, one in-person event a month, or a Thursday space. Subscribers get first pick of the eight.",
  },
];

const subjects = [
  "The class from the studio this week",
  "What we kept, and what we left out",
  "A rope, not a snake",
  "Shame does not belong on the mat",
  "Love and light, without the sugar",
  "Your body, your practice",
  "One hour, then the recording",
  "Eight spaces on Thursday",
];

const topics = [
  { group: "Place", items: ["The studio in the garden", "The van, on a week away", "Thursday at The Yoga Tree"] },
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

const settled = [
  "Thursday at The Yoga Tree, eight spaces. Not Monday, and not at her house.",
  "The home studio is for recording the weekly class and workshops.",
  "The van is only for a week she is already away.",
  "A 1-2-1 is the only in-person teaching at home.",
  "The £10 class is recorded every week, even if nobody watches live.",
  "Three offers: the weekly class and library, one course a month, one in-person event a month.",
  "A £10 subscriber is offered a Thursday space before anyone else.",
  "The community area is open to look around. A sign-in comes when there are members.",
];

const open = [
  "What the eight Thursday spaces cost. Until then, people ask. No guessed price on the site.",
  "The Thursday time at The Yoga Tree.",
  "Which day she records at home, so it does not sit on top of the Yoga Tree class.",
  "Whether she is comfortable livestreaming with one camera framed on her only. The people in the room stay out of the picture. That is the setup for the home studio. The same camera could put Thursday on the stream without filming the eight students. Until she says yes, the Yoga Tree class is not the subscriber stream.",
];

export default function MarketingPage() {
  return (
    <article className="section-pad pt-32 md:pt-40">
      <div className="site-container">
        <p className="text-[0.72rem] tracking-[0.2em] text-rosewood uppercase">
          After the meeting
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.6rem,5vw,4.2rem)] leading-[1.05]">
          A plan for the next six months
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          The old site has taken no money. That is the starting line. There is
          no budget for ads, so this six months is the proof. If the site takes
          money, that is the case for a retainer. Until then, the work is the
          case study.
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Three offers. A class recorded every week, whether or not anyone is
          watching. A course released once a month. An in-person event once a
          month.
        </p>

        <section className="mt-16">
          <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
            In ordinary words
          </p>
          <h2 className="mt-3 font-display text-3xl">The engine and the fuel</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            A clip, a journal post, or the Friday email brings a person to the
            site. That is the fuel. The site is the engine: it holds the offers
            and takes the booking. The{" "}
            <Link href="/community" className="text-rosewood underline-offset-4 hover:underline">
              community area
            </Link>{" "}
            is where that person comes back. The door is open for now. A sign-in
            comes when there are members.
          </p>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {funnel.map((item) => (
              <li key={item.step} className="rounded-[1.25rem] bg-white/80 p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rosewood text-sm text-white">
                  {item.step}
                </span>
                <p className="mt-4 font-display text-2xl">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.line}</p>
              </li>
            ))}
          </ol>
        </section>

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
          <p className="mt-6 max-w-2xl text-ink-soft">
            The Thursday room is full when eight people have paid. Follower
            counts stay secondary. A quiet account with a class people can join
            beats a busy account that never asks.
          </p>
        </section>

        <section className="mt-16">
          <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
            The rooms
          </p>
          <h2 className="mt-3 font-display text-3xl">Two places, two jobs</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {places.map((place) => (
              <article key={place.name} className="rounded-[1.25rem] bg-white/80 p-5">
                <h3 className="font-display text-2xl">{place.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{place.line}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 max-w-2xl text-sm text-rosewood">
            On a van week, the wind-out awning stays out in the rain. Cameras sit
            inside the dry van. The inverter and Starlink run the class without
            a hookup or a phone signal.
          </p>
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
        </section>

        <section className="mt-16">
          <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
            £200 a month
          </p>
          <h2 className="mt-3 font-display text-3xl">What Vicky sends</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            There is no ad spend in this. £200 covers editing, the library, the
            email, and posting. It does not cover her showing up, or deciding
            what the class was about. The six months only happen if the
            recording arrives.
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <article className="rounded-[1.25rem] bg-white/80 p-5">
              <p className="text-[0.72rem] tracking-[0.14em] text-rosewood uppercase">Once</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                <li>Access to YouTube, Instagram, TikTok, the email tool, and the Google Business Profile.</li>
                <li>Three photos she is happy to use.</li>
                <li>A yes or no on her face, the van, and any place she will not name.</li>
                <li>How the awning, the inverter, and the lights are stowed, for the weeks she is away.</li>
              </ul>
            </article>
            <article className="rounded-[1.25rem] bg-white/80 p-5">
              <p className="text-[0.72rem] tracking-[0.14em] text-rosewood uppercase">Every recording</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                <li>The raw class recording, from the home studio, or from the van if she is away.</li>
                <li>A phone clip of the place.</li>
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
            From that bundle: one class in the library, two clips, a journal
            note, and an email drafted for Friday. She approves in one reply, or
            it goes out as drafted if she has not replied by Friday morning. She
            doesn’t need to write the post, cut the film, or design the email.
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
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
              Newsletter
            </p>
            <h2 className="mt-3 font-display text-3xl">Eight first subjects</h2>
            <p className="mt-3 text-ink-soft">
              One email a week, on Friday. Where the class was, one idea, one link.
            </p>
            <ol className="mt-6 space-y-2">
              {subjects.map((subject, index) => (
                <li key={subject} className="flex gap-3 text-ink">
                  <span className="text-rosewood">{index + 1}</span>
                  <span>{subject}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
              Journal
            </p>
            <h2 className="mt-3 font-display text-3xl">The rotation</h2>
            <p className="mt-3 text-ink-soft">One post a week, for six months, drafted from the voice note.</p>
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

        <section className="mt-16 grid gap-4 lg:grid-cols-2">
          <div className="rounded-[1.5rem] bg-sage-deep px-6 py-8 text-white md:px-10">
            <p className="text-[0.72rem] tracking-[0.2em] text-sky-soft uppercase">
              Settled
            </p>
            <h2 className="mt-3 font-display text-3xl">From the meeting</h2>
            <ul className="mt-6 space-y-3">
              {settled.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.5rem] border border-sage/25 px-6 py-8 md:px-10">
            <p className="text-[0.72rem] tracking-[0.2em] text-rosewood uppercase">
              Still open
            </p>
            <h2 className="mt-3 font-display text-3xl">Ask Vicky</h2>
            <ol className="mt-6 space-y-3 text-ink-soft">
              {open.map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span className="text-rosewood">{index + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </article>
  );
}
