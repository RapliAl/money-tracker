import {z} from "zod";

export const loginSchema = z.object({
    email: z.string()
        .email("Email is required"),
    password: z.string()
        .min(8, "Password must be at least 8 characters long")
})

export const registerSchema = loginSchema.extend({
    username: z.string()
        .min(3, "Username must be at least 3 characters long")
        .max(20, "Username must be at least 20 characters long")
        .regex(/^[A-Za-z0-9_]+$/),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"]
})

export type LoginSchema = z.infer<typeof loginSchema>
export type RegisterSchema = z.infer<typeof registerSchema>