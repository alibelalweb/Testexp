const express = require('express');
const { Client } = require('discord.js-selfbot-v13');
const { joinVoiceChannel } = require('@discordjs/voice');

const app = express();
const port = 3000;

// Keep Glitch project alive
app.get('/', (req, res) => {
  res.send('البوت شغال');
});
app.listen(port, () => {
  console.log(`سيرفر إكسبريس يعمل على http://localhost:${port}`);
});

const token = 'OTgwNDM3Mjg4OTEzODgzMTc2.Gdk-Hu.FkUMPHIeapmjSWkrHzi_NQFrUs-9mlocKWBWz0';
const voiceChannelId = '1345008106752708689';
const guildId = '701688616614625360';

const client = new Client();

client.on('ready', async () => {
  console.log(`${client.user.username} جاهز`);
  try {
    const channel = await client.channels.fetch(voiceChannelId);
    joinVoiceChannel({
      channelId: channel.id,
      guildId: guildId,
      adapterCreator: channel.guild.voiceAdapterCreator,
      selfMute: true,
      selfDeaf: true
    });
    console.log(`دخل ${client.user.username} الروم الصوتي`);
  } catch (err) {
    console.error(`فشل دخول ${client.user.username}: ${err.message}`);
  }
});

client.login(token);
