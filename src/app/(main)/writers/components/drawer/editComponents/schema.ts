import { z } from "zod";

export const editWriterSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "חייב להזין שם פרטי")
    .regex(/^[a-zA-Zא-ת\s]+$/, "שם פרטי חייב להכיל רק אותיות"),
  lastName: z
    .string()
    .trim()
    .min(1, "חייב להזין שם משפחה")
    .regex(/^[a-zA-Zא-ת\s]+$/, "שם משפחה חייב להכיל רק אותיות"),
});

export type EditWriterFormFields = z.infer<typeof editWriterSchema>;
