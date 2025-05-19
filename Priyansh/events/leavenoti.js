module.exports.config = {
  name: "leave",
  eventType: ["log:unsubscribe"],
  version: "1.0.0",
  credits: "Zeeshan Altaf",
  description: "Dont Change This Credits Otherwise your bot lol",
  dependencies: {
    "fs-extra": "",
    "path": ""
  }
};

module.exports.run = async function({ api, event, Users, Threads }) {
  if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
  const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { join } =  global.nodemodule["path"];
  const { threadID } = event;
  const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
  const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
  const type = (event.author == event.logMessageData.leftParticipantFbId) ? "Left the group" : "Kicked by Administrator";
  const path = join(__dirname, "cache", "leaveGif");
  const gifPath = join(path, `bye.gif`);
  var msg, formPush

  if (existsSync(path)) mkdirSync(path, { recursive: true });

  (typeof data.customLeave == "undefined") ? msg = "𝗔𝗟𝗟𝗔𝗛 𝗛𝗔𝗙𝗜𝗭 🙂\n\n 〡✶ {name} ✶〡 𝗞𝗛𝗔𝗬𝗔𝗟 𝗥𝗔𝗞𝗛𝗡𝗔 𝗔𝗣𝗡𝗔 𝗗𝗘𝗔𝗥 𝗣𝗛𝗜𝗥 𝗠𝗜𝗟𝗘𝗡 𝗚𝗬 𝗭𝗜𝗡𝗗𝗔𝗚𝗬 𝗥𝗔𝗛𝗬𝗘 𝗧𝗢 🍂🥀 \n\n" : msg = data.customLeave;
  msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);

  if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
  else formPush = { body: msg }

  return api.sendMessage(formPush, threadID);
}