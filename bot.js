const Discord = require('discord.js');
const flixz8 = new Discord.Client();

flixz8.on('ready', () => {
    console.log('Ready.');
    var words = ["FuckEdUp","Fucku","ShutUpNiggA","iM38dHhM","NiggaS","NoMerrCy-Nigga","Assaf-BiTcH","iBander","iWantAbood","iNeedHaider","AbdulAzizIsKiNgG","iLoveMe"];
    setInterval(() => {
        flixz8.channels.find(c => c.id == '493482943537479681').send(words[Math.floor(Math.random() * words.length)]).then(msg => msg.delete(1500));
    }, 1500);
});

flixz8.on('guildMemberAdd', member => {
    if(member.guild.id !== '428690920246870016') return;
    setTimeout(() => {
        flixz8.channels.get('485710163966296064').send(`${member} :rose: :heart: **Welcome To FlixCommunity** :heart: :rose: `).then(message => message.delete(300000));
    }, 1500)
});

flixz8.on('message', message => {
    if(message.author.id !== '282350776456839169') return;
    var args = message.content.split(' ');
    var command = args.toLowerCase()[0];
    if(command == 'Apl') {
        if(!args[1]) return;
        flixz8.user.setActivity(args.slice(1).join(' ')).then(() => message.edit('Done.'));
    }
    if(command == 'Als') {
        if(!args[1]) return;
        flixz8.user.setActivity(args.slice(1).join(' '), {type: "LISTENING"}).then(() => message.edit('Done.'));
    }
    if(command == 'Awt') {
        if(!args[1]) return;
        flixz8.user.setActivity(args.slice(1).join(' '), {type: "WATCHING"}).then(() => message.edit('Done.'));
    }
    if(command == 'Ast') {
        if(!args[1]) return;
        flixz8.user.setGame(args.slice(1).join(' '), "https://www.twitch.tv/flixhost").then(() => message.edit('Done.'));
    }
});

flixz8.login(process.env.BOT_TOKEN);
