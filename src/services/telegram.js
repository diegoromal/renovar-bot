const { Telegraf } = require("telegraf");

const telegram = new Telegraf("6730213268:AAHa3RmOBmGmdnark9Z-9fIXy2_zajlm7Mw");

telegram.on("text", async (ctx) => {
    const userId = ctx.from.id;
    const userStage = await stage(userId);
    console.log(ctx);
});

// module.exports = { telegram };
