const { z } = require('zod');

const RegisterZodSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .max(20),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long')
});

const LoginZodSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string()
});
module.exports = { RegisterZodSchema, LoginZodSchema };
