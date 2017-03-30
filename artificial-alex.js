const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'no looky';

client.on('ready', () => {
    console.log('bot ready');
});

client.on('message', message => {
    if(message.content === 'ping') {
        message.channel.sendMessage('pong');
    }

    if(message.content === '!avatar') {
        message.channel.sendMessage(message.author.username + '\'s avatar:');
        message.channel.sendMessage(message.author.avatarURL);
    }

    if(message.content === 'clear') {
        message.delete();
    }
});

client.login(token);