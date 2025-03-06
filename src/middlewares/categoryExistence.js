import Category from "../category/category.model.js"

export const checkCategoryExistence = async (req, res, next) => {
    const { name } = req.body;

    const existingCategory = await Category.findOne({ name })
    if (existingCategory) {
        return res.status(400).json({
            success: false,
            message: "Category already exists"
        })
    }

    next()
}
