const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const ms = require("ms");
const moment = require('moment')
const momentt = require("moment-duration-format")

exports.run = async (client, message, args) => {
  
  
  if (!message.member.roles.cache.has(ayarlar.discordsor) && !message.member.roles.cache.has(ayarlar.genelsorumlu) && !message.member.hasPermission(8)) return message.channel.send('Bu komutu kullanmak için gerekli yetkin yok!').then(x => x.delete({timeout: 6000}));

  let kişi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!kişi) return message.channel.send(`Mute atmam gereken kişiyi etiketlemen gerek ya da IDsini girmen gerek`).then(x => x.delete({timeout: 6000}));


    let bot = message.guild.members.cache.find(c => c.id === ayarlar.bot)
    
    let muted = message.mentions.members.first() || message.guild.members.cache.find(c => c.id === args[0]);
    if (!muted) { message.channel.send(`Mute atmam gereken kişiyi etiketlemen gerek ya da IDsini girmen gerek`).then(x => x.delete({timeout: 6000}));
    } else {
      if (!message.guild.roles.cache.get(ayarlar.mute)) 
    {
      return message.channel.send(`Sunucuda \`Susturulmuş\` rolünü bulamadım bu yüzden işleme devam edemiyorum`).then(x => x.delete({timeout: 6000}));
    } else {
      if (muted.roles.highest.position >= message.member.roles.highest.position) 
      {
        return message.channel.send(`Belirtilen kullanıcı senden üst veya aynı rolde bu yüzden işlem yapamam`).then(x => x.delete({timeout: 6000}));
      } else {
        if (muted.roles.highest.position >= bot.roles.highest.position)
        {
          return message.channel.send(`Belirtilen kullanıcı benden üst veya aynı rolde bu yüzden işlem yapamıyorum`).then(x => x.delete({timeout: 6000}));
        } else {
        let mutezaman = args[1]
          .replace("sn", "s")
          .replace("dk", "m")
          .replace("sa", "h")
          .replace("gün", "d");
        if (!mutezaman) {
          message.reply("Zaman girmen gerek").then(x => x.delete({timeout: 6000}));
        } else {
          let sebep = args.slice(2).join(" ");
          if(!sebep) return message.channel.send(`Sebep belirtmen gerek`).then(x => x.delete({timeout: 6000}));
          
          
          let vakit = mutezaman
            .replace("m", " dakika")
            .replace("s", " saniye")
            .replace("h", " saat")
            .replace("d", " d");
                    
          try {
            message.channel.send(`<@${kişi.id}> adlı üyeyi \`${sebep}\` sebebinden **${vakit}** boyunca susturdum`).then(x => x.delete({timeout: 15000}));
            muted.roles.add(message.guild.roles.cache.find(role => role.id === ayarlar.mute));
          } catch (e) {
            console.log(e);
          }

          setTimeout(async function() {
            muted.roles.remove(message.guild.roles.cache.find(role => role.id === ayarlar.mute));
          }, ms(mutezaman));
        }
      }
    }
  }
}
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mute","sustur"],
  permLevel: 0,
  name: "mute"
}

exports.help = {
  name: "mute"
};