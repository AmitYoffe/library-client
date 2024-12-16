import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, "חובה להזין שם משתמש"),
  password: z.string().min(3, "סיסמא חייבת להיות ארוכה מ-3 תווים"),
});

export type FormFields = z.infer<typeof loginSchema>;
