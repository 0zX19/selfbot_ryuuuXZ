require('dotenv').config();
const { Client } = require('discord.js-selfbot-v13');
const { Tokens1, Prefix1, Owner } = require('./config.js');


Tokens1.forEach((token, index) => {
    const client1 = new Client();

    client1.on('ready', () => {
        client1.user.setPresence({
            activities: [{ name: 'RYUU XZ', type: 'PLAYING' }], // Status activity
            status: 'online' // Status can be 'online', 'idle', 'dnd', or 'invisible'
        });
        console.log(`Logged in as ${client1.user.tag} with Token${index + 1}!`);
    });

    client1.on('messageCreate', async (message) => {
        if (message.author.bot) return;

        const messageArray = message.content.split(" ");
        const cmd = messageArray[0];

        if (!Owner.includes(message.author.id)) return;

        if (cmd === `${Prefix1}test`) {
            message.channel.send('Test successful.');
        }
    });

    client1.login(token).catch((error) => {
        console.error(`Failed to log in with Token${index + 1}:`, error);
    });
});
