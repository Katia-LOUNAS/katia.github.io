import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: 'Trebuchet MS', Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #f4f6fc; padding: 32px; border-radius: 8px;">
          <div style="background: linear-gradient(to bottom, #2c60c8, #1848a8); border-radius: 6px 6px 0 0; padding: 20px 28px;">
            <h2 style="color: #fff; margin: 0; font-size: 18px; font-weight: 700;">New message from your portfolio</h2>
          </div>
          <div style="background: #ffffff; border: 1px solid #dde5f8; border-top: none; border-radius: 0 0 6px 6px; padding: 28px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 6px 0; font-size: 12px; color: #6a7090; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; width: 80px;">From</td>
                <td style="padding: 6px 0; font-size: 14px; color: #1e3478; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-size: 12px; color: #6a7090; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em;">Email</td>
                <td style="padding: 6px 0; font-size: 14px; color: #2c4da0;">${email}</td>
              </tr>
              ${subject ? `
              <tr>
                <td style="padding: 6px 0; font-size: 12px; color: #6a7090; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em;">Subject</td>
                <td style="padding: 6px 0; font-size: 14px; color: #3a4260;">${subject}</td>
              </tr>` : ""}
            </table>
            <div style="border-top: 1px solid #eef2fc; padding-top: 20px;">
              <div style="font-size: 12px; color: #6a7090; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 10px;">Message</div>
              <div style="font-size: 14px; color: #3a4260; line-height: 1.7; white-space: pre-wrap;">${message}</div>
            </div>
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #eef2fc; font-size: 11px; color: #9298b0;">
              Reply directly to this email to respond to ${name}.
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
