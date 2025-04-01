// import { NextRequest } from "next/sever";

export async function POST(request) {
    
  const { messageText } = await request.json();
  console.log("messageText  === ", messageText);
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      for (let index = 0; index < messageText.length; index++) {
        const element = messageText[index];
        controller.enqueue(encoder.encode(messageText[index]));
      }
      controller.close();
    },
  });
  return new Response(stream);
}
