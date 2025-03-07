import Category from "../src/category/category.model.js"

export const createDefaultCategory = async () => {
    const defaultCategory = await Category.findOne({ name: "default" })
    
    if (!defaultCategory) {
        const newCategory = new Category({
            name: "default",
            description: "default category",
        });
        
        await newCategory.save()

    }
}