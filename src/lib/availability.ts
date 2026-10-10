export const TIME_ZONE = "Europe/London";
export const SLOT_HOURS = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] as const;
export const HORIZON_DAYS = 21;

const WEEKDAYS = new Set(["Mon", "Tue", "Wed", "Thu", "Fri"]);

export type Slot = {
  start: string;
  timeLabel: string;
  dayLabel: string;
};

function parts(date: Date) {
  const format = new Intl.DateTimeFormat("en-GB", {
    timeZone: TIME_ZONE,
    hourCycle: "h23",
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  const values: Record<string, string> = {};
  for (const part of format.formatToParts(date)) {
    if (part.type !== "literal") values[part.type] = part.value;
  }
  return values;
}

export function londonDateTime(
  year: number,
  month: number,
  day: number,
  hour: number,
) {
  const utcGuess = Date.UTC(year, month - 1, day, hour, 0, 0);
  const shown = parts(new Date(utcGuess));
  const shownUtc = Date.UTC(
    Number(shown.year),
    Number(shown.month) - 1,
    Number(shown.day),
    Number(shown.hour),
    Number(shown.minute),
  );
  return new Date(utcGuess - (shownUtc - utcGuess));
}

function addCalendarDays(year: number, month: number, day: number, days: number) {
  const date = new Date(Date.UTC(year, month - 1, day));
  date.setUTCDate(date.getUTCDate() + days);
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
  };
}

const dayFormat = new Intl.DateTimeFormat("en-GB", {
  timeZone: TIME_ZONE,
  weekday: "long",
  day: "numeric",
  month: "long",
});

export function upcomingSlots(now = new Date(), taken: ReadonlySet<string> = new Set()) {
  const today = parts(now);
  const slots: Slot[] = [];

  for (let offset = 0; offset < HORIZON_DAYS; offset += 1) {
    const date = addCalendarDays(
      Number(today.year),
      Number(today.month),
      Number(today.day),
      offset,
    );
    const midday = londonDateTime(date.year, date.month, date.day, 12);
    if (!WEEKDAYS.has(parts(midday).weekday)) continue;

    for (const hour of SLOT_HOURS) {
      const start = londonDateTime(date.year, date.month, date.day, hour);
      if (start.getTime() <= now.getTime()) continue;
      const iso = start.toISOString();
      if (taken.has(iso)) continue;
      slots.push({
        start: iso,
        timeLabel: `${String(hour).padStart(2, "0")}:00`,
        dayLabel: dayFormat.format(start),
      });
    }
  }

  return slots;
}

export function isBookableSlot(start: string, now = new Date()) {
  const date = new Date(start);
  if (Number.isNaN(date.getTime()) || date.getTime() <= now.getTime()) return false;
  const shown = parts(date);
  if (!WEEKDAYS.has(shown.weekday)) return false;
  const hour = Number(shown.hour);
  const minute = Number(shown.minute);
  return minute === 0 && SLOT_HOURS.includes(hour as (typeof SLOT_HOURS)[number]);
}
