
const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "userinfo",
    aliases: ["uinfo", "userinfo", "whois", "who"],
    category: "info",
    description: "Returns information on a specific user.",
    usage: "<?userinfo [user]>",
    run: async (client, message, args) => {
        const member = getMember(message, args.join(" "));

        // Member variables
        const joined = formatDate(member.joinedAt);
        const roles = member.roles
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'None';

        // User variables
        const created = formatDate(member.user.createdAt);

        if(member.displayName === member.user.username) {
            var title = `${member.user.username}`
        } else { 
            var title = `${member.user.username} *(${member.displayName}*)`
        }
        const embed = new RichEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL)
            .setThumbnail(member.user.displayAvatarURL)
            .setColor("#e1a200")
            .setTitle(title)

            .addField(`> *Member Information*`, `**> Display Name** - ${member.displayName}
            **> Joined Server** - ${joined}
            **> Roles** - ${roles}`, true)

            .addField(`> *User Information*`, `**> ID** - ${member.user.id}
            **> Username** - ${member.user.username}
            **> Tag** - ${member.user.tag}
            **> Account Created** - ${created}`, true)
            
            .setTimestamp()

        if (member.user.presence.game) 
            embed.addField('> *Status Information*', `**> Current Status**` + `- ${member.user.presence.game.name}`);
        message.channel.send(embed);
    }
}