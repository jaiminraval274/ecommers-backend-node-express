const express = require("express");
const { getProduct, createProduct } = require("../controller/product_controller");
const validateToken = require("../middleware/validateToken");
const router = express.Router();

//product Api
router.get("/",/*  validateToken, */ getProduct);
router.post("/upload",/*  validateToken, */ createProduct);
module.exports = router;