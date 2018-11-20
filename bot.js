const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


const jackeo = ['' , '434327219310034954' , '432619208363474945' , ''];
client.on('message', message => {
var prefix = "-";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!jackeo.includes(message.author.id)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "say")  {
  if(!message.channel.guild) return message.reply('** __This command only for servers⛔__  **');
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "emb")    {
  if(!message.channel.guild) return message.reply('** __This command only for servers⛔__  **');
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor("RANDOM")
    message.channel.sendEmbed(say);
    message.delete();
  }


});




const jackeo = ['' , '434327219310034954' , '432619208363474945' , ''];
client2.on('message', message => {
var prefix = "-";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!jackeo.includes(message.author.id)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "say")  {
  if(!message.channel.guild) return message.reply('** __This command only for servers⛔__  **');
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "emb")    {
  if(!message.channel.guild) return message.reply('** __This command only for servers⛔__  **');
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor("RANDOM")
    message.channel.sendEmbed(say);
    message.delete();
  }


});




client.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#credits')
    }
});



client.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});




client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
