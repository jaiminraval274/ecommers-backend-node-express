const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { Log } = require("../constants/constant");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_URI);
        Log('DB connected host', connect.connection.host);
        Log('DB connected name', connect.connection.name);
    } catch (error) {
        Log('DB connection Error', error);
        process.exit(1);
    }


}
module.exports = connectDB;