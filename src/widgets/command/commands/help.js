let Discord = require("discord.js");

module.exports = {
    name: 'help',
    aliases: ['aide'],
    ownersOnly: false,
    guildOnly: false,
    requireArgs: false,
    deleteCommand: false,
    cooldown: 10,
    disabled: false,
    messageExecute: async (message, args) => {

    let helpEmbed = new Discord.MessageEmbed()
    .setDescription("Menu d'aide")
    .setColor("#32ca55")
    .addField("serverinfo", "retrouver les infos du serveur y compris votre première connexion.")
    .addField("botinfo", "retrouver les infos du bot")
    .addField("report", "signaler un utilisateur au staff. Utilisation: !report <@utilisateur> <raison>");
  
    message.channel.send(helpEmbed);
    message.react("👍");
  
    if(message.member.hasPermission("MANAGE_MESSAGES")){
    let modEmbed = new Discord.MessageEmbed()
    .setDescription("Commandes de modération")
    .setColor("#e46813")
    .addField("kick", "expulser un membre du serveur. Utilisation: !kick <@utilisateur> <raison>")
    .addField("mute", "muter dans tous les channels un membre. Utilisation: !mute <@utilisateur> <1s/m/h/d>")
    .addField("warn", "mettre un avertissement à un membre. Utilisation: !warn <@utilisateur> <raison>")
    .addField("warnlevel", "connaitre le nombre d'avertissements d'un membre. Utilisation: !warnlevel <@utilisateur>")
    .addField("ban", "enlever définitivement un membre du serveur. Utilisation: !ban <@utilisateur> <raison>")
    .addField("addrole", "ajouter un role d'un membre. Utilisation: !addrole <@utilisateur> <role>")
    .addField("rmrole", "enlever un role d'un membre. Utilisation: !rmrole <@utilisateur> <role>");
  
    try{
      await message.author.send(modEmbed);
      message.react("👍");
    }catch(e){
      message.reply("Vos DM sont bloqués, je ne peux pas vous envoyer les commandes de modération.");
    }
  }
}
};
