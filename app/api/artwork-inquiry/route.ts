import { NextResponse } from "next/server";
import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "@/lib/ses";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, artwork, message } = body;

    if (!name || !email || !artwork || !message) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 }
      );
    }

    const command = new SendEmailCommand({
      Source: "Nati Salinas <art@nati.studio>",
      Destination: {
        ToAddresses: ["nathaliasalinas97@gmail.com"],
      },
      ReplyToAddresses: [email],
      Message: {
        Subject: {
          Data: `Artwork Inquiry: ${artwork}`,
        },
        Body: {
          Text: {
            Data: `
New artwork inquiry

Artwork: ${artwork}
Name: ${name}
Email: ${email}

Message:
${message}
            `.trim(),
          },
        },
      },
    });

    await sesClient.send(command);

    return NextResponse.json(
      { message: "Artwork inquiry sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Artwork inquiry error:", error);

    return NextResponse.json(
      { message: "Unable to send artwork inquiry." },
      { status: 500 }
    );
  }
}
