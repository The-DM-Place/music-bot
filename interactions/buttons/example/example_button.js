const { MessageFlags, EmbedBuilder } = require('discord.js');

module.exports = {
    customId: 'example_button',
    async execute(interaction) {

        const exampleEmbed = new EmbedBuilder()
            .setTitle('Example Button Clicked!')
            .setDescription('You have successfully clicked the example button.')
            .setColor('#00FF00');

        await interaction.reply({
            embeds: [exampleEmbed],
            flags: MessageFlags.Ephemeral,
        });
    }
};
