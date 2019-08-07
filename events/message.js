global.prefix = 'your prefix here';
let prefix = global.prefix
exports.run = async (client, message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(prefix)) {
    let messageArray = message.content.split(' ');
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if (!commandfile) return;
    commandfile.run(client, message, args);
  }};
  //Make sure to change the prefix section to your own custom prefix!
