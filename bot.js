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
    	message.reply('help😎 section: 1. !hi, make k9 greet you, 2. !ping, k9 will responce with pong. 3.!whoru, and k9 will introduce itself');
  	}
});

client.on('message', message => {
    if (message.content === '!dailymission') {
    	message.reply('today's mission to try to chat 20 times!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
