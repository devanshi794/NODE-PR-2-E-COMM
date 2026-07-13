import Category from "../models/category.model.js";

// Create Category
export const createCategory = async (req, res) => {
    try {

        const { name } = req.body;

        if (!name || name.trim() === "") {
            return res.status(400).json({
                message: "Category name is required"
            });
        }

        const existCategory = await Category.findOne({ name });

        if (existCategory) {
            return res.status(400).json({
                message: "Category already exists"
            });
        }

        const category = await Category.create({ name });

        return res.status(201).json({
            message: "Category Added Successfully",
            category
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};

// Get All Categories
export const getAllCategory = async (req, res) => {
    try {

        const categories = await Category.find();

        return res.status(200).json(categories);

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};

// Update Category
export const updateCategory = async (req, res) => {
    try {

        const { id } = req.params;
        const { name } = req.body;

        const category = await Category.findByIdAndUpdate(
            id,
            { name },
            { new: true }
        );

        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            });
        }

        return res.status(200).json({
            message: "Category Updated Successfully",
            category
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};

// Delete Category
export const deleteCategory = async (req, res) => {
    try {

        const { id } = req.params;

        const category = await Category.findByIdAndDelete(id);

        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            });
        }

        return res.status(200).json({
            message: "Category Deleted Successfully"
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};