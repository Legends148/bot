const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar.json');//
const { Client, Util } = require('discord.js');//
require('./Util/eventLoader.js')(client);//
const fs = require('fs');
const moment = require('moment');//
const db = require('quick.db');

var prefix = ayarlar.prefix;


const log = message => {
    console.log(`${message}`);
};
//---------------------------------KOMUT YÜKLEME---------------------------------//
client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./komutlar/', (err, files) => {//
    if (err) console.error(err);//
    log(`${files.length} Adet Komut Yüklenecek.`);//
    files.forEach(f => {//
        let props = require(`./komutlar/${f}`);//
        log(`[+] Yüklenen komut: ${props.help.name}.`);//
        client.commands.set(props.help.name, props);//
        props.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, props.help.name);//
        });
    });
});

client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

//---------------------------------MESAJLAR---------------------------------//

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'sa') {
      msg.reply('Aleyküm selam, hoşgeldin!');
    }
    if (msg.content.toLowerCase() === 'selamun aleyküm') {
      msg.reply('Aleyküm selam, hoşgeldin!');
    }
  });
//---------------------------------MESAJLAR -SON- ---------------------------------//

client.on("guildMemberAdd", member => {
    const kanal = member.guild.channels.cache.get(ayarlar.gelengiden)
    let los = client.users.cache.get(member.id);
    const embedhg = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setAuthor("Hoşgeldin!", member.user.avatarURL({ dynamic: true }))
    .setDescription(`${los} sunucumuza katıldı!`)

kanal.send(embedhg)
member.roles.add(ayarlar.kayıt)
});

client.on("guildMemberRemove", member =>{
    const kanal = member.guild.channels.cache.get(ayarlar.gelengiden)
    let los = client.users.cache.get(member.id)
    const embedbb = new Discord.MessageEmbed()
    .setColor("RED")
    .setAuthor("Güle güle!", member.user.avatarURL({ dynamic: true }))
    .setDescription(`${los} sunucumuzdan ayrıldı!`)

kanal.send(embedbb)
});


client.login(ayarlar.token)