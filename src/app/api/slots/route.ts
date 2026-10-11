import { upcomingSlots } from "@/lib/availability";
import { takenSlots } from "@/lib/bookings";

export async function GET() {
  return Response.json({
    slots: upcomingSlots(new Date(), takenSlots()),
  });
}
