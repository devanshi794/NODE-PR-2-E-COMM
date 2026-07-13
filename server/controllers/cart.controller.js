import Cart from "../models/cart.model.js";

// Get All Cart Items
export const getCart = async (req, res) => {

    try {

        const cart = await Cart.find()
            .populate("product")
            .populate("user");

        return res.status(200).json(cart);

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};

// Add To Cart
export const addToCart = async (req, res) => {

    try {

        const { product, user, quantity } = req.body;

        if (!product || !user) {

            return res.status(400).json({
                message: "All fields are required"
            });

        }

        const cart = await Cart.create({
            product,
            user,
            quantity
        });

        return res.status(201).json(cart);

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};

// Delete Cart Item
export const deleteCart = async (req, res) => {

    try {

        const { id } = req.params;

        const cart = await Cart.findByIdAndDelete(id);

        if (!cart) {

            return res.status(404).json({
                message: "Cart Item Not Found"
            });

        }

        return res.status(200).json({
            message: "Cart Item Deleted Successfully"
        });

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};