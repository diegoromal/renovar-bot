const messages = require("../utils/messages");
const { updateStage } = require("../../database/controllers/stage.controller");
const { getUser } = require("../../database/controllers/user.controller");

async function execute(user, mensagem) {
    const userExists = await getUser(user);

    if (userExists) {
        await updateStage(user, "mainOptions");
        return [
            `Que prazer em falar contigo novamente ${userExists.name} 😃`,
            `${messages.presentation}`,
            `${messages.mainOptions}`,
        ];
    } else {
        await updateStage(user, "enterName");
        return [`${messages.welcome}`, `${messages.enterName}`];
    }
}

exports.execute = execute;
