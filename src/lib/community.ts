import { products } from "@/lib/catalog";

export const libraryPreview = [
  {
    slug: "steady-breath",
    title: "Weekly flow · Steady breath",
    date: "5 October 2026",
    length: "60 min",
    image: "/images/studio-alt.jpg",
  },
  {
    slug: "soft-strength",
    title: "Weekly flow · Soft strength",
    date: "28 September 2026",
    length: "60 min",
    image: "/images/vicky-class.jpg",
  },
  {
    slug: "quiet-hips",
    title: "Weekly flow · Quiet hips",
    date: "21 September 2026",
    length: "58 min",
    image: "/images/studio.jpg",
  },
  {
    slug: "long-spine",
    title: "Weekly flow · Long spine",
    date: "14 September 2026",
    length: "61 min",
    image: "/images/session.jpg",
  },
  {
    slug: "ease-in-the-shoulders",
    title: "Weekly flow · Ease in the shoulders",
    date: "7 September 2026",
    length: "60 min",
    image: "/images/vicky.jpg",
  },
  {
    slug: "ground-and-rise",
    title: "Weekly flow · Ground and rise",
    date: "31 August 2026",
    length: "59 min",
    image: "/images/practice-alt.jpg",
  },
] as const;

export const thisWeekClass = libraryPreview[0];

export function libraryClass(slug: string) {
  return libraryPreview.find((item) => item.slug === slug);
}

export type CommunityLesson = {
  slug: string;
  title: string;
  length: string;
  image: string;
  detail: string;
};

export type CommunityCourse = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  priceLabel: string;
  buy: { type: "checkout"; product: "pg13" } | { type: "stripe"; href: string; label: string };
  lessons: CommunityLesson[];
};

export const communityCourses: CommunityCourse[] = [
  {
    slug: "pg-13",
    title: products.pg13.name,
    summary: products.pg13.summary,
    image: "/images/vicky-class.jpg",
    priceLabel: "£175 now, £225 later",
    buy: { type: "checkout", product: "pg13" },
    lessons: [
      {
        slug: "grounding",
        title: "Grounding yoga class",
        length: "60 min",
        image: "/images/practice.jpg",
        detail:
          "A calming practice for when life feels overwhelming. One hour, to return to as often as you like.",
      },
      {
        slug: "nidra",
        title: "Yoga nidra",
        length: "30 min",
        image: "/images/session.jpg",
        detail: "A deeply restful session for the nervous system.",
      },
      {
        slug: "guide",
        title: "A short guide to the yoga wisdom tools",
        length: "To read",
        image: "/images/studio.jpg",
        detail: "The key tools, kept close at hand, so the pause is there when you need it.",
      },
    ],
  },
  {
    slug: "maya",
    title: "Maya and the Mask",
    summary:
      "Yoga philosophy for anyone who thinks it isn’t for them, told through a story you already know.",
    image: "/images/practice-alt.jpg",
    priceLabel: "Recorded workshop",
    buy: {
      type: "stripe",
      href: "https://buy.stripe.com/8x2eVd7NG63o2FXbbS7bW0b",
      label: "Buy the recording",
    },
    lessons: [
      {
        slug: "recording",
        title: "The recorded workshop",
        length: "One sitting",
        image: "/images/hero-practice.jpg",
        detail:
          "Storytelling, reflection, and the teachings, without the dusty lecture.",
      },
    ],
  },
];

export function communityCourse(slug: string) {
  return communityCourses.find((course) => course.slug === slug);
}

export function communityLesson(course: CommunityCourse, lessonSlug: string) {
  return course.lessons.find((lesson) => lesson.slug === lessonSlug);
}
