let Discord = require('discord.js');

module.exports = {
  name: 'clear',
  aliases: ['cr'],
  ownersOnly: false,
  guildOnly: false,
  requireArgs: false,
  deleteCommand: true,
  cooldown: 10,
  disabled: false,
  messageExecute: async (message, args) => {
  
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("enfin.")
    if(!args[0]) return message.channel.send("0 messages sélectionnés").then(msg => msg.delete({ timeout: 5000 }));
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Nettoyage de ${args[0]} messages.`) .then(msg => msg.delete({ timeout: 5000 }));
    });
  }
};
