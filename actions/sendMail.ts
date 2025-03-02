"use server";

import { EmailTemplate } from "@/components/email/EmailTemplate";
import { ContactFormSchema } from "@/schemas/ContactFormSchema";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (values: z.infer<typeof ContactFormSchema>) => {
  const validatedFields = ContactFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const { name, surname, email, subject, message } = validatedFields.data;

  try {
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "furkangulabi162@gmail.com",
      subject: `New Contact: ${subject}`,
      react: EmailTemplate({
        name,
        surname,
        email,
        subject,
        message,
      }),
    });

    if (error) {
      console.error("Email sending error:", error);
      return { error: "Failed to send email. Please try again later." };
    }

    return { success: "Message sent successfully!" };
  } catch (error) {
    console.error("Unexpected error:", error);
    return { error: "An unexpected error occurred. Please try again later." };
  }
};
