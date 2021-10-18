const Telegraf=require('telegraf');

const bot=new Telegraf('2035375060:AAFtvL2nIRrckKUQSMjmhcZMLm5Sxwf1qUg');
const helpmessage=`
say something to me
/start-Start The Bot
/help-Command reference
/echo- say You said Echo
/echo <msg>- echo the message
`
bot.use((ctx,next)=>{
    console.log(ctx.chat);
    if(ctx.updateSubTypes[0]== "text"){
        bot.telegram.sendMessage(-749854022,ctx.from.username+ " said " + ctx.message.text)
        
    }
    else{
        bot.telegram.sendMessage(-749854022,ctx.from.username + " sent " + ctx.updateSubTypes[0])
        
    }
    next();
})
 
bot.start((ctx)=>{
    logger(ctx);
    ctx.reply("Hello "+ctx.from.first_name+" I'M Echo Bot");
    ctx.reply(helpmessage);
})

bot.help((ctx)=>{
    logger(ctx);
    ctx.reply(helpmessage);
})

bot.command("echo",(ctx)=>{
    logger(ctx);
    let input=ctx.message.text;
    let inputarray=input.split(" ");
    let message="";

    if(inputarray.length == 1){
        message="you said Echo";
    }else{
        inputarray.shift();
        message=inputarray.join(" ");
    }
    ctx.reply(message);
})
function logger(ctx){
    console.log(ctx.from.username+ " said " + ctx.message.text );
}

bot.launch();