const { GroupEmbed } = require('./obj/group.js')
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
config = require('./config.json')
client.login(config.token)


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
    if (msg.author.bot) return
    const args = msg.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if(!commandName.startsWith(config.prefix)) return
    command = commandName.slice(config.prefix.length)

    if (command == "test"){

        group = new GroupEmbed(msg, args[0], args[1], args[2])
        console.log(group)
        msg.channel.send(group)
        group.addTank(msg.author)
        group.refresh()
        msg.channel.send(group)
        console.log(group)


    }

})