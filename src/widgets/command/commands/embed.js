
module.exports = {
    name: 'embed',
    aliases: ['e', 'emb'],
    ownersOnly: false,
    guildOnly: false,
    requireArgs: false,
    deleteCommand: false,
    cooldown: 10,
    disabled: false,
    messageExecute: async (message, args) =>{
    let Discord = require('discord.js');
    let botEmbed = new Discord.MessageEmbed()
      .setColor("#0097d9")
      .setDescription(args.join(" "))  
      message.delete().catch(O_o=>{});
      return message.channel.send(botEmbed);
    }
};