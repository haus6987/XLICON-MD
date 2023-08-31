const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "4917388038838"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xxx@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'mars'
global.gurl = 'https://instagram.com/was.ash.enough/' // add your username
global.sudo = process.env.SUDO || '4917388038838' 
global.devs = '4917388038838';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+4917388038838
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVA1bHNTeUoxMjJKdFNnSE4vSWhacCtlV09EbVljNHNETVB5Q055Nm5HYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTEJKTmJJYXJ1dGZ5Yk51anpQWmpCbEpzRVR3NUVUVXFvSThCS3dHYW1sND0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTWZxd3RYdVVZbnpTTTBYTVV3UVR2Q0wxNkZ0ZUlxRmRHeE43eXpNbVdZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5b1QrenBESTJuR2FQd2hCQ3k3cStwN1BNMmpjaWI4Y2ZTK3VyT3A5c1NVPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktIc0NPQkZHY3hDVkpXT0xwekJXclVaWjgxK2hRcklsdUpleTdzcVJxMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNuS0dJQytKb1hQL3NFZ1VGTWNLNXBjcTBYMGUxZVZQQlpQcHJUZzUxVnM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkTFFxd0pEd0lwbkNiM2ZGTTRxalZZOEZwSThiTVdvK0grT1pndGhCcVdPQTYvVVp6YXltbkQzQW55RHFzS0RSQmYvdDFUUW9WK042TFNvaS8rODZqUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEwNSwiYWR2U2VjcmV0S2V5IjoiTFBNWkdTWGFnaWljZTAzMjBsTmRRZDdrMWg5QW1IRUx4c1VZOG5yd3QrMD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQVNURVNqTXNUd3F0Zncxd1Nvamo0QSIsInBob25lSWQiOiIwNGNlMWVhYS1jODQwLTQzYjctOTliZi00YjY5MjBjMTk4ODIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUTdTK3YwQ0pNMmlVY1FHYkVFRHNManFEQ1NFPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrWDhXVW5hamRwenRYVnNyNVZQeWVvQlJ3UzA9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNMVDNtdFVGRU9Mb3dhY0dHQUk9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjU2NDBUVTdPYzlMN255RyszdDd1RzlFRHVwUStkQ3dqenVIT2dGcmx3VUU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjF1cHp4YTFUcU8ranZoS2l3REw0cTV3WXdhbDE4OFRzdTI3UU1JOVVYMmx1dngxdUpGSUEwb3ZsRlIrc1BkNVg3N2JodndYZS9kZDNFZWhRdHNvWUNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJjYXJWR0Y2SU51anlCd05heUQ2YWFYNDQwQVhMOGhZUnNOMUsrZm1NZGRqb2k2Ry9TNWNEYVE2VUswNVFkNUlxbUEwa05qSmMvd1hZSHlreDQwZ0RoZz09In0sIm1lIjp7ImlkIjoiNTA2NjQ3Nzc3Nzc6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBU0gifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA2NjQ3Nzc3Nzc6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlZXVORTFPem5QUys1OGh2dDdlN2h2UkE3cVVQblFzSTg3aHpvQmE1Y0ZCIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjkzNDgwMDM2fQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'ASH',
  packname:  process.env.PACK_NAME || '<3',
  
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'ASH' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
