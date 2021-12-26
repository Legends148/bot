const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {

if (!message.channel.name.startsWith(`destek-`)) return message.channel.send(`Destek talebinize başka kanalda birini ekleyemezsin!`).then(x => x.delete({timeout: 5000}));

let ekip = args[0]
if(!ekip) return message.channel.send(`Hangi kategoriyi istiyorsun?`).then(x => x.delete({timeout: 5000}));
if(ekip != `minecraft` && ekip != `discord` && ekip != `unturned` && ekip != `mta` && ekip != `rust` && ekip != `fivem`);

var roledc = message.guild.roles.cache.get(ayarlar.discord)
var rolemcc = message.guild.roles.cache.get(ayarlar.minecraft)
var roleun = message.guild.roles.cache.get(ayarlar.unturned)

var rolemta = message.guild.roles.cache.get(ayarlar.mta)
var rolerust = message.guild.roles.cache.get(ayarlar.rust)
var rolefivem = message.guild.roles.cache.get(ayarlar.fivem)


const embed = new Discord.MessageEmbed()
    .setColor("#02fce8")
    .setAuthor(`Istediğin yetkilileri ekledim!`, message.author.avatarURL())
    .setTimestamp();

if(ekip === `discord`){
  message.channel.createOverwrite(roledc,{
    SEND_MESSAGES: true,
    VIEW_CHANNEL: true
  });
message.channel.send(embed.setDescription(`Talebine başarıyla <@&${ayarlar.discord}> yetkililerini ekledim.`))};

if(ekip === `minecraft`){
  message.channel.createOverwrite(rolemcc,{
    SEND_MESSAGES: true,
    VIEW_CHANNEL: true
});
message.channel.send(embed.setDescription(`Talebine başarıyla <@&${ayarlar.minecraft}> yetkililerini ekledim.`))};

if(ekip === `unturned`){
  message.channel.createOverwrite(roleun, {
    SEND_MESSAGES: true,
    VIEW_CHANNEL: true
  });
message.channel.send(embed.setDescription(`Talebine başarıyla <@&${ayarlar.unturned}> yetkililerini ekledim.`))};

if(ekip === `mta`){
  message.channel.createOverwrite(rolemta, {
    SEND_MESSAGES: true,
    VIEW_CHANNEL: true
  });
message.channel.send(embed.setDescription(`Talebine başarıyla <@&${ayarlar.mta}> yetkililerini ekledim.`))};

if(ekip === `rust`){
  message.channel.createOverwrite(rolerust, {
    SEND_MESSAGES: true,
    VIEW_CHANNEL: true
  });
message.channel.send(embed.setDescription(`Talebine başarıyla <@&${ayarlar.rust}> yetkililerini ekledim.`))};

if(ekip === `fivem`){
  message.channel.createOverwrite(rolefivem, {
    SEND_MESSAGES: true,
    VIEW_CHANNEL: true
  });
message.channel.send(embed.setDescription(`Talebine başarıyla <@&${ayarlar.fivem}> yetkililerini ekledim.`))};

};


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["destekekle"],
    permLevel: 0,
    name: "DestekEkle"
  }
  
  exports.help = {
    name: "DestekEkle"
  };
