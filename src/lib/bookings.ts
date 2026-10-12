import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { THURSDAY_PLACES } from "@/lib/availability";

export type Booking = {
  id: string;
  product: "private" | "group" | "thursday";
  slot: string;
  status: "held" | "paid";
  location?: string;
  createdAt: string;
};

const HOLD_MS = 30 * 60 * 1000;
const file = path.join(process.cwd(), "data", "bookings.json");

function read(): Booking[] {
  try {
    const parsed = JSON.parse(readFileSync(file, "utf8")) as Booking[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function write(bookings: Booking[]) {
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, JSON.stringify(bookings, null, 2));
}

function active(booking: Booking, now: number) {
  if (booking.status === "paid") return true;
  return now - Date.parse(booking.createdAt) < HOLD_MS;
}

export function takenSlots(now = Date.now()) {
  return new Set(read().filter((booking) => active(booking, now)).map((booking) => booking.slot));
}

export function thursdayPlacesTaken(slot: string, now = Date.now()) {
  return read().filter(
    (booking) =>
      active(booking, now) && booking.product === "thursday" && booking.slot === slot,
  ).length;
}

export function holdThursdayPlace(input: { id: string; slot: string }) {
  const now = Date.now();
  const bookings = read().filter((booking) => active(booking, now));
  const taken = bookings.filter(
    (booking) => booking.product === "thursday" && booking.slot === input.slot,
  ).length;
  if (taken >= THURSDAY_PLACES) return false;
  bookings.push({
    id: input.id,
    product: "thursday",
    slot: input.slot,
    status: "held",
    createdAt: new Date(now).toISOString(),
  });
  write(bookings);
  return true;
}

export function holdSlot(input: {
  id: string;
  product: "private" | "group";
  slot: string;
  location?: string;
}) {
  const now = Date.now();
  const bookings = read().filter((booking) => active(booking, now));
  if (bookings.some((booking) => booking.slot === input.slot)) return false;
  bookings.push({
    ...input,
    status: "held",
    createdAt: new Date(now).toISOString(),
  });
  write(bookings);
  return true;
}

export function markPaid(id: string) {
  const bookings = read();
  const booking = bookings.find((item) => item.id === id);
  if (!booking) return false;
  booking.status = "paid";
  write(bookings);
  return true;
}

export function releaseHold(id: string) {
  write(read().filter((booking) => booking.id !== id));
}
