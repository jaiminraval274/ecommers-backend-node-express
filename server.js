const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./Src/middleware/errorHandler");
const connectDB = require("./Src/config/dbConnection.js");//../config/dbConnection



connectDB();
const app = express();
const port = process.env.PORT || 5000;


//routes
app.use(express.json());
app.use("/api/users", require("./Src/routes/user_routes.js"));
app.use("/api/prduct", require("./Src/routes/product_routes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});