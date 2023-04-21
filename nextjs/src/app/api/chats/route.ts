import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../prisma/prisma";
import { withAuth } from "../helpers";

export const POST = withAuth(async (request: NextRequest, token) => {
  const body = await request.json();
  const chatCreated = await prisma.chat.create({
    data: {
      user_id: token.sub!,
      messages: {
        create: {
          content: body.message,
        },
      },
    },
    select: {
      id: true,
      messages: true,
    },
  });

  return NextResponse.json(chatCreated);
});

export const GET = withAuth(async (_request: NextRequest, token) => {
  const chats = await prisma.chat.findMany({
    where: {
      user_id: token.sub,
    },
    select: {
      id: true,
      messages: {
        orderBy: { created_at: "asc" },
        take: 1,
      },
    },
    orderBy: {
      created_at: "desc",
    },
  });

  return NextResponse.json(chats);
});
