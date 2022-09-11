const Discord = require("discord.js")
const client = new Discord.Client(
    {intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]}
)

client.login("MTAxNTYwNDg2NzgzNTkwMDAzNQ.GiBmKT.BeEleLzRu9br2L8Q5QtVa28ApUfBRWdyedl9WQ")

client.on("ready", () =>{
     console.log(BotOnline)
})

client.on("messageCreate" , (message) =>{
    if(message.content == "!youtube"){
        message.channel.send("quessto e' il mio canale:https://www.youtube.com/channel/UCj9qIV5VAGGPtYF0KQViC3A ")
    }
    
    if (message.content == "!ciao"){
         message.channel.send("ciao anche a te!")
    }

})