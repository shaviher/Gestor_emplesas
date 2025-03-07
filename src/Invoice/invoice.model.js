import { Schema, model } from "mongoose";

const invoiceSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",  // Referencia al usuario que genera la factura
    required: true,
  },
  items: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",  // Referencia al producto comprado
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      price: {
        type: Number,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      }
    }
  ],
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["PENDING", "PAID", "CANCELLED"],
    default: "PENDING",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export default model("Invoice", invoiceSchema);
