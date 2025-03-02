import { z } from "zod";

// Define common validation patterns
const ALPHANUMERIC_REGEX = /^[a-zA-Z0-9\s]*$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const ContactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(30, { message: "Name cannot exceed 30 characters" })
    .refine((val) => ALPHANUMERIC_REGEX.test(val), {
      message: "Name can only contain letters, numbers, and spaces",
    })
    .refine((val) => val.split(" ").length <= 2, {
      message: "Name cannot exceed 2 words",
    }),

  surname: z
    .string()
    .trim()
    .min(2, { message: "Surname must be at least 2 characters" })
    .max(30, { message: "Surname cannot exceed 30 characters" })
    .refine((val) => ALPHANUMERIC_REGEX.test(val), {
      message: "Surname can only contain letters, numbers, and spaces",
    })
    .refine((val) => val.split(" ").length <= 2, {
      message: "Surname cannot exceed 2 words",
    }),

  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" })
    .refine((val) => EMAIL_REGEX.test(val), {
      message: "Please enter a valid email address",
    }),

  subject: z
    .string()
    .trim()
    .min(1, { message: "Please select a subject" })
    .refine((val) => val !== "", {
      message: "Subject is required",
    }),

  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message cannot exceed 1000 characters" })
    .refine((val) => !val.includes("<script>"), {
      message: "Message contains invalid content",
    }),
});

// Type for the form data
export type ContactFormData = z.infer<typeof ContactFormSchema>;
