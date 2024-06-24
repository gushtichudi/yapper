const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// commands
// const cmd = require('.commands/social/talk.js');
client.once(Events.ClientReady, readyClient => {
	console.log(`locked in: ${readyClient.user.tag}`);
});

// note: token lives in the server's 
// enviroment variables
client.login(process.env.DISCORD_TOKEN);
