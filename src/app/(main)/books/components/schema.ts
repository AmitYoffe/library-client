import { z } from "zod";

export const bookSchema = z.object({
  title: z
    .string()
    .min(1, "חובה להזין כותרת")
    .regex(/^[a-zA-Zא-ת\s]+$/, "שם פרטי חייב להכיל רק אותיות")
    .optional(),
  writerId: z
    .string()
    .min(1, "חובה להזין סופר")
    .trim()
    .transform((string) => +string),
  count: z
    .string()
    .min(0, "הכמות הינה מספר טבעי גדול 0")
    .trim()
    .transform((string) => +string),
});

export type BookFormFields = z.infer<typeof bookSchema>;
