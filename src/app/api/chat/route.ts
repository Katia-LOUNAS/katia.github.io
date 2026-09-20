import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { SYSTEM_PROMPT } from "@/lib/system-prompt";

const groq = createOpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: groq("groq/compound"),
      system: SYSTEM_PROMPT,
      messages,
    });

    return result.toDataStreamResponse();
  } catch (e) {
    console.error("Chat route error:", e);
    return new Response("Internal server error", { status: 500 });
  }
}
