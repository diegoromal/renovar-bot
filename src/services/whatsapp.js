const { Client, MessageMedia, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const { resolve } = require("path");

const client = new Client({
    authStrategy: new LocalAuth({
        clientId: "renovar-bot",
        dataPath: resolve(__dirname, "..", "data"),
    }),
    puppeteer: {
        headless: true,
        args: ["--no-sandbox"],
    },
});

client.on("qr", async (qr) => qrcode.generate(qr, { small: true }));
client.on("authenticated", () => console.log("WhatsApp authenticated."));
client.on("auth_failure", () => console.log("WhatsApp authentication failed."));
client.on("disconnected", () => console.log("WhatsApp lost connection."));
client.on("ready", async () => {
    await client.sendMessage(
        "554197035511@c.us",
        `[${client.info.pushname}]\n\n[✅] WhatsApp Online\n\n[🤖] Renovar Bot`
    );

    console.log("WhatsApp bot successfully connected!");
});

module.exports = { client, MessageMedia };
