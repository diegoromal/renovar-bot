const districts = [
    {
        district: "Pinheirinho",
        small: 270,
        large: 300,
        chargeSittingFee: false,
    },
    {
        district: "Capão Raso",
        small: 270,
        large: 320,
        chargeSittingFee: false,
    },
    {
        district: "Batel",
        small: 360,
        large: 400,
        chargeSittingFee: true,
    },
];

async function isServedByRenovar(districtName) {
    const foundDistrict = districts.find(
        (district) => district.district === districtName
    );
    return foundDistrict || false;
}

module.exports = { isServedByRenovar };
