import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            }
        }
    ],
    total: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

export default model("Cart", cartSchema);
