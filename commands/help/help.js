const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = {
    name: "help",
    aliases: ["h", "cmd", "commands", "bothelp"],
    category: "help",
    description: "Provides bot commands and extras.",
    usage: "{?help <page#>}",
    run: async (client, message, args) => {
        if (args[1] = "1") {
            const pg1 = new RichEmbed()
                .setDescription(`Current Page (1): Tutorials, Roles`)
                .setFooter(`Next Page (2): References, Moderation`)
                .setColor("#e1a200")
                .setThumbnail("https://cdn.discordapp.com/attachments/629903702534389770/629903871589875727/Arrowhead_White.png")
                .setTitle("**Arrowhead Bot Commands**")
                .addField("*Tutorials*", `<?setup TFAR> - TFAR setup process\n<?setup EMove> - Enh Movement setup process\n<?setup MMenu> - Med Menu setup process`, true)
                .addField("*Roles*", `<?role rifleman> - Rifleman info\n<?role autorifleman> - Autorifleman info\n<?role marksman> - Marksman info\n<?role medic> - Medic info\n<?role pilot> - Pilot info\n<?role demo> - Demolition info\n<?role grenadier> - Grenadier info\n<?role at> - Anti-Tank info\n<?role aa> - Anti-Air info\n<?role engineer> - Engineer  info`)
            message.author.send(pg1)
            message.reply(`sent you a list of commands!`).then(m => m.delete(2500))
        };

        if (args.length < 0) {
            message.author.send(pg1)
            message.reply(`sent you a list of commands!`).then(m => m.delete(2500))
        };
    }
}