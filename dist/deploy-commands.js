import { REST, Routes } from "discord.js";
import * as dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const commands = [];
// Find and configure .env environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });
// Grab all the command files from the commands directory you created earlier
const commandFiles = fs
    .readdirSync("./commands")
    .filter((file) => file.endsWith(".js"));
// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
    const command = await import(`./commands/${file}`);
    commands.push(command.default.data.toJSON());
}
// Construct and prepare an instance of the REST module
const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);
// and deploy your commands!
(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);
        // The put method is used to fully refresh all commands in the guild with the current set
        const data = await rest.put(process.env.NODE_ENV === "development"
            ? Routes.applicationGuildCommands(process.env.DISCORD_CLIENT_ID, process.env.DISCORD_GUILD_ID)
            : Routes.applicationCommands(process.env.DISCORD_CLIENT_ID), 
        // Routes.applicationGuildCommands(clientId), // Use this instead if you want to refresh commands globally.
        { body: commands });
        console.log(`Successfully reloaded ${data["length"]} application (/) commands.`);
    }
    catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error(error);
    }
})();
