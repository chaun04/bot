const Discord = require("discord.js");
const bot = new Discord.Client();
const http = require('http');
const express = require('express');
const app = express();
require('http').createServer().listen(3000)


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
//News et Sondages
bot.on("message", message => {
    if(message.content.startsWith(prefix + "news")){
        
        if(!message.author.id === "284377189405818880") return;

        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
    
        message.delete()
        
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

        message.delete()
        
        const sond = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField("**Sondage**", thingToEcho, true)
        .setImage("https://i.imgur.com/LprqbB7.jpg")
        .setColor("#ff5050")
        .setTimestamp()
        message.channel.sendEmbed(sond);
    }
});
//Suggestions
bot.on("message", message => {
    if(message.channel.id === "549174913001324555"){
        
        if(message.author.id === "284377189405818880") return;
        
        const args = message.content.slice(0).trim().split(/ +/g);
        const msgtosend = args.join(" ");
        
        message.delete()
        
        const sug = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField("**Suggestions**", msgtosend, true)
        .setColor("#ff5050")
        .setTimestamp()
        message.channel.sendEmbed(sug);
    }
});
//Sondages Thomas
bot.on("message", message => {
    if(message.content.startsWith(prefix + "t")){
        message.delete()

        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
    
        message.delete()
        
        const momo = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField("**Les Sondages de Thomas**", thingToEcho, true)
        .setColor("#ff5050")
        .setTimestamp()
        message.channel.sendEmbed(momo);
    }
});
bot.login(process.env.TOKEN)
app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
  });
  app.listen(process.env.PORT);
  setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
  }, 200000);
