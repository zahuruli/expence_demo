import mongoose from "mongoose";

const transectionSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    catrgory: {
      type: String,
      required: [true, "catrgory is required"],
    },
    reference: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    date: {
      type: String,
      required: [true, "date is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("transections", transectionSchema);
