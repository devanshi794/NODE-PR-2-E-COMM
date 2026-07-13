import { Router } from "express";
import { login, profile, register } from "../controllers/user.controller.js";
import { verifyToken, verifyUser } from "../middlewares/auth.middleware.js";

const userRouter = Router();

// register
userRouter.post('/register', register);

// login
userRouter.post('/login', login);

userRouter.get('/profile/:id', verifyToken, verifyUser, profile);



export default userRouter;