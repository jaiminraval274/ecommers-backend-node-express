const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        require: [true, "Please add productName"],
    },
    brandName: {
        type: String,
        require: [true, "Please add brandName"],
    },
    category: {
        type: String,
        require: [true, "Please add category"],
    },
    review: {
        type: String,
        require: [true, "Please add review"],
    },
    size: {
        type: String,
        require: [true, "Please add size"],
    },
    productImage: {
        type: String,
        require: [true, "Please add productName"],
    },
    description: {
        type: String,
        require: [true, "Please add description"],
    },
    price: {
        type: String,
        require: [true, "Please add price"],
    },
    isAvailable: {
        type: Boolean,
        require: [true, "Please add isAvailable"],
    },
},
    {
        timestamps: true,
    });

module.exports = mongoose.model("products", productSchema);