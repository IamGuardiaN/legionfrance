module.exports = {
    name: 'embedrules',
    aliases: ['er', 'embrul'],
    ownersOnly: false,
    guildOnly: false,
    requireArgs: false,
    deleteCommand: false,
    cooldown: 10,
    disabled: false,
    messageExecute: async (message, args) =>{
    let Discord = require('discord.js');
    let botrulesEmbed = new Discord.MessageEmbed()
      .setColor("#0097d9")
      .setAuthor("INSTINCT ESPORT", "https://pbs.twimg.com/profile_images/1047617625944182784/01233MlA_400x400.jpg")
      .setTitle("RÈGLEMENT")
      .setDescription("Bienvenue sur le serveur de la Instinct eSport\ <:instinct:442671019430379522> \n En cas d’infraction de l\'une de ces règles, nous sanctionnerons\.\n\n Merci d\'accepter le règlement en cliquant sur ✅ ci-dessous afin d\'accéder au serveur\.\n")
      .addField("ARTICLE 1","Nous ne tolérons pas les injures et blâmes, provocations et incitations ou tous autres formes d\'expressions quelles soient écrites ou orales nuisant à autrui. Les réponses du même ordre que ces dernières sont à éviter sous peine de subir les mêmes sanctions que celui qui a débuté\.\n")
      .addField("ARTICLE 2","Un respect minimal de la langue française est requis pour le bien de tous, tant au niveau de la compréhension que pour des échanges plus facilités. Le respect envers l\'autre est primordial, respectez et vous serez respecté\.\n")
      .addField("ARTICLE 3","Rappelez-vous que vous êtes sur un serveur communautaire. Les sensibilités différent pour chacun, aussi il vous faudra éviter de prendre des pseudonymes ou définir des avatars à connotation vulgaire, sexuelle, politique ou violente\.\n")
      .addField("ARTICLE 4","Par delà les injures, les utilisateurs doivent également savoir contrôler leur langage. Celui-ci ne doit pas favoriser : racisme, homophobie, anti-religions, etc... Tout le monde doit se sentir à l’aise ou bien dans sa peau sur le serveur\.\n")
      .addField("ARTICLE 5","Les triches non autorisées par les jeux eux-mêmes : cheats, scripts… sont prohibés. Notre communauté se doit de recenser des joueurs honorables, ces pratiques ne révèlent pas le niveau réel du joueur, et nous nous devons d'être honnête\.\n")
      .addField("ARTICLE 6","Le flood, spam ainsi que la publicité sur la communauté sont strictement interdits. Celles-ci entraîneront de lourdes sanctions pour les auteurs. Si vous voulez promouvoir un événement externe à la structure, passez d'abord par un Administrateur ou membre de la Modération\.\n")
      .addField("ARTICLE 7","Nous interdisons la recherche et le partage d\’informations privées, peu importe la raison. Ce qui est privé doit le rester\. Lancer des informations privées et des rumeurs peut aller très loin, donc il faut respecter cette règle pour le bien de tous\.\n")
      .setThumbnail("https://pbs.twimg.com/profile_images/1047617625944182784/01233MlA_400x400.jpg")
      .setFooter("INSTINCT ESPORT", "https://pbs.twimg.com/profile_images/1047617625944182784/01233MlA_400x400.jpg")
      message.delete().catch(O_o=>{});
      return message.channel.send(botrulesEmbed);
    }
};
