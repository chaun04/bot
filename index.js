const Discord = require("discord.js");
const bot = new Discord.Client();

let prefix = "y-";

bot.on("ready", function(){
    console.log("Prête !");
    bot.user.setActivity(`Yrlania | ${bot.users.size} Membres.`, {type: "WATCHING"});
});
//Info
bot.on("message", message => {
    if(message.content === prefix + "info"){
        message.delete()

        const embed = new Discord.RichEmbed()
        .setColor("#ff5050")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle("Server Information")
        .addField("Nom", `${message.guild.name}`, true)
        .addField("Fondateur", `${message.guild.owner}`, true)
        .addField("Nombre de Membres", `${message.guild.memberCount}`, true)
        message.channel.sendEmbed(embed);
    }
});
//Firewall Delete
bot.on("message", message => {
    if(message.channel.id === "549162090951213066"){
        message.delete()
    }
});
//Suggestions
bot.on("message", message =>{
    if(message.channel.id === "549174913001324555") {

        if(message.author.id === "284377189405818880") return;
            
        let args = message.content.split(" ").slice(0);
        let thingToEcho = args.join(" ")
        
        message.delete()
        
        var embed = new Discord.RichEmbed()
            .setThumbnail(message.guild.iconURL)
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField("**Suggestion**","|" + thingToEcho, true)
            .setColor("#ff5050")
            message.channel.sendEmbed(embed);
        }
});
//News et Sondages
bot.on("message", message => {
    if(message.content.startsWith(prefix + "news")){
        
        if(!message.author.id === "284377189405818880") return;

        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")

        const news = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField("**News**", thingToEcho, true)
        .setImage("https://i.imgur.com/XPeRdl9.jpg")
        .setColor("#ff5050")
        .setTimestamp()
        message.channel.sendEmbed(news);
    }
    if(message.content.startsWith(prefix + "sondage")){
        if(!message.author.id === "284377189405818880") return;

        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")

        const sond = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField("**Sondage**", thingToEcho, true)
        .setImage("https://i.imgur.com/LprqbB7.jpg")
        .setColor("#ff5050")
        .setTimestamp()
        message.channel.sendEmbed(sond);
    }
});

bot.login(process.env.TOKEN)
