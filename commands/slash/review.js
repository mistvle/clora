const {SlashCommandBuilder} = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
    .setName("review")
    .setDescription("Leave a review for your recent order.")
    .addUserOption(option => option
        .setName("designer")
        .setDescription("Select the designer of your order.")
        .setRequired(true)
        
    )
    .addStringOption(option => option
        .setName("rating")
        .setDescription("Select the rating for your order.")
        .addChoices(
            {name: "⭐", value: "⭐"},
            {name: "⭐⭐", value: "⭐⭐"},
            {name: "⭐⭐⭐", value: "⭐⭐⭐"},
            {name: "⭐⭐⭐⭐", value:"⭐⭐⭐⭐"},
            {name: "⭐⭐⭐⭐⭐", value: "⭐⭐⭐⭐⭐"}
        )
        .setRequired(true)
    )
    .addStringOption(option => option
        .setName("product")
        .setDescription("Select the product you ordered.")
        .addChoices(
            {name: "Graphics", value: "Graphics"},
            {name: "Discord", value: "Discord"},
            {name: "Bot Development", value: "Bot Development"}
        )
    )
    .addStringOption(option => option
        .setName("feedback")
        .setDescription("Input feedback for your order.")
        .setRequired(true)
    ),

    async execute (interaction) {
        const isClient = interaction.member.roles.cache.has("1503568197683777576");
        const isAdmin = interaction.member.permissions.has("Administrator");
        if (!isClient && !isAdmin) {
            return interaction.reply({content: "<:xMark:1504686168321687574> You must be a client to leave a review.", flags: 64})
        }
        const user = interaction.options.getUser("designer");
        const rating = interaction.options.getString("rating");
        const product = interaction.options.getString("product");
        const feedback = interaction.options.getString("feedback");
        const channel = interaction.guild.channels.cache.get("1503936644708044920");
        await channel.send()
        await interaction.reply({content: "<:check:1504686219223896074> Succesfully sent review. Thanks for ordering with **Clora Studio**."})
    }
}