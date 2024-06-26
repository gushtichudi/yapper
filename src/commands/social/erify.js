const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
  .setName('erify')
  .setDescription('Let me erify you.')
  .addStringOption(option => 
    option.setName('name')
    .setDescription('name 2 erify')
    .setRequired(true)),

  async execute(interaction) {
    var theName = interaction.options.getString('name');
    var parsedName = theName.split(' ');

    function returnErifiedName(tokenArray) {
      const result = tokenArray.map(token => 
        token.endsWith("a") ? token.replace(/a$/, "er") : token).join(" ");
      return result;
    }


    // var result = returnErifiedName(parsedName);
    // console.log(result);
    var result = returnErifiedName(parsedName);
    var id = Math.floor(Math.random() * 2147483647);
    /*
    if (result.match(/er&/) != true) {
      await interaction.reply("cant...");
    }*/

    await interaction.reply(`
\`\`\` 
result:   ${result}
id:       ${id}
\`\`\`
      `); // god fucking awful way of doing this but 
          // who cares? no one's gonna see this shit
  },
}
