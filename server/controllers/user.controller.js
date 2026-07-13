import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        if (!email || !password || !name) {
            return res.status(400).json({ message: "All field required." });
        }

        const existUser = await User.findOne({ email });

        if (existUser) {
            return res.status(400).json({ message: "User already exist." });
        }

        if (password != confirmPassword) {
            return res.status(400).json({ message: "Password and confirm password Not Match." });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const user = await User.create({ ...req.body, password: hashPassword });

        return res.status(200).json({ message: "Register successfully", user });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All field are required." });
        }

        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ message: "User not exists." });

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) return res.status(400).json({ message: "Wrong Password." });

        const payload = {
            id: user.id,
            name: user.name,
            role: user.role
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

        return res.status(200).json({
            message: "Login Success.",
            userId: user.id,
            name: user.name,
            role: user.role,
            token
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const profile = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id);

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}