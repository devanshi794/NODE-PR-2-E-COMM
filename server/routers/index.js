import { Router } from "express";
import userRouter from "./user.route.js";
import categoryRouter from "./category.route.js";
import productRouter from "./product.route.js";
import cartRouter from "./cart.route.js";

const router = Router();

router.use("/user", userRouter);

// Category Routes
router.use("/category", categoryRouter);

// Product Routes
router.use("/product", productRouter);

// Cart Routes
router.use("/cart", cartRouter);

export default router;