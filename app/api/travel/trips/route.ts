import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { createTrip } from "@/lib/serverTravelDb";
import type { Trip } from "@/lib/travelStore";

export async function POST(request: Request) {
  const body = (await request.json()) as Omit<
    Trip,
    "id" | "createdAt" | "likedByUserIds"
  >;

  const newTrip = await createTrip(body);
  revalidateTag("travelData", "max");
  return NextResponse.json(newTrip, { status: 201 });
}

