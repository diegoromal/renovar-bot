const banco = require("../../app/Banco");
const messages = require("../utils/messages");

async function execute(user, mensagem) {
    const cep = banco.db[user].cep;
    if (mensagem === "1") {
        banco.db[user].stage = "confirmComplement";
        return [
            `Ótimo, então informa pra mim o número do prédio ou residência:`,
        ];
    } else if (mensagem === "9") {
        banco.db[user].stage = "confirmCEP";
        return [
            `${messages.confirmCEP} *${cep.district}*`,
            `${messages.confirmOption}`,
        ];
    } else if (mensagem === "#") {
        delete banco.db[user];
        return messages.goodbye;
    } else {
        return [
            `${messages.confirmCEP} *${district}*`,
            `${messages.confirmOption}`,
        ];
    }
}
exports.execute = execute;
