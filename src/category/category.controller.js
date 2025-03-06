import Category from "../category/category.model.js";

export const createCategory = async (req, res) => {
    try {
        const { name, description } = req.body

        const newCategory = new Category({name, description})

        await newCategory.save()

        return res.status(201).json({
            success: true,
            message: "Category created successfully",
            name: newCategory.name,
            description: newCategory.description,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error creating category",
            error: error.message,
        })
    }
}