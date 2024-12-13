import mongoose from "mongoose";

const webinarSchema = new mongoose.Schema(
  {
    tag: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    date: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    tutor: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    level: {
      type: String,
      required: true,
      enum: ["Beginner", "Intermediate", "Advanced"],
    },
    language: {
      type: String,
      required: true,
      enum: ["English", "Hindi"],
    },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Webinar", webinarSchema);
