module.exports = {
	name: 'interactionCreate',
	async execute(interaction, client) {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
		if (!interaction.isCommand()) return;
		try {
			console.log(client.commands);
			const command = client.commands.get(interaction.commandName);
			if (!command) return;


			await command.execute(interaction);
		}
		catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	},
};