let prefix = 'your prefix here'
//Make sure to change the prefix section to your own custom prefix!
exports.run = async (client, message) => {
  console.log('Bot is online with username ' + client.user.username + "!");
  console.log(client.guilds.map(g=>`${g.name} (${g.id})`).join('\n'));
  
  client.user.setActivity(`Prefix: ${prefix}`, { type: 'PLAYING'});
  //You always can change the bot's activity!
  //To show the servers count: ${client.guilds.size}
  //To show the total users count: ${client.users.size}
}
