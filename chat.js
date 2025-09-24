import { xai } from "@ai-sdk/xai";
import { streamtext } from "ai";

const result = streamText({
  model: xai("grok-2-1212"),
  prompt: "Invent a new holiday and describe its traditions.",
});

for await (const textPart of result.textStream) {
  process.stdout.write(textPart);
}
