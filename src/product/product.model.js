import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: [true, "Product category is required"]
    }
    // Otros campos...
});

export default model("Product", productSchema);
