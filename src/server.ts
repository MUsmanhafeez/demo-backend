import express from "express";
import cors from "cors";
import { env } from "./env.js";
import { connectDb } from "./db.js";
import { itemsRouter } from "./routes/items.js";

const app = express();

app.use(express.json({ limit: "1mb" }));
app.use(
  cors({
    origin: env.CORS_ORIGIN.split(",").map((s) => s.trim()),
    credentials: false
  })
);

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "demo-backend" });
});
console.log("this is my backend")
console.log("this is my backend")
console.log("this is my backend")
console.log("this is my backend")
console.log("this is my backend")
app.use("/api/items", itemsRouter);

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  // eslint-disable-next-line no-console
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

await connectDb();

app.listen(env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend listening on http://localhost:${env.PORT}`);
});

