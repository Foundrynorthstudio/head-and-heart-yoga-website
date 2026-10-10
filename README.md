# Head & Heart Yoga

Website rebuild for [Head & Heart Yoga](https://www.headandheartyoga.com) — inclusive yoga with Vicky in Stirling and online.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Google fonts: Fraunces + Manrope

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Brand-first homepage |
| `/about` | About Vicky |
| `/practice` | What to expect in class |
| `/book` | Services & booking enquiries |
| `/testimonials` | Student stories |
| `/contact` | Contact form (mailto) |

## Notes

- Brand photography and logo live in `public/images/`.
- Booking CTAs currently open a mailto to `vicky@headandheartyoga.com`; the live Wix booking page remains linked as a fallback.
- Contact form uses the visitor’s email client for delivery — swap in a form provider when ready to go live.
