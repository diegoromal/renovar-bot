const { client } = require("./services/whatsapp");
const banco = require("./app/Banco");
const stages = require("./app/Stages");
const { sendMessage } = require("./app/sendMessage");
const {
    createStage,
    getStages,
} = require("./database/controllers/stage.controller");
const { getUser } = require("./database/controllers/user.controller");

const { telegram } = require("./services/telegram");

require("./database/config");

client.on("call", async (call) => {
    if (call) {
        const element =
            "⚠️ Desculpe, somente mensagens de texto são aceitas por aqui!";
        await call.reject();
        await client.sendMessage(call.from, element);
        return;
    }
});

client.on("message", async (message) => {
    const chat = await message.getChat();
    if (chat.isGroup) {
        const element =
            "⚠️ Desculpe, somente mensagens diretas são aceitas por aqui, grupos não são monitorados!";
        await message.reply(element);
        return;
    }
    if (message.hasMedia || message.type === "ptt") {
        const element =
            "⚠️ Desculpe, somente mensagens de texto são aceitas por aqui!";
        await message.reply(element);
        return;
    }
    const userStage = await stage(message.from);
    // console.log(userStage);
    let resp = await stages.step[userStage].obj.execute(
        message.from,
        message.body
    );
    for (let index = 0; index < resp.length; index++) {
        const element = resp[index];
        await sendMessage(message, element);
        // await chat.sendStateTyping();
        // await client.sendMessage(message.from, element);
    }
});

// telegram
// Manipulador de botões
telegram.on("text", async (ctx) => {
    const userId = ctx.from.id;
    const userStage = await stage(userId);
    console.log(ctx);
    // let resp = await stages.step[userStage].obj.execute(
    //     message.from,
    //     message.body
    // );
    // for (let index = 0; index < resp.length; index++) {
    //     const element = resp[index];
    //     await sendMessage(message, element);
    // }

    // if (currentState) {
    //     switch (currentState.menu) {
    //         case "main":
    //             handleMainMenu(ctx.message.text, ctx);
    //             break;
    //         case "submenu1":
    //             handleSubmenu1(ctx.message.text, ctx);
    //             break;
    //         case "submenu2":
    //             handleSubmenu2(ctx.message.text, ctx);
    //             break;
    //         // Adicione casos para outros submenus conforme necessário
    //         default:
    //             ctx.reply("Opção inválida.");
    //             break;
    //     }
    // } else {
    //     ctx.reply("Por favor, inicie o bot usando /start ou /menu.");
    // }
});

// function getStage(user) {
//     if (banco.db[user]) {
//         //Se existir esse numero no banco de dados
//         return banco.db[user].stage;
//     } else {
//         //Se for a primeira vez que entra e contato
//         banco.db[user] = {
//             stage: "welcome",
//             itens: [],
//         };
//         return banco.db[user].stage;
//     }
// }

async function stage(user) {
    const stage = await getStages(user);
    if (stage) {
        return stage.stage;
    } else {
        await createStage(user, "welcome");
        return "welcome";
    }
}

client.initialize();
// client.on("message_create");
