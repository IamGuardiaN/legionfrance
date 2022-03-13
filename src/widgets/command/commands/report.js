let Discord = require('discord.js');

module.exports = {
  name: 'report',
  aliases: ['rep'],
  ownersOnly: false,
  guildOnly: false,
  requireArgs: false,
  deleteCommand: false,
  cooldown: 10,
  disabled: false,
  messageExecute: async (message, args) => {
  
  //!report @utilisateur raison

  if(args[0] == "help"){
    message.reply("Utilisation: !report <@utilisateur> <raison>");
    return;
  }
    
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Je n'ai pas trouvé l'utilisateur.");
  let rreason = args.join(" ").slice(22);

  let reportEmbed = new Discord.MessageEmbed()
  .setDescription("Signalements")
  .setColor("#ffcc00")
  .addField("Utilisateur signalé", `${rUser} avec l'ID: ${rUser.id}`)
  .addField("Signalé par", `${message.author} avec l'ID ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Fait le", message.createdAt)
  .addField("Raison", rreason);

  let reportschannel = member.guild.channels.cache.get('438313494614638592') // signalements channel id
  if(!reportschannel) return message.channel.send("Je n'ai pas trouvé le channel des signalements.")

  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);
    }
};

module.exports.help = {
  name:"report"
}
