let Discord = require('discord.js');

module.exports = {
  name: 'botinfo',
  aliases: ['bi'],
  ownersOnly: false,
  guildOnly: false,
  requireArgs: false,
  deleteCommand: false,
  cooldown: 10,
  disabled: false,
  messageExecute: async (message, args) => {
  
    //!botinfo

  if(args[0] == "help"){
    message.reply("Utilisation: !botinfo");
    return;
  }
    
    let bicon = message.client.user.displayAvatarURL();
    let botEmbed = new Discord.MessageEmbed()
    .setDescription("Informations du bot")
    .setColor("#0097d9")
    .setThumbnail(bicon)
    .addField("Nom du bot", message.client.user.username)
    .addField("Créé le", message.client.user.createdAt);
    
    message.channel.send(botEmbed);
    }
};

module.exports.help = {
  name:"botinfo"
}
