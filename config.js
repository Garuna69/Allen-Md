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
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vaf78QkBA1evbzjbGO39";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vaf78QkBA1evbzjbGO39" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© 💧⃟❤️‍🩹✨⃝𝑨𝑳𝑳𝑬𝑵 𝑶𝑩𝑬𝑹𝑶𝑰𝑰✨⃝🐦‍🔥" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "917029520656,919034941583,918318542882";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917029520656,919034941583,918318542882";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_42_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzksXG4gICAgICAgIDc5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDksXG4gICAgICAgIDU3LFxuICAgICAgICA0MSxcbiAgICAgICAgNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDQ3LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICA3MixcbiAgICAgICAgMTI4LFxuICAgICAgICAzOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDM3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2LFxuICAgICAgICA2MixcbiAgICAgICAgMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgODQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMsXG4gICAgICAgIDgwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODAsXG4gICAgICAgIDk5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyLFxuICAgICAgICA4NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDkxLFxuICAgICAgICA3NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTksXG4gICAgICAgIDc0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDcyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODksXG4gICAgICAgIDUzLFxuICAgICAgICA5MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMixcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NixcbiAgICAgICAgMTU5LFxuICAgICAgICAzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzUsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiejNraTFiMGxpN0FaOGw4cUJXQWxHbEx6VXhSZ1hreW9QSi9WQkdwRTFxbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTkwMzQ5NDE1ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkYwQURCQ0EzQkQwNzBGODI2ODFFRTVFNTIxNUUxNTczXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDU1NDUyNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTAzNDk0MTU4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjgxQzIyQ0E1NTNGRUJFQTg3N0IzODRGODM5MkQxMDNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0NTU0NTI2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5MDM0OTQxNTgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBMDQ2M0E4NDNCRTg5MTZENjBGQTJDRUU3MjcxQzQ4MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQ1NTQ1MjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTkwMzQ5NDE1ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVDRjE2NDFBMzUzOTdCOTgxNjU0Q0VEMUI2MEEwREZGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDU1NDUzMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1UllmOVhBSlNCV3Q2d2QxVXd3ZFFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjliOGI3MTVjLTIzZTktNDZmZC1hOGEyLWM0Yzc3NTNkMDhjNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICAxMjcsXG4gICAgICAyMjIsXG4gICAgICA3NSxcbiAgICAgIDE2NixcbiAgICAgIDExLFxuICAgICAgNzYsXG4gICAgICAyNDIsXG4gICAgICAxNTYsXG4gICAgICA1NCxcbiAgICAgIDEwNyxcbiAgICAgIDIzLFxuICAgICAgMTg2LFxuICAgICAgMjQ2LFxuICAgICAgMTIyLFxuICAgICAgMTUyLFxuICAgICAgMTI4LFxuICAgICAgMTksXG4gICAgICAxNzQsXG4gICAgICAxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjMsXG4gICAgICAxMjEsXG4gICAgICAxNTUsXG4gICAgICAxNzYsXG4gICAgICAxNjQsXG4gICAgICAxODAsXG4gICAgICAxNTksXG4gICAgICAyMzMsXG4gICAgICAyNDEsXG4gICAgICAyNDEsXG4gICAgICA3OCxcbiAgICAgIDQ5LFxuICAgICAgMjIzLFxuICAgICAgOTUsXG4gICAgICAxMTksXG4gICAgICAxODQsXG4gICAgICA1NCxcbiAgICAgIDc2LFxuICAgICAgNDgsXG4gICAgICA3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxUVo4VFEzV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5MDM0OTQxNTgzOjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDAzNzM2NDYxODA0NzE6MzVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4pig77iPTUFTVEVS8J+NgVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ051N3VmMEhFSm5uakxzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiczdFbTA3dFdDUFM4UFpSQ0xEMmJVR0NiVDI3RVlFQjZzdytLVzNJZ1VEbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlTTZJYnd0aktIZC9pZm5JNFQxL2xjNHkyS095Q0lOa1VJWmdqR3NIMlNMNGVPVDhMeG9KWSs4QUtDc25Jekp0VU5vemJ1ak91eTlyejUxblRZSHVDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRejRxcmJXcVlNbG8zRko1aUM2dzltZ1owSVJTSDJIbHZVUFEwT3YvWjFWajNvSFlxeU9ZQVVxdGJkamtWaGlWQUk4cDNPWXd4bFNCc2g2TUdYczBBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTkwMzQ5NDE1ODM6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ1NTQ1MjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLOGJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUs4Yi5qc29uIjogIntcImtleURhdGFcIjpcIkowcXJ4Y2ZZeG1IODhwSjVOMjVxcFF5b2RZUnNDTis0c2Y5SlI5T0RYOFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjE0MjEzMzcyMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0NTU0NTI2MzYzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "💧⃟❤️‍🩹✨⃝𝑨𝑳𝑳𝑬𝑵 𝑶𝑩𝑬𝑹𝑶𝑰𝑰✨⃝🐦‍🔥" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "🍃",
  packname: process.env.PACK_NAME || ""⏤͟͟͞➣⃟⃟🖤Ꮓᴀʀᴀ~ ⃟⃟⃟⃟🦇",
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
