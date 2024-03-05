const Users = require("../../database/models/user.model");

async function createUser(username, user) {
    const userExists = await Users.findOne({ username: username });
    if (!userExists) {
        const newUser = new Users({ username: username, name: user });
        newUser.save();
        return;
    }
    return;
}

async function getUser(username) {
    const userExists = await Users.findOne({ username: username });
    if (userExists) {
        return userExists;
    }
    return false;
}

async function updateUser(username, name, isClosed = false, cep = undefined) {
    const userExists = await Users.findOne({ username: username });
    if (userExists) {
        await userExists.updateOne({
            name: name,
            isClosed: isClosed,
            cep: cep,
        });
    }
    return;
}

module.exports = { createUser, getUser, updateUser };
