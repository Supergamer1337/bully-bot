import { Client, Intents, Message } from 'discord.js';
import checkIfMeme from './checkIfMeme';
import { config } from 'dotenv';
config();
import { BULLY_CHANCE, TOKEN } from './config/env.config';
import fs from 'fs';
import path from 'path';

const bullyFiles = fs.readdirSync(path.join(__dirname, '../assets/'));

const videos: string[] = [];
for (const bullyFile of bullyFiles) {
	videos.push(path.join(__dirname, `../assets/${bullyFile}`));
}

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
		const bullyVideo = videos[Math.floor(Math.random() * videos.length)];
		msg.reply({
			files: [bullyVideo]
		});
	}
});

client.login(TOKEN);
