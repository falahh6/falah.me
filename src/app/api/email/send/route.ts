import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const allowedOrigins =
  process.env.NODE_ENV == "development"
    ? ["http://localhost:3000"]
    : ["https://falah.in"];

export async function POST(request: Request) {
  try {
    const { message, from } = await request.json();

    const origin = request.headers.get("origin");
    console.log("ORIGIN : ", origin);

    if (!origin || !allowedOrigins.includes(origin)) {
      return NextResponse.json(
        { error: "Forbidden, hehehe - not gonna work for you." },
        { status: 403 }
      );
    }

    if (!from || !message) {
      return NextResponse.json(
        { error: "From and Message are required" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: `Via Website <contact@falah.in>`,
      to: ["work.falah6@gmail.com"],
      subject: `Message from ${from}`,
      html: message,
    });

    if (data.error) {
      console.error("Error sending email:", data);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    console.log("Email sent:", data);
    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
