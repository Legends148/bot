const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {

if (!message.channel.name.startsWith(`destek-`)) return message.channel.send(`Destek talebinizden başka kanalda birini çıkaramazsınız.`).then(x => x.delete({timeout: 5000}));

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
    .setAuthor(`Istediğin yetkilileri çıkardım!`, message.author.avatarURL())
    .setTimestamp();

if(ekip === `discord`){
  message.channel.createOverwrite(roledc,{
    SEND_MESSAGES: false,
    VIEW_CHANNEL: false
  });
message.channel.send(embed.setDescription(`Talebinden başarıyla <@&${ayarlar.discord}> yetkililerini çıkardım.`))};

if(ekip === `minecraft`){
  message.channel.createOverwrite(rolemcc,{
    SEND_MESSAGES: false,
    VIEW_CHANNEL: false
});
message.channel.send(embed.setDescription(`Talebinden başarıyla <@&${ayarlar.minecraft}> yetkililerini çıkardım.`))};

if(ekip === `unturned`){
  message.channel.createOverwrite(roleun, {
    SEND_MESSAGES: false,
    VIEW_CHANNEL: false
  });
message.channel.send(embed.setDescription(`Talebinden başarıyla <@&${ayarlar.unturned}> yetkililerini çıkardım.`))};

if(ekip === `mta`){
  message.channel.createOverwrite(rolemta, {
    SEND_MESSAGES: false,
    VIEW_CHANNEL: false
  });
message.channel.send(embed.setDescription(`Talebinden başarıyla <@&${ayarlar.mta}> yetkililerini çıkardım.`))};

if(ekip === `rust`){
  message.channel.createOverwrite(rolerust, {
    SEND_MESSAGES: false,
    VIEW_CHANNEL: false
  });
message.channel.send(embed.setDescription(`Talebinden başarıyla <@&${ayarlar.rust}> yetkililerini çıkardım.`))};

if(ekip === `fivem`){
  message.channel.createOverwrite(rolefivem, {
    SEND_MESSAGES: false,
    VIEW_CHANNEL: false
  });
message.channel.send(embed.setDescription(`Talebinden başarıyla <@&${ayarlar.fivem}> yetkililerini çıkardım.`))};

};


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["destekcikar","destekçıkar"],
    permLevel: 0,
    name: "DestekCikar"
  }
  
  exports.help = {
    name: "DestekCikar"
  };
