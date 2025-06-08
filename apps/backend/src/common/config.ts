import { z } from 'zod';

const Configuration = z.object({
  BACKEND_PORT: z.coerce.number().default(3000),
  BACKEND_HOST: z.string().default('127.0.0.1'),

  SESSION_SECRET: z.string(),
  FRONTEND_URL: z.string(),
});

const readEnv = (name: string): string | undefined => {
  const value = process.env[name];

  if (value !== undefined) {
    return value;
  }
};

export const config = Configuration.parse({
  BACKEND_PORT: readEnv('BACKEND_PORT'),
  BACKEND_HOST: readEnv('BACKEND_HOST'),

  SESSION_SECRET: readEnv('SESSION_SECRET'),
  FRONTEND_URL: readEnv('FRONTEND_URL'),
});
