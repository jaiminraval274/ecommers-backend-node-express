const express = require("express");
const { getUsers, createUsers, updateUsers, deleteUsers, loginUsers, getProfile } = require("../controller/user_controller");
const validateToken = require("../middleware/validateToken");
const router = express.Router();

// users Api
router.get("/", getUsers);
router.post("/register", createUsers);
router.post("/login", loginUsers);
router.get("/profile", validateToken, getProfile);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers);


//product Api
router.get("/product", getUsers);
module.exports = router;