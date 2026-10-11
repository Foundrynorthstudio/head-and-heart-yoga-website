import type { Metadata } from "next";
import { BookingCalendar } from "@/components/BookingCalendar";
import { formatPounds, products } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Book a group session",
  description:
    "Reserve a one-hour group or event yoga session, Monday to Friday, 9am to 9pm.",
};

export default function GroupBookingPage() {
  return (
    <section className="section-pad pt-32 md:pt-40">
      <div className="site-container max-w-3xl">
        <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
          Group and events
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.6rem,5vw,4rem)] leading-[1.05]">
          {products.group.name}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          {products.group.summary} The same weekday hours as a private session.
          {` ${formatPounds(products.group.pricePence)} reserves the hour.`}
        </p>
        <div className="mt-10">
          <BookingCalendar kind="group" />
        </div>
      </div>
    </section>
  );
}
