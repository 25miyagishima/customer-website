import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

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

    const body = await req.json();

    const name = escapeHtml(body.name);
    const email = escapeHtml(body.email);
    const phone = escapeHtml(body.phone);
    const location = escapeHtml(body.location);
    const projectType = escapeHtml(body.projectType);
    const timeline = escapeHtml(body.timeline);
    const message = escapeHtml(body.message);

    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      from: "Okanagan Lighting <consultations@okanaganlighting.ca>",
      to: [consultationEmail],
      replyTo: body.email || undefined,
      subject: "New Consultation Request",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #222;">
          <h2>New Consultation Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Timeline:</strong> ${timeline}</p>
          <hr style="margin: 24px 0;" />
          <p><strong>Project Details:</strong></p>
          <p>${message}</p>
        </div>
      `,
      text: `
New Consultation Request

Name: ${name}
Email: ${email}
Phone: ${phone}
Location: ${location}
Project Type: ${projectType}
Timeline: ${timeline}

Project Details:
${message}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send consultation request.",
        },
        { status: 500 }
      );
    }

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