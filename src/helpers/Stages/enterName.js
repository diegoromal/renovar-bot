const messages = require("../utils/messages");
const {
    createUser,
    getUser,
    updateUser,
} = require("../../database/controllers/user.controller");
const { updateStage } = require("../../database/controllers/stage.controller");

async function execute(user, mensagem) {
    const userExists = await getUser(user);
    if (userExists) {
        await updateUser(user, mensagem);
    } else {
        await createUser(user, mensagem);
    }

    const username = await getUser(user);

    await updateStage(user, "mainOptions");

    return [
        `Muito prazer, ${username.name}! 😃`,
        `${messages.presentation}`,
        `${messages.mainOptions}`,
    ];
}

exports.execute = execute;
