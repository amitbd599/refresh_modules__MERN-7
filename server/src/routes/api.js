import express from "express";
import * as UsersController from "../controllers/UsersController.js";
import * as ProductsController from "../controllers/ProductsController.js";
import * as FileUploadController from "../controllers/FileUploadController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";
import upload from "../middlewares/FileUploads.js";

const router = express.Router();

router.post("/register", UsersController.register);
router.post("/login", UsersController.login);
router.get("/logout", AuthMiddleware, UsersController.logout);
router.get("/verify-auth", AuthMiddleware, UsersController.verifyAuth);

// Product routes
router.post(
  "/create-product",
  AuthMiddleware,
  ProductsController.createProduct
);
router.get("/all-product", AuthMiddleware, ProductsController.getAllProduct);
router.delete(
  "/delete-product/:id",
  AuthMiddleware,
  ProductsController.deleteProduct
);

// file routes
router.post(
  "/file-upload",
  AuthMiddleware,
  upload.array("file", 20),
  FileUploadController.fileUpload
);

export default router;
