import type { Metadata } from "next";
import { BookingCalendar } from "@/components/BookingCalendar";
import { CheckoutButton } from "@/components/CheckoutButton";
import { formatPounds, products } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Book a private session",
  description:
    "Reserve a one-hour online private yoga session with Vicky, Monday to Friday, 9am to 9pm.",
};

export default function PrivateBookingPage() {
  return (
    <section className="section-pad pt-32 md:pt-40">
      <div className="site-container max-w-3xl">
        <p className="text-[0.72rem] tracking-[0.2em] text-sage uppercase">
          Private session
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.6rem,5vw,4rem)] leading-[1.05]">
          {products.private.name}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          {products.private.summary} One-hour slots, Monday to Friday, 9am to
          9pm, UK time. {formatPounds(products.private.pricePence)} reserves the
          hour.
        </p>
        <div className="mt-10">
          <BookingCalendar kind="private" />
        </div>
        <div className="mt-14 border-t border-sage/25 pt-8">
          <h2 className="font-display text-3xl">{products.block.name}</h2>
          <p className="mt-3 max-w-xl text-ink-soft">{products.block.summary}</p>
          <p className="mt-2 text-[0.78rem] tracking-[0.14em] text-rosewood uppercase">
            {formatPounds(products.block.pricePence)}
          </p>
          <div className="mt-5">
            <CheckoutButton product="block" label="Buy the block of four" />
          </div>
        </div>
      </div>
    </section>
  );
}
