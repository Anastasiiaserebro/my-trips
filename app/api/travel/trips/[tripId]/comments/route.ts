import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { createComment } from "@/lib/serverTravelDb";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ tripId: string }> },
) {
  const { tripId } = await params;
  const body = (await request.json()) as {
    authorId?: string;
    message?: string;
  };

  if (!body.authorId || !body.message) {
    return NextResponse.json(
      { error: "authorId и message обязательны" },
      { status: 400 },
    );
  }

  const comment = await createComment(tripId, body.authorId, body.message.trim());
  revalidateTag("travelData", "max");
  return NextResponse.json(comment, { status: 201 });
}

