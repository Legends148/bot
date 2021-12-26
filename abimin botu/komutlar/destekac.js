const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const dn = new db.table('DestekNumarasi')

exports.run = async (client, message, args) => {

    if(message.channel.id === ayarlar.destekKanal) {
    if(message.author.id === client.user.id) return;
    if(message.author.bot === true) return;
        
    let kategöri = db.get(`destekkg_${message.guild.id}`);
      

    let dnn = dn.get(`dn.${message.guild.id}`) + 1;
    dn.add(`dn.${message.guild.id}`, 1)

    message.channel.send(`Destek talebin oluşturuldu.`)
    message.guild.channels.create(`destek-${dnn}`, "text").then(c => {
        
    let role2 = message.guild.roles.cache.find(role => role.name === '@everyone')
    let uye = message.guild.roles.cache.find(role => role.id === ayarlar.uye)

    
const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setAuthor(`Loki Bilişim Hizmetleri`, message.author.avatarURL())
    .addField(`Merhaba ${message.author.username}!`, `Başarıyla destek talebini oluşturdum. En kısa zamanda müsait bir yetkili dönüş yapacaktır.`)
    .setFooter(`Talebi !destekkapat kapatabilirsin.`)
    .setTimestamp();
const embed2 = new Discord.MessageEmbed()
    .setColor("RED")
    .setAuthor(`YolHost Bilişim Hizmetleri`, message.author.avatarURL())
    .setDescription(`Hangi konudan yardım istiyorsan !destekekle <konu> ile o konunun uzmanlarına danışabilirsin.
                    **======================================================**
                    Konular: __minecraft__, __discord__, __unturned__, __mta__, __fivem__ ve __rust__`)
    .setFooter(`Eğer sorunun üst yetkililer ise desteğe birini eklemene gerek yok.`)
    .setTimestamp()
    c.send({ embed: embed })
    c.send(embed2)
    let kategori = message.guild.channels.cache.get(ayarlar.destekKategori)   
    c.setParent(message.guild.channels.cache.find(channel => channel.id === ayarlar.destekKategori));;

      c.createOverwrite(role2, {
      SEND_MESSAGES: false,
      VIEW_CHANNEL: false
      });
      c.createOverwrite(message.author, {
      SEND_MESSAGES: true,
      VIEW_CHANNEL: true
      });
      c.createOverwrite(uye, {
      SEND_MESSAGES: false,
      VIEW_CHANNEL: false
      })
    });
}};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["destekac","destekaç"],
    permLevel: 0,
    name: "DestekAc"
  }
  
  exports.help = {
    name: "DestekAc"
  };
