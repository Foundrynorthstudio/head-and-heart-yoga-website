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
    { href: "/live", label: "Live" },
    { href: "/courses", label: "Courses" },
    { href: "/events", label: "Events" },
    { href: "/book", label: "Book" },
    { href: "/journal", label: "Journal" },
    { href: "/marketing", label: "Marketing" },
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
      "Vicky is the best yoga teacher I have ever experienced. Everyone is worthy in her class, and she offers alternatives if you struggle.",
    name: "Leah",
  },
  {
    quote:
      "I couldn’t have found a kinder teacher. You can tell she genuinely cares, and she shares what she is still learning herself.",
    name: "David",
  },
  {
    quote:
      "She explains the postures so clearly, in a calm, soothing voice. Yoga with Vicky is awesome.",
    name: "Doreen",
  },
  {
    quote: "Friendly, life-enhancing yoga for real people.",
    name: "Anonymous (Stirling)",
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
