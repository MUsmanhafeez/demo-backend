import { Router } from "express";
import { z } from "zod";
import { ItemModel } from "../models/Item.js";

export const itemsRouter = Router();

itemsRouter.get("/", async (_req, res) => {
  const items = await ItemModel.find().sort({ createdAt: -1 }).limit(200).lean();
  res.json({ items });
});

itemsRouter.post("/", async (req, res) => {
  const Body = z.object({ title: z.string().min(1).max(140) });
  const parsed = Body.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid body", details: parsed.error.flatten() });
  }

  const item = await ItemModel.create({ title: parsed.data.title });
  res.status(201).json({ item });
});

itemsRouter.delete("/:id", async (req, res) => {
  const Params = z.object({ id: z.string().min(1) });
  const parsed = Params.safeParse(req.params);
  if (!parsed.success) return res.status(400).json({ error: "Invalid id" });

  const deleted = await ItemModel.findByIdAndDelete(parsed.data.id).lean();
  if (!deleted) return res.status(404).json({ error: "Not found" });
  res.json({ ok: true });
});

