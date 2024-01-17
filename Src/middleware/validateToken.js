const asyncHandler = require("express-async-handler");
const { Log } = require("../constants/constant");

const jwt = require("jsonwebtoken");


const validateToken = asyncHandler(async (req, res, next) => {

    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (error, decoded) => {
            if (error) {
                Log('token error', 'User is not authorized');
                throw new Error(`User is not authorized`);
            }

            console.log(decoded);
            req.user = decoded.user;
            next();
        });

        if (!token) {
            res.status(200).json({ statuscode: 401, message: "Token require" });
        }

    }
});


module.exports = validateToken;