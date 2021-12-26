const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")
exports.run = function(client, message, args) {
  if (!message.member.roles.cache.has(ayarlar.discordsor) && !message.member.roles.cache.has(ayarlar.genelsorumlu) && !message.member.hasPermission(8)) return message.channel.send('Bu komutu kullanmak için gerekli yetkin yok!').then(x => x.delete({timeout: 6000}));
  
  let smesaj = args[0] 
  if(!smesaj) return message.channel.send(`Silinecek mesaj miktarını yazmalısın`).then(x => x.delete({timeout: 1500}));
  if(smesaj && isNaN(smesaj)) return message.channel.send(`Silinecek mesaj bir sayı olmalıdır`).then(x => x.delete({timeout: 1500}));
  if(smesaj>100) return message.channel.send(`Silinecek mesaj sayısı 100'den küçük olmalıdır`).then(x => x.delete({timeout: 1500}));

  message.channel.bulkDelete(smesaj).then(() => {
  message.channel.send(`Mesajları başarıyla sildim`).then(x => x.delete({timeout: 6000}));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil','temizle','süpür'],
  permLevel: 2,
};

exports.help = {
  name:'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};