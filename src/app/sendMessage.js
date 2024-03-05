const { client } = require("../services/whatsapp");

async function sendMessage(message, element, delay = 1000) {
    const chat = await message.getChat();

    await chat.sendStateTyping();

    await new Promise((resolve) => setTimeout(resolve, delay));

    await client.sendMessage(message.from, element);
}

module.exports = { sendMessage };
