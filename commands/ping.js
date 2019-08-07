const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
message.delete();
  let boticon = client.user.displayAvatarURL;
  let embed1 = new Discord.RichEmbed()
  .setTitle("`Loading, please be patient.`")
  .addField('Please wait...', `Please wait while I recieve the ping... this message will be deleted shortly and will be replaced with the ping.`)
  .setColor("RANDOM")
  .setTimestamp();
const m = await message.channel.send(embed1).then(msg => msg.delete(2000));
let embed = new Discord.RichEmbed()
.setTitle('Bot Ping. :bellhop:')
.setColor("RANDOM")
.addField(':gear: Bot Ping:', `${m.createdTimestamp - message.createdTimestamp}ms`)
.addField(':computer: API Latency:', `${Math.round(client.ping)}ms`)
.setThumbnail(boticon)
.setTimestamp()
await message.channel.send(embed);
};

//Make sure that this is not a simple command! This is a advanced ping command that we use in our bots.
