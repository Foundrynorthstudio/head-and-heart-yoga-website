"use client";

import { useEffect, useState } from "react";

type ThursdaySlot = {
  start: string;
  dayLabel: string;
  placesLeft: number;
};

export function ThursdayCalendar() {
  const [slots, setSlots] = useState<ThursdaySlot[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    let ignore = false;
    fetch("/api/thursday")
      .then((response) => response.json())
      .then((data: { slots?: ThursdaySlot[] }) => {
        if (!ignore) setSlots(data.slots ?? []);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });
    return () => {
      ignore = true;
    };
  }, []);

  async function book() {
    if (!selected) return;
    setPending(true);
    setMessage(null);
    const response = await fetch("/api/thursday", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ slot: selected }),
    });
    const data = (await response.json().catch(() => null)) as {
      error?: string;
      placesLeft?: number;
    } | null;
    setPending(false);
    if (!response.ok) {
      setMessage(data?.error ?? "That Thursday could not be booked.");
      return;
    }
    setSlots((current) =>
      current.map((slot) =>
        slot.start === selected ? { ...slot, placesLeft: data?.placesLeft ?? slot.placesLeft } : slot,
      ),
    );
    setMessage("A place is held. Vicky will confirm the time.");
  }

  return (
    <div className="mt-5">
      {loading ? <p className="text-sm text-ink-soft">Loading Thursdays…</p> : null}
      <div className="flex flex-col gap-2">
        {slots.map((slot) => {
          const active = selected === slot.start;
          const full = slot.placesLeft <= 0;
          return (
            <button
              key={slot.start}
              type="button"
              disabled={full}
              onClick={() => setSelected(slot.start)}
              className={`flex items-center justify-between rounded-full border px-4 py-2 text-left text-sm ${
                active
                  ? "border-rosewood bg-rosewood text-white"
                  : "border-ink/20 bg-white text-ink hover:border-rosewood disabled:opacity-50"
              }`}
            >
              <span>{slot.dayLabel}</span>
              <span>{full ? "Full" : `${slot.placesLeft} open`}</span>
            </button>
          );
        })}
      </div>
      <button
        type="button"
        className="btn mt-4"
        disabled={!selected || pending}
        onClick={book}
      >
        {pending ? "Holding…" : "Book this Thursday"}
      </button>
      {message ? <p className="mt-3 text-sm text-ink-soft">{message}</p> : null}
    </div>
  );
}
