const mongoose = require("mongoose");
const dotenv = require("dotenv");

mongoose.Promise = global.Promise;
dotenv.config();

const { DB_URI } = process.env;

mongoose
    .connect(DB_URI)
    .then(() => console.log("MongoDB is connected"))
    .catch((err) => console.log(err));
