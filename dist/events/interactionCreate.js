import { ActionRowBuilder, Events, ModalBuilder, PermissionsBitField, TextInputBuilder, TextInputStyle, } from "discord.js";
import fetch from "node-fetch";
const event = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (interaction.isButton()) {
            if (interaction.customId === "collection-box") {
                const modal = new ModalBuilder()
                    .setCustomId("suggestion-modal")
                    .setTitle("Suggestion");
                const suggestionInput = new TextInputBuilder()
                    .setMinLength(10)
                    .setCustomId("suggestion-input")
                    // The label is the prompt the user sees for this input
                    .setLabel("Type your suggestion here.")
                    // Short means only a single line of text
                    .setStyle(TextInputStyle.Paragraph);
                const firstActionRow = new ActionRowBuilder().addComponents(suggestionInput);
                modal.addComponents(firstActionRow);
                return interaction.showModal(modal);
            }
        }
        if (interaction.isModalSubmit()) {
            if (interaction.customId === "suggestion-modal") {
                const guildId = interaction.guildId;
                return fetch(`http://localhost:3000/api/guilds/${guildId}`)
                    .then((response) => response.json())
                    .then((data) => {
                    const channel = interaction.client.channels.cache.get(data["destinationChannel"]);
                    const suggestionText = interaction.fields.getTextInputValue("suggestion-input");
                    if (!interaction.guild.members.me
                        .permissionsIn(channel)
                        .has(PermissionsBitField.Flags.SendMessages)) {
                        return interaction.reply({
                            content: "An error has occured. Does the bot have write permissions to the intended channel? ",
                            ephemeral: true,
                        });
                    }
                    else if (!interaction.guild.members.me
                        .permissionsIn(channel)
                        .has(PermissionsBitField.Flags.ViewChannel)) {
                        return interaction.reply({
                            content: "An error has occured. Does the bot have access to the intended channel? ",
                            ephemeral: true,
                        });
                    }
                    else {
                        let ts = Date.now();
                        let date_ob = new Date(ts);
                        let date = date_ob.getDate();
                        let month = date_ob.getMonth() + 1;
                        let year = date_ob.getFullYear();
                        let hour = date_ob.getUTCHours();
                        let minutes = date_ob.getUTCMinutes();
                        let seconds = date_ob.getUTCSeconds();
                        channel.send(`**Suggestion received on ${year}-${month}-${date} at ${hour}:${minutes}:${seconds} :**\n"${suggestionText.trim()}"`);
                        return interaction.reply({
                            content: "An error has occured. Does the bot have write permissions to the intended channel? ",
                            ephemeral: true,
                        });
                    }
                })
                    .catch((err) => {
                    console.error(err);
                    return interaction.reply({
                        content: "An error has occured. Has a destination channel been set?",
                        ephemeral: true,
                    });
                });
            }
        }
        if (!interaction.isChatInputCommand())
            return;
        const command = interaction.client.commands.get(interaction.commandName);
        if (!command) {
            console.error(`No command matching ${interaction.commandName} was found.`);
            return;
        }
        try {
            await command.execute(interaction);
        }
        catch (error) {
            console.error(`Error executing ${interaction.commandName}`);
            console.error(error);
        }
    },
};
export default event;
