import Category from "../category/category.model.js"
import Product from "../product/product.model.js"

export const createCategory = async (req, res) => {
    try {
        const { name, description } = req.body

        const newCategory = new Category({ name, description })

        await newCategory.save()

        return res.status(201).json({
            success: true,
            message: "Category created successfully",
            name: newCategory.name,
            description: newCategory.description,
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error creating category",
            error: err.message,
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
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error getting categories",
            error: err.message
        })
    }
}

export const updateCategory = async (req, res) => {
    try {
        const { cid } = req.params
        const { name, description } = req.body

        const categoryToUpdate = await Category.findByIdAndUpdate(cid, { name, description }, { new: true })

        if (!categoryToUpdate) {
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


    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error updating category",
            error: err.message
        })
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const { cid } = req.params

        const category = await Category.findByIdAndDelete(cid)

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            })
        }

        if(category.name === "default"){
            return res.status(400).json({
                success: false,
                message: "You cannot delete the default category"
            })
        }

        let defaultCategory = await Category.findOne({ name: "default" })

        if(!defaultCategory){
            defaultCategory = new Category({
                name: "default",
                description: "default category"
            })
            await defaultCategory.save()
        }
        
        await Product.updateMany({ category: category._id }, { $set: { category: defaultCategory._id } })  

        await Category.findByIdAndDelete(cid)

        return res.status(200).json({
            success: true,
            message: "Category deleted successfully"
        })


    } catch (err) {
        return res.status(500).json({
            message: "Error deleting category",
            error: err.message
        })
    }
}