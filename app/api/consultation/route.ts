import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const consultationEmail = process.env.CONSULTATION_TO_EMAIL;

    if (!resendApiKey || !consultationEmail) {
      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured yet.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(resendApiKey);
    const body = await req.json();

    const { name, email, phone, location, projectType, timeline, message } =
      body;

    await resend.emails.send({
      from: "Okanagan Lighting <onboarding@resend.dev>",
      to: consultationEmail,
      subject: "New Consultation Request",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px;">
          <h2>New Consultation Request</h2>
          <p><strong>Name:</strong> ${name || ""}</p>
          <p><strong>Email:</strong> ${email || ""}</p>
          <p><strong>Phone:</strong> ${phone || ""}</p>
          <p><strong>Location:</strong> ${location || ""}</p>
          <p><strong>Project Type:</strong> ${projectType || ""}</p>
          <p><strong>Timeline:</strong> ${timeline || ""}</p>
          <hr style="margin: 24px 0;" />
          <p><strong>Project Details:</strong></p>
          <p>${message || ""}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Consultation API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit consultation request.",
      },
      { status: 500 }
    );
  }
}