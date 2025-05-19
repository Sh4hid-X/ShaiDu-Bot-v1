module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.1",
    credits: "CatalizCS",
    description: "Notification of bots or people entering groups with random gif/photo/video",
    dependencies: {
        "fs-extra": "",
        "path": "",
        "pidusage": ""
    }
};
 
module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
 
    const path = join(__dirname, "cache", "joinGif");
    if (existsSync(path)) mkdirSync(path, { recursive: true }); 
 
    const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });
 
    return;
}
 
 
module.exports.run = async function({ api, event }) {
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? " " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
        const fs = require("fs");
        return api.sendMessage("", event.threadID, () => api.sendMessage({body: `𝐀𝐒𝐒𝐋𝐀𝐌 𝐎 𝐀𝐋𝐈𝐊𝐔𝐌 😘
━━━━━━━━━━✤━━━━━━━━
▏✵𝑩𝑶𝑻 𝑪𝑶𝑵𝑵𝑬𝑪𝑻𝑬𝑫 𝑵𝑶𝑾✵ ▏
━━━━━━━━━━✤━━━━━━━━
𝗔𝗣𝗣𝗥𝗢𝗩𝗔𝗟 🥺

         𝗔𝗣𝗣𝗥𝗢𝗩𝗔𝗟 𝗜𝗦 𝗗𝗢𝗡𝗘 ✔
━━━━━━━━━━✤━━━━━━━━
❛𝙏𝙊 𝙎𝙀𝙀 𝘼𝙉𝙔 𝘾𝙊𝙈𝙈𝘼𝙉𝘿❜
\nᴛʏᴘᴇ ʜᴇʟᴘ ᴛᴏ ꜱᴇᴇ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ \n\n【 COMMAND LIST ❤️🍫

 🌸 2 .owner
 🌸 3 .admin
 🌸 5 .info
 🌸 6 .ShaiDu
 🌸 7 .say
 🌸 8 .bot-say 】
 \n 『ᴛʏᴘᴇ ʜᴇʟᴘ2 ᴛᴏ ꜱᴇᴇ ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅꜱ ʟɪꜱᴛ』
━━━━━━━━━━✤━━━━━━━━
𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑 𝐈𝐍𝐅𝐎 😜
        𝐎𝐖𝐍𝐄𝐑 🙊
    
         ♣ ▎*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝ＳＨＡＩＤＵ\ｎ🄾🅆🄽🄴🅁\n🅣🅗🅔 🅢🅗🅐🅘🅓🅤 ▎♣
━━━━━━━━━━✤━━━━━━━━
🤍⫷𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝘼𝘾𝘾𝙊𝙐𝙉𝙏⫸🥀 https://www.facebook.com/profile.php?id=100093701721172&mibextid=ZbWKwL
━━━━━━━━━━✤━━━━━━━━

🧡⫷𝘾𝙊𝙉𝙏𝘼𝘾𝙏 𝙈𝙀 𝙊𝙉 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋⫸🍁

        🗨️【03436652***】📱
━━━━━━━━━━✤━━━━━━━━               💜⫷𝙃𝙀𝙇𝙋𝙄𝙉𝙂 𝙕𝙊𝙉𝙀⫸🍂  Thw ShaiDu\nhttps://www.facebook.com/profile.php?id=100083420224755
━━━━━━━━━━✤━━━━━━━━
 /Mark /Obama\n/Says /Music /Zuck \n/Lexi /Pair /Bot /Help\n ─────────────────`, attachment: fs.createReadStream(__dirname + "/cache/joinGif/welc.gif")} ,threadID));
    }
    else {
        try {
            const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);
 
            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
            const path = join(__dirname, "cache", "joinGif");
            const pathGif = join(path, `${threadID}.gif`);
 
            var mentions = [], nameArray = [], memLength = [], i = 0;
            
            for (id in event.logMessageData.addedParticipants) {
                const userName = event.logMessageData.addedParticipants[id].fullName;
                nameArray.push(userName);
                mentions.push({ tag: userName, id });
                memLength.push(participantIDs.length - i++);
            }
            memLength.sort((a, b) => a - b);
            
            (typeof threadData.customJoin == "undefined") ? msg = "Hello Mr {name},\n─────────────────\n You're The {soThanhVien}Member ─────────────────\nOf {threadName} Group\n─────────────────\nPlease Enjoy Your Stay\n─────────────────\nAnd Make Lots Of Friends =)\n─────────────────" : msg = threadData.customJoin;
            msg = msg
            .replace(/\{name}/g, nameArray.join(', '))
            .replace(/\{type}/g, (memLength.length > 1) ?  'Friends' : 'Friend')
            .replace(/\{soThanhVien}/g, memLength.join(', '))
            .replace(/\{threadName}/g, threadName);
 
            if (existsSync(path)) mkdirSync(path, { recursive: true });
 
            const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));
 
            if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
            else if (randomPath.length != 0) {
                const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
            }
            else formPush = { body: msg, mentions }
 
            return api.sendMessage(formPush, threadID);
        } catch (e) { return console.log(e) };
    }
      }