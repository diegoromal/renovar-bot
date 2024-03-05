const banco = require("../../app/Banco");
const messages = require("../utils/messages");

async function execute(user, mensagem) {
    if (mensagem === "0") {
        banco.db[user].cep.complement = "Sem complemento";
    } else {
        banco.db[user].cep.complement = mensagem;
    }
    const cep = banco.db[user].cep;
    if (mensagem) {
        banco.db[user].stage = "welcome";
        return [
            `👇 Certo ${banco.db[user].name}, vamos confirmar alguns dados de entrega.`,
            `Você informou o seguinte endereço: \n\n${cep.address}, ${cep.number}, ${cep.complement} - ${cep.district} - ${cep.city} - ${cep.state}`,
            `${messages.confirmOption}`,
        ];
    } else {
        delete banco.db[user];
        return ["Desculpe, não consegui processar sua mensagem."];
    }
}
exports.execute = execute;
