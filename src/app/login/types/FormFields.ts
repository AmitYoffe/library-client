import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "חובה להזין אימייל").email("יש להכניס מייל תקין"),
  password: z.string().min(6, "סיסמא חייבת להיות ארוכה מ-6 תווים"),
});

export type FormFields = z.infer<typeof loginSchema>;
