const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    isClosed: { type: Boolean, default: false },
    address: { type: Object, default: null },
});

module.exports = mongoose.model("Users", usersSchema);
