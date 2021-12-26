const Discord = require("discord.js");
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {

    if (!message.channel.name.startsWith(`destek-`)) return message.channel.send(`Destek talebinizi başka kanalda kapatamazsınız!`).then(x => x.delete({timeout: 5000}));

    message.channel.send(`Talebi kapatmak için 10 saniye içerisinde \`kapat\` yazman gerek!`)
    .then((m) => {message.channel.awaitMessages(response => response.content === 'kapat', {max: 1,time: 10000,errors: ['time'],})
  
    .then((collected) => {
    message.channel.delete()
    })
   .catch(() => {
    m.edit('Kapatma zaman aşımına uğradı').then(m2 => {
    m2.delete();
    }, 3000);
    });
    });
    }
    
    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ["dkapat","destekkapat"],
        permLevel: 0,
        name: "DestekKapat"
      }
      
      exports.help = {
        name: "DestekKapat"
      };