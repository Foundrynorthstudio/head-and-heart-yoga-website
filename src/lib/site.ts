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
    { href: "/book", label: "Book" },
    { href: "/testimonials", label: "Stories" },
    { href: "/contact", label: "Contact" },
  ],
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
      "Vicky is the best yoga teacher I have ever experienced. Everyone is worthy in Vicky’s class — no one is treated differently because they wobble in balances or can’t manage poses, and she offers lots of alternatives if you struggle. She has significantly helped my mental and physical health and is 100% the reason I love yoga.",
    name: "Leah",
  },
] as const;
