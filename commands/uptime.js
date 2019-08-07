const Discord = require('discord.js');
let days = 0;
let week = 0;

exports.run = async(client, message, args) =>{
    let uptime = ``;
    let totalSeconds = (client.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    if(hours > 23){
        days = days + 1;
        hours = 0;
    }

    if(days == 7){
        days = 0;
        week = week + 1;
    }

    if(week > 0){
        uptime += `${week} week, `;
    }

    if(minutes > 60){
        minutes = 0;
    }

    uptime += `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

  await message.channel.send("`Receiving uptime, please wait...`").then(msg => msg.delete(2000))
  let serverembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField('The bot has been up for', uptime)
  await message.channel.send(serverembed).then(msg => msg.react("🕙"));

};

//Make sure that this is not a simple uptime command! This is a advanced uptime code that we use in our bots.
