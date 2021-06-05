const Discord = require("discord.js")
const bot = new Discord.Client();






bot.on("ready", bot => {
    console.log("bot is online !");
});

bot.on("message", (message) => {
    const prefix = '?';

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // it's just a demo bot 
    // it can help new people to understand how bot works



    if (command === 'about') {
        message.channel.send('it is a bot for bassic commands.like ?invite,for invite link,, ?youlink,for youtube channel link, others commands are - ?you,?creator,?talk,?bday,?yourname');
    } else if (command == 'invite') {
        message.channel.send('https://discord.gg/ScPtJpW5rz');
    } else if (command == 'youlink') {
        message.channel.send('https://www.youtube.com/channel/UC5lHkB1w5__EpULwrtzR63Q?view_as=subscriber');
    } else if (command == 'you') {
        message.channel.send('I am diptesh sannigrahi');
    } else if (command == 'creator') {
        message.channel.send('diptesh');
    } else if (command == 'talk') {
        message.channel.send('i cant talk a lot but i can answer few questions.');
    } else if (command == 'bday') {
        message.channel.send('my birth day is 05-06-2021');
    } else if (command == 'yourname') {
        message.channel.send('my name is discordBOT');
    } else if (command == 'play') {
        message.channel.send('i cant play but i can talk to u');
    } else if (command == 'help') {
        message.channel.send('how can i help u?');
    } else if (command == 'help i am depressed') {
        message.channel.send('Its just  a state of mind u can overcome this by playing games and practicing yougha . You can talk with family members further help');
    } else if (command == 'hii') {
        message.channel.send('bolo');
    } else if (command == 'meme') {
        message.channel.send('what type of meme do u like most?');
    } else if (command == 'me') {
        message.channel.send('You are my new friend');
    } else if (command == 'motivation') {
        message.channel.send('I think u dont need any motivation because u are some one whose existance is a motivation for lot people');
    } else if (command == 'friend') {
        message.channel.send('i am your friend');
    } else if (command == 'age') {
        message.channel.send('I am forever child');
    } else if (command == 'fun') {
        message.channel.send('fun is important for living a happy life');
    } else if (command == 'Make me happy') {
        message.channel.send('Happiness is something that comes from inner heart i cant produce happiness from no where');
    }

});

bot.login('NzgxMTU2MzM2NDYxMDIxMTg0.X75ihw.XJG0IVtZx32T1fr8ktn_iJIUKrs');
