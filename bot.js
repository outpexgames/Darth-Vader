const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

bot.on("ready", () => {
    bot.user.setGame('Awesome Fun Game'); //you can set a default game
    console.log(`Bot is online!\n${bot.users.size} users, in ${bot.guilds.size} servers connected.`);
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === '!hi') {
    	message.reply('hi there!');
  	}
});

client.on('message', message => {
    if (message.content === '!games') {
    	message.reply('you can download our games at https://outpex.weebly.com!');
  	}
});

client.on('message', message => {
    if (message.content === '!whoru') {
    	message.reply('Hi, I am the bot that only belongs to Call of Duty: The Legends, I am open 24/7 so feel free to play with me!');
  	}
});

client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('help section: visit https://outpex.weebly.com for help');
  	}
});

client.on('message', message => {
    if (message.content === '!dailymission') {
    	message.reply('today's mission to try to chat 20 times!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTc5MzgxNDIxNTU5MzgyMDQ3.XO1a7g.aVgfeEvE99J4XyuWDuNdf9mpym0);//where BOT_TOKEN is the token of our bot 
