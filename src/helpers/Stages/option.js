const banco = require("../../app/Banco");
const messages = require("../utils/messages");

async function execute(user, mensagem) {
    if (mensagem === "1") {
        banco.db[user].stage = "consultaCEP";
        return [
            `👇 ${banco.db[user].name}, ${messages.salutationCEP}`,
            `${messages.orderCEP}`,
        ];
    } else if (mensagem === "9") {
        banco.db[user].stage = "enterName";
        return [`${messages.welcome}`, `${messages.enterName}`];
    } else if (mensagem === "#") {
        delete banco.db[user];
        return [`${messages.goodbye}`];
    } else {
        return [`${messages.invalidOption}`, `${messages.mainMenu}`];
    }
}

exports.execute = execute;
