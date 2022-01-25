const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pang')
		.setDescription('Replies with pang!'),
	async execute(interaction) {
		await interaction.reply('Pang!');
	},
};