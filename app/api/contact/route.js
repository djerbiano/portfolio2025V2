import nodemailer from "nodemailer";
import { z } from "zod";
import { NextResponse } from "next/server";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit avoir au moins 2 caractères"),
  email: z.email("Veuillez fournir une adresse email valide"),
  message: z.string().min(10, "Le message doit avoir au moins 10 caractères"),
});

export async function POST(request) {
  try {
    const body = await request.json();

    const result = contactSchema.safeParse(body);
    if (!result.success) {
      const errorTree = z.treeifyError(result.error);

      return NextResponse.json(
        {
          error: "Validation failed",
          details: errorTree,
        },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;
    const formattedMessage = message.replace(/\n/g, "<br/>");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // email pour moi
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.RECEPTION_EMAIL,
      subject: `Nouveau message de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #333;">Nouveau message de contact</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${formattedMessage}
          </div>
        </div>
      `,
    });

    //email de confirmation pour l'utilisateur
    await transporter.sendMail({
      from: "GHOUDI Saber - Portfolio",
      to: email,
      subject: "Confirmation de votre message",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #333;">Merci pour votre message, ${name} !</h2>
          <p>J'ai bien reçu votre message et je vous répondrai dans les plus brefs délais.</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0;">
            ${formattedMessage}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Email envoyé avec succès" }, { status: 200 });
  } catch (error) {
    console.error("Erreur API contact:", error);

    return NextResponse.json(
      {
        error: "Erreur serveur",
        message: "Une erreur est survenue lors de l'envoi du message",
      },
      { status: 500 }
    );
  }
}
