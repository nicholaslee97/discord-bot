const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('random')
		.setDescription('random number')
		.addSubcommand(subcommand =>
			subcommand
				.setName('god_number')
				.setDescription('random a god number')),

	async execute(interaction) {
		if (interaction.options.getSubcommand() === 'god_number') {
			const num = Math.round(Math.random() * 899999 + 100000);
			console.log(num);
			await interaction.reply('123' + num);
		}
	},
};