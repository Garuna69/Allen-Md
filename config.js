const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_32_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTksXG4gICAgICAgIDUzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgODUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NixcbiAgICAgICAgMTMsXG4gICAgICAgIDUwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDYyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDY2LFxuICAgICAgICAzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk5LFxuICAgICAgICAyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY4LFxuICAgICAgICA1MixcbiAgICAgICAgOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDM0LFxuICAgICAgICA2NSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICA0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDkxLFxuICAgICAgICA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODMsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjEzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQwLFxuICAgICAgICA5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI3LFxuICAgICAgICA2NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDkxLFxuICAgICAgICAzOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTksXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODAsXG4gICAgICAgIDgyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgODAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1OSxcbiAgICAgICAgNjksXG4gICAgICAgIDg5LFxuICAgICAgICA2MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNCxcbiAgICAgICAgODgsXG4gICAgICAgIDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDg1LFxuICAgICAgICAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA3LFxuICAgICAgICAxODksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjExLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk84RWx3YUdMRXQrTlJyWExoV0VKdUpsKzZKZ0RFeUdTR2huOFBIZmdGNEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5MDM0OTQxNTgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMzQ2NzBDQkY3NDk3NkRFRDQxQTZDNjkwQTYwNzQ2Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM4NTU1NDJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTkwMzQ5NDE1ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlDQjFEOUM0QzY0RjJERjQ5NEExRDVENTY4NTMwQzE1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzg1NTU0M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTAzNDk0MTU4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMENGQ0U2QTJDMzc3NjdEOEVDQjM0QkMyNDdDQjY2NjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzODU1NTQ3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5MDM0OTQxNTgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFQzVEQ0VDQTMzQjIzNUQ1RjAzRTFBRDVCQURBQ0E3Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM4NTU1NDdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSEdmNWF0bkpTRmVhcTlMcEJGbktXd1wiLFxuICBcInBob25lSWRcIjogXCIzNGYxMTVkNi03ZWU5LTRiN2EtODgyYy1kMTU1YTgyYTA0Y2FcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUwLFxuICAgICAgNzgsXG4gICAgICAyNixcbiAgICAgIDU5LFxuICAgICAgMTU2LFxuICAgICAgODYsXG4gICAgICA3NixcbiAgICAgIDI0OCxcbiAgICAgIDE0OCxcbiAgICAgIDEzNixcbiAgICAgIDE5OSxcbiAgICAgIDk3LFxuICAgICAgNDYsXG4gICAgICAxNTUsXG4gICAgICAzNixcbiAgICAgIDEsXG4gICAgICA4MixcbiAgICAgIDI1NSxcbiAgICAgIDIzMixcbiAgICAgIDE1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTcsXG4gICAgICAyMDUsXG4gICAgICAxMzUsXG4gICAgICA5MCxcbiAgICAgIDIsXG4gICAgICAyMyxcbiAgICAgIDEwNixcbiAgICAgIDE2MixcbiAgICAgIDE3OSxcbiAgICAgIDYzLFxuICAgICAgMTEyLFxuICAgICAgMTU2LFxuICAgICAgMTYzLFxuICAgICAgMCxcbiAgICAgIDE0NCxcbiAgICAgIDc3LFxuICAgICAgMTUxLFxuICAgICAgNjEsXG4gICAgICA2LFxuICAgICAgMTI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxIM1JIWUQ2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTkwMzQ5NDE1ODM6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJHeW1lclwiLFxuICAgIFwibGlkXCI6IFwiMjAwMzczNjQ2MTgwNDcxOjMyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01LSGc4TUhFTENTNHJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicnBNajRCSERNSk1ReUxwcG5BUnVGbTNKTEEyMGlRbEcrYmU3clU1QVdSZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJraDBERW1ZNkx3cGtORkNMSWVjTjZHSTAvL2xKYTg5bkdaVHFOSjgyejVmcFVBUHV0TldUT3VJckwxU0cvVkJQVjNuZ1RsZDhRZkJvektQblhXNmJDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJODR1VTB0MVJpMXllOVdwcW5sSitnZy8xTnZ2Y0pKRDIwbVhZRlowMXM2Ynh5MzJ0OTQvbUt5WjdKUFh6K05RZnZ1UjJiVFFSQnhwd0RQekJyd0doZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTkwMzQ5NDE1ODM6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzg1NTU0MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1nM1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWczLmpzb24iOiAie1wia2V5RGF0YVwiOlwicVVET0JEcVl6ejJnM2J0cUZ4Q2E1Wm5yMHU0RnRFem0wQjZFaElsSEUxWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDE5NjA3NDkwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM4NTU1NDEzMDZcIn0iCn0="  // PUT your SESSION_ID 


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
