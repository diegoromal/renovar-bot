const banco = require("../../app/Banco");
const messages = require("../utils/messages");

async function execute(user, mensagem) {
    banco.db[user].cep.number = mensagem;
    const cep = banco.db[user].cep;
    if (mensagem) {
        banco.db[user].stage = "confirmAddress";
        return [
            `Agora informa o complemento: \n\n_Caso não tenha, pressione *[ 0 ]*_`,
        ];
    } else {
        delete banco.db[user];
        return ["Desculpe, não consegui processar sua mensagem."];
    }
}
exports.execute = execute;
