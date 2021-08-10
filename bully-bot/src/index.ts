import { Client, Intents, Message } from 'discord.js';
import checkIfMeme from './checkIfMeme';
import { CORTEXUS } from './constants';

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on('ready', () => {
	console.log(`Authenticated as ${client?.user?.tag}`);
});

client.on('disconnect', () => {
	console.log('Disconnected from Discord...');
});

client.on('messageCreate', (msg: Message) => {
	if (msg.author.id === CORTEXUS && checkIfMeme(msg)) {
		msg.reply({
			files: ['./assets/unfunny.mp4']
		});
	}
});

client.login('ODczNjQ4MDY5MDA5MzU0NzUy.YQ7eKw.2aKobD6prqN1A8OChr1m7w-zbSI');
