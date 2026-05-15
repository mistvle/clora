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
        .addChannelOption(option => option
            .setName("channel")
            .setDescription("Input the channel to send to.")
            .setRequired(true)
        )
    ),
    async execute(interaction) {
    const isAdmin = interaction.member.permissions.has("Administrator");

    if (!isAdmin) {
        return interaction.reply({
            content: "<:xMark:1504686168321687574> You do not have permission to run this command.",
            flags: 64
        });
    }

    const text = interaction.options.getString("json_text");
    const channel = interaction.options.getChannel("channel");

    try {
        const data = JSON.parse(text);

        await channel.send(data);

        await interaction.reply({
            content: "<:check:1504686219223896074> Successfully sent embed.",
            flags: 64
        });

    } catch (err) {
        console.error(err);

        await interaction.reply({
            content: "<:xMark:1504686168321687574> Invalid JSON provided.",
            flags: 64
        });
    }
}
}