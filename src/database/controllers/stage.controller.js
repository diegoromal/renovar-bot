const Stages = require("../../database/models/stage.model");

async function createStage(username, stage) {
    const stageExists = await Stages.findOne({ username: username });
    if (!stageExists) {
        const newStage = new Stages({ username: username, stage: stage });
        newStage.save();
    }
    return;
}

async function getStages(username) {
    const stageExists = await Stages.findOne({ username: username });
    if (stageExists) {
        return stageExists;
    }
    return false;
}

async function updateStage(username, stage) {
    const stageExists = await Stages.findOne({ username: username });
    if (stageExists) {
        await stageExists.updateOne({ stage: stage });
    }
    return;
}

async function deleteStage(username) {
    const stageExists = await Stages.findOne({ username: username });
    if (stageExists) {
        await stageExists.deleteOne();
    }
    return;
}

module.exports = { createStage, getStages, updateStage, deleteStage };
