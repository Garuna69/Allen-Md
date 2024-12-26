const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="death69ban@proton.me"
global.location="Asia/kolkata"


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Garuna69/Allen-Md";
global.gurl =process.env.GURL  || "https://whatsapp.com/channel/0029Vaf78QkBA1evbzjbGO39";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vaf78QkBA1evbzjbGO39" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© 💧⃟❤️‍🩹✨⃝𝑨𝑳𝑳𝑬𝑵 𝑶𝑩𝑬𝑹𝑶𝑰𝑰✨⃝🐦‍🔥" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "919034941583,918318542882";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919034941583,918318542882";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/hGbxMP35/IMG-20241211-WA0045.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_41_12_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDUyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDI2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyLFxuICAgICAgICA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNixcbiAgICAgICAgOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDcwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDksXG4gICAgICAgIDc2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJwQXF5a1J6WjhJWlVsTEhuMlh4dmdGSG45WE85Z3FxSS9yTUJMMDg3ZTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdYcjV0VDIwUzZHVVVGQzVvN2VUVFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGVkMTk5ZTktNmExYi00OGY4LTg5MGEtZGZjMjZlN2I0YzJmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI2LFxuICAgICAgMTI0LFxuICAgICAgNyxcbiAgICAgIDI0NyxcbiAgICAgIDQxLFxuICAgICAgMTg5LFxuICAgICAgNzQsXG4gICAgICAxMDIsXG4gICAgICA2MSxcbiAgICAgIDIwMyxcbiAgICAgIDE2OSxcbiAgICAgIDE0MSxcbiAgICAgIDc0LFxuICAgICAgMjAxLFxuICAgICAgMTE2LFxuICAgICAgNDIsXG4gICAgICAyMzUsXG4gICAgICAyMDksXG4gICAgICAxMzgsXG4gICAgICAzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTgsXG4gICAgICAxMTAsXG4gICAgICA3OSxcbiAgICAgIDE1MSxcbiAgICAgIDE5OCxcbiAgICAgIDIxNyxcbiAgICAgIDI5LFxuICAgICAgNDgsXG4gICAgICA1MixcbiAgICAgIDI0NixcbiAgICAgIDIwMCxcbiAgICAgIDcwLFxuICAgICAgMTI3LFxuICAgICAgMjI2LFxuICAgICAgMjQzLFxuICAgICAgNDYsXG4gICAgICAxMzAsXG4gICAgICAxMyxcbiAgICAgIDc0LFxuICAgICAgMTIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRDSllWUjlUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTkwMzQ5NDE1ODM6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMDM3MzY0NjE4MDQ3MTozOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOdTd1ZjBIRUxtT3Ryc0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInM3RW0wN3RXQ1BTOFBaUkNMRDJiVUdDYlQyN0VZRUI2c3crS1czSWdVRG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUENPcUduanVmV0FVd0dTQjNRVEdNYWlVSmxTb3hhcXg2c2Y3TkNRNkR4S1JlY0xlbnlXMm5NN1ROWUYzclN2LzZub1c2QzJRNGlmZ28xVHZhMHdXQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieGNaZ2w3anpiTWVYNzQwaE1uRGV6eTE1aTN6OFhZTk5TTFZVeVJPK0lzT0NTYkNPZlNpRzdjbHBIOG0raTRoUktaZXllVThEY1gzNkRFVTVNRXhpamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5MDM0OTQxNTgzOjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1MjMxMjkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSzhiXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLOGIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKMHFyeGNmWXhtSDg4cEo1TjI1cXBReW9kWVJzQ04rNHNmOUpSOU9EWDhVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxNDIxMzM3MjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "💧⃟❤️‍🩹✨⃝𝑨𝑳𝑳𝑬𝑵 𝑶𝑩𝑬𝑹𝑶𝑰𝑰✨⃝🐦‍🔥" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "🍃",
  packname: process.env.PACK_NAME || "⏤͟͟͞➣⃟⃟🖤Ꮓᴀʀᴀ~ ⃟⃟⃟⃟🦇",
  botname : process.env.BOT_NAME  || "❤‍🩹𝚯𝚪𝚰𝚴💸",
  ownername:process.env.OWNER_NAME|| "Allen",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
