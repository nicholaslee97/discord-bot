const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('random')
		.setDescription('random number')
		.addSubcommand(subcommand =>
			subcommand
				.setName('god_number')
				.setDescription('random a god number'))
		.addSubcommand(subcommand =>
			subcommand
				.setName('num')
				.setDescription('random between two numbers')
				.addIntegerOption(option => option.setName('min').setDescription('Min number'))
				.addIntegerOption(option => option.setName('max').setDescription('Max number'))),

	async execute(interaction) {
		if (interaction.options.getSubcommand() === 'god_number') {
			const num = Math.round(Math.random() * 899999 + 100000);
			console.log(num);
			await interaction.reply('123' + num);
		}
		else if (interaction.options.getSubcommand() === 'num') {
			const min = interaction.options.getInteger('min');
			const max = interaction.options.getInteger('max');
			await interaction.reply('The number is ' + Math.round(Math.random() * (max - min) + min));
		}
	},
};