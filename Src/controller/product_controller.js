const asyncHandler = require("express-async-handler");
const product = require("../models/productModel");
const validateToken = require("../middleware/validateToken");
const fileUpload = require('express-fileupload');
const fs = require("fs");
const db = require("mongoose");



//@desc Get all product
//@route GET /api/product
//@access private

const getProduct = asyncHandler(async (req, res) => {
    res.status(200).json({
        statuscode: 200, message: "get all product", data: [],
    });
});





//@desc Uploade all product
//@route POST /api/product
//@access private

const createProduct = asyncHandler(async (req, res) => {
    const filePath = "/Users/3rd-m2-macmini-03/Documents/nodeJs-Project/ecommers-backend/";

    // Get the file that was set to our field named "image"
    const { image } = req.files;
    console.log(image.name);
    // If no image submitted, exit
    // if (!image) return res.sendStatus(400);

    // If does not have image mime type prevent from uploading
    //if (/^image/.test(image.mimetype)) return res.sendStatus(400);

    // Move the uploaded image to our upload folder
    //image.mv(filePath + '/upload/' + image.name);
    res.status(200).json({
        statuscode: 200, message: "get all product", data: [],
    });
});

module.exports = { getProduct, createProduct };