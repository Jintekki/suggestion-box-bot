# Suggestion Box Bot
A suggestion box designed for simplicity and ease-of-use. Allows members in a Discord server to send anonymous feedback to a desginated channel. 

### Installation 

#### Prerequisites
You will need to create an application in the Discord Development Portal with an associated bot. From this you will need your bot's token and client ID. You will also need to create a MongoDB cluster/database and attain the connection string for it. If you plan on using this bot in only one server, or you want to keep the testing to a single server, you will need the guild ID of whichever server you plan on keeping the bot in. This can be obtained by entering the Discord Client in Developer Mode.  

#### Instructions 

- Invite the your bot to your server:<br/>
The following permissions are necessary for the bot to work correctly (these are selected when generating an invite link for your bot):<br/>
  - <b>Scopes:</b> bot, applications.commands
  - <b>Bot Permissions:</b> Manage Events, Send Messages, Use Slash Commands (or, if you'd like to make it easy, choose Administrator) 

- Fork this repo and clone it to your local machine:<br/> 
`clone https://github.com/{your Github username}/suggestion-box-bot` in your local directory of choice. 

- Install necessary npm packages:<br/>
`cd` into the cloned project's root folder and `npm install`

- Configure your environment variables:<br/> 
In your cloned project's root folder, create the ".env" file: `touch .env`. The .env file will need the following environment variables:

  - <b>DISCORD_TOKEN:</b> Your Discord bot's personal token. Found on the Discord Development Portal. Can only be seen once, so be sure to save it somewhere (like a password manager).
  - <b>DISCORD_CLIENT_ID:</b> Found on the Discord Development Portal.
  - <b>DISCORD_GUILD_ID:</b> Required in a development environment. (see [Prerequisites](#Prerequisites) for more details)
  - <b>MONGODB_CONNECTION_STRING:</b> Also make sure your IP address is whitelisted to your MongoDB cluster.
  - <b>NODE_ENV:</b> Technically optional. If excluded, the project will assume a production environment. Otherwise, you can specify "development".  

- Build your project:<br/>
`npm run build` 

- Deploy your commands:<br/>
`npm run deploy`. This only needs to be done the first time before you run your bot, or whenenver you add or delete a slash command. Depending on the NODE_ENV and DISCORD_GUILD_ID environment variables, this will either update slash commands in a single server or in all severs this bot has been invited to.

- Start your bot:<br/> 
`npm run start`

### Using the Bot 

The bot only has three slash commands: 

- <b>/set_destination_channel:</b> Select a channel to send all the anonymous feedback to. Only users with the "Manage Guild" permission may use this command. This command must be ran first. You can only select a channel that the bot can see. Make sure this bot has write permissions to the selected channel. 

- <b>/collection_box:</b> This command brings up the button that, when clicked, brings up the modal that users can use to write and submit their feedback. It is recommended that this command be ran once in a channel specifically meant for submitting feedback, and that this channel be read-only. This command has no permission requirements by default. 

- <b>/help:</b> Explains how to set-up with the two slash commands mentioned above and provides a link to this repo. 

### Donate

If you'd like to donate, [click here](https://paypal.me/Jintekki) (and thank you!).
