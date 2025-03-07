import Product from "../product/product.model.js";
import Category from "../category/category.model.js";

export const createProduct = async (req, res) => {
    try {
        const { name, description, price, stock, categoryId } = req.body

        if (!name || !price) {
            return res.status(400).json({
                success: false,
                message: "Name and price are required",
            })
        }

        let category = null;

        if (categoryId) {
            category = await Category.findById(categoryId);
            if (!category) {
                return res.status(404).json({
                    success: false,
                    message: "Category not found",
                })
            }
        } else {

            category = await Category.findOne({ name: "default" })

            if (!category) {
                category = new Category({
                    name: "default",
                    description: "Default category for products without assigned category",
                })
                await category.save()
            }
        }

        const newProduct = new Product({
            name,
            description,
            price,
            stock,
            category: category._id,
        });

        await newProduct.save()

        return res.status(201).json({
            success: true,
            message: "Product created successfully",
            newProduct: {
            name: newProduct.name,
            description:newProduct.description,
            price: newProduct.price,
            stock: newProduct.stock,
            category: newProduct.category._id
            }
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error creating product",
            error: err.message,
        })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { pid } = req.params
        const { name, description, price, stock, categoryId } = req.body

        let updatedData = { name, description, price, stock }

        if (categoryId) {
            const category = await Category.findById(categoryId)
            if (!category) {
                return res.status(404).json({
                    success: false,
                    message: "Category not found",
                })
            }
            updatedData.category = category._id
        }

        const updatedProduct = await Product.findByIdAndUpdate(pid, updatedData, { new: true })

        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            })
        }

        return res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product: updatedProduct,
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error updating product",
            error: err.message,
        })
    }
}


export const exploreProducts = async (req, res) => {
    try {
        const { filter, search, categoryId } = req.query
        let query = {}
      
        if (search) {
            query.name = { $regex: search, $options: "i" }
        }
        
        if (categoryId) {
            query.category = categoryId
        }

        let products

        
        if (filter === "bestsellers") {
            products = await Product.find(query).sort({ sales: -1 }).populate("category", "name");
        } else if (filter === "outofstock") {
            query.stock = 0;
            products = await Product.find(query).populate("category", "name");
        } else {
            products = await Product.find(query).populate("category", "name");
        }

        return res.status(200).json({
            success: true,
            products,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error fetching products",
            error: err.message,
        })
    }
}

export const getProductById = async (req, res) => {
    try {
        const { pid } = req.params;
        const product = await Product.findById(pid).populate("category", "name")

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            })
        }

        return res.status(200).json({
            success: true,
            product,
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error fetching product",
            error: err.message,
        })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { pid } = req.params
        const deletedProduct = await Product.findByIdAndDelete(pid)

        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            })
        }

        return res.status(200).json({
            success: true,
            message: "Product deleted successfully",
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error deleting product",
            error: err.message,
        })
    }
}