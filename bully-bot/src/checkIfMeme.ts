import { Message } from 'discord.js';

export default function checkIfMeme(msg: Message) {
	if (
		msg.embeds.length > 0 || // Check possible embeds
		msg.content.includes('https://') || // Check if link to meme
		msg.content.includes('http://') ||
		msg.attachments.size > 0 // If meme is video/image attachment
	)
		return true;
	return false;
}
