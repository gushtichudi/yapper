const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder().setName('talk').setDescription('Talk to me.');

  async execute(interaction) {
    await interaction.reply("# todo\n- implement python\n- implement ai\n- implement ai on discord\n- done");
  }
}
