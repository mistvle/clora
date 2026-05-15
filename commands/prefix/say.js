module.exports = {
    name: "say",

    async execute (message, args) {
        const hasRole = message.member.roles.cache.has("1503568193762103306 ");
        const isAdmin = message.member.permissions.has("Administrator");
        if (!isAdmin && !hasRole) {
            return message.reply("<:xMark:1504686168321687574> You do not have permission to run this command.")

        }
        const text = args.slice(0).join(" ");

        await message.delete();
        await message.channel.send(text)
    }
}