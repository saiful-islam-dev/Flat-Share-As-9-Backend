import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    name: z.string().min(1, "Name is required"),
    contactNumber: z
      .string()
      .regex(/^[0-9]+$/, "Contact number must be numeric"),
    role: z.enum(["ADMIN", "USER"]).optional(),
  }),
});

export const updateUserSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .optional(),
  email: z.string().email("Invalid email address").optional(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .optional(),
  name: z.string().min(1, "Name is required").optional(),
  contactNumber: z
    .string()
    .regex(/^[0-9]+$/, "Contact number must be numeric")
    .optional(),
  role: z.enum(["ADMIN", "USER"]).optional(),
});
