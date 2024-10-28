const {cmd , commands} = require('../command')
const fg =  require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "video",
    desc: "download video",
    category: "download",
    react: "🎬",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply("please give me a url or tittle")
const search = await yts(q)
const data = search.videos[0];
const url  = data.url

let desc = ` 
           🎬 YT VIDEO DOWNLOADER 🎬

 🎬 ‎Title: ${data.title}
 🕝 Duration: ${data.timestamp}
 🌏 Uploaded: ${data.ago}
 🧿 Views: ${data.views}
 🤵 Author: ${data.author.name}
  📎 Url: ${data.url}

    𝑸𝒖𝒆𝒆𝒏_𝑨𝒉𝒊𝒏𝒔𝒂-𝑴𝑫
`

//download video

await conn.sendMessage(from,{image:{url: data. thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

// send audio + document message
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"𝑸𝒖𝒆𝒆𝒏_𝑨𝒉𝒊𝒏𝒔𝒂-𝑴𝑫"},{quoted:mek})
await m.react("✅");
    

}catch(e){
console.log(e)
reply('${e}')
}
})
