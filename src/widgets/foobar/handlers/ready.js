module.exports = async client => {
  client.user.setActivity("surveiller le serveur 🦈");
  const Discord = require('discord.js');

// Start Statistics Part 
/*
  // Get our server
const guild = client.guilds.cache.get('437314508080414741');

  // cache all uncached members 
await guild.members.fetch()

// Get our stats channels
const totalUsers = client.channels.cache.get('704600819605045340');
const onlineUsers = client.channels.cache.get('704600906678927401');
const membersR6S = client.channels.cache.get('705086489138036776');
const membersCS = client.channels.cache.get('705092697337102438');
const membersValorant = client.channels.cache.get('705086559782830171');
const membersRL = client.channels.cache.get('705093298615746673');
const membersFTN = client.channels.cache.get('705106470571737179');

// Check every 30 seconds for changes
setInterval(function() {
  console.log('Getting stats update..')

  //Get actual counts
  var userCount = guild.memberCount;
  var onlineCount = guild.members.cache.filter(m => m.presence.status === 'online').size
  var r6sCount = guild.members.cache.filter(m => m.roles.cache.has('704649656214224936')).size;
  var csCount = guild.members.cache.filter(m => m.roles.cache.has('704684962833760366')).size;
  var valorantCount = guild.members.cache.filter(m => m.roles.cache.has('704685065539551255')).size;
  var rlCount = guild.members.cache.filter(m => m.roles.cache.has('704685104605167616')).size;
  var ftnCount = guild.members.cache.filter(m => m.roles.cache.has('704720343318790234')).size;


  // Log counts for debugging
  console.log("Requineaux: " + userCount);
  console.log("En ligne: " + onlineCount);
  console.log("Membres R6S: " + r6sCount);
  console.log("Membres CS: " + csCount);
  console.log("Membres Valorant: " + valorantCount);
  console.log("Membres RL: " + rlCount);
  console.log("Membres Fortnite: " + ftnCount);


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

  membersValorant.setName("Membres Valorant: " + valorantCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);

  membersRL.setName("Membres RL: " + rlCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);

  membersFTN.setName("Membres Fortnite: " + ftnCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);
  }, 600000)

 // End of Statistics Parts
  */
  client.on('guildMemberAdd', member => {

 // Start of Welcome and Quit Part

    let welcomechannel = member.guild.channels.cache.get('704404951610294373')
    welcomechannel.send(`${member}, Bienvenue sur le Discord de la team SevenUp Gaming <:sevenup:774029789317038100>`);

    let welcomeEmbed = new Discord.MessageEmbed()
      .setColor("#0097d9")
      .setAuthor("SEVENUP GAMING", "https://cdn.discordapp.com/avatars/437703656234549249/904b84f646f859044e2b7b79f9ee9eca.png")
      .setTitle("Bienvenue à toi sur le SevenUp Gaming ! <:sevenup:704404951610294373>")
      .setDescription("Nous vous remercions d'avoir rejoins le serveur et nous vous\n demandons de bien respecter les règles de la communauté et du Discord\n et nous vous souhaitons un très bon moment parmis nous !")
      //.setThumbnail("https://pbs.twimg.com/profile_images/1047617625944182784/01233MlA_400x400.jpg")
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
