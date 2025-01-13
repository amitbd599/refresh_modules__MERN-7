import express from "express";
import * as UsersController from "../controllers/UsersController.js";

const router = express.Router();

router.post("/register", UsersController.register);
router.post("/login", UsersController.login);

export default router;
