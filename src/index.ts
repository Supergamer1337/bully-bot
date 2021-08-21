import { Client, Intents, Message } from 'discord.js';
import checkIfMeme from './checkIfMeme';
import { config } from 'dotenv';
config();
import { BULLY_CHANCE, TOKEN } from './config/env.config';

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
	if (msg.author.bot) return;

	if (checkIfMeme(msg) && Math.random() <= BULLY_CHANCE) {
		msg.reply({
			files: ['./assets/unfunny.mp4']
		});
	}
});

client.login(TOKEN);
