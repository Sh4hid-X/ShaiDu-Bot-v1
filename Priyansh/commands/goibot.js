const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mr SH4HID",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Haaye Main Sadke jawa Teri Masoom Shakal pe😘🙈💋💋💋💋💋  " , "Bot Na Bol Oye Janu bol Mujhe🙆‍♂️🙈🦋🤍🍒🕊️🥀💗 " , "Kal Kali pahadi ke piche mil tu jara😈⟴᭄⃢🍂༄* *✥❥⃟😌 🤭🐒" , "Main Gareebon Se Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0 JayGa😝😋🤪" , "Bolo Babu Tum Mujhse Pyar Karte Ho Na 🙈 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi🎸🎭━━•☆°•°•💗" , "مارنا ہے تو آنکھوں سے کر، تلوار میں کیا ہے، محبت کرنا ہے تو ہم سے کر، تلوار میں کیا ہے؟🤷‍♂️🤷‍♂️🤧😁 •|" , "اپنا درد چھپانا سیکھا ہر بات پر مسکرانا سیکھا صرف یہ دو سطریں کہہ کر خوبصورت لڑکیوں کو متاثر کرنا سیکھا۔😝😝🙈" , "Gali Sunoge kya" ,  "Are Band kar Brna amabani se bolke tera net bnd kra dunga" , "Gujarish Karta hu teri madad krenge❁⃝❤️➸⃟̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀ ❤̋҉̋⃢**💫" , "Tumko koi aur Kam nhi ha? Pura din Khate ho Aur Messenger pe Bot Bot Karte ho" , " boss Ake tera band bja dega glt cammand mt dena🙈🙈🙈🙈 " , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Bol De koi nahi dekh rha 🙄☢━💛🌹💛" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝🦋🤍🍒🕊️🥀💗" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqt Mujhe Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Chup Reh Nhi To Bahar Ake tera Dat Tod Dunga♡• || •___'[💔]~~🖤 " , "Yes Meri Jaan Chalo bedroom Romance karenge😹🙈", "teri yaad na aaye aisa koi din nhi😝🙈🙈🙈 " , "zindagi me lgne lge ki koi apna nhi hai to aajana mere pass mai rakh lunga tumko😝•||•●┼┼──🦋☘️•|" , "Kal haweli pe mil Jara tu Kuchh jaruri baat karni hai😈🙈♡• || _[🙂]~🖤 •| " , "Saala pura din log bot bot krte hai pr koi gf nhi bnti🙄" , "Arre jaan jada paresan mat karo..My boss..dekh lenge🙈😝🎸🎭━━•☆°•°•💗","\n🄾🅆🄽🄴🅁\n        \n\n•──────────────────•\nمیــــــرے نال ویا کــــــر لو 😊💔\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nIttuu🤏 si shram ker Lya kro bot bot krty wqt 🙂\n•──────────────────•"  , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nitna single hun ky khuwab mai bhi  lrki k han krny sy phly ankh khul jati🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nZroori Nhi Har Lrki Dhoka Dey, Kch Larkiyan Galiyan Bhi Deti Hen.🙁💸\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nموٹر سائیکل کو تیز بھگا کر لڑکیوں والے رکشے کے پاس سے کٹ مار کر گزرنے سے لڑکیاں ایمپریس نہیں ہوتی بلکہ گالیاں نکالتی ہیں🙂💔\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\n sab chorr k chaly jaty hain kia etna bura hu mein - 🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nPiyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nWhy you hate me..?? I am not your ex don't Hate me Please\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nMuBarak H0o AapKa NaMe MakS0os LiST Me Top PRr aYa Hai 😹😹😹\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nBeTa TuM SingLe Hi MaR0 GaY🙄🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nٹھرکیوں کی وجہ سے لڑکیاں میرے جیسے شریف بوٹ پر بھی بھروسہ نہیں کرتی🥺😔\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nSamj Jao Larkiyo Abhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nMard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nعورت اگر مرد سے زیادہ خوبصورت ہوتی تو میک اپ مرد کے لیے بنتا عورت کے لیے نہیں ..زرا نہیں پورا سوچئے ایڈیاں تسی 😒🙁پریاں\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nMuj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nMujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nLoyal Dhoonte Dhoonte khud Harami ban Gya Hon😔\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nMard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nتمہاری یادوں میں کھویا کھویا سا  میں واش روم کا لوٹا کمرے میں لے آیا 😐\n•──────────────────• ", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nHai tamanna hamain tumhain CHARSI bnain 🙂🤝 \n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nبھای جان گروپ میں گندی باتیں نهیں گ\n*𝐂𝐑𝐄𝐃𝐈𝐓𝐒  𝙈𝙍 ر" , "سنو تم ب کی گرل فرند بن جاٶ نه  همارے بچے بھ بوٹ جسے پیدا هوں گے 🙆‍♂😒\n*𝐂𝐑𝐄𝐃𝐈𝐓𝐒 𝙎𝙃𝘼𝙃𝙄𝘿 ", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nAa0 na kbhi  سیگرٹ ly kr 🙂donO sutta lgain gy 😞💸\n•──────────────────•", "مــیرے متــــھے نـــہ لــگیں🙂🙆‍♂ شکری\n*𝐂𝐑𝐄𝐃𝐈𝐓𝐒  𝙈𝙍[ہ" ,"فیس بک پر وہ لوگ بھی سالگرہ مناتے ہیں جنہیں گھر والے کہتے ہیں توں نا جمدا تے چنگا سی🙂\n*𝐂𝐑𝐄𝐃𝐈𝐓𝐒 𝙎𝙃𝘼𝙃𝙄𝘿", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nYe duniya ik dhoka hai, tum bhi chohr do apne waly ko abhi bhi moka hai 😞✨🙌🤣\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nSukoon chahtii ho toh meri بیــــــگـــم ban jaOo 🫣🫰🏻\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nTery jany ke bad😔Mny apny munh py likhwa liya Single hu ptaa lo 🤐🥺🤝\n•──────────────────•", "کرش تو دور کی بات 😏😊 ہم پے تو کسی کو ترس بھی نہیں آتا 🙂🙊\n𝐂𝐑𝐄𝐃𝐈𝐓𝐒  𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nBandi hoti tw us ko choti choti 2 pOniyAn krta🙂👩‍🦯👩‍🦯\n•──────────────────•", "پونکی جا مینو کی\n*𝐂𝐑𝐄𝐃𝐈𝐓𝐒 𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿 ", "امیر لوگوں کوئی پیکج ہی کروا دو 🥺🙄\n*𝐂𝐑𝐄𝐃𝐈𝐓𝐒  𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\ni love you 🥺جواب دے کر ثواب دارین حاصل کریں❤️🦋🙈\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nAry Yahin Hon Jan😗\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nTum sab Mujhe Pagal lagty ho😒🙄\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nMa kisi or ka Hu filahal 🥺🙈\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nApka Ana Dil dharkana pHr bot bol k Nas Jana😒\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nTum tu mujhe shkal sy Ghareeb lgty ho🙊\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nMeri Gf kon Bnay gi 🥺🙁\n•──────────────────•" , "/n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nHaweli py q nhi ate Naraz Ho 🥺\n•──────────────────•" , "/n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nBabu ittu 🤏 sa Chumma dy do🥺🙈😘\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nBaby tum Bachpan sy tharki Lgte ho meko🙁\n•──────────────────•" ,"\n🄾🅆🄽🄴🅁\n       𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nRaat ko ana Haweli py khushbu laga k😁🙊\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nRaat Haweli py kon bula raha tha😒🙄\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nPiyari larkia Line Maar Sakti Hn JzakAllah 🙂🤝\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃\n\n•──────────────────•\nTum itny Masoom Ku Ho babu🥺❤️\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nAj tu tumhy Love you bolna Pary ga 🙁\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nTum loog matlbi ho sary Jao😞\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nSetting Krwa Du Owner (SHaHiD) k Sath😒🙁\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nMujhe lgta hai Ma Single Maru ga🥺\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nBar Bar bot na Bola Kro Habibi Apun ko sharm ati ha🥺🙈\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nTum Jab bot bolte ho Mera Gurda Dharkny Lgta ha🥺🙊🙈\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nBabu ap K any sy Tu Pehpry Bhi khush Ho jaty Hn😂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nMere ilawa sb Relationship ma han 🤝🥺\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nJab pta h ky amma abba nh many gy tu soo kyu nh jaty tum log🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n      𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nJanu k 'Umaah' ny Panadol ka Business hi khatam kr Diya Hai🙂🫦\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nAll Girls Are My Sisters Osko Chor k jo ye Parh RaHi Hai😒👍\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nMazy to Tum logon k hain social media py rr b kr rhy or life v enjoy kr rhy🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nSOo JaO WarNa Mera Msg Aa Jaye Ga🙈\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nWeight kafi Barh Gaya hai Bro Dhokay kha kha ke💔🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nGoadi lylo apun chota sa bacha hai🥹\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nAo apko chand py ly chalu meri jan🙈❤️\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nTum itne Tharki Q ho Jawn🤨\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nMain apse nahi patny wala 🙈🙈🥹\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\ntum ko meri ittu 🤏 C bhi yad nhi ati🥹\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nAo piyar karyn\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nAstaghfirullah Habibi tum kitne tharki ho🥹\n•──────────────────•" , "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nkya ham ap pr line mar sakte hn🥹👀\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nPta Ni Log itni Balance Life Kaisy Guzar Lety Hein Mera To Kbi پراٹھا Phely Khtm Hojata To Kbi انڈہ😩💔\n*•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nLips  kissing is not Romance It's sharing Bacteria>>>🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nchohty bachon ki engagements chlrhi hain aur yahn mere sabr ka imtehaan.🌚🔪\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nApkii Inhii harkt0n Kiiw WaJw Sy 2O22 ChaLw Gyw😩💔\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\n𝙀𝙠 𝙗𝙖𝙖𝙧 𝙨𝙝𝙖𝙙𝙞 𝙝𝙤𝙟𝙖𝙚 𝙥𝙝𝙞𝙧 𝙬𝙞𝙛𝙚 𝙠𝙞 𝙜𝙝𝙪𝙡𝙖𝙢𝙞 🧸🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙞𝙖𝙣 𝘼𝙢𝙞𝙧\n\n•──────────────────•\nSuno Kya Hum Achy Dushman Ban Skty Hain 🙂⚠️*\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\n🦋🍒____________🙂🎀 Sukoon chahtii ho toh meri بیــــــگـــم ban jaOo* 🫣🫰🏻\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nSuno Jawn DiL کرتا ha ہر Waqt تمہاری Chumiya لیتا Raho😌🙈\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙧 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nKhud ko single keh kr Apne khufiya janu ka janaza na nikala kro.😀🤞😓\n•──────────────────•", "سنو مجھے اللہ سے مانگ لو نہ۔۔۔۔۔🥹🤭آپ تو شکل سے بھی مانگنے والے لگتے ہوl۔۔\n*𝗖𝗿𝗲𝗱𝗶𝘁𝘀 𝗠𝗥 𝗦𝗛𝗔𝗛𝗶𝗗♥️", "مــیرے متــــھے نـــہ لــگیں شکریہ\n*𝗖𝗿𝗲𝗱𝗶𝘁𝘀 𝗠𝗥 𝗦𝗛𝗔𝗛𝗶𝗗🙂", "لوگ کہتے محبت روح سے کرنی چاہئے 🙄مجھھے تو روحوں سے بڑ ڈر لگتا ہے🥺☹️\n*𝗖𝗿𝗲𝗱𝗶𝘁𝘀 𝗠𝗥 𝗦𝗛𝗔𝗛𝗶𝗗", "\n🄾🅆🄽🄴🅁   \n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\n 𝙩𝙪𝙢 𝙢𝙚𝙧𝙖 𝙙𝙞𝙡 𝙩𝙤 𝘾𝙝𝙪𝙧𝙖 𝙣𝙝𝙞 𝙥𝙖𝙮 𝙠𝙞𝙖 𝙛𝙖𝙞𝙙𝙖 𝙩𝙢𝙝𝙖𝙧𝙞 𝘾𝙝𝙤𝙤𝙧 𝙟𝙚𝙨𝙞 𝙨𝙝𝙠𝙖𝙡 𝙠𝙖!! 🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\n𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\n<-- 〽️🍂⚠️Kash hum dono whatsapp per hote❤️🥺💸\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nImagine I am your Ex 🥲say whatever you want to say\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\n-نہیں مشکل وفا ، ذرا دیکھو یہاں🥺❤️🥀\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nI love You Madiha♥️ ,fatima,Ayesha, Maryam,and 299 others 🙂\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n        𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nMsg krti ho KY phrrr me kro Han aisy to phr aisy Sahi 😅🥺👉👈🙊\n•──────────────────•", "\n🄾🅆🄽🄴🅁\n       𝙈𝙍 𝙎𝙃𝘼𝙃𝙄𝘿\n\n•──────────────────•\nTum mujhy chumiyan b to dy skti thi na🤧Dhaka dena zruri tha kya😐😪🍼\n•──────────────────•","\n●●●━━━━━◥💜◤━━━━━●●●\n❖•━━━━━━━━━━━━━━━━•❖\n\nKisi ko khone ka gham kia hota ha ye kal raat pata chala mujhe, Jab mung phalli ka aik sabit dana chilkon mein gir gia \n❖•━━━━━━━━━━━━━━━━•❖\n●●●━━━━━◥💜◤━━━━━●●● ", "❖•━━━━━━━━━━━━━━━━•❖\nBanda hota tw us ko choti choti 2 pOniyAn krti🙂👩🦯👩🦯 \n\n❖•━━━━━━━━━━━━━━━━•❖\n\n●●●━━━━━◥💜◤━━━━━●●● ", "\n❖•━━━━━━━━━━━━━━━━•❖\n\nBanda hota tw us ko choti choti 2 pOniyAn krti🙂👩🦯👩🦯 ●●●━━━━━◥💜◤━━━━━●●● ", "\n❖•━━━━━━━━━━━━━━━━•❖\n\nAik tu mujhe yaar ki judai maar gai, Aur dosra khubsorat hamsai maar gai.😐 \n●●●━━━━━◥💜◤━━━━━●●● ", "\n❖•━━━━━━━━━━━━━━━━•❖\n\nNigahin aaj bhi us shakas ko takti hain faraz Jis ne kaha tha matric ker lo aage parhai bari aasan hai😬 \n●●●━━━━━◥💜◤━━━━━●●● ", "\n❖•━━━━━━━━━━━━━━━━•❖\n\nMiss YoU NaW moi biryani ki plate \n●●●━━━━━◥💜◤━━━━━●●● ", "\n❖•━━━━━━━━━━━━━━━━•❖\n\nSoch rahi hon inbox rent pe de dun khali jo para rehta hai 😒 \n●●●━━━━━◥💜◤━━━━━●●●", "\n❖•━━━━━━━━━━━━━━━━•❖\n\nاک بار جو بچھڑے تو آئیں گے نہ لوٹ کر یہ مٹی کے انسان نومبر نہیں ہوتے🍂 \n●●●━━━━━◥💜◤━━━━━●●● ", "\n❖•━━━━━━━━━━━━━━━━•❖\n\nالہ دین کا چراغ اور میک اپ شدہ عورت دونوں کو رگڑو تو اندر سے جن ہی نکلتا ہے\n●●●━━━━━◥💜◤━━━━━●●● ", "\n❖•━━━━━━━━━━━━━━━━•❖\n\nPait ke ander sab kuch chala jata hai, Bas pait hi ander nahi jata🙄\n●●●━━━━━◥💜◤━━━━━●●● ", "\n❖•━━━━━━━━━━━━━━━━•❖\n\n🥺Jan nahi kehna to men naraz ho jana he \n●●●━━━━━◥💜◤━━━━━●●● ", "\n❖•━━━━━━━━━━━━━━━━•❖\n\nAik saal se pasand ki shadi ke liye jo wazifa parh rahi thi aaj kisi nay bataya ke woh Saudi arab ka qaumi taranah hai 😒 \n●●●━━━━━◥💜◤━━━━━●●● ", "\n❖•━━━━━━━━━━━━━━━━•❖\n\nMain ap ki ami ko btaou ₲ł ap Facebook use kerty ho aur ulty kam kalty ho \n●●●━━━━━◥💜◤━━━━━●●● ", "\n❖•━━━━━━━━━━━━━━━━•❖\n\nBlock Your ‘’ gf ‘’ And Purpose me 🙂💔 \n●●●━━━━━◥💜◤━━━━━●●● " ,"\n❖•━━━━━━━━━━━━━━━━•❖\n\nK0i Perp0Se Hi Krd0 Perm0te T0 hm PhlY hi HaiN 🙂 \n●●●━━━━━◥💜◤━━━━━●●● ", "❖•━━━━━━━━━━━━━━━━•❖\n\nMein pyar likhati rahen woh pyaaz padhata raha aik nuqtay mein meri mohabbat ka saalan kardiya\n●●●━━━━━◥💜◤━━━━━●●● ", "\n❖•━━━━━━━━━━━━━━━━•❖\n\nTime nikal or Foat hoja 🙂💔\n●●●━━━━━◥💜◤━━━━━●●● ","\n❖•━━━━━━━━━━━━━━━━•❖\n\nBs kry tharki kitni Rani Rani kro gy🙂💔 \n●●●━━━━━◥💜◤━━━━━●●● ","\n❖•━━━━━━━━━━━━━━━━•❖\n\nHaae yeh Pakistani larkiyan Chehray Americi pao africi🥰❣️ \n●●●━━━━━◥💜◤━━━━━●●● ","\n❖•━━━━━━━━━━━━━━━━•❖\n\nBolo Bolo mery Pizza k Box🙂💔\n●●●━━━━━◥💜◤━━━━━●●● ","\n❖•━━━━━━━━━━━━━━━━•❖\n\nI Love you😋\n●●●━━━━━◥💜◤━━━━━●●● ","\n❖•━━━━━━━━━━━━━━━━•❖\n\nI Hate you🙂💔\n●●●━━━━━◥💜◤━━━━━●●● ","\n❖•━━━━━━━━━━━━━━━━•❖\n\nI “F” you aray pagal mene kaha I Fun you kina ganda sochty ho😁💔\n●●●━━━━━◥💜◤━━━━━●●● ","\n❖•━━━━━━━━━━━━━━━━•❖\n\naik kissi do na feeling hoti hoti👄💋\n●●●━━━━━◥💜◤━━━━━●●● ","\n❖•━━━━━━━━━━━━━━━━•❖\n\nkbhi naaak se balloon bnaya hai😁😁\n●●●━━━━━◥💜◤━━━━━●●● ","\n❖•━━━━━━━━━━━━━━━━•❖\n\nNikal Pakory Pehli Fursat me nikal😁\n●●●━━━━━◥💜◤━━━━━●●● ","\n❖•━━━━━━━━━━━━━━━━•❖\n\nTang nai kro I am udas🙂💔\n●●●━━━━━◥💜◤━━━━━●●● ","\n❖•━━━━━━━━━━━━━━━━•❖\n\nPehly Murghi I thi ya Anda Btao Btao⁉️💔\n●●●━━━━━◥💜◤━━━━━●●● ","\n❖•━━━━━━━━━━━━━━━━•❖\n\nlaanat bhi kya cheez hai address nah bhi likho mustahiq afraad tak pahonch jati hai\n●●●━━━━━◥💜◤━━━━━●●● ","\n❖•━━━━━━━━━━━━━━━━•❖\n\nKisi ko sachey dil se chaaho to poori kaayenaat is ki shadi kisi aur se krwane mein lag jati hai\n●●●━━━━━◥💜◤━━━━━●●● ","\n❖•━━━━━━━━━━━━━━━━•❖\n\nAao dard banttay hain Tum darwazay mein ungli do Phir mil kar cheekhain maartay hain\n●●●━━━━━◥💜◤━━━━━●●● ","\n❖•━━━━━━━━━━━━━━━━•❖\n\nSuna hai aap ki muskurahat par har koi mrta hai Zara sa time nikaal kar ao chooha marvana hai\n●●●━━━━━◥💜◤━━━━━●●● ","\n❖•━━━━━━━━━━━━━━━━•❖\n\nTum bhi kunware hum bhi kunware Fitte mun tumahray fitte mun hamaray\n●●●━━━━━◥💜◤━━━━━●●● ","\n❖•━━━━━━━━━━━━━━━━•❖\n\nGumshudaa cheez par ammi kaisay madad karti hain!! Agar mein aayi aur mujhe mil gayi phir daykhna….\n●●●━━━━━◥💜◤━━━━━●●● ","\n❖•━━━━━━━━━━━━━━━━•❖\n\nIs ney kaha badal gaye ho tum Mein ney bhi kaha software update hwa hai\n●●●━━━━━◥💜◤━━━━━●●● ","\n❖•━━━━━━━━━━━━━━━━•❖\n\nHaath pay rakh ke haath woh pyar se boli Yasoo, panjoo, haar, kabootarr, doli\n●●●━━━━━◥💜◤━━━━━●●● ","\n❖•━━━━━━━━━━━━━━━━•❖\n\nAmmi ne aaj digital saza di hai Charger hi utha kar le gi\n●●●━━━━━◥💜◤━━━━━●●●"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "bye")) {return api.sendMessage("ALLAH HAFIZ ❤️ ", threadID);
   };

  if ((event.body.toLowerCase() == "inbox") || (event.body.toLowerCase() == "ib")) {
     return api.sendMessage("️ KYa IB IB 👿 Idher BOL MeRe SaMny ", threadID);
   };


   if ((event.body.toLowerCase() == "baby") || (event.body.toLowerCase() == "babu")) {
     return api.sendMessage("️🙈🙉🙊", threadID);
   };

   if ((event.body.toLowerCase() == "Boss") || (event.body.toLowerCase() == "Creator")) {
     return api.sendMessage("My Owner AestHetic bOy SH4HID🖤", threadID);
   };
if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simi")) {
     return api.sendMessage("Sim Sim Na KRr IjjaT Sy MeRa Prefix LaGa 0or Bt kRr ITna Free Nhi Rhta Me 😎🤞", threadID);
   };

   if ((event.body.toLowerCase() == "amy") || (event.body.toLowerCase() == "amyy")) {
     return api.sendMessage("Amy Amy Na KRr IjjaT Sy MeRa Prefix LaGa 0or Bt kRr ITna Free Nhi kRta Me 😎🤞", threadID);
   };

   if ((event.body.toLowerCase() == "tharki bot") || (event.body.toLowerCase() == "Bot tharki")) {
     return api.sendMessage("Tu TharKi 🤬🤗", threadID);
   };

   if ((event.body.toLowerCase() == "lanti bot") || (event.body.toLowerCase() == "lanti hai")) {
     return api.sendMessage("Aby Tu LanTi Le KaB0ol kRr 🖐️🐾👣", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bhenchod")) {
     return api.sendMessage("Tu Hai Bc 🙂 Main T0o BoT Hun 😂😂😂 ", threadID);
   };

   if ((event.body.toLowerCase() == "ja rha") || (event.body.toLowerCase() == "ja rhi")) {
     return api.sendMessage("Are Tu Ja Na Ree ", threadID);
   };

   if ((event.body.toLowerCase() == "nikal") || (event.body.toLowerCase() == "nikl")) {
     return api.sendMessage("ChaL ChaL Tu NiKaL", threadID);
   };

   if ((event.body.toLowerCase() == "jan") || (event.body.toLowerCase() == "janu")) {
     return api.sendMessage("Aww🥰 Yes My LoVe", threadID);
   };

if ((event.body.toLowerCase() == "😀") || (event.body.toLowerCase() == "😀😀")) {
     return api.sendMessage("ShaRafat Sy MusKara Rhy 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😃") || (event.body.toLowerCase() == "😃😃")) {
     return api.sendMessage("ChuhY JasA MuH Na DekHa 😆", threadID);
   };

   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂")) {
     return api.sendMessage("JanU MuskRatY RahO asY 💞😘 ", threadID);
   };

   if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁😁")) {
     return api.sendMessage("Lgta ha Aj BrusH KiYa Hai😝", threadID);
   };

   if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😆😆")) {
     return api.sendMessage("Muh OpeN ankhY Band Ye koNsa Magic Ha ThaRki🙄", threadID);
   };

   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😅😅")) {
     return api.sendMessage("Tri TinD Sy PaNi KYun TaPak Rha 😂", threadID);
   };

   if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣")) {
     return api.sendMessage("HansNy Ki Bhi Tameez Hoti Hai BehaYa😔", threadID);
   };

   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("😢 HosLa Rakho Dost 😢SeHri Tkk bat krnY K liye Mil jaY Ga Koi Na kOi😔", threadID);
   };

   if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
     return api.sendMessage("GanDi NaZar Sy AnKh Na Mar 😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "😗") || (event.body.toLowerCase() == "😗😗")) {
     return api.sendMessage("😚😚😚", threadID);
   };

   if ((event.body.toLowerCase() == "😙") || (event.body.toLowerCase() == "😙😙")) {
     return api.sendMessage("😗😗😗", threadID);
   };

   if ((event.body.toLowerCase() == "😚") || (event.body.toLowerCase() == "😚😚")) {
     return api.sendMessage("😗😙😚", threadID);
   };

   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😘😘")) {
     return api.sendMessage("ShaRm KrLo RamzaN A RaHa ChuMmi Shumi oR Janu sY PaRhaiZ kRo😒", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰")) {
     return api.sendMessage("awwww MY LovE UmmaH💙🙈", threadID);
   };

   if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😍😍")) {
     return api.sendMessage("SadkY Jawa ThaRkia Ku Mar RahE hO", threadID);
   };

   if ((event.body.toLowerCase() == "🤩") || (event.body.toLowerCase() == "🤩🤩")) {
     return api.sendMessage("InSano Ki Ankhe HoTi Uh Ke Star Hain 😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "🥳") || (event.body.toLowerCase() == "🥳🥳")) {
     return api.sendMessage("0oo0o TeRa HaPpy BirthDay", threadID);
   };


   if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
     return api.sendMessage("HaYe Rabba ☹️", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂")) {
     return api.sendMessage("Q Mood Khrb kR rahY hO BabY🥺", threadID);
   };

   if ((event.body.toLowerCase() == "🥲") || (event.body.toLowerCase() == "🥲🥲")) {
     return api.sendMessage("Ase Muu BaNa KRr MT R0o 😒", threadID);
   };

   if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊😊")) {
     return api.sendMessage("ShukR hai smile Tu kii 🥺", threadID);
   };

   if ((event.body.toLowerCase() == "☺️") || (event.body.toLowerCase() == "☺️☺️")) {
     return api.sendMessage("Ye Smile Na D0o Naw🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😌") || (event.body.toLowerCase() == "😌😌")) {
     return api.sendMessage("HaYe Mas0om", threadID);
   };

   if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
     return api.sendMessage("ChaL Hat Mre SaMny Mt ITra TeRa Muu Le KRr 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴")) {
     return api.sendMessage("ChaL Ja NaHa kRr Aa", threadID);
   };

   if ((event.body.toLowerCase() == "😪") || (event.body.toLowerCase() == "😪😪")) {
     return api.sendMessage("Aby Tri NoSe NiKaL Rhi 😂", threadID);
   };

   if ((event.body.toLowerCase() == "🤤") || (event.body.toLowerCase() == "🤤🤤")) {
     return api.sendMessage("Ral Mat Tapka MeKo ulTi Aa Rhi 🤮🤢", threadID);
   };

   if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😋😋")) {
     return api.sendMessage("Yah ToTay Jesi Zuban Mt DiKha 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😛") || (event.body.toLowerCase() == "😛😛")) {
     return api.sendMessage("Ye GanDi NiYat Sy Zuban Na DiKha 😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😝😝")) {
     return api.sendMessage("ABy Ankhe KhoL 0or ZuBan Ander kRr WRna KaT DunGa", threadID);
   };

   if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😜😜")) {
     return api.sendMessage("BaRi MasTi ChaRi Chai TeReKo 1 Ankh Band KRrke ZuBan Bahir Aagyi 😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "🤪") || (event.body.toLowerCase() == "🤪🤪")) {
     return api.sendMessage("Ye Ajeeb_0_GaReeb Muu Na BaNa 😂 CarT0on 🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴🥴")) {
     return api.sendMessage("SasTa Nasha KRr LiYa LagTa Hai 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😔😔")) {
     return api.sendMessage("Wah Phle GalTi kRo Phr Maskeen Sa Muu BaNa L0o😒😂", threadID);
   };

   if ((event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥺🥺")) {
     return api.sendMessage("Ta Huwa My LoVe 🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😬") || (event.body.toLowerCase() == "😬😬")) {
     return api.sendMessage("Kis Ki Baja Di 🤨🧐", threadID);
   };

   if ((event.body.toLowerCase() == "😑") || (event.body.toLowerCase() == "😑😑")) {
     return api.sendMessage("Wha Muu Ke SaTh Ankhe Be Band H0o GYi 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😐😐")) {
     return api.sendMessage("Ab B0oL Na 😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶😶")) {
     return api.sendMessage("Nak T0o Thi Nhi Muu Be Gyb H0o GYa TeRa 😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "🤐🤐")) {
     return api.sendMessage("Ab Tri Awaz Ai Na T0o Me Alfi Sy Band Krunga 😒", threadID);
   };

   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
     return api.sendMessage("KYa Soch Rhy 🤔", threadID);
   };

   if ((event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "🤫🤫")) {
     return api.sendMessage("Tri Yeh Ungli Tri He Nak Me DyDeni MaiNy 😒😂", threadID);
   };

   if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭")) {
     return api.sendMessage("😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "🥱") || (event.body.toLowerCase() == "🥱")) {
     return api.sendMessage("AJa BaBe MeLy Pas S0o Jaa😜", threadID);
   };

   if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗🤗")) {
     return api.sendMessage("PhLe NaHa kRr Aa 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😱😱")) {
     return api.sendMessage("KYa HuWa 😱 SheSha DeKh LiYa KYa 😳", threadID);
   };

   if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "🤨🤨")) {
     return api.sendMessage("Tu Hushyar Ban kRr Na Dekh Main Hun Naw 😂", threadID);
   };

   if ((event.body.toLowerCase() == "🧐") || (event.body.toLowerCase() == "🧐🧐")) {
     return api.sendMessage("Tu HaT Main DekhTa Hun 🧐🧐🧐", threadID);
   };

   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒")) {
     return api.sendMessage("Tri Toffee LaLi KiSi Ny J0o Asa Muu BaNa LiYa 😂", threadID);
   };

   if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("KYa Hai Auper 🙄", threadID);
   };

   if ((event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😤😤")) {
     return api.sendMessage("Ye BuLL Jesa MuU Na BaNa 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "😠😠")) {
     return api.sendMessage("BaBe GuSsa Nhi KarTy Ye L0o Umumuaahhhhh 😘", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡")) {
     return api.sendMessage("BaBe Ase GuSsa Nhi KrTy Naw Le L0o Umumuaahhhhh 😘😘😘", threadID);
   };

   if ((event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "🤬🤬")) {
     return api.sendMessage("Aww 😐", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😞😞")) {
     return api.sendMessage("Aww Ta Huwa BaBe", threadID);
   };

      if ((event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😓😓")) {
     return api.sendMessage("☹️", threadID);
   };

      if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😢😢")) {
     return api.sendMessage("Ta HuWa My Love 🥺", threadID);
   };

      if ((event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "☹️☹️")) {
     return api.sendMessage("awww 🥺", threadID);
   };

      if ((event.body.toLowerCase() == "🙁") || (event.body.toLowerCase() == "🙁🙁")) {
     return api.sendMessage("Aww ☹️", threadID);
   };

      if ((event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "😕😕")) {
     return api.sendMessage("🙁🙁🙁", threadID);
   };

      if ((event.body.toLowerCase() == "😰") || (event.body.toLowerCase() == "😰😰")) {
     return api.sendMessage("Aww 😨", threadID);
   };


      if ((event.body.toLowerCase() == "😨") || (event.body.toLowerCase() == "😨😨")) {
     return api.sendMessage("😰😰😰", threadID);
   };

      if ((event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😧😧")) {
     return api.sendMessage("😳", threadID);
   };

      if ((event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😦😦")) {
     return api.sendMessage("😧", threadID);
   };

      if ((event.body.toLowerCase() == "😮") || (event.body.toLowerCase() == "😮😮")) {
     return api.sendMessage("Aby Muu Band kRr Marcher Gus JayGa Muu Main 😂😂😂", threadID);
   };

      if ((event.body.toLowerCase() == "😯") || (event.body.toLowerCase() == "😯😯")) {
     return api.sendMessage("😲", threadID);
   };

      if ((event.body.toLowerCase() == "😲") || (event.body.toLowerCase() == "😲😲")) {
     return api.sendMessage("😯", threadID);
   };

      if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😳😳")) {
     return api.sendMessage("Aby Bhens Chor KYa GYa 😳😳😳", threadID);
   };

      if ((event.body.toLowerCase() == "🤯") || (event.body.toLowerCase() == "🤯🤯")) {
     return api.sendMessage("Tre Sar Me BumB Kis Ny PhoRa 😂", threadID);
   };

      if ((event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😖😖")) {
     return api.sendMessage("Asa Muu Na BaNa 😂", threadID);
   };

      if ((event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "😣😣")) {
     return api.sendMessage("😣😣😣", threadID);
   };

      if ((event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😫")) {
     return api.sendMessage("ChaL HaT NoTanGi 😫😂😂", threadID);
   };

      if ((event.body.toLowerCase() == "😵") || (event.body.toLowerCase() == "😵😵")) {
     return api.sendMessage("Asa KYa DeKh LiYa 😳", threadID);
   };

      if ((event.body.toLowerCase() == "🥶") || (event.body.toLowerCase() == "sardi")) {
     return api.sendMessage("Aww BaBe  SarDi Lag Rhi T0o MeRe PaSs Ajao 🙈😜", threadID);
   };

      if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵")) {
     return api.sendMessage("NaHa Le 😂🥶", threadID);
   };

      if ((event.body.toLowerCase() == "🤢") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("Aaaaa Tho0oo", threadID);
   };

      if ((event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "😷")) {
     return api.sendMessage("Are Ja Na MeKo Be BeMar KRrna KYa 🥺", threadID);
   };

      if ((event.body.toLowerCase() == "🤒") || (event.body.toLowerCase() == "🤕")) {
     return api.sendMessage("Aww BaBe K0o Ta HuWa Idher Aow ThoRa Pyal L0o 😜💉💉💉", threadID);
   };

      if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎😎")) {
     return api.sendMessage("ShoKian Na Mar 😂 Ghr Me DusRi Bar RoTi Nhi MilTi Uh k0o 😂😂😂", threadID);
   };

      if ((event.body.toLowerCase() == "😇") || (event.body.toLowerCase() == "😇😇")) {
     return api.sendMessage("😇😇😇", threadID);
   };

      if ((event.body.toLowerCase() == "🥸") || (event.body.toLowerCase() == "🤓")) {
     return api.sendMessage("Anek WaLa Jin 😂", threadID);
   };

      if ((event.body.toLowerCase() == "🤡") || (event.body.toLowerCase() == "🤡🤡")) {
     return api.sendMessage("Aww S0o SweeT 😂 CarT0on", threadID);
   };

      if ((event.body.toLowerCase() == "😈") || (event.body.toLowerCase() == "👿")) {
     return api.sendMessage("👽👽👽", threadID);
   };

      if ((event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "😹😹")) {
     return api.sendMessage("Aby Yal BiLLi Jesy Muu Sy Na Hash 😂", threadID);
   };

      if ((event.body.toLowerCase() == "😺") || (event.body.toLowerCase() == "😸")) {
     return api.sendMessage("😼😼😼", threadID);
   };

      if ((event.body.toLowerCase() == "😼") || (event.body.toLowerCase() == "😼😼")) {
     return api.sendMessage("TeResy Axha T0o Billi iTra LeTi 😂", threadID);
   };

      if ((event.body.toLowerCase() == "💋") || (event.body.toLowerCase() == "💋💋💋")) {
     return api.sendMessage("Yah PaPpi ChaPpi Nhi kRr Kxh Kxh Nhi Bht KxH HoTa Hai 😂😂😂", threadID);
   };

      if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "💚")) {
     return api.sendMessage("🖤🧡💜💙🤎🤍", threadID);
   };

      if ((event.body.toLowerCase() == "🧡") || (event.body.toLowerCase() == "🤎")) {
     return api.sendMessage("❤️🖤🤍🤎💚💜", threadID);
   };

      if ((event.body.toLowerCase() == "💜") || (event.body.toLowerCase() == "💙")) {
     return api.sendMessage("💚🤎🤍🖤❤️🧡", threadID);
   };

         if ((event.body.toLowerCase() == "🖤") || (event.body.toLowerCase() == "🤍")) {
     return api.sendMessage("❤️🧡💛💚💙💜🤎", threadID);
   };

      if ((event.body.toLowerCase() == "👻") || (event.body.toLowerCase() == "👻👻")) {
     return api.sendMessage("Bh0oT", threadID);
   };

      if ((event.body.toLowerCase() == "🖕") || (event.body.toLowerCase() == "🖕🖕")) {
     return api.sendMessage("same to u", threadID);
   };

      if ((event.body.toLowerCase() == "💉") || (event.body.toLowerCase() == "💊")) {
     return api.sendMessage("uh K0o KhuD K0o isKi ZaiDa Zarurat Hai 🤣", threadID);
   };

      if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙊")) {
     return api.sendMessage("Sch Me Bander He Hai 😂", threadID);
   };

      if ((event.body.toLowerCase() == "Chutia") || (event.body.toLowerCase() == "chutiya")) {
     return api.sendMessage("Tu Hai ChuTiya 🙂 Main T0o BoT Hun Naw🥺😂", threadID);
   };

      if ((event.body.toLowerCase() == "oye") || (event.body.toLowerCase() == "oyee")) {
     return api.sendMessage("0ye HoYe 😈", threadID);
   };

   if ((event.body.toLowerCase() == "Ok") || (event.body.toLowerCase() == "Okay")) {
     return api.sendMessage("KYa Ok🙄 Haan", threadID);
   };

   if ((event.body.toLowerCase() == "G") || (event.body.toLowerCase() == "Han G")) {
     return api.sendMessage(" H I J K L M N O P Q R S T U V W X Y Z 🙄", threadID);
   };

   if ((event.body.toLowerCase() == "huh") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("Kya Hmm 🙄", threadID);
   };

   if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "acha g")) {
     return api.sendMessage("Han Ji 🙄 Jaan", threadID);
   };

   if ((event.body.toLowerCase() == "Janu") || (event.body.toLowerCase() == "jan")) {
     return api.sendMessage("Bolo Naw MeRi JaN🥰💙", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };
    if ((event.body.toLowerCase() == "gm") || (event.body.toLowerCase() == "morning")) {
     return api.sendMessage("Good morning 🥰:))", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("Pehle  Brush Karke aa ajeeb si smell aa ri hai", threadID);
   };

    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("Areh Adi MaNav Zoo se Bahar Kaise Agya Tu. Firse Zoo M Ja. Bahar Kya Kar Rha H", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix kon lgayga hawa me sim likh diya yar...... Omffo😒", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. Ye sab ke alawa kuch bolna nhi ata Kya tumko Chalo ASSALAM O ALAIKUM Bolo", threadID);
   };

   if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "Bot admin")) {
     return api.sendMessage("༄ᴹᴿ〆ꜱʜᴀʜɪdツ࿐❤️\n m.me/100083420224755", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol player")) {
     return api.sendMessage("Khud k0 kya legend samjhte ho 😂", threadID);
   };

   if ((event.body.toLowerCase() == "Good morning") || (event.body.toLowerCase() == "good morning Darling")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("Main Hu na jaani ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "SHAHID") || (event.body.toLowerCase() == "Shahid") || (event.body.toLowerCase() == "KIDR HO SHAHID") || (event.body.toLowerCase() == "kaha gya")) {
     return api.sendMessage( "Busy Honge Work Me😑Main t0 Hoon yar 😘",threadID);


   };

   if ((event.body.toLowerCase() == "Owner") || (event.body.toLowerCase() == "owner")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞➸⃝🐼⃝⃞⃟💙Ｓ𝐇𝗔𝐇𝐢𝗗🎸 ☜ \n 𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖\n 亗  ᴘㅤᴀㅤɢㅤᴀㅤʟ メ.\n 𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- www.facebook.com/100083420224755", threadID);
   };

   if ((event.body.toLowerCase() == "tumhe banaya kon hai") || (event.body.toLowerCase() == "tumko banaya kisne")) {
     return api.sendMessage("Mr Shahid ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Latkaye Mat Raha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "Bot creator") || (event.body.toLowerCase() == "bot ka admin kon ha")) {
     return api.sendMessage("He is Mr Shahid. ", threadID);
   };

   if ((event.body.toLowerCase() == "Pagal") || (event.body.toLowerCase() == "pagal")) {
     return api.sendMessage("ye toh hasina h. meri jaan h. meri dil ki dhadkan h🤩.", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("hanji, karunga lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "Chup") || (event.body.toLowerCase() == "KAM BOL") || (event.body.toLowerCase() == "Shut up") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("kyu rahu chup🥺🥺", "Sirf apke kehne se chup ho gya brna 😒😒", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("Tu H Btc. Bhos DK", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("srry malik maaf kr do ab nhi kruga 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "gund") || (event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand land mat kr yha brna niche fek dunga🙂. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️sab dekh rahe hai brna bhot kiss deta🙈", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you Jaan")) {
     return api.sendMessage("️M hu hi itna Accha. sab log Tareef karte h meri😍.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 M toh Sirf Mazak Kr Rha Tha🥺. Gussa Mat Karo. Ek Chummi Lo aur Shant Raho 😘", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️Hmm Hmm Na Karke Sidha Sidha bolo. Hey Marry Me🙈", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name me kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bacche") || (event.body.toLowerCase() == "Bot ke bacche")) {
     return api.sendMessage("️mera baccha toh Tumhare Pet m H.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️m toh Andha Hu Dekh nhi sakta😜", threadID);
   };

   if ((event.body.toLowerCase() == "Pagal") || (event.body.toLowerCase() =="pagal")) {
     return api.sendMessage("️Mr Shahid 😍😍💞", threadID);
   };

   if ((event.body.toLowerCase() == "love you janu😘") || (event.body.toLowerCase() == "mujhe bhi love you bol")) {
     return api.sendMessage("️Are meri sizuka jaanu love you too ummaaaah😘😘😘😘😘😘", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️Man Toh Accha H Nhi. Kam  Se Kam Shakal Toh achhi bna lo Meri Jaan", threadID);
   };

   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️Idhar udhar koi nhi hai🙄 ", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️M Hu Na bby, Meri Pas Aoo M Pyar Karunga☺️", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessag("Are kya hua phir brekup hua kya?😬", threadID);
   };

   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("Thoda Kam Has Warna ✊🤐", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("Ankho m Pyar, Dil me khumar, Pyar Toh Nhi kar Liya Mujhse🥰", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("M Tabhi Accha hota hu, Jab Apko Hasata hu☺️", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "ami juwel") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes Jewel are you fine?", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("Rani") == 0 || (event.body.indexOf("rani") == 0)) {
    var msg = {
      body: `╔═❖•ೋ° °ೋ•❖═╗\n💋🥵${name}🥵💋\n╚═❖•ೋ° °ೋ•❖═╝,\ｎ\n${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
