import { NextResponse } from "next/server";
import { createComment } from "@/lib/serverTravelDb";

export async function POST(
  request: Request,
  { params }: { params: { tripId: string } },
) {
  const { tripId } = params;
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

  const comment = createComment(tripId, body.authorId, body.message.trim());
  return NextResponse.json(comment, { status: 201 });
}

