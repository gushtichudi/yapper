const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('talk')
  .setDescription('Talk to me.'),

  async execute(interaction) {
    let randomNum = Math.floor(Math.random() * 2147483647);
    await interaction.reply(`# todo\n- ✅ implement python\n- implement ai\n- implement ai on discord\n- done\n### interaction id: ${randomNum}`);
  },
}
