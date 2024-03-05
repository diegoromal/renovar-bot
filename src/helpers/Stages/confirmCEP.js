const banco = require("../../app/Banco");
const messages = require("../utils/messages");

const { isServedByRenovar } = require("../utils/districts");

async function execute(user, mensagem) {
    const district = banco.db[user].cep.district;
    if (mensagem === "1") {
        banco.db[user].stage = "hire";

        const isServed = await isServedByRenovar(district);

        if (isServed && isServed.chargeSittingFee) {
            return [
                `Boa notícia ${banco.db[user].name}, ${messages.isServed}`,
                `Os valores são: \n\n* Pequena: R$${isServed.small},00 \n* Grande: R$${isServed.large},00 \n\n_Para este bairro é cobrado taxa de R$150,00 por conta do *Estar*, se necessário._`,
                `${messages.hire}`,
            ];
        } else if (isServed) {
            return [
                `Boa notícia ${banco.db[user].name}, ${messages.isServed}`,
                `Os valores são: \n\nPequena: R$${isServed.small},00 \nGrande: R$${isServed.large},00`,
                `${messages.hire}`,
            ];
        } else {
            banco.db[user].stage = "confirmCEP";
            return [
                "Desculpe. Infelizmente não conseguiremos atender seu bairro.",
                `${messages.confirmCEP} *${district}*`,
                `${messages.confirmOption}`,
            ];
        }
    } else if (mensagem === "9") {
        banco.db[user].stage = "consultaCEP";
        return [
            `👇 ${banco.db[user].name}, ${messages.salutationCEP}`,
            `${messages.orderCEP}`,
        ];
    } else if (mensagem === "#") {
        delete banco.db[user];
        return [`${messages.goodbye}`];
    } else {
        return [
            `${messages.confirmCEP} *${district}*`,
            `${messages.confirmOption}`,
        ];
    }
}
exports.execute = execute;
