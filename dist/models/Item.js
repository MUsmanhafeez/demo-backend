import mongoose from "mongoose";
const ItemSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true, maxlength: 140 }
}, { timestamps: true });
export const ItemModel = mongoose.models.Item ?? mongoose.model("Item", ItemSchema);
