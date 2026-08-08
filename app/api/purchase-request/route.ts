import { NextResponse } from "next/server";
import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "@/lib/ses";

const productNames: Record<string, string> = {
  "rosa-espanola-8x10-print": "Rosa Española — 8 × 10 Art Print",
  "la-dj-8x10-print": "La DJ — 8 × 10 Art Print",
  "la-dj-11x14-canvas": "La DJ — 11 × 14 Canvas",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, products, notes } = body;

    if (
      !name ||
      !email ||
      !Array.isArray(products) ||
      products.length === 0
    ) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 }
      );
    }

    const selectedProducts = products
      .map((product) => productNames[product] ?? product)
      .join("\n");

    const command = new SendEmailCommand({
      Source: "Nati Salinas <art@nati.studio>",

      Destination: {
        ToAddresses: ["nathaliasalinas97@gmail.com"],
      },

      ReplyToAddresses: [email],

      Message: {
        Subject: {
          Data: `New Purchase Request from ${name}`,
        },

        Body: {
          Text: {
            Data: `
New purchase request

Name: ${name}
Email: ${email}

Interested in:
${selectedProducts}

Notes:
${notes || "No notes provided."}
            `.trim(),
          },
        },
      },
    });

    await sesClient.send(command);

    console.log("Purchase request email sent:", {
      name,
      email,
      products,
    });

    return NextResponse.json(
      { message: "Purchase request sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Purchase request error:", error);

    return NextResponse.json(
      { message: "Unable to send purchase request." },
      { status: 500 }
    );
  }
}