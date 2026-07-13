import { Router } from "express";

import {
    getCart,
    addToCart,
    deleteCart
} from "../controllers/cart.controller.js";

const cartRouter = Router();

cartRouter.get("/", getCart);

cartRouter.post("/", addToCart);

cartRouter.delete("/:id", deleteCart);

export default cartRouter;