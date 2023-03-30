import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    address: {
      type: String,
      required: true,
      maxlength: 200,
    },
    total: {
      type: Number,
      required: true,
    },

    Status: {
      type: Number,
      default: 0,
    },

    method: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model.order || mongoose.model("order", OrderSchema);