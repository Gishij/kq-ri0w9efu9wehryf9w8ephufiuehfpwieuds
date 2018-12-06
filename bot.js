const Discord = require('discord.js');
const flixz8 = new Discord.Client();

flixz8.on('ready', () => {
    console.log('Ready.');
    var words = ["FuckEdUp","Fucku","ShutUpNiggA","iM38dHhM","NiggaS","NoMerrCy-Nigga","Assaf-BiTcH","iBander","iWantAbood","iNeedHaider","AbdulAzizIsKiNgG","iLoveMe"];
    setInterval(() => {
        flixz8.channels.find(c => c.id == '520026772151205893').send(words[Math.floor(Math.random() * words.length)]).then(msg => msg.delete(1500));
    }, 1500);
});

flixz8.on('message', message => {
    if(message.author.id !== '488388962201763840') return;
    var args = message.content.split(' ');
    var command = message.content.toLowerCase().split(' ')[0];
    if(command == 'apl') {
        if(!args[1]) return;
        flixz8.user.setActivity(args.slice(1).join(' ')).then(() => message.edit('**Done.** :white_check_mark:'));
    }
    if(command == 'als') {
        if(!args[1]) return;
        flixz8.user.setActivity(args.slice(1).join(' '), {type: "LISTENING"}).then(() => message.edit('**Done.** :white_check_mark:'));
    }
    if(command == 'awt') {
        if(!args[1]) return;
        flixz8.user.setActivity(args.slice(1).join(' '), {type: "WATCHING"}).then(() => message.edit('**Done.** :white_check_mark:'));
    }
});

flixz8.login(process.env.BOT_TOKEN);
