import { SlashCommandBuilder } from "discord.js";

const helpCommand = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription(
      "Learn how to set-up the Collection Box and how to contribute."
    ),
  async execute(interaction) {
    return interaction.reply({
      content:
        "Welcome to the Collection Box!\n\nTo set-up, run the **/set-destination-box** command and choose a text channel to send suggestions to. Make sure the bot has access and write permissions to the channel. Only someone with the Manage Guild permission may use this command.\n\nTo write a suggestion, anyone can use the **/collection-box** command. This will bring up a button that users can click to send feedback. To help with anonymity, you could also restrict this command, create a channel for submiting feedback that's read-only, and call the command in there once. Anyone can click on the button to send an anonymous feedback.\n\nIf you'd like to contribute, donate, need additional help, or would like to download and run a personal instance of the bot, head to my Github at http://github.com/Jintekki.",
      ephemeral: true,
    });
  },
};

export default helpCommand;
