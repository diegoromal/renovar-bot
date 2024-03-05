const Correios = require("node-cep-correios");

const correios = new Correios();

async function getCEP(cep) {
    const cepNumber = cep.replace(/\D/g, "");

    if (!/^\d{8}$/.test(cepNumber)) {
        throw new Error("CEP inválido. Deve conter exatamente 8 dígitos.");
    }

    try {
        const response = await correios.consultaCEP({ cep: cepNumber });
        return await response;
    } catch (error) {
        throw new Error(`Informações não encontradas para ${cep}.`);
    }
}

async function getDistrict(cep) {
    const res = await getCEP("81870260");
    return await res.district;
}

module.exports = { getCEP, getDistrict };
