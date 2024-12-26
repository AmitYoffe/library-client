import { z } from "zod";

export const editBookSchema = z.object({
  writerId: z.number().min(1, "חובה להזין סופר"),
  count: z
    .string()
    .min(0, "הכמות הינה מספר טבעי גדול 0")
    .trim()
    .transform((string) => +string),
});

export type EditBookFormFields = z.infer<typeof editBookSchema>;
