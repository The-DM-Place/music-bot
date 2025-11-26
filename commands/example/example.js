const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('example')
        .setDescription('Shows an example embed with interactive components.'),

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🎮 Example Interactive Message')
            .setDescription('This is an example command showing all the interactive components.')
            .addFields(
                { name: '🔘 Buttons', value: 'Click the buttons below to test different interactions', inline: false },
                { name: '📋 Select Menu', value: 'Use the dropdown menu to choose an option', inline: false }
            )
            .setColor('#5865F2')
            .setTimestamp();

        const exampleButton = new ButtonBuilder()
            .setCustomId('example_button')
            .setLabel('Example Button')
            .setStyle(ButtonStyle.Primary)
            .setEmoji('✨');

        const modalButton = new ButtonBuilder()
            .setCustomId('show_example_modal')
            .setLabel('Open Modal')
            .setStyle(ButtonStyle.Success)
            .setEmoji('📝');

        const buttonRow = new ActionRowBuilder().addComponents(exampleButton, modalButton);

        const selectMenu = new StringSelectMenuBuilder()
            .setCustomId('example_menu')
            .setPlaceholder('Choose an option...')
            .addOptions([
                { label: 'Option 1', value: 'option_1', description: 'First example option', emoji: '1️⃣' },
                { label: 'Option 2', value: 'option_2', description: 'Second example option', emoji: '2️⃣' },
                { label: 'Option 3', value: 'option_3', description: 'Third example option', emoji: '3️⃣' },
            ]);

        const menuRow = new ActionRowBuilder().addComponents(selectMenu);

        await interaction.reply({
            embeds: [embed],
            components: [buttonRow, menuRow]
        });
    },
};
