module.exports = {
    name: "developer",
    aliases: ["dev", "developer", "version", "ver", "botinfo", "binfo"],
    category: "info",
    description: "Provides bot/developer information.",
    usage: "{?developer}",
    run: async (client, message, args) => {
        const ver = (`../package.json/version`)
        message.channel.send(`*Arrowhead Bot* written by Vega Paradox.
                            \n**Version**: ` + "`" + `1.0.0` + "`"
                            + `\n**Prefix**: ` + "`?`"
                            + `\n**Additional**: ` + "`?help`");
    }
}