const geolib = require("geolib");

async function getDistance(coordOne, coordTwo) {
    try {
        const distance = await geolib.getDistance(coordOne, coordTwo);
        return { distance: distance };
    } catch (error) {
        throw new Error(`Distância não encontrada. ${error.message}`);
    }
}

module.exports = { getDistance };
