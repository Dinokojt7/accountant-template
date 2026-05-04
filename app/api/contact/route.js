import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, service, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Krol Finance Website" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New enquiry from ${name}${service ? ` — ${service}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1A1A1A; border-bottom: 2px solid #F5EFD5; padding-bottom: 12px;">New Website Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: bold;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0;">${phone || "Not provided"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Service</td><td style="padding: 8px 0;">${service || "Not specified"}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #F5EFD5; border-radius: 8px;">
            <p style="color: #666; margin: 0 0 8px; font-size: 13px;">Message</p>
            <p style="color: #1A1A1A; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 24px;">Sent via krolfinance.vercel.app</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
