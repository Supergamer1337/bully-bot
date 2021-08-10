const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {

    // TODO: Fix attachments

  if (message.author.id === "271299269984518155" && (message.embeds.length > 0 || message.content.includes('https://') || message.content.includes('http://'))) {
    message.channel.send({
        files: [
            "./cortexus-unfunny.mp4"
        ]
    });
  }
});

client.login('ODczNjQ4MDY5MDA5MzU0NzUy.YQ7eKw.2aKobD6prqN1A8OChr1m7w-zbSI');