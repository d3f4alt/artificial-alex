const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'no looky';
var ProfanityBlock = true;

client.on('ready', () => {
    console.log('bot ready');
});

client.on('message', message => {
    if(message.author.bot) return;

    if(message.content === '?ping') {
        message.channel.sendMessage('pong');
    }

    if(message.content.toLowerCase().startsWith('?avatar')) {
        message.channel.sendMessage(message.author + '\'s avatar:');
        message.channel.sendMessage(message.author.avatarURL);
    }

    if(message.content.toLowerCase().startsWith('?clear')) {
        if(Number(message.content.substr(6, message.content.length)) === 0) {
            message.channel.bulkDelete(0);
            message.channel.sendMessage('Deleted **all** messages.');
        } else {
            message.channel.bulkDelete(Number(message.content.substr(6, message.content.length)));
            message.channel.sendMessage('Deleted **' + Number(message.content.substr(6, message.content.length)) + '** messages.');
        }
    }

    if(message.content.toLowerCase() === '?github') {
        message.channel.sendMessage('https://github.com/d3f4alt/artificial-alex');
    }

    if(message.content.toLowerCase().startsWith('?userinfo')) {
        message.channel.sendMessage(message.content.substr(10, message.content.length));
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

    if(message.content.toLowerCase().startsWith('?echo')){
        message.channel.sendMessage(message.content.substr(6, message.content.length));
    }

    if(message.content.toLowerCase() === '?channelinfo') {
        message.channel.sendMessage('Date created: ' + message.channel.createdAt);
        message.channel.sendMessage('Channel ID: ' + message.channel.id);
        message.channel.sendMessage('Channel Type: ' + message.channel.type);
    }

    if(message.content.toLowerCase().startsWith('?meme')) {
        var mes = message.content.substr(6, message.content.length).toLowerCase();
        mes = mes.replace(' ', '');
        var newmes = '';

        for(var i = 0; i < mes.length; i++) {
            if(/^[a-z]+$/i.test(mes.charAt(i))){
                newmes += ':regional_indicator_' + mes.charAt(i) + ': ';
            } else {
                newmes += mes.charAt(i);
            }
        }

        for(var a = 0; a < 20; a++) {
            newmes = newmes.replace('0', ':zero: ');
            newmes = newmes.replace('1', ':one: ');
            newmes = newmes.replace('2', ':two: ');
            newmes = newmes.replace('3', ':three: ');
            newmes = newmes.replace('4', ':four: ');
            newmes = newmes.replace('5', ':five: ');
            newmes = newmes.replace('6', ':six: ');
            newmes = newmes.replace('7', ':seven: ');
            newmes = newmes.replace('8', ':eight: ');
            newmes = newmes.replace('9', ':nine: ');
        }

        message.channel.sendMessage(newmes);
    }

    if(ProfanityBlock) {
        message.content = message.content.toLowerCase();

        if(message.content.indexOf('fuck') >= 0 ||
        message.content.indexOf('shit') >= 0 ||
        message.content.indexOf('niggers') >= 0 ||
        message.content.indexOf('smd') >= 0 ||
        message.content.indexOf('fck') >= 0 ||
        message.content.indexOf('sht') >= 0 ||
        message.content.indexOf('titties') >= 0 ||
        message.content.indexOf('tittys') >= 0 ||
        message.content.indexOf('dick') >= 0 ||
        message.content.indexOf('pussy') >= 0 ||
        message.content.indexOf('fkn') >= 0 ||
        message.content.indexOf('dixck') >= 0 ||
        message.content.indexOf('cunt') >= 0) {
            message.delete();
            message.channel.sendMessage('**Message Deleted**, please do not swear ' + message.author);
        }
    }
});

client.login(token);