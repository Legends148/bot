const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed()
.setColor(`#a26f6f`)
.setFooter(`YolHost Bilişim Hizmetleri`)
.setTimestamp()

message.channel.send(embed.setAuthor(`Destek ・ Yardım`,message.author.avatarURL()).setDescription(`**!destekac** ・ Yardım talebi oluşturursun.
**!destekkapat**・ Yardım talebini kapatırsın.
**!destekekle** ・ Yardım talebine istediğin yetkilileri eklersin.
**!destekcikar** ・ Yardım talebinden istediğin yetkilileri çıkarırsın.
`))};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["yardim","yardım","destek"],
    permLevel: 0,
  }
  
  exports.help = {
    name: "Yardım"
  };