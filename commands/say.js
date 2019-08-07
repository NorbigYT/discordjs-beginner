 const Discord = require('discord.js')
exports.run = async(client, message, args) => {  
message.delete() && message.channel.send(args.join(' '))
}

//That's a simple say command. Of course it has auto-delete to the message as you can read message.delete()
//If you want the user to have permissions for using the say command copy and paste the code below.
////if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry but you need the `MANAGE_MESSAGES` permission to use this command")
