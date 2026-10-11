export type EventPage = {
  slug: string;
  title: string;
  meta: string;
  summary: string;
  paragraphs: string[];
  cta:
    | { type: "contact"; label: string; subject: string }
    | { type: "checkout"; label: string }
    | { type: "stripe"; label: string; href: string };
};

export const eventPages: EventPage[] = [
  {
    slug: "you-ga",
    title: "YOU-GA",
    meta: "The Yoga Tree, Stirling · Saturday 24 October · 10am–12pm",
    summary:
      "A joyful two-hour mat workshop. Under the laughter, the Yoga Sutras and the Bhagavad Gita, and a practice that belongs to you.",
    paragraphs: [
      "I’ve been thinking a lot about this lately. As some of you know, I’ve taken time off teaching to move house, and it’s been a real slog: clearing the clutter from 23 years in one home to move to a much smaller one.",
      "Blinkers on, and solely focused on the task in front of me, there were times it consumed me. The never-ending practical jobs, and the emotional impact of leaving a home I loved. The weight of it all, at times, felt too much to bear.",
      "Then I remembered to look up, and why I was moving. The freedom of a smaller home, less maintenance, less work, and less worry. The freedom to travel and enjoy life.",
      "I lost the joy. My yoga practice became the dance between remembering and forgetting why I had begun this journey. Acknowledging the hardship, while picturing a life with more freedom.",
      "This happens to all of us.",
      "You’ve just had a baby and the sleepless nights seem endless. You’re caring for elderly parents and the worry seems relentless. Your job is dragging you down and you’re counting the days until the holiday you booked months ago.",
      "Having the skills to understand the temporary nature of these moments is at the essence of yoga. You feel the weight of the moment, acknowledge it, then you are able to shake it off. Life doesn’t have to be easy for joy to exist. Sometimes finding joy is simply about remembering to look for it. To make space for laughter, movement, music, and those moments of aliveness.",
      "This is why I created this joyful yoga immersion: YOU-GA.",
      "Underneath the fun, this two-hour mat workshop explores the oldest teachings of yoga. The Yoga Sutras remind you that so much suffering comes from getting entangled in the noise in your mind: the comparisons, the judging, the striving, the belief that you need to be different from who you actually are. The Bhagavad Gita brings you back to your dharma, the idea that your path is your own, and that living someone else’s life, or practising someone else’s yoga, takes you further away from yourself.",
      "Together, these teachings invite us to stop measuring our experience against others and start paying attention to what makes us feel alive. It’s your body. Your energy. Your choice. Your practice.",
      "There is so much freedom and joy in letting go of how yoga is supposed to look, and discovering what it feels like when your practice genuinely belongs to you.",
    ],
    cta: {
      type: "contact",
      label: "Ask about YOU-GA",
      subject: "YOU-GA workshop",
    },
  },
  {
    slug: "pg-13",
    title: "PG-13: Parenting through a Yoga Lens",
    meta: "On demand · £175 now, £225 later",
    summary:
      "Practical lessons for parents of teenagers, plus a grounding class, a yoga nidra, and a short guide. Watch as often as you like.",
    paragraphs: [
      "I am so excited to finally share this with you.",
      "Parenting a teenager is not easy. I know this first-hand, because I found myself raising my daughter alone. There were plenty of loving moments, but also more arguments and slammed doors than I care to remember.",
      "Messy rooms. Dirty dishes left to grow science experiments. Phones glued to hands. Missed curfews. I snapped more times than I wanted to, and the guilt afterwards felt heavy.",
      "Through all of this, the one thing that helped me be more steady was yoga. Not the poses on a mat, but the philosophy that underpins them. For over 20 years I have studied and practised these teachings, and they gave me the tools to pause, breathe, and respond differently in the heat of parenting moments.",
      "These tools do not stop teenagers from being teenagers. They change how you, as a parent, show up in those flashpoints. That is where the shift happens. That is what can bring more calm into your home.",
      "This is why I created PG-13: Parenting through a Yoga Lens. Fun, practical, and down to earth. These lessons use tools from the Yoga Sutras and the Bhagavad Gita to help you understand your own reactions and begin to respond with more self-control.",
      "You get one 1-hour grounding yoga class, a calming practice for when life feels overwhelming. One 30-minute yoga nidra, a deeply restful session for your nervous system. And a simple guide, so the key tools are close at hand. You can watch everything as many times as you like, with no expiry.",
      "Imagine your hand on the door knob of your teenager’s room. You already know what you might find: the mess, the dishes, the phone, and the attitude. This is the moment when everything can go one of two ways.",
      "Without tools, you storm in, the words fly out, and the familiar spiral begins. With the tools from this course, you pause. You breathe. You notice the anger rising, and you remember you have a choice. That pause may be the difference between another slammed door and a calmer conversation.",
      "PG-13 will not erase conflict. With practice, it gives you more steadiness, more compassion for yourself, and more clarity in how you respond.",
      "For this first release, PG-13 is £175. Later, the full price will be £225. If you are tired of the same fights, tired of snapping and then feeling guilty, this is a place to begin.",
    ],
    cta: { type: "checkout", label: "Buy PG-13" },
  },
  {
    slug: "practice-of-being-human",
    title: "Yoga — the practice of being human",
    meta: "In person · 2 hours · No mat, no flexibility, no experience needed",
    summary:
      "A workshop that turns yoga philosophy into tools for everyday life: noticing a reaction, meeting change, and taking one step without waiting to feel certain.",
    paragraphs: [
      "Yoga isn’t meant to make you into a super-bendy superhero. It’s meant to help you live.",
      "Most of us don’t struggle because life is difficult all the time. We struggle because we fight reality, repeat the same old patterns, and freeze when we don’t know what to do next.",
      "When change happens, most of us tense, resist, overthink, or shut down. Your partner says they need space, and your mind jumps to the worst case. You replay a painful argument from years ago and still feel the knot. You know you have to speak to a difficult colleague, and you keep waiting for a safer moment.",
      "Feeling stuck between knowing something needs to change, and not knowing how, isn’t failing. It’s being human, without the tools to understand what’s happening.",
      "At its core, yoga is a lived philosophy for discomfort, uncertainty, fear, and change. It helps you notice what’s actually happening, understand why you might be reacting that way, and respond with more clarity.",
      "You notice the tightness in your chest and catch yourself before sending “Fine. Whatever.” You delete it, and reply, “I’ve had a rough day. Can we talk tomorrow?” When your partner asks for space, you take a breath and ask whether they want to talk or just need quiet, without making their need about your worth. When an old argument starts up in the shower, you catch it, remind yourself it’s done, and come back to the day ahead.",
      "This is a two-hour, in-person workshop. It translates yoga philosophy into tools you can use: how clinging to how things should be creates suffering, how fear of change shows up in the body, and simple practices — breathing, anchoring, movement, meditation — that open a gap between impulse and action.",
      "It also looks at why patterns repeat. Staying in relationships that drain you. Saying yes when you mean no. Texting back “Sounds lovely” when you already know you’ll leave exhausted. Waiting for confidence until the deadline has passed.",
      "Yoga philosophy won’t hand you a guaranteed outcome. It can help you take one meaningful step without the pressure of perfection.",
      "This is for you if you feel stuck or overwhelmed when things change, and you want practical tools rather than greeting-card philosophy.",
      "This is not a mat practice. No flexibility required. No prior yoga experience needed. This is the work I’ve been building toward for years: the tools of yoga for everyday life.",
    ],
    cta: {
      type: "contact",
      label: "Ask about this workshop",
      subject: "Yoga — the practice of being human",
    },
  },
  {
    slug: "maya",
    title: "Maya and the Mask",
    meta: "Recorded workshop · Yoga philosophy, told through Star Wars",
    summary:
      "For anyone who thinks yoga philosophy isn’t for them. Storytelling, reflection, and the teachings, without the dusty lecture.",
    paragraphs: [
      "Yoga philosophy for the person who thinks yoga philosophy isn’t for them, but who loves Star Wars.",
      "Think learning it will be boring, or irrelevant? Hate the dogma, the preachiness, and the holier-than-thou tone that spiritual systems seem to arrive with?",
      "Maybe you’ve heard “non-attachment,” “ego,” or “illusion,” and thought: what on earth does that have to do with my life? How will it help me juggle work, family, and friends, or cope with the firefighting I do every day?",
      "Yoga philosophy explains, and offers tools to shift, much of the inner conflict, emotional reactivity, and suffering we all experience. It wasn’t written to be academic. It is meant to be lived.",
      "You don’t need a dull lecture or a pile of Sanskrit to memorise. This workshop is built around a story you already know. Few tales illustrate the human mind — hopes, fears, attachments, and illusions — quite like his.",
      "Through storytelling, reflection, and yoga wisdom, you’ll see how to notice the roles and identities you cling to, and how they shape your choices. How to work with fear and control in a more compassionate, embodied way. How to reclaim clarity when you are overwhelmed, stressed, or doubting yourself.",
      "It’s tangible self-awareness, with a lightsaber twist. The most powerful journey isn’t the battle in a galaxy far, far away. It’s the one within you.",
      "Once you’ve paid, the link to the recording comes straight to your inbox.",
    ],
    cta: {
      type: "stripe",
      label: "Buy the recording",
      href: "https://buy.stripe.com/8x2eVd7NG63o2FXbbS7bW0b",
    },
  },
];

export function eventPage(slug: string) {
  return eventPages.find((event) => event.slug === slug);
}
