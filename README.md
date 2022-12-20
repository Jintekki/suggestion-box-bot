# Suggestion Box Bot
A suggestion box designed for simplicity and ease-of-use. Allows members in a Discord server to send anonymous feedback to a desginated channel. 

### Installation 

#### Prerequisites
You will need to create an application in the Discord Development Portal with an associated bot. From this you will need your bot's token and client ID. You will also need to create a MongoDB cluster/database and attain the connection string for it. If you plan on using this bot in only one server, or you want to keep the testing to a single server, you will need the guild ID of whichever server you plan on keeping the bot in. This can be obtained by entering the Discord Client in Developer Mode.  

#### Instructions 

- Fork this repo and clone it to your local machine:<br/> 
`clone https://github.com/{your Github username}/suggestion-box-bot` in your local directory of choice. 

- Install necessary npm packages:<br/>
`cd` into the cloned project's root folder and `npm install`

- Configure your environment variables:<br/> 
In your cloned project's root folder, create the ".env" file: `touch .env`. The .env file will need the following environment variables:

  - DISCORD_TOKEN: Your Discord bot's personal token. Found on the Discord Development Portal. Can only be seen once, so be sure to save it somewhere (like a password manager).
  - DISCORD_CLIENT_ID: Found on the Discord Development Portal.
  - DISCORD_GUILD_ID: Optional in a production environment (see [Prerequisites](#Prerequisites) for more details)
  - MONGODB_CONNECTION_STRING: Also make sure your IP address in whitelisted to your MongoDB cluster.
  - NODE_ENV: Technically optional. If excluded, the project will assume a development environment. Otherwise, you can specify "staging" or "production". 
