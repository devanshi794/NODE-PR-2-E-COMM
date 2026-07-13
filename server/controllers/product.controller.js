import Product from "../models/product.model.js";

// Create Product
export const createProduct = async (req, res) => {
    try {

        const { name, price, description, image, category } = req.body;

        if (!name || !price || !description || !image || !category) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const product = await Product.create({
            name,
            price,
            description,
            image,
            category
        });

        return res.status(201).json({
            message: "Product Added Successfully",
            product
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};

// Get All Products
export const getAllProducts = async (req, res) => {
    try {

        const products = await Product.find().populate("category");

        return res.status(200).json(products);

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};

// Get Product By Id
export const getProductById = async (req, res) => {
    try {

        const { id } = req.params;

        const product = await Product.findById(id).populate("category");

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        return res.status(200).json(product);

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};

// Update Product
export const updateProduct = async (req, res) => {
    try {

        const { id } = req.params;

        const product = await Product.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        return res.status(200).json({
            message: "Product Updated Successfully",
            product
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};

// Delete Product
export const deleteProduct = async (req, res) => {
    try {

        const { id } = req.params;

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        return res.status(200).json({
            message: "Product Deleted Successfully"
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};