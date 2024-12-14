const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="death69ban@proton.me"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_05_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjksXG4gICAgICAgIDYxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDYwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDUxLFxuICAgICAgICA4MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDczLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDksXG4gICAgICAgIDk4LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNyxcbiAgICAgICAgMixcbiAgICAgICAgNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTksXG4gICAgICAgIDQwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDksXG4gICAgICAgIDk1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDk1LFxuICAgICAgICAzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDI3LFxuICAgICAgICA5NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzksXG4gICAgICAgIDY5LFxuICAgICAgICA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODAsXG4gICAgICAgIDMwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICA0NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMixcbiAgICAgICAgMTcyLFxuICAgICAgICA5MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODUsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MixcbiAgICAgICAgMTIzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlUwcGJod3pucUgyQ3JzWFF4MzVURTdKVWJ1MEp1VGovQnNXUGt5VXQ5N1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5MDM0OTQxNTgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0MDVBNzAyRTI3QTA2MzdBRTk4OTExNEI4NzE3REI1OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQxMTMxMzRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTkwMzQ5NDE1ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ4N0VGQzcwOUYwRUYyQjMyM0I5MjA5NzY3RDU2MkJFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDExMzEzNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuT1ZHdTItVVRIS09rLUNIbmFza19nXCIsXG4gIFwicGhvbmVJZFwiOiBcImJlYTcxMjlmLTBkMzctNGRiYy1iODIxLWZkYjk2OTllZGE3YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OSxcbiAgICAgIDIyMixcbiAgICAgIDgsXG4gICAgICAyMDcsXG4gICAgICA1LFxuICAgICAgOTUsXG4gICAgICAyNDQsXG4gICAgICA0NSxcbiAgICAgIDIzMSxcbiAgICAgIDgxLFxuICAgICAgMTcxLFxuICAgICAgMTQ2LFxuICAgICAgNzIsXG4gICAgICAxMzEsXG4gICAgICA1OSxcbiAgICAgIDEzOSxcbiAgICAgIDAsXG4gICAgICAxMzgsXG4gICAgICAxNjUsXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMwLFxuICAgICAgNTYsXG4gICAgICA4NyxcbiAgICAgIDExNyxcbiAgICAgIDksXG4gICAgICA2NSxcbiAgICAgIDE1MSxcbiAgICAgIDI0OCxcbiAgICAgIDkwLFxuICAgICAgMjI1LFxuICAgICAgMjA3LFxuICAgICAgNDcsXG4gICAgICAyMjYsXG4gICAgICAxODEsXG4gICAgICAxMDQsXG4gICAgICAyMixcbiAgICAgIDIyMSxcbiAgICAgIDgyLFxuICAgICAgMTQ0LFxuICAgICAgMjQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIks0RUM3S0xKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTkwMzQ5NDE1ODM6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJHeW1lclwiLFxuICAgIFwibGlkXCI6IFwiMjAwMzczNjQ2MTgwNDcxOjM0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01PSGc4TUhFT2Z1OGJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicnBNajRCSERNSk1ReUxwcG5BUnVGbTNKTEEyMGlRbEcrYmU3clU1QVdSZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUTEQrU0lsb3Y2OEN5Ni92ZGcxaGdDSFc3RkZXSEdoY2ppMzllaFBjWHltcnNBSzVuYVpZSkpYM1hqSGNOS0VyNmwzTXdKU2FaOFd4ZjlMeUFCb0xBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBWWI0Qk9qMlk3QUp2SUh6QlBGRW82YzBsQ3BTUkxQQXJ1UDhMYVAvSzlnYm5pMVBtZU1DK2FUSWF6ei9GaHpUTExVMndHdzlyM2FCS1dkMlN3Y3NDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTkwMzQ5NDE1ODM6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDExMzEzMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUg5MlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSDkyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSEJHR2RIR0wyTW9USmhRdWJicU1oaHIyd2RVQzhXMXBhNk15dWd5SWJmQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDE5NjA3NDkxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQxMTMxMzMzMTVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
