const asyncHandler = require("express-async-handler");
const { Log } = require("../constants/constant");
const userModel = require("../models/userModel");
const validateToken = require("../middleware/validateToken");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("mongoose");


//@desc Get all user
//@route GET /api/users
//@access public

const getUsers = asyncHandler(async (req, res) => {

    // const collection = await db.collection("users");

    // try {
    //     const data = await collection.find({}).toArray();
    //     console.log(data);
    //     res.status(200).json({
    //         statuscode: 200, message: "get all users", data: data,
    //     });
    // }
    // catch (err) {
    //     console.log(err);
    // }
    res.status(200).json({
        statuscode: 200, message: "get all users", data: [],
    });

});

//@desc create User
//@route POST /api/users/register
//@access public

const createUsers = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(200).json({ statuscode: 401, message: "All feild required" });
        throw new Error("All feild required");
    }
    const userExits = await userModel.findOne({ email });
    Log('User Email', email);
    if (userExits) {
        res.status(200).json({ statuscode: 401, message: "User already exits" });
        throw new Error("User already exits");
    }
    //Hash Password
    const hashPassword = await bcrypt.hash(password, 10);
    Log('Request Password', hashPassword);

    const user = await userModel.create({ name, email, password: hashPassword });
    //Log('user registered', user);
    if (user) {
        res.status(200).json({
            statuscode: 200, message: "User registered successfully", data: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } else {
        res.status(200).json({ statuscode: 401, message: "User already exits" });
    }

});


//@desc login User
//@route POST /api/users/login
//@access public

const loginUsers = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(200).json({ statuscode: 401, message: "All feild required" });
    } else {
        const user = await userModel.findOne({ email });
        //compare password
        if (user && (await bcrypt.compare(password, user.password))) {
            const accessToken = jwt.sign(
                {
                    user: {
                        username: user.name,
                        email: user.email,
                        id: user.id,
                    },

                }, process.env.ACCESS_TOKEN_KEY, { expiresIn: "1000m" });
            res.status(200).json({ statuscode: 200, message: "User logged in successfully", token: accessToken });
        } else {
            res.status(200).json({ statuscode: 401, message: "Invalid email or password" });
        }
    }
});


//@desc get User profile
//@route GET /api/users/profile
//@access private

const getProfile = asyncHandler(async (req, res) => {
    //const user = userModel.findOne({});
    res.status(200).json({ statuscode: 200, message: "User profile fetch successfully", data: req.user });
});


//@desc Update User
//@route PUT /api/users/profile
//@access public

const updateUsers = asyncHandler(async (req, res) => {
    res.status(200).json({ statuscode: 200, message: "User Updated successfully" });
});


//@desc Delete User
//@route DELETE /api/users
//@access public

const deleteUsers = asyncHandler(async (req, res) => {
    res.status(200).json({ statuscode: 200, message: "User Deleted successfully" });
});


module.exports = { getUsers, createUsers, updateUsers, deleteUsers, loginUsers, getProfile };