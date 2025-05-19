module.exports.config = {
    name: "adminUpdate",
    eventType: ["log:thread-admins", "log:thread-name", "log:user-nickname", "log:thread-icon", "change_thread_image", "log:thread-call"],
    version: "1.0.0",
    credits: "Mirai-Team",//inspire by presel
    description: "GROUP UPDATE NOTIFICATION"
};

module.exports.run = async function ({ event, api, Threads, Users }) {
    const { author, threadID, logMessageType, logMessageData } = event;
    const { setData, getData } = Threads;
    const axios = require('axios');
  const moment = require("moment-timezone");
  var time = moment.tz("Asia/Karachi").format('HH:mm:ss');
  var ngay = moment.tz("Asia/Karachi").format('D/MM/YYYY');
  var thu = moment.tz('Asia/Karachi').format('dddd');
  if (thu == 'Sunday') thu = 'Sunday'
  if (thu == 'Monday') thu = 'Monday'
  if (thu == 'Tuesday') thu = 'Tuesday'
  if (thu == 'Wednesday') thu = 'Wednesday'
  if (thu == "Thursday") thu = 'Thursday'
  if (thu == 'Friday') thu = 'Friday'
  if (thu == 'Saturday') thu = 'Saturday'

    if (author == threadID) return;

    try {
        let dataThread = (await getData(threadID)).threadInfo;
      console.log(logMessageData)
        switch (logMessageType) {
            case "log:thread-admins": {
                if (logMessageData.ADMIN_EVENT == "add_admin") {
                    dataThread.adminIDs.push({ id: logMessageData.TARGET_ID })
                   var msg = `===🎬UPDATE NOTICE🎥===\n\n USER ADDED ${logMessageData.TARGET_ID} ADMIN AS GROUP ADMINISTRATION..\n\n『📖』→Me - Today is:${thu} 🌍\n『📆』→Tea: ${ngay} 🌆\n『⏰』→Time: ${time}⌚.`
                }
                else if (logMessageData.ADMIN_EVENT == "remove_admin") {
                    dataThread.adminIDs = dataThread.adminIDs.filter(item => item.id != logMessageData.TARGET_ID);
                    var msg =`===🎬UPDATE NOTICE🎥===\n\nTO REMOVE ADMINISTRATIVE RIGHTS OF ${logMessageData.TARGET_ID}.\n\n『📖』→Today is:${thu} 🌍\n『📆』→Right: ${ngay} 🌆\n『⏰』→Time: ${time}⌚.`
                }
                break;
            }

            case "log:user-nickname": {
                dataThread.nicknames[logMessageData.participant_id] = logMessageData.nickname;
                var msg =`===🎬 Update Notice 🎥===\n\n ${(logMessageData.nickname.length == 0) ? `TO REMOVE 'S NAME ${logMessageData.participant_id}` : `UPDATE 'S NAME${logMessageData.participant_id} WALL: ${logMessageData.nickname}`}.\n\n『📖』→Today is be:${thu} 🌍\n『📆』→Day: ${ngay} 🌆\n『⏰』→Time: ${time}⌚`
                break;
            }

            case "log:thread-name": {
                dataThread.threadName = event.logMessageData.name || null;
                var msg =`===🎬UPDATE NOTICE🎥===\n\n ${(dataThread.threadName) ? `UPDATE SMALL GROUP NAME ${dataThread.threadName}` : 'GROUP NAME DELETED'}.\n\n『📖』→Today is:${thu} 🌍\n『📆』→Day: ${ngay} 🌆\n『⏰』→Time: ${time}⌚.`
                break;
            }

            case "log:thread-icon": {
                dataThread.threadIcon = event.logMessageData.thread_icon || "👍";
                var msg =`===🎬UPDATE NOTICE🎥===\n\n UPDATE SMALL GROUP EMOTIONS ${dataThread.threadIcon},\n\n『📖』→Today is:${thu} 🌍\n『📆』→Day: ${ngay} 🌆\n『⏰』→Time: ${time}⌚.`
                break;
            }

            case "change_thread_image": {
              console.log(logMessageData)
                var msg =`===🎬UPDATE NOTICE🎥===\n\n ${author} UPDATED GROUP PICTURE.\n\n『📖』→Today is:${thu} 🌍\n『📆』→Day: ${ngay} 🌆\n『⏰』→Time: ${time}⌚.`
                break;
            }

            case "log:thread-call": {
                if (logMessageData.event == "group_call_started") {
                    const name = await Users.getNameUser(logMessageData.caller_id);
                    var msg =`===🎬UPDATE NOTICE🎥===\n ${name} START A${(logMessageData.video) ? '𝐕𝐈𝐃𝐄𝐎 ' : ''}𝐂𝐀𝐋𝐋.`
                }
                else if (logMessageData.event == "group_call_ended") {
                    const callDuration = logMessageData.call_duration;

                    //Transform seconds to hours, minutes and seconds
                    let hours = Math.floor(callDuration / 3600);
                    let minutes = Math.floor((callDuration - (hours * 3600)) / 60);
                    let seconds = callDuration - (hours * 3600) - (minutes * 60);

                    //Add 0 if less than 10
                    if (hours < 10) hours = "0" + hours;
                    if (minutes < 10) minutes = "0" + minutes;
                    if (seconds < 10) seconds = "0" + seconds;

                    const timeFormat = `${hours}:${minutes}:${seconds}`;

                    var msg =`===🎬UPDATE NOTICE🎥===\n\n ${(logMessageData.video) ? '𝐕𝐈𝐃𝐄𝐎 ' : ''}CALL ENDE.\n\nCALL DURATION: ${timeFormat}.\n\n『📖』→Today is:${thu} 🌍\n『📆』→Day: ${ngay} 🌆\n『⏰』→Time: ${time}⌚.`

                }
                else if (logMessageData.joining_user) {
                    const name = await Users.getNameUser(logMessageData.joining_user);
                    var msg =`===🎬UPDATE NOTICE🎥===\n\n ${name} JOINED ${(logMessageData.group_call_type == '1') ? '𝐕𝐈𝐃𝐄𝐎  ' : ''}𝐂𝐀𝐋𝐋.\n『📖』→Today is:${thu} 🌍\n『📆』→Day: ${ngay} 🌆\n『⏰』→Time: ${time}⌚.`
                }
                break;
            }
        }
        const res = (await axios.get('https://vnhhoang206-16.vnhoang06.repl.co/api/gif/gifchill')).data.data
        const t = (await axios.get(`${res}`, {
                    responseType: "stream"
                }))
                .data;
        await setData(threadID, { threadInfo: dataThread });
        api.sendMessage({
          body: msg,
          attachment: t
        }, threadID)
    } catch (e) { console.log(e); };
}