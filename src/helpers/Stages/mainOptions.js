const {
    updateStage,
    deleteStage,
} = require("../../database/controllers/stage.controller");
const messages = require("../utils/messages");

async function execute(user, mensagem) {
    if (mensagem === "#") {
        await deleteStage(user);
        return [`${messages.goodbye}`];
    } else if (mensagem === "9") {
        await updateStage(user, "enterName");
        return [`${messages.welcome}`, `${messages.enterName}`];
    } else {
        return [`${messages.invalidOption}`, `${messages.mainOptions}`];
    }
}

exports.execute = execute;
