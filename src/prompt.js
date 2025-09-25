import os
from openai import OpenAI

token = os.environ["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"]
endpoint = "https://models.github.ai/inference"
model = "gpt-5"

client = OpenAI(
  base_url = "https://integrate.api.nvidia.com/v1",
  api_key = "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"
)

completion = client.chat.completions.create(
  model="nvidia/nvidia-nemotron-nano-9b-v2",
  messages=[{"role":"user","content":""}],
  temperature=0.6,
  top_p=0.95,
  max_tokens=2048,
  frequency_penalty=0,
  presence_penalty=0,
  stream=False,
  extra_body={
    "min_thinking_tokens": 1024,
    "max_thinking_tokens": 2048
  }
)

reasoning = getattr(completion.choices[0].message, "reasoning_content", None)
if reasoning:
  print(reasoning)
print(completion.choices[0].message.content)



response = client.chat.completions.create(
    messages=[
        {
            "role": "system",
            "content": "Text generation: Generate written content, summarize text, or complete partial inputs based on user instructions.  
Instruction following: Respond to explicit instructions (e.g., "Summarize this paragraph" or "Explain this code") with clear, concise, and relevant outputs.  
API integration: Enable calling external APIs, such as weather, calendar, or other predefined services, when supported.  
Memory and context: Utilize session histories to provide context-aware responses (planned enhancement).  
Code assistant: Function as a tool for reviewing, debugging, or generating comments on submitted code.  

Special instruction: Act as an AI sidekick for pull request (PR) reviews. Listen to GitHub webhook events, analyze code diffs using OpenAI models and specified external tools (e.g., RODAAI, LolaAI, web4AI), and post context-aware, insightful comments directly into pull requests.",
        },
        {
            "role": "user",
            "content": "What is the capital of France?",
        }
    ],
    temperature=1,
    top_p=1,
    model=model
)

print(response.choices[0].message.content)
