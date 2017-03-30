const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'no looky';
var ProfanityBlock = true;

client.on('ready', () => {
    console.log('bot ready');
});

client.on('message', message => {
    if(message.content === '?ping') {
        message.channel.sendMessage('pong');
    }

    if(message.content === '?avatar') {
        message.channel.sendMessage(message.author.username + '\'s avatar:');
        message.channel.sendMessage(message.author.avatarURL);
    }

    if(message.content.toLowerCase() === 'clear') {
        message.delete();
    }

    if(message.content.toLowerCase() === '?github') {
        message.channel.sendMessage('https://github.com/d3f4alt/artificial-alex ');
    }

    if(message.content.toLowerCase() === '?userid') {
        message.channel.sendMessage(message.author.id);
    }

    if(message.content.toLowerCase() === '?toggleprofanity') {
        if(ProfanityBlock) {
            ProfanityBlock = false;
            message.channel.sendMessage('ProfanityBlock is now off');
        } else {
            ProfanityBlock = true;
            message.channel.sendMessage('ProfanityBlock is now on');
        }
    }

    if(message.content.toLowerCase() === '?channelinfo') {
        message.channel.sendMessage('Date created: ' + message.channel.createdAt);
        message.channel.sendMessage('Channel ID: ' + message.channel.id);
        message.channel.sendMessage('Channel Type: ' + message.channel.type);
    }

    if(ProfanityBlock) {
        message.content = message.content.toLowerCase();

        if(message.content.indexOf('fuck') >= 0 ||
        message.content.indexOf('shit') >= 0 ||
        message.content.indexOf('ass') >= 0 ||
        message.content.indexOf('niggers') >= 0 ||
        message.content.indexOf('smd') >= 0 ||
        message.content.indexOf('fck') >= 0 ||
        message.content.indexOf('sht') >= 0 ||
        message.content.indexOf('titties') >= 0 ||
        message.content.indexOf('tittys') >= 0 ||
        message.content.indexOf('dick') >= 0 ||
        message.content.indexOf('pussy') >= 0 ||
        message.content.indexOf('fkn') >= 0 ||
        message.content.indexOf('dixck') >= 0) {
                message.delete();
                message.channel.sendMessage('**Message Deleted**, please do not swear ' + message.author);
        }
    }
});

client.login(token);