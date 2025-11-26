const { EmbedBuilder, MessageFlags } = require('discord.js');

module.exports = {
    customId: 'example_menu',
    async execute(interaction) {
        const selectedValue = interaction.values[0];

        const embed = new EmbedBuilder()
            .setTitle('Selection Received')
            .setDescription(`You selected: **${selectedValue}**`)
            .setColor('#00ff00')
            .setTimestamp();

        await interaction.reply({
            embeds: [embed],
            flags: MessageFlags.Ephemeral
        });
    },
};
