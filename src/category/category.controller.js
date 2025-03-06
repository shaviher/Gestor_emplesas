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

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find()

        return res.status(200).json({
            success: true,
            categories
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error getting categories",
            error: error.message
        })
    }
}

export  const updateCategory = async (req, res) => {
    try{
        const { cid } = req.params
        const { name, description } = req.body

        const categoryToUpdate = await Category.findByIdAndUpdate(cid, { name, description }, { new: true })

        if(!categoryToUpdate){
            return res.status(404).json({
                success: false,
                message: "Category not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Category updated successfully",
            name: categoryToUpdate.name,
            description: categoryToUpdate.description
        })


    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Error updating category",
            error: error.message
        })    
    }
}