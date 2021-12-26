const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
module.exports = member => {    
        const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setAuthor("Güle güle!", member.user.avatarURL({ dynamic: true }))
        .setDescription(`<@member.id> sunucumuzdan ayrıldı!`)
};
