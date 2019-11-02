const { Client, RichEmbed, Collection } = require("discord.js");
const { config } = require("dotenv");
const { _ } = require("lodash");

const client = new Client({
    disableEveryone: true
});

module.exports = {
    name: "ping",
    aliases: ["latency", "pingpong"],
    category: "info",
    description: "Outputs request latency and API ping",
    usage: "{?ping}",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinged!`);

        msg.edit(`⛳ Pong!
        \n**Latency** ${Math.floor(msg.createdAt - message.createdAt)}ms
        \n**API Latency** ${Math.round(client.ping)}ms`);
    }
}
// module.exports = {
//     name: "ping",
//     aliases: ["latency", "pingpong"],
//     category: "info",
//     description: "Outputs request latency and API ping",
//     usage: "[~!ping]",
//     run: async (client, message, args) => {
//         const msg = message.channel.send(`🏓 Pinged!`).catch(console.log);

//         msg.edit(`⛳ Pong!\n**Latency** ${Math.floor(msg.createdAt - message.createdAt)}ms\n**API Latency** ${Math.round(client.ping)}ms`);
//     }
// }