module.exports = {
    name: "say",

    async execute (message, args) {
        const isAdmin = message.member.permissions.has("Administrator");
        if (!isAdmin) {
            return message.reply("<:xMark:1504686168321687574> You do not have permission to run this command.")

        }
        const text = args.slice(0).join(" ");

        await message.delete();
        await message.channel.send(text)
    }
}