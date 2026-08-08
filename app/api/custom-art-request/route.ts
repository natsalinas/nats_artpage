import { NextResponse } from "next/server";
import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "@/lib/ses";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      artType,
      size,
      description,
    } = body;

    if (!name || !email || !artType || !size || !description) {
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
          Data: `New Custom Art Request from ${name}`,
        },

        Body: {
          Text: {
            Data: `
New custom art request

Name: ${name}
Email: ${email}

Art Type:
${artType}

Size:
${size}

Description:
${description}
            `.trim(),
          },
        },
      },
    });

    await sesClient.send(command);

    console.log("Custom art request email sent:", {
      name,
      email,
      artType,
      size,
    });

    return NextResponse.json(
      { message: "Custom art request sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Custom art request error:", error);

    return NextResponse.json(
      { message: "Unable to send custom art request." },
      { status: 500 }
    );
  }
}