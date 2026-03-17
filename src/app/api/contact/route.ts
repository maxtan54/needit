import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, phone } = await req.json();

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("Telegram credentials not configured");
    return NextResponse.json({ error: "Notification service not configured" }, { status: 500 });
  }

  const message = `📩 New contact request from NeedIt:\n\n👤 Name: ${name}\n📞 Phone: ${phone}`;

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: message }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Telegram error:", err);
    return NextResponse.json({ error: "Failed to send notification" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
