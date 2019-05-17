const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === '!hi') {
    	message.reply('hi there {user}!');
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

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
