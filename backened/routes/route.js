import express from "express";
import { loginController, signUpController } from "../controller/authController/AuthController.js";
import { displayController } from "../controller/displayController/DisplayController.js";
import authenticationMiddleware from "../midddleware/authenticationMiddleware.js";

const router = express.Router();

router.post('/login',loginController);
router.post('/signup',signUpController)

router.use(authenticationMiddleware);

router.get('/',displayController);

export default router;