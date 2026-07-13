import { Router } from "express";

import {
    createCategory,
    getAllCategory,
    updateCategory,
    deleteCategory,
} from "../controllers/category.controller.js";

import {
    verifyToken,
    adminAuth
} from "../middlewares/auth.middleware.js";

const categoryRouter = Router();

// Anyone can view categories
categoryRouter.get("/", getAllCategory);

// Only Admin
categoryRouter.post("/", verifyToken, adminAuth, createCategory);

categoryRouter.put("/:id", verifyToken, adminAuth, updateCategory);

categoryRouter.delete("/:id", verifyToken, adminAuth, deleteCategory);

export default categoryRouter;