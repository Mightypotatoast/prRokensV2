const Discord = require('discord.js');
const { title } = require('process');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
config = require('./config.json')
djimage = require('./djimage.json')
djlink = require('./djlink.json')
client.login(config.token)


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
