const fs = require("fs");
module.exports.config = {
  name: "Shahid",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "Shahid", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "npxs5",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("admin")==0 || event.body.indexOf("Admin")==0 || event.body.indexOf("Shahid")==0 || event.body.indexOf("Shaidu")==0) {
    var msg = {
        body: "🥶𝙎𝙃𝘼𝙃𝙄𝘿 𝘼𝘿𝙈𝙄𝙉 𝙃𝙀𝙍𝙀🥵\nwww.facebook.com/100083420224755",
        attachment: fs.createReadStream(__dirname + `/noprefix/Shaidu.jpg`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }