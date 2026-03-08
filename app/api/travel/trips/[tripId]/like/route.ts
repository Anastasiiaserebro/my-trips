import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { getTripById, toggleTripLike } from "@/lib/serverTravelDb";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ tripId: string }> },
) {
  const { tripId } = await params;
  const body = (await request.json()) as { userId?: string };

  if (!body.userId) {
    return NextResponse.json(
      { error: "userId обязателен" },
      { status: 400 },
    );
  }

  const trip = await getTripById(tripId);
  if (!trip) {
    return NextResponse.json(
      { error: "Путешествие не найдено" },
      { status: 404 },
    );
  }

  if (trip.userId === body.userId) {
    return NextResponse.json(
      { error: "Нельзя лайкать свои путешествия" },
      { status: 400 },
    );
  }

  const updated = await toggleTripLike(tripId, body.userId);

  if (!updated) {
    return NextResponse.json({ error: "Путешествие не найдено" }, { status: 404 });
  }

  revalidateTag("travelData", "max");
  return NextResponse.json(updated, { status: 200 });
}

