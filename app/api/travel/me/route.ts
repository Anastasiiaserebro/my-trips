import { NextResponse } from "next/server";
import { getUserTravelData } from "@/lib/serverTravelDb";

export async function POST(request: Request) {
  const body = await request.json();
  const data = getUserTravelData(body.userId);

  return NextResponse.json(data);
}
