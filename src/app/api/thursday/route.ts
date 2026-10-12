import { randomUUID } from "node:crypto";
import { THURSDAY_PLACES, isThursdayClass, upcomingThursdays } from "@/lib/availability";
import { holdThursdayPlace, thursdayPlacesTaken } from "@/lib/bookings";

export async function GET() {
  const slots = upcomingThursdays().map((slot) => ({
    ...slot,
    placesLeft: THURSDAY_PLACES - thursdayPlacesTaken(slot.start),
  }));
  return Response.json({ places: THURSDAY_PLACES, slots });
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { slot?: string } | null;
  if (!body?.slot || !isThursdayClass(body.slot)) {
    return Response.json({ error: "Choose a Thursday." }, { status: 400 });
  }
  const held = holdThursdayPlace({ id: randomUUID(), slot: body.slot });
  if (!held) {
    return Response.json({ error: "That Thursday is full." }, { status: 409 });
  }
  return Response.json({ ok: true, placesLeft: THURSDAY_PLACES - thursdayPlacesTaken(body.slot) });
}
