const Discord = require('discord.js');

exports.run = async(client, message) => {

message.channel.send(`**Pingim:** *__${client.ws.ping}__*`)

}

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['p', 'ms'],
permLevel: 0
};

exports.help = {
name: 'ping',
description: 'Botun pingini gösterir',
usage: 'ping' };