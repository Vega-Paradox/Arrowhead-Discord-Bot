const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = {
    name: "setup",
    aliases: ["su", "stup", "modsetup", "walkthrough"],
    category: "tutorials",
    description: "Provides a walkthrough to help a user set up their mods.",
    usage: "{?setup <mod>}",
    run: async (client, message, args) => {
        if (args[1] = "tfar") {
            const tfar = new RichEmbed()
                .setDescription(`TFAR setup walkthrough.`)
                .setFooter(`Next Page (2): References, Moderation`)
                .setColor("#e1a200")
                .setThumbnail("https://cdn.discordapp.com/attachments/629903702534389770/629903871589875727/Arrowhead_White.png")
                .setTitle("**TFAR Setup**")
            message.author.send(tfar)
            message.reply(`sent you the set-up process via direct message!`).then(m => m.delete(5000))
        };

        if (args.length < 1) {
            message.reply(`you didn't specify a mod! Usage: ?setup <mod> (TFAR, EMove, MMenu)`).then(m => m.delete(5000))
        };
    }
}