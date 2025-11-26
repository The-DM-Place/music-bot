const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    customId: 'show_example_modal',
    async execute(interaction) {
        const modal = new ModalBuilder()
            .setCustomId('example_modal')
            .setTitle('Example Modal');

        const nameInput = new TextInputBuilder()
            .setCustomId('name_input')
            .setLabel('What\'s your name?')
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
            .setMaxLength(50);

        const messageInput = new TextInputBuilder()
            .setCustomId('message_input')
            .setLabel('Your message')
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(true)
            .setMaxLength(500);

        const row1 = new ActionRowBuilder().addComponents(nameInput);
        const row2 = new ActionRowBuilder().addComponents(messageInput);

        modal.addComponents(row1, row2);

        await interaction.showModal(modal);
    }
};
