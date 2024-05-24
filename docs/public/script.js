function sendDiscordWebhookMessage(message) {
    // this is just a demo link, replace with your real discord webhook URL.
    const webhookUrl = 'https://discord.com/api/webhooks/1190547537883574323/tKLcophXurC8v5MCJblcrMBAmdbQnzsZBn9ITqLs3WR_YgA8m1cLTvbHGso7twIRH3Z5';

    // embed message
    const payload = {
        embeds: [
            {
                title: 'A user visited the helpdesk website',
                description: message,
                color: 0xFF851A, // orange Hex color code for a greenish color, you can customize this
                timestamp: new Date().toISOString(),
            },
        ],
    };
    // Send to the Discord webhook
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
}
