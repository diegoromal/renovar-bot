const banco = require("../../app/Banco");
const { deleteStage } = require("../../database/controllers/stage.controller");
const messages = require("../utils/messages");

const Correios = require("node-cep-correios");

const correios = new Correios();

async function execute(user, mensagem) {
    if (mensagem === "9") {
        await updateStage(user, "option");
        return messages.welcome;
    }

    if (mensagem === "#") {
        await deleteStage(user);
        return messages.goodbye;
    }

    const cepNumber = mensagem.replace(/\D/g, "");

    if (!/^\d{8}$/.test(cepNumber)) {
        await updateStage(user, "consultaCEP");
        return [`${messages.invalidCEP}`, `${messages.orderCEP}`];
    }

    try {
        await updateStage(user, "confirmCEP");
        const data = await correios.consultaCEP({ cep: cepNumber });
        banco.db[user].cep = data;
        return [
            `${messages.confirmCEP} *${data.district}*`,
            `${messages.confirmOption}`,
        ];
    } catch (error) {
        await updateStage(user, "consultaCEP");
        return [`${messages.sorryCEP}`, `${messages.orderCEP}`];
    }
}
exports.execute = execute;
