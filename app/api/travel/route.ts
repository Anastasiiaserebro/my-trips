import { NextResponse } from "next/server";
import { getAllTravelData } from "@/lib/serverTravelDb";

export async function GET() {
  const data = getAllTravelData();
  
  return NextResponse.json(data);
}

