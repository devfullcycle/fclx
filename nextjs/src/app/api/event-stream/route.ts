import { NextRequest } from "next/server";

export async function GET(_request: NextRequest) {
  const transformStream = new TransformStream();
  const writer = transformStream.writable.getWriter();
  const encoder = new TextEncoder();

  const randomNumbers = Array.from({ length: 100 }, () =>
    Math.floor(Math.random() * 10)
  );

  setTimeout(() => {
    randomNumbers.forEach((number, index) => {
      setTimeout(() => {
        writer.write(encoder.encode(`event: message\n`));
        writer.write(encoder.encode(`id: ${new Date().getTime()}\n`));
        writer.write(encoder.encode(`data: ${number}\n\n`));
      }, index * 1000);
    });
  }, 2000);

  return new Response(transformStream.readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
    status: 200,
  });
}

export const dynamic = 'force-dynamic';