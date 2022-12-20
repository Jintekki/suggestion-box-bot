import { SlashCommandBuilder } from "discord.js";

const command = {
  data: new SlashCommandBuilder()
    .setName("set_destination_channel")
    .setDescription("Select a single channel to send suggestions to.")
    .addChannelOption((option) =>
      option
        .setName("channel")
        .setDescription("The channel to send suggestions to")
        .setRequired(true)
    ),
  async execute(interaction) {
    let guildId = interaction.guildId;
    let destinationChannel = interaction.options._hoistedOptions[0].value;

    fetch(
      `http://localhost:5000/api/registeredGuilds/${guildId}/${destinationChannel}`,
      {
        method: "PUT",
      }
    )
      .then((response) => response.json())
      .then(() => {
        interaction.reply(
          `Channel #${interaction.options._hoistedOptions[0].channel.name} has been set as the destination channel.`
        );
      });
  },
};

export default command;
