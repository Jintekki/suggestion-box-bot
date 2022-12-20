import { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, } from "discord.js";
const collectionBoxCommand = {
    data: new SlashCommandBuilder()
        .setName("collection_box")
        .setDescription("Creates a button that users will click on to submit suggestions"),
    async execute(interaction) {
        const row = new ActionRowBuilder().addComponents(new ButtonBuilder()
            .setCustomId("collection-box")
            .setLabel("Submit a suggestion")
            .setStyle(ButtonStyle.Primary));
        interaction.reply({
            content: "Welcome to the Suggestion Box.\nClick the button down below to submit an anonymous suggestion.",
            components: [row],
        });
    },
};
export default collectionBoxCommand;
