import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
    },
    stock: {
        type: Number,
        required: [true, "Stock quantity is required"],
        default: 0
    },
    sales: {
        type: Number,
        default: 0 
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: [true, "Product category is required"]
    }
})

export default model("Product", productSchema)
