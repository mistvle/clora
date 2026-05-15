const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription('embed stuff')
    .addSubcommand(subcommand => subcommand
        .setName("send")
        .setDescription("Send an embed via the bot.")
        .addStringOption(option => option
            .setName("json_text")
            .setDescription("Input the JSON code of the embed.")
            .setRequired(true)
        )
        .addChannelOption(optio => option
            .setName("channel")
            .setDescription("Input the channel to send to.")
            .setRequired(true)
        )
    ),
    async execute (interaction) {
        const isAdmin = interaction.member.permissions.has("Administrator")
        if (!isAdmin ) {
            return interaction.reply({content: "<:xMark:1504686168321687574> You do not have permission to run this command.", flags: 64})
        }
        const text = interaction.options.getString("json_text");
        const channel = interaction.options.getChannel("channel");
        await channel.send(text)
    }
}