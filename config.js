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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_03_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDIyLFxuICAgICAgICA3MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NixcbiAgICAgICAgODUsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMixcbiAgICAgICAgODgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDc3LFxuICAgICAgICA0NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgNDMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDYyLFxuICAgICAgICA2MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzksXG4gICAgICAgIDM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA0MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDcxLFxuICAgICAgICA0MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICA3OCxcbiAgICAgICAgODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDgwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDksXG4gICAgICAgIDk2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUwLFxuICAgICAgICA5MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieFBheHcxUkJQWDJ0K2t6NktGOVNZMmxTTndzelRtbmVhMW1BOEtUb2RaST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTc1NDkyOTMwNjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNDQjQ1REU2NDUwRkZEODUxQ0I2QTUxNjhFRUNCRDYzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDU1NTgxNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzU0OTI5MzA2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUVBQ0Y1NkQ3QUNEN0E5NkFCQkYwQ0I1QUY5NDM5MjZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0NTU1ODE0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3NTQ5MjkzMDY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxREYwOTczOUQyNTQ0RkY0MTNCRTY3OTUxNDBBQTMwQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQ1NTU4MTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTc1NDkyOTMwNjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNFMkYxQUU4MEVCMTJENkQwRTc1MDAxNTVEMDcxOUQ2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDU1NTgxN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4eXRKNHp5VVJPRzh3VG5SU1A4VTFnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRlZmU0ZmJkLTg0NmEtNDMxOC04YjVlLTAyMzUwNTk4OTk4YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAwLFxuICAgICAgMTI0LFxuICAgICAgMTIsXG4gICAgICAxNjAsXG4gICAgICA2LFxuICAgICAgNDMsXG4gICAgICAyNDgsXG4gICAgICAyNTQsXG4gICAgICAxNjMsXG4gICAgICAxMyxcbiAgICAgIDQ2LFxuICAgICAgMjA1LFxuICAgICAgODQsXG4gICAgICAyMjksXG4gICAgICAxMixcbiAgICAgIDc2LFxuICAgICAgMjAsXG4gICAgICAxNTYsXG4gICAgICAxLFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYzLFxuICAgICAgMTA0LFxuICAgICAgMjM0LFxuICAgICAgMjEyLFxuICAgICAgMTA4LFxuICAgICAgOTgsXG4gICAgICA2NyxcbiAgICAgIDIxOCxcbiAgICAgIDE2MyxcbiAgICAgIDIwNyxcbiAgICAgIDEwNSxcbiAgICAgIDg4LFxuICAgICAgMTE0LFxuICAgICAgMjcsXG4gICAgICA3MCxcbiAgICAgIDQyLFxuICAgICAgMTg4LFxuICAgICAgMjQyLFxuICAgICAgNDMsXG4gICAgICAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlMzTTZUUjVaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc1NDkyOTMwNjg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjUzMTgwMjg1ODU3OTgyOjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzI5d2ZRRUVLSHhqTHNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSci9tSTB5L1FJeklsMGErVHhQdUltaHVJczZUV3UwWlRxVHZmVWgyTHdNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkhycGh4S2g4M3ZjZ0Vpc3V0TGFoWGQxc3U4NExqQmdWc3NQSDYrWFVyMmM2aUV5b0tQWHY2cVR2WjFsNTBIRUJqWm9kQVZPYXdmbUdsTGpNL1czeEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhianZ0RC9hcHVDSGRCQ3A0cWpTeDNqb0pNeWdkZFAvVmkwQnJOb3U4TEQzNkF0Tis5bk52WkhreXovMi8vWmhaTklCNVMwa1ZMYVlIWlE5cGR0ZGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzU0OTI5MzA2ODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ1NTU4MTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBR2lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFHaS5qc29uIjogIntcImtleURhdGFcIjpcIlFENDhnMHNnRk9XZWVYV01qNU9oT0FvTzJyWDBlMkFTVVk3bFZpeDluTEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTMxODA4NDMzMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0NTU1ODE2NzQyXCJ9Igp9"  // PUT your SESSION_ID 


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
