
import fetch from "node-fetch";

export default async function handler(req, res) {
  if(req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;
  if(!message) return res.status(400).json({ error:"No message provided" });

  try {
    // Replace this URL with your actual backend AI endpoint
    const backendRes = await fetch("https://api.gpt5mini.com/chat", {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ message })
    });

    const data = await backendRes.json();
    res.status(200).json({ reply: data.reply });
  } catch(err) {
    console.error(err);
    res.status(500).json({ reply:"⚠️ AI backend error" });
  }
}
