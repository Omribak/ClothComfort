import { z } from 'zod';

export const RegisterUserZodSchema = z.object({
  firstName: z.string().min(1, 'First name is required.'),
  lastName: z.string().min(1, 'Last name is required.'),
  age: z.string()
});

export const RegisterAddressZodSchema = z.object({
  state: z.string(),
  city: z.string(),
  street: z.string()
});

export const RegisterAccountZodSchema = z
  .object({
    email: z.string().email('Invalid email address.'),
    password: z.string().min(6, 'Password must be at least 6 characters.'),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword']
  });

export const LoginZodSchema = z.object({
  email: z.string().email('Invalid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters.')
});
