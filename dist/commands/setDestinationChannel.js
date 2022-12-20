import { PermissionsBitField, SlashCommandBuilder } from "discord.js";
import fetch from "node-fetch";
const setDestinationCommand = {
    data: new SlashCommandBuilder()
        .setName("set_destination_channel")
        .setDescription("Select a single channel to send suggestions to.")
        .addChannelOption((option) => option
        .setName("destination_channel")
        .setDescription("The channel to send suggestions to")
        .setRequired(true)),
    async execute(interaction) {
        if (interaction.member.permissions.has(PermissionsBitField.Flags.ManageGuild)) {
            let guildId = interaction.guildId;
            let destinationChannel = interaction.options._hoistedOptions[0].value;
            fetch(`http://localhost:3000/api/guilds/${guildId}/${destinationChannel}`, {
                method: "PUT",
            })
                .then((response) => response.json())
                .then(() => {
                interaction.reply(`Channel #${interaction.options._hoistedOptions[0].channel.name} has been set as the destination channel.`);
            });
        }
        else {
            interaction.reply({
                content: "You do not have the necessary permissions to use this command.",
                ephemeral: true,
            });
        }
    },
};
export default setDestinationCommand;
