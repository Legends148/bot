const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const ms = require("ms");
exports.run = async (client, message, args) => {
    
  if (!message.member.roles.cache.has(ayarlar.discordsor) && !message.member.roles.cache.has(ayarlar.genelsorumlu) && !message.member.hasPermission(8)) return message.channel.send('Bu komutu kullanmak için gerekli yetkin yok!').then(x => x.delete({timeout: 6000}));

  let kişi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!kişi) return message.channel.send(`Mutesini açmam gereken kişiyi belirt`).then(x => x.delete({timeout: 6000}));

  if (!message.guild.roles.cache.find(role => role.id === ayarlar.mute)) return message.channel.send(`Sunucuda \`Susturulmuş\` rolünü bulamadım bu yüzden işleme devam edemiyorum`).then(x => x.delete({timeout: 6000}));

            kişi.roles.remove(message.guild.roles.cache.find(role => role.id === ayarlar.mute));
            message.channel.send(`<@${kişi.id}> adlı üyenin susturulmasını kaldırdım`).then(x => x.delete({timeout: 15000}));
    

}
      
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["unmute","skaldır"],
  permLevel: 0,
}

exports.help = {
  name: "unmute"
};