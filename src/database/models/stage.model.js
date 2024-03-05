const mongoose = require("mongoose");

const stageSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    stage: { type: String, required: true },
});

module.exports = mongoose.model("Stages", stageSchema);
