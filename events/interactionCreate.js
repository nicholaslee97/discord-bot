module.exports = {
	name: 'interactionCreate',
	async execute(client, interaction) {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
		if (!interaction.isCommand()) return;

		try {
			const command = client.commands.get(interaction.commandName);
			if (!command) return;

			// reply commands
			await command.execute(interaction);
			console.log(command);
		}
		catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	},
};