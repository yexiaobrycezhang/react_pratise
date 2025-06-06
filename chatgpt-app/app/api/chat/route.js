/* import { sleep } from "@/common/util";
import { MessageRequestBody } from "@/types/chat";
import { NextRequest } from "next/server"; */

export async function POST(request) {
  const { messages } = await request.json();
  console.log("messages == ", messages);
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const messageText = messages[messages.length - 1].content;
      console.log("messageText ===  ", messageText);
      for (let i = 0; i < messageText.length; i++) {
        // await sleep(100);
        controller.enqueue(encoder.encode(messageText[i]));
      }
      controller.close();
    },
  });
  return new Response(stream);
}
