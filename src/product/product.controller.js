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
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error creating product",
            error: error.message,
        })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { pid } = req.params;
        const { name, description, price, stock, categoryId } = req.body;

        let updatedData = { name, description, price, stock };

        if (categoryId) {
            const category = await Category.findById(categoryId);
            if (!category) {
                return res.status(404).json({
                    success: false,
                    message: "Category not found",
                });
            }
            updatedData.category = category._id;
        }

        const updatedProduct = await Product.findByIdAndUpdate(pid, updatedData, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product: updatedProduct,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error updating product",
            error: error.message,
        });
    }
};