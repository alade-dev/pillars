import { NextRequest, NextResponse } from "next/server";

// In-memory store for demo purposes
const subscribers: { email: string; subscribedAt: string }[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.email) {
      return NextResponse.json(
        { error: "Email is required" },
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

    // Check for duplicate
    if (subscribers.some((s) => s.email === body.email)) {
      return NextResponse.json(
        { error: "Email already subscribed" },
        { status: 409 }
      );
    }

    // Store subscriber
    const subscriber = {
      email: body.email,
      subscribedAt: new Date().toISOString(),
    };
    subscribers.push(subscriber);

    console.log("New newsletter subscriber:", subscriber);

    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed to the newsletter!",
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
    total: subscribers.length,
    subscribers: subscribers.slice(-10),
  });
}
