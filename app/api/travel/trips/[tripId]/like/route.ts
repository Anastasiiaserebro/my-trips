import { NextResponse } from "next/server";
import { toggleTripLike } from "@/lib/serverTravelDb";

export async function POST(
  request: Request,
  { params }: { params: { tripId: string } },
) {
  const { tripId } = params;
  const body = (await request.json()) as { userId?: string };

  if (!body.userId) {
    return NextResponse.json(
      { error: "userId обязателен" },
      { status: 400 },
    );
  }

  const updated = toggleTripLike(tripId, body.userId);

  if (!updated) {
    return NextResponse.json({ error: "Путешествие не найдено" }, { status: 404 });
  }

  return NextResponse.json(updated, { status: 200 });
}

