let stages = {
    welcome: {
        descricao: "Boas Vindas",
        obj: require("../helpers/Stages/welcome"),
    },
    option: {
        descricao: "Opções Menu Principal",
        obj: require("../helpers/Stages/mainOptions"),
    },
    mainOptions: {
        descricao: "Opções Menu Principal",
        obj: require("../helpers/Stages/mainOptions"),
    },
    consultaCEP: {
        descricao: "Consultar CEP",
        obj: require("../helpers/Stages/consultaCEP"),
    },
    confirmCEP: {
        descricao: "Confirmar se bairro está correto",
        obj: require("../helpers/Stages/confirmCEP"),
    },
    enterName: {
        descricao: "Coletar nome do cliente",
        obj: require("../helpers/Stages/enterName"),
    },
    hire: {
        descricao: "Validar dados de entrega",
        obj: require("../helpers/Stages/hire"),
    },
    confirmComplement: {
        descricao: "Validar dados de entrega",
        obj: require("../helpers/Stages/confirmComplement"),
    },
    confirmAddress: {
        descricao: "Validar dados de entrega",
        obj: require("../helpers/Stages/confirmAddress"),
    },

    /*
    2: {
        descricao: "Resumo",
        obj: require("../helpers/Stages/2"),
    },
    3: {
        descricao: "Endereço",
        obj: require("../helpers/Stages/3"),
    },
    4: {
        descricao: "Enceramento",
        obj: require("../helpers/Stages/4"),
    },
    5: {
        descricao: "Forma de Pagamento",
        obj: require("../helpers/Stages/5"),
    },
    */
};

exports.step = stages;
