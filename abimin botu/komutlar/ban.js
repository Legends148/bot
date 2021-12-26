const Discord = require("discord.js");
const moment = require("moment");
const ayarlar = require("../ayarlar.json")
const talkedRecently = new Set();
const ms = require("ms");
const { parseZone } = require("moment");

module.exports.run = async(client, message, args)  => {

  
  if (!message.member.roles.cache.has(ayarlar.discordsor) && !message.member.roles.cache.has(ayarlar.genelsorumlu) && !message.member.hasPermission(8)) return message.channel.send('Bu komutu kullanmak için gerekli yetkin yok!').then(x => x.delete({timeout: 6000}));

 if(!args[0]) return message.channel.send('Ban atmam gereken kişiyi etiketlemen gerek ya da IDsini girmen gerek').then(x => x.delete({timeout: 6000}));

let reason = args.slice(1).join(' ')

let user = message.mentions.users.first() || client.users.get(args[0]) || message.guild.members.find(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).user
if(!reason) return message.channel.send('Üyeyi banlamam için bir sebep belirtmen gerek').then(x => x.delete({timeout: 6000}));
if(!user) return message.channel.send('Belirtilen kullanıcı sunucuda değil').then(x => x.delete({timeout: 6000}));

let member = message.guild.member(user)
if(!member) return message.channel.send('Belirtilen kullanıcı sunucuda değil').then(x => x.delete({timeout: 6000}));
if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send('Belirtilen kullanıcı senden üst veya aynı rolde bu yüzden işlem yapamam').then(x => x.delete({timeout: 6000}));
  member.ban({days: 7, reason: reason})
  message.channel.send(`<@${user}> adlı üyeyi sunucudan \`${reason}\` sebebiyle banladım!`).then(x => x.delete({timeout: 15000}));
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["ban", "yasakla"],
    PermLvl: 0,
}

exports.help = {
  name: 'ban'
};