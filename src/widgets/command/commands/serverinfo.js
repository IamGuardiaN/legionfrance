let Discord = require('discord.js');

module.exports = {
  name: 'serverinfo',
  aliases: ['si'],
  ownersOnly: false,
  guildOnly: false,
  requireArgs: false,
  deleteCommand: false,
  cooldown: 10,
  disabled: false,
  messageExecute: async (message, args) => {
  
    //!serverinfo

  if(args[0] == "help"){
    message.reply("Utilisation: !serverinfo");
    return;
  }
    
    let sicon = message.guild.iconURL;
    let serverEmbed = new Discord.MessageEmbed()
    .setDescription("Informations du serveur")
    .setColor("#0097d9")
    .setThumbnail(sicon)
    .addField("Nom du serveur", message.guild.name)
    .addField("Créé le", message.guild.createdAt)
    .addField("Rejoins le", message.member.joinedAt)
    .addField("Membres", message.guild.memberCount);

    message.channel.send(serverEmbed);
    }
};

module.exports.help = {
  name:"serverinfo"
}
