import { Client, Intents } from 'discord.js';

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on('connection', () => {
	console.log('Connected to Cortexus bully.');
});

client.on('message', msg => {
	if (msg.author.id === '228215503632596993') {
		msg.reply({
			files: ['./assets/unfunny.mp4']
		});
	}
});

client.login('ODczNjQ4MDY5MDA5MzU0NzUy.YQ7eKw.2aKobD6prqN1A8OChr1m7w-zbSI');
