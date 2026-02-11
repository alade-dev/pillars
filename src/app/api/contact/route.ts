import { NextRequest, NextResponse } from "next/server";

interface ContactForm {
  name: string;
  email: string;
  organization?: string;
  subject: string;
  message: string;
  type: string;
}

// In-memory store for demo purposes (would use a database in production)
const submissions: (ContactForm & { id: string; timestamp: string })[] = [];

export async function POST(request: NextRequest) {
  try {
    const body: ContactForm = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, subject, message" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate message length
    if (body.message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    // Store the submission
    const submission = {
      ...body,
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
    };
    submissions.push(submission);

    console.log("New contact submission:", submission);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting us. We'll get back to you soon!",
        id: submission.id,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    total: submissions.length,
    submissions: submissions.slice(-10), // Return last 10 submissions
  });
}
