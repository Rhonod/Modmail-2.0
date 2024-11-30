module.exports = {
    client: {
        token: 'MTMxMjIxMDcxMDg3NjM5MzUyMg.GJqfdf._14HoQobREO4WWuLjjCQgG12iB3ao9rLxfTcGU', // ← Your bot token (.env IS RECOMMENDED)
        id: '1312210710876393522' // ← Your bot ID
    },
    modmail: {
        guildId: '1311792114195239003', // ← Your server ID
        categoryId: '1312232140448071760', // ← The modmail category ID
        staffRoles: ['1311792114195239012'], // ← The modmail staff roles IDs
        mentionStaffRolesOnNewMail: true // ← Mention staff roles when there is a new mail?
    },
    logs: {
        webhookURL: 'https://discord.com/api/webhooks/1312232634298007602/W8AQdodO80Z9f9DcdXUaXJNiagRhp5Fh6vdODpQ4m3oj1w3mxrJXbj8-o32rHBqQB90A' // ← The logging webhook URL (OPTIONAL) (.env IS RECOMMENDED)
    }
};
