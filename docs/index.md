---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "SkyLine Guild"
  text: "Helpdesk"
  tagline: Welcome to the our (SkyLine/NotReal003) helpdesk!
  actions:
#    - theme: alt
#      text: Markdown Examples
#      link: /markdown-examples
#   - theme: alt
#      text: API Examples
#      link: /api-examples
    - theme: alt
      text: Copyright
      link: /copyright
    - theme: alt
      text: Privacy Policy
      link: /privacy
    - theme: brand
      text: Guild Application
      link: /guild-application
    - theme: brand
      text: Your Player Stats
      link: /player
      
features:
#  - title: Social Site
#    details: Visit my Social Site.
#    link: https://notreal003.github.io
#  - title: Feature B
#    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#  - title: Feature C
#    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---
<script>
  function sendDiscordWebhookMessage(message) {
    // this is just a demo link, replace with your real discord webhook URL.
    const webhookUrl = 'https://discord.com/api/webhooks/1190547537883574323/tKLcophXurC8v5MCJblcrMBAmdbQnzsZBn9ITqLs3WR_YgA8m1cLTvbHGso7twIRH3Z5';

    // embed message
    const payload = {
        embeds: [
            {
                title: 'A user visited the helpdesk website',
                description: message,
                color: 0xFF851A, // orange Hex color code, you can customize this
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

document.addEventListener('DOMContentLoaded', function() {
    sendDiscordWebhookMessage('A user has visited the site.');
});

</script>
