export const site = {
  name: "Head & Heart Yoga",
  tagline: "Yoga practices as unique as you are",
  location: "Stirling & Online",
  email: "vicky@headandheartyoga.com",
  emailHref:
    "mailto:vicky@headandheartyoga.com?subject=Yoga%20Web%20Enquiry",
  social: {
    instagram: "https://www.instagram.com/headandheartyoga",
    facebook: "https://www.facebook.com/headandheartyoga",
    tiktok: "https://www.tiktok.com/@headandheartyoga",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Vicky" },
    { href: "/practice", label: "The Practice" },
    { href: "/events", label: "Events" },
    { href: "/book", label: "Book" },
    { href: "/testimonials", label: "Stories" },
    { href: "/contact", label: "Contact" },
  ],
  giftCard: "https://www.headandheartyoga.com/gift-card",
} as const;

export const services = [
  {
    title: "1:1 Online Private Session",
    detail: "A personal hour on Zoom, shaped around your body and your season of life.",
    duration: "1 hour",
    price: "£60",
    cta: "Request to book",
  },
  {
    title: "External Group / Event Yoga",
    detail:
      "Yoga for a work event, family gathering, or group of friends. Adults only.",
    duration: "1 hour",
    price: "£200",
    cta: "Enquire",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Vicky is the best yoga teacher I have ever experienced and has put so much effort into continuing to teach during the current pandemic. Everyone is worthy in Vicky’s class, no one is treated differently because they wobble in balances or can’t manage poses and she offers lots of alternatives if you struggle. I was embarrassed, overweight and incredibly inflexible when I started her classes and, whilst I am still a l’il chunky, Vicky’s incredibly welcoming teaching style gave me confidence in yoga and her patience helped me master poses I never thought I could. She has significantly helped my mental and physical health and is 100% the reason I love yoga. If you are thinking of starting to practice, I cannot recommend a more chilled out and dedicated teacher and I cannot express how much she will help you in both body and mind.",
    name: "Leah",
  },
  {
    quote:
      "After starting my journey as a yogi this year, I couldn’t have stumbled across a more kind and compassionate teacher. Vicky’s dedication to teaching and community was a shining light during the covid lockdown. I always knew I had my Tuesday morning class who were in this together. Vicky’s philosophy-first approach to practice has helped me to be more kind, caring and loving to myself. Vicky’s pushed my knowledge of mindfulness and spirituality through introducing me to the likes of Coral Brown. Her first-hand experience working with Alexandria Crow also shines through in her teaching. You can tell Vicky is a keen student herself. I’d thoroughly recommend Vicky as a teacher. You can tell she genuinely cares about her teaching and thrives on sharing her wisdom and experience with her students.",
    name: "David",
  },
  {
    quote:
      "Vicky is the most amazing teacher. She is kind and cares so much about her students. She explains the postures so clearly in a calm, soothing voice. Yoga with Vicky is awesome.",
    name: "Doreen",
  },
  {
    quote: "Friendly, life-enhancing yoga for real people.",
    name: "Anonymous (Stirling)",
  },
] as const;

export const events = [
  {
    title: "YOU-GA",
    meta: "The Yoga Tree, Stirling · Saturday 24 October · 10am–12pm",
    summary:
      "A joyful two-hour mat workshop. Under the laughter, Vicky explores the Yoga Sutras and the Bhagavad Gita — letting go of how yoga is supposed to look, and finding a practice that belongs to you.",
    href: "https://www.headandheartyoga.com/you-gaoct26",
    cta: "YOU-GA details",
  },
  {
    title: "PG-13: Parenting through a Yoga Lens",
    meta: "On demand · Introductory price £175, then £225",
    summary:
      "Practical lessons from the Yoga Sutras and the Bhagavad Gita for parents of teenagers, plus a one-hour grounding class, a 30-minute yoga nidra, and a short guide you can keep nearby. Watch as often as you like, with no expiry.",
    href: "https://www.headandheartyoga.com/pg-13-landing",
    cta: "PG-13 details",
  },
  {
    title: "Yoga — the practice of being human",
    meta: "In person · 2 hours · No mat, no flexibility, no experience needed",
    summary:
      "A workshop that turns yoga philosophy into tools for everyday life: noticing a reaction, meeting change, and taking one meaningful step without waiting to feel certain.",
    href: "https://www.headandheartyoga.com/thepracticeofbeinghuman",
    cta: "Workshop details",
  },
  {
    title: "Maya and the Mask",
    meta: "Recorded workshop · Yoga philosophy, told through Star Wars",
    summary:
      "For anyone who thinks yoga philosophy isn’t for them. Storytelling, reflection, and the teachings — without the dusty lecture. Purchase stays on the original page, and Vicky sends the recording after payment.",
    href: "https://www.headandheartyoga.com/maya-and-the-mask",
    cta: "Maya and the Mask",
  },
] as const;

export const supportLinks = [
  {
    name: "BACP",
    detail: "Accredited counsellors and psychotherapists",
    href: "https://www.bacp.co.uk/",
  },
  {
    name: "NHS mental health helplines",
    detail: "A list of helplines across the UK",
    href: "https://www.nhs.uk/conditions/stress-anxiety-depression/mental-health-helplines/",
  },
  {
    name: "Beat",
    detail: "Support for eating disorders",
    href: "https://www.beateatingdisorders.org.uk/",
  },
  {
    name: "Breathing Space",
    detail: "Support when you feel stressed or anxious",
    href: "https://breathingspace.scot/information-support/your-mood/stressed-anxious/",
  },
  {
    name: "SAMH",
    detail: "Scottish Association for Mental Health",
    href: "https://www.samh.org.uk/",
  },
  {
    name: "Samaritans",
    detail: "Someone to talk to, day or night",
    href: "https://www.samaritans.org/?nation=scotland",
  },
  {
    name: "Cruse Scotland",
    detail: "Bereavement support",
    href: "http://www.crusescotland.org.uk/",
  },
  {
    name: "LGBT Foundation",
    detail: "Support and information",
    href: "https://lgbt.foundation/",
  },
  {
    name: "Scottish Trans",
    detail: "Support groups in Scotland",
    href: "https://www.scottishtrans.org/support/support-groups-in-scotland/",
  },
  {
    name: "Chartered Society of Physiotherapy",
    detail: "Find a physiotherapist. Vicky teaches yoga; she is not a physiotherapist.",
    href: "https://www.csp.org.uk/public-patient/find-physiotherapist",
  },
] as const;
