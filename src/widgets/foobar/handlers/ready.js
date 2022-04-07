module.exports = async client => {
  client.user.setActivity("surveiller le serveur 🦈");
  const Discord = require('discord.js');

// Start Statistics Part 

  // Get our server
const guild = client.guilds.cache.get('437314508080414741');

  // cache all uncached members 
await guild.members.fetch()

// Get our stats channels
const totalUsers = client.channels.cache.get('952596026836004875');
const onlineUsers = client.channels.cache.get('952596729914589294');
const membersR6S = client.channels.cache.get('952596785430421574');
const membersCS = client.channels.cache.get('952596824521334904');

// Check every 30 seconds for changes
setInterval(function() {
  console.log('Getting stats update..')

  //Get actual counts
  var userCount = guild.memberCount;
  var onlineCount = guild.members.cache.filter(m => m.presence.status === 'online').size
  var r6sCount = guild.members.cache.filter(m => m.roles.cache.has('865688681213984768')).size;
  var csCount = guild.members.cache.filter(m => m.roles.cache.has('857332803938287673')).size;


  // Log counts for debugging
  console.log("Requineaux: " + userCount);
  console.log("En ligne: " + onlineCount);
  console.log("Membres R6S: " + r6sCount);
  console.log("Membres CS: " + csCount);


  // Set channel names
  totalUsers.setName("Requineaux: " + userCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);

  onlineUsers.setName("En ligne: " + onlineCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);

  membersR6S.setName("Membres R6S: " + r6sCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);

  membersCS.setName("Membres CS: " + csCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);

  }, 5000)

 // End of Statistics Parts
  
  client.on('guildMemberAdd', member => {

 // Start of Welcome and Quit Part

    let welcomechannel = member.guild.channels.cache.get('704404951610294373')
    welcomechannel.send(`${member}, Bienvenue sur le Discord de la team SevenUp Gaming <:sevenup:774029789317038100>`);

    let welcomeEmbed = new Discord.MessageEmbed()
      .setColor("#0097d9")
      .setAuthor("SEVENUP GAMING", "https://cdn.discordapp.com/avatars/437703656234549249/904b84f646f859044e2b7b79f9ee9eca.png")
      .setTitle("Bienvenue à toi sur le SevenUp Gaming ! <:sevenup:774029789317038100>")
      .setDescription("Nous vous remercions d'avoir rejoins le serveur et nous vous\n demandons de bien respecter les règles de la communauté et du Discord\n et nous vous souhaitons un très bon moment parmis nous !")
      .setThumbnail("https://cdn.discordapp.com/avatars/437703656234549249/904b84f646f859044e2b7b79f9ee9eca.png")
      .setImage('https://cdn.discordapp.com/avatars/437703656234549249/904b84f646f859044e2b7b79f9ee9eca.png')
      .setFooter("L'Équipe de SevenUp Gaming")

   member.send(welcomeEmbed);
   console.log('embedwelcome loaded and sended');
  });

  client.on('guildMemberRemove', member => {

    let quitchannel = member.guild.channels.cache.get('448194590189551616')
    quitchannel.send(`RIP ${member.user.tag} a quitté le serveur!`);
  });
 // End of Welcome and Quit Part

  console.log('foobar: ready ok');
};
