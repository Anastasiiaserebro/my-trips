import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import {
  getTripById,
  updateTrip,
  deleteTrip,
} from "@/lib/serverTravelDb";
import type { Trip } from "@/lib/travelStore";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ tripId: string }> },
) {
  const { tripId } = await params;
  const trip = await getTripById(tripId);

  if (!trip) {
    return NextResponse.json(
      { error: "Путешествие не найдено" },
      { status: 404 },
    );
  }

  return NextResponse.json(trip);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ tripId: string }> },
) {
  const { tripId } = await params;
  const body = (await request.json()) as Partial<Trip>;

  const updated = await updateTrip(tripId, body);

  if (!updated) {
    return NextResponse.json(
      { error: "Путешествие не найдено" },
      { status: 404 },
    );
  }

  revalidateTag("travelData", "max");
  return NextResponse.json(updated);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ tripId: string }> },
) {
  const { tripId } = await params;
  const deleted = await deleteTrip(tripId);

  if (!deleted) {
    return NextResponse.json(
      { error: "Путешествие не найдено" },
      { status: 404 },
    );
  }

  revalidateTag("travelData", "max");
  return NextResponse.json({ success: true });
}
