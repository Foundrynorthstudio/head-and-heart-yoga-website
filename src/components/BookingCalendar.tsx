"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckoutButton } from "@/components/CheckoutButton";
import type { Slot } from "@/lib/availability";

type BookingCalendarProps = {
  kind: "private" | "group";
};

export function BookingCalendar({ kind }: BookingCalendarProps) {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    fetch("/api/slots")
      .then((response) => response.json())
      .then((data: { slots?: Slot[] }) => {
        if (!ignore) setSlots(data.slots ?? []);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });
    return () => {
      ignore = true;
    };
  }, []);

  const days = useMemo(() => {
    const groups = new Map<string, Slot[]>();
    for (const slot of slots) {
      const list = groups.get(slot.dayLabel) ?? [];
      list.push(slot);
      groups.set(slot.dayLabel, list);
    }
    return [...groups.entries()];
  }, [slots]);

  const needsLocation = kind === "group";
  const canPay = Boolean(selected) && (!needsLocation || location.trim().length > 0);

  return (
    <div>
      {loading ? <p className="text-ink-soft">Loading open hours…</p> : null}
      {!loading && days.length === 0 ? (
        <p className="text-ink-soft">No open hours in the next three weeks.</p>
      ) : null}
      <div className="space-y-8">
        {days.map(([day, daySlots]) => (
          <div key={day}>
            <h3 className="font-display text-2xl">{day}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {daySlots.map((slot) => {
                const active = selected === slot.start;
                return (
                  <button
                    key={slot.start}
                    type="button"
                    onClick={() => setSelected(slot.start)}
                    className={`rounded-full border px-4 py-2 text-sm ${
                      active
                        ? "border-rosewood bg-rosewood text-white"
                        : "border-ink/20 bg-white text-ink hover:border-rosewood"
                    }`}
                  >
                    {slot.timeLabel}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {needsLocation ? (
        <label className="mt-8 block max-w-xl text-sm text-ink-soft">
          Where is the group meeting?
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-base text-ink outline-none focus:border-rosewood"
            placeholder="Address or venue"
          />
        </label>
      ) : null}

      <div className="mt-8">
        <CheckoutButton
          product={kind}
          slot={selected ?? undefined}
          location={needsLocation ? location.trim() : undefined}
          disabled={!canPay}
          label={kind === "private" ? "Pay £60 and reserve" : "Pay £200 and reserve"}
        />
      </div>
    </div>
  );
}
