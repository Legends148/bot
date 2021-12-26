const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
module.exports = member => {
    member.roles.add(ayarlar.kayıt)

    const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setAuthor("Hoşgeldin!", member.user.avatarURL({ dynamic: true }))
    .setDescription(`<@member.id> sunucumuza katıldı!`)
};
