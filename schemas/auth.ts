import { z } from 'zod'

export const loginSchema = z.object({
	email: z
		.string({ message: "Invalid Email" })
		.email("Invalid Email"),

	password: z
		.string({ message: "Invalid Password" })
		.min(10, "Password must be at least 10 characters"),

});

export const registerSchema = z.object({
	name: z
		.string({ message: "Invalid Name" }),

	username: z
		.string({ message: "Invalid Name" }),
	
	email: z
		.string({ message: "Invalid Email" })
		.email("Invalid Email"),
	
	password: z
		.string({ message: "Invalid Password" })
		.min(10, "Password must be at least 10 characters"),
	
	confirmPassword: z.string({ message: "Invalid Password" })

}).refine(data => data.password === data.confirmPassword, {
	message: "Passwords must match",
	path: ["confirmPassword"]
});