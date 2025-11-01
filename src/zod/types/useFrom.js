import { z } from "zod";  // fixed import

const userFormSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    age: z.string().min(12, { message: "Age must be 18+" }),
    password: z.string().min(6).max(10),
    confirmPassword: z.string(),
    phone: z.string().min(11, { message: "Must be 11 digits" }),
    gender: z.enum(["male", "female", "other"], {
      errorMap: () => ({ message: "Please enter valid gender" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // path for the error
  });

export default userFormSchema;
