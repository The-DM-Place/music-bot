const { EmbedBuilder, MessageFlags } = require('discord.js');

module.exports = {
    customId: 'example_modal',
    async execute(interaction) {
        const nameInput = interaction.fields.getTextInputValue('name_input');
        const messageInput = interaction.fields.getTextInputValue('message_input');

        const embed = new EmbedBuilder()
            .setTitle('Modal Submission Received')
            .setDescription('Here\'s what you submitted:')
            .addFields(
                { name: 'Name', value: nameInput, inline: true },
                { name: 'Message', value: messageInput, inline: false }
            )
            .setColor('#9b59b6')
            .setTimestamp();

        await interaction.reply({
            embeds: [embed],
            flags: MessageFlags.Ephemeral
        });
    },
};
