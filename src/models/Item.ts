import mongoose from "mongoose";

export type Item = {
  title: string;
  createdAt: Date;
  updatedAt: Date;
};

const ItemSchema = new mongoose.Schema<Item>(
  {
    title: { type: String, required: true, trim: true, maxlength: 140 }
  },
  { timestamps: true }
);

export const ItemModel =
  mongoose.models.Item ?? mongoose.model<Item>("Item", ItemSchema);

