import { z } from "zod";
import dotenv from "dotenv";
dotenv.config();
const EnvSchema = z.object({
    NODE_ENV: z.string().optional().default("development"),
    PORT: z.coerce.number().int().positive().default(4000),
    MONGODB_URI: z.string().min(1),
    CORS_ORIGIN: z.string().min(1).default("http://localhost:3000")
});
export const env = EnvSchema.parse(process.env);
