import { NextResponse } from "next/server";
import { getAllTravelData } from "@/lib/serverTravelDb";

export async function GET() {
  const data = await getAllTravelData();
  return NextResponse.json(data);
}

