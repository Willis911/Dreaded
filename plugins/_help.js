/*
cmd({
pattern : "help",
type : help,

}

*/

global.BUTTONS = process.env.BUTTONS || "1";
const os = require('os');
const fs = require("fs");
const Config = require('../config');
let {
  fancytext,
  tlang,
  tiny,
  bot_,
  alive,
  runtime,
  formatp,
  smsg,
  getAdmin,
  send,
  react,
  botpic,
  sleep,
  getBuffer,
  prefix,
  sck1,
  smd,
  sck,
  getTime,
  formatDate,
  groupdb,
  smdJson,
  smdBuffer,
  isAdmin
} = require(lib_dir || "../lib");
const long = String.fromCharCode(8206);
const readmore = long.repeat(4001);
const sᴜʜᴀɪʟ_ᴍᴅ = require('../lib/plugins');
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
const axios = require('axios');
const util = require("util");
const {
  commands
} = require('../lib');
const {
  exec
} = require("child_process");
const translatte = require("translatte");
const path = require('path');
const cron = require('node-cron');
var cronStart = false;
if (!cronStart) {
  cron.schedule('*/15 * * * *', () => {
    cronStart = true;
    fs.readdir('./temp', (err, files) => {
      if (err) {
        return;
      } else {
        files.forEach(file => {
          try {
            fs.unlinkSync("./temp/" + file);
          } catch {
            console.log("ERROR DELETING FILES: ", e);
          }
        });
      }
    });
  });
}
global.caption = process.env.CAPTION || global.caption || Config.caption || "ɢɛռɛʀǟȶɛɖ ᏰᎩ ᏇᎥᏝᏝᎥᏕ";
global.ownername = global.ownername || Config.ownername || "≛ Willis";
global.botname = global.botname || Config.botname || "ᴡɪʟʟɪꜱ-ᴍᴅ";
global.menu = process.env.MENU || global.menu || Config.menu || "3";
global.HANDLERS = process.env.HANDLERS || Config.HANDLERS || prefix || "";
global.WORKTYPE = process.env.MODE || global.WORKTYPE || Config.WORKTYPE || "" || "";
global.menu_fancy = process.env.MENU_FANCY || global.menu_fancy || "1";
global.ui_Cache = {};
global.ui_urls = [];
smd({
  'cmdname': "listmenu",
  'alias': ['l'],
  'desc': "category list",
  'category': "general"
}, async (_0x4b07ea, _0x447c06) => {
  try {
    const _0x2c5cf1 = {};
    commands.map(async (_0x45813b, _0x4a4ca3) => {
      if (_0x45813b.dontAddCommandList === false && _0x45813b.pattern !== undefined) {
        if (!_0x2c5cf1[_0x45813b.category]) {
          _0x2c5cf1[_0x45813b.category] = [];
        }
        _0x2c5cf1[_0x45813b.category].push(_0x45813b.pattern);
      }
    });
    let _0x17675f = ("\n*🦄 ᴜᴘ ᴛɪᴍᴇ :* " + runtime(process.uptime()) + "\n*🍁 ᴛᴏᴅᴀʏ ɪs :* " + _0x4b07ea.date + "\n*🎗 ɴᴏᴡ ᴛɪᴍᴇ :* " + _0x4b07ea.time + "\n         \n  ➮Fᴏᴜɴᴅᴇʀ- Willis𝛁\n  ➮Oᴡɴᴇʀ - " + ownername + "\n  ➮Nᴜᴍ - " + owner.split(',')[0x0] + "\n  ➮Mᴇᴍᴏ - " + formatp(os.totalmem() - os.freemem()) + '/' + formatp(os.totalmem()) + "\n").trim();
    let _0x880056 = '';
    let _0x309144 = [];
    let _0xcf9ed4 = Math.round(Math.random() * 0x2);
    let _0x559f2b = _0xcf9ed4 === 0x0 ? 'MENU' : "COMMANDS";
    let _0x32f705 = "╭═══════════════════════⊷\n│\t *WILLIS-MD_" + _0x559f2b + "_LIST* \n╰═══════════════════════⊷\n\n\t```Reply the number you wants to select```\n" + _0x17675f + "         \n         \n\n";
    let _0x45868a = 0x1;
    let _0x56f23d = 0x0;
    for (const _0x4e3aab in _0x2c5cf1) {
      _0x56f23d += 0x1;
      if (_0x447c06.toLowerCase() == _0x4e3aab.toLowerCase()) {
        _0x32f705 = "╭════〘 *" + _0x4e3aab.toUpperCase() + "* 〙════⊷\n\n";
        for (const _0x37b214 of _0x2c5cf1[_0x4e3aab]) {
          _0x32f705 += "│ " + fancytext(_0x37b214, 0x1) + "\n";
        }
        _0x32f705 += "\n╰══════════════════⊷";
        _0x309144 = false;
        break;
      }
      if (_0x56f23d >= 0xa) {
        _0x45868a += 0x1;
        _0x56f23d = 0x0;
      }
      _0x32f705 += "\n*" + _0x45868a + '.' + _0x56f23d + " |" + _0x4e3aab.toUpperCase() + " " + _0x559f2b + "*\n";
      _0x880056 += "{\"title\": \"" + _0x4e3aab + " menu\",\"id\":\"" + prefix + "help " + _0x4e3aab + "\"},";
      _0x309144 = [_0x4e3aab];
    }
    ;
    _0x32f705 += "\n\n" + caption;
    _0x880056 += "{\"title\": \"list\",\"id\":\"" + prefix + "list\"}";
    let _0x36617e = [{
      'name': 'single_select',
      'buttonParamsJson': "{\"title\":\"SELECT MENU\",\"sections\":[{\"title\":\"Select Menu\",\"highlight_label\":\"suhail\",\"rows\":[" + _0x880056 + "]}]}"
    }];
    if (_0x309144 && /1|buttons|btn/gi.test(BUTTONS) && _0x4b07ea.device !== "web") {
      await sendButtons(_0x4b07ea, {
        'after_data': {
          'image': log0
        },
        'caption': _0x17675f,
        'buttons': "\n            #button:quick_reply | display_text : ALL MENU 🍫 | id:" + prefix + "menu /#\n            #button:cta_url | display_text : JOIN US 👤| id:" + gurl + " /#          \n            ",
        'quoted': _0x4b07ea
      }, _0x36617e);
    } else {
      return await _0x4b07ea.sendUi(_0x4b07ea.jid, {
        'caption': _0x32f705
      });
    }
  } catch (_0x43a5d1) {
    await _0x4b07ea.error(_0x43a5d1 + "\nCommand:help", _0x43a5d1);
  }
});
const create_UI = async () => {
  const _0x5b1b76 = [".jpg", ".jpeg", ".png", '.webp'];
  const _0x153259 = [".mp4", ".avi", ".mov", ".mkv", ".gif", ".m4v"];
  let _0x247d2d = ('' + (global.userImages || '')).split(',');
  let _0x43a9ad = (_0x247d2d[Math.floor(Math.random() * _0x247d2d.length)] || '').trim();
  let _0x4eecbd = false;
  if (/http/g.test(_0x43a9ad)) {
    const _0x23b214 = _0x43a9ad.substring(_0x43a9ad.lastIndexOf('.')).toLowerCase();
    if (_0x153259.includes(_0x23b214)) {
      _0x4eecbd = "video";
    } else if (_0x5b1b76.includes(_0x23b214)) {
      _0x4eecbd = "image";
    }
  }
  return {
    [_0x4eecbd || "Inavlid_Type_URL"]: {
      'url': _0x43a9ad
    }
  };
};
global.createButtons = _0x4b5a01 => {
  if (!_0x4b5a01 || Array.isArray(_0x4b5a01)) {
    return _0x4b5a01 || [];
  }
  const _0x3045d5 = [];
  let _0x5993a7;
  while ((_0x5993a7 = /#button\s*:\s*([^|]+)\s*\|\s*display_text\s*:\s*([^|]+)(?:\s*\|\s*(id)\s*:\s*([^|]+))?(?:\s*\|\s*(copy_code)\s*:\s*([^|]+))?\/#/ig.exec(_0x4b5a01)) !== null) {
    try {
      const _0x50ebc6 = _0x5993a7[0x1].trim();
      const _0x59ac70 = _0x5993a7[0x2].trim();
      const _0x117d84 = _0x5993a7[0x4] ? _0x5993a7[0x4].trim() : '';
      let _0x3b433f = _0x5993a7[0x6] ? _0x5993a7[0x6].trim() : '';
      let _0xa83c33 = {
        'display_text': _0x59ac70
      };
      if (_0x50ebc6 === "cta_copy") {
        _0xa83c33 = {
          'display_text': _0x59ac70,
          'id': _0x117d84,
          'copy_code': _0x3b433f
        };
      } else {
        if (_0x50ebc6 === "cta_url") {
          _0xa83c33 = {
            'display_text': _0x59ac70,
            'url': ('' + (_0x117d84 || '')).replace(" /#", '').trim(),
            'merchant_url': _0x3b433f || "https://www.google.com"
          };
        } else {
          _0xa83c33 = {
            'display_text': _0x59ac70,
            'id': _0x117d84
          };
        }
      }
      if (_0x50ebc6) {
        _0x3045d5.push({
          'name': _0x50ebc6,
          'buttonParamsJson': JSON.stringify(_0xa83c33)
        });
      } else {
        console.log("button_name missing in", _0x5993a7[0x0]);
      }
    } catch (_0x50189a) {
      console.log(_0x50189a);
    }
  }
  return _0x3045d5 || [];
};
global.sendButtons = async (_0x54498b, _0x46c6e5 = {}, _0x56ada3 = [], _0xecab7 = false) => {
  if (!_0x54498b) {
    throw "need m instance";
  }
  let _0x5896c3 = _0xecab7 || _0x54498b.jid;
  if (typeof _0x46c6e5 != "object") {
    _0x46c6e5 = {};
  }
  _0x46c6e5.messageId = _0x46c6e5.messageId || _0x54498b.bot.messageId();
  if (typeof _0x56ada3 === "string") {
    _0x56ada3 = createButtons(_0x56ada3);
  }
  if (typeof _0x46c6e5.buttons === "string" || Array.isArray(_0x46c6e5.buttons)) {
    _0x56ada3 = [..._0x56ada3, ...(createButtons(_0x46c6e5.buttons) || [])];
  }
  let {
    generateWAMessageFromContent: _0x12af2f,
    proto: _0x5b3b09,
    prepareWAMessageMedia: _0x490672
  } = require('@whiskeysockets/baileys');
  let _0x534db0 = {};
  try {
    if (typeof _0x46c6e5.imageMessage === "object") {
      _0x534db0 = {
        'imageMessage': _0x46c6e5.imageMessage
      };
    } else {
      if (typeof _0x46c6e5.videoMessage === 'object') {
        _0x534db0 = {
          'videoMessage': _0x46c6e5.videoMessage
        };
      } else {
        let _0x24bc42 = false;
        let _0x28d357 = _0x46c6e5.image || _0x46c6e5.video ? _0x46c6e5 : await create_UI();
        if (!_0x28d357.image && !_0x28d357.video) {
          _0x28d357 = _0x46c6e5.after_media || _0x46c6e5.after_data || _0x28d357;
        }
        if (_0x28d357.image) {
          _0x24bc42 = (await _0x490672({
            'image': _0x28d357.image || log0
          }, {
            'upload': _0x54498b.bot.waUploadToServer
          })) || false;
        } else if (_0x28d357.video) {
          _0x24bc42 = (await _0x490672({
            'video': _0x28d357.video || log0
          }, {
            'upload': _0x54498b.bot.waUploadToServer
          })) || false;
        }
        if (_0x24bc42) {
          _0x534db0 = _0x24bc42.imageMessage ? {
            'imageMessage': _0x24bc42.imageMessage
          } : _0x24bc42.videoMessage ? {
            'videoMessage': _0x24bc42.videoMessage
          } : {};
        }
      }
    }
  } catch (_0x2a6989) {
    _0x534db0 = {};
  }
  let _0x3318cc = {
    ...(await _0x54498b.bot.contextInfo(botname, _0x54498b.senderName || ownername)),
    ...(_0x46c6e5.contextInfo || {})
  };
  let _0x214047 = await _0x12af2f(_0x5896c3, {
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': _0x5b3b09.Message.InteractiveMessage.create({
          'body': {
            'text': _0x46c6e5.text || _0x46c6e5.body || _0x46c6e5.caption || 'ᴡɪʟʟɪꜱ-ᴍᴅ'
          },
          'footer': {
            'text': _0x46c6e5.footer || "ᴡɪʟʟɪꜱ-ᴍᴅ"
          },
          'header': {
            ...(_0x534db0 || {}),
            'hasMediaAttachment': !!(_0x534db0.imageMessage || _0x534db0.videoMessage),
            ...(_0x46c6e5.header || {})
          },
          'contextInfo': _0x3318cc,
          'nativeFlowMessage': _0x5b3b09.Message.InteractiveMessage.NativeFlowMessage.create({
            'buttons': _0x56ada3
          })
        }),
        'messageContextInfo': {
          'deviceListMetadata': {},
          'deviceListMetadataVersion': 0x2
        }
      }
    }
  }, _0x46c6e5);
  await _0x54498b.bot.relayMessage(_0x5896c3, _0x214047.message, {
    'messageId': _0x46c6e5.messageId
  });
  return _0x214047;
};
global.runsmd = async (_0x2f9e88, _0x4fdd6d) => {
  try {
    const {
      commands: _0x3f8644,
      groupdb: _0x249859,
      userdb: _0x23bcfd
    } = require(lib_dir || '../lib');
    let {
      isCreator: _0x4421c0,
      dbuser: _0x279f61,
      dbgroup: _0xb8719e
    } = _0x4fdd6d || {};
    let {
      body: _0x411da6
    } = _0x2f9e88;
    var _0x567f7 = ('' + (_0x411da6 || _0x2f9e88.text || '')).trim();
    let _0x482a1f = false;
    let _0x1eaedd = false;
    let _0x1bac39 = false;
    let _0x84642b = global.prefix;
    var _0x3188cb = !!(!HANDLERS || ["false", "null", " ", '', "nothing", "not", "empty", ''].includes(HANDLERS));
    _0x84642b = _0x411da6 && prefixRegex.test(_0x411da6[0x0]) && _0x411da6[0x0] || '';
    if (_0x567f7 && HANDLERS.toLowerCase().includes("null")) {
      _0x482a1f = true;
      _0x1eaedd = _0x411da6.split(" ")[0x0].toLowerCase() || false;
    } else if (_0x567f7 && !HANDLERS.toLowerCase().includes("null")) {
      _0x482a1f = prefixboth || _0x411da6 && prefixRegex.test(_0x411da6[0x0]);
      _0x1eaedd = _0x482a1f ? _0x3188cb ? _0x411da6.trim().split(" ")[0x0].toLowerCase() : _0x411da6.slice(0x1).trim().split(" ")[0x0].toLowerCase() : false;
      _0x1bac39 = prefixboth ? _0x411da6.trim().split(" ")[0x0].toLowerCase() : '';
    } else {
      _0x482a1f = false;
    }
    if (_0x2f9e88.blockJid && !_0x2f9e88.isSuhail) {
      return;
    }
    if (_0x482a1f && (_0x2f9e88.isBaileys || !_0x4421c0 && WORKTYPE === "private" && !_0x2f9e88.allowJid)) {
      _0x482a1f = false;
    }
    const _0x2fb14b = _0x411da6.trim().split(/ +/).slice(0x1) || [];
    if (!_0x4421c0 && global.disablepm === "true" && _0x482a1f && !_0x2f9e88.isGroup) {
      _0x482a1f = false;
    }
    if (!_0x4421c0 && global.disablegroup === "true" && _0x482a1f && _0x2f9e88.isGroup && !_0x2f9e88.allowJid) {
      _0x482a1f = false;
    }
    if (_0x482a1f) {
      let _0x28261d = _0x3f8644.find(_0x123e48 => _0x123e48.pattern === _0x1eaedd) || _0x3f8644.find(_0x54fd83 => _0x54fd83.alias && _0x54fd83.alias.includes(_0x1eaedd));
      if (!_0x28261d && prefixboth && _0x1bac39) {
        _0x28261d = sᴜʜᴀɪʟ_ᴍᴅ.commands.find(_0x447883 => _0x447883.pattern === _0x1bac39) || sᴜʜᴀɪʟ_ᴍᴅ.commands.find(_0x1b4484 => _0x1b4484.alias && _0x1b4484.alias.includes(_0x1bac39));
      }
      if (_0x28261d && _0x28261d.fromMe && !_0x2f9e88.fromMe && !_0x4421c0) {
        _0x28261d = false;
        return _0x2f9e88.reply(tlang().owner);
      }
      if (_0x2f9e88.isGroup && _0x28261d && _0x1eaedd !== 'bot') {
        let _0x536ef9 = _0xb8719e || (await _0x249859.findOne({
          'id': _0x2f9e88.chat
        })) || {
          'botenable': toBool(_0x2f9e88.isSuhail || !_0x2f9e88.blockJid)
        };
        if (_0x536ef9 && _0x536ef9.botenable === 'false') {
          _0x28261d = false;
        }
        if (_0x28261d && _0x536ef9) {
          let _0x2d9ece = _0x28261d.pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          let _0x10ae6e = new RegExp("\\b" + _0x2d9ece + "\\b");
          if (_0x536ef9.disablecmds !== 'false' && _0x10ae6e.test(_0x536ef9.disablecmds)) {
            _0x28261d = false;
          }
        }
      }
      if (!_0x4421c0 && _0x28261d) {
        try {
          let _0x3ee822 = _0x279f61 || (await _0x23bcfd.findOne({
            'id': _0x2f9e88.sender
          })) || {
            'ban': "false"
          };
          if (_0x3ee822.ban === "true") {
            _0x28261d = false;
            _0x2f9e88.reply("*Hey " + _0x2f9e88.senderName.split("\n").join("  ") + ",*\n_You are banned from using commands._");
          }
        } catch (_0x246008) {
          console.log("checkban.ban", _0x246008);
        }
      }
      if (_0x28261d) {
        if (_0x28261d.react) {
          _0x2f9e88.react(_0x28261d.react);
        }
        let _0x4ec0b0 = _0x2fb14b.join(" ") || '';
        let _0x23c7af = _0x28261d.pattern;
        _0x2f9e88.cmd = _0x23c7af;
        _0x2f9e88.command = _0x28261d;
        try {
          _0x28261d["function"](_0x2f9e88, _0x4ec0b0, {
            ..._0x4fdd6d,
            'prefa': _0x84642b,
            'prefix': _0x84642b || prefix,
            'cmd': _0x23c7af,
            'text': _0x4ec0b0,
            'body': _0x411da6,
            'args': _0x2fb14b,
            'cmdName': _0x1eaedd,
            'smd': _0x23c7af,
            'budy': _0x567f7,
            'command': _0x28261d
          });
        } catch (_0x1870c7) {
          console.log("[ERROR] ", _0x1870c7);
        }
      } else {
        if (_0x2f9e88.text) {
          let _0x3d9b8b = {
            'key': _0x2f9e88.key,
            'message': {
              'extendedTextMessage': {
                'text': _0x2f9e88.text,
                ..._0x2f9e88.msg
              }
            },
            'pushName': _0x2f9e88.pushName,
            'messageTimestamp': _0x2f9e88.messageTimestamp
          };
          _0x2f9e88.bot.ev.emit("messages.upsert", {
            'messages': [_0x3d9b8b],
            'type': "append"
          });
        }
      }
    }
  } catch (_0x15e6bc) {
    console.log(_0x15e6bc);
  }
};
smd({
  'cmdname': "help",
  'alias': ['categories', 'ctgry', "category"],
  'desc': "category list",
  'category': "general"
}, async (_0x42f34c, _0x295bd0) => {
  try {
    if (_0x295bd0.split(" ")[0x0]) {
      let _0x4caab4 = [];
      const _0x4316d9 = commands.find(_0x1ae940 => _0x1ae940.pattern === _0x295bd0.split(" ")[0x0].toLowerCase());
      if (_0x4316d9) {
        _0x4caab4.push("*🍁Command:* " + _0x4316d9.pattern);
        if (_0x4316d9.category) {
          _0x4caab4.push("*🧩Category:* " + _0x4316d9.category);
        }
        if (_0x4316d9.alias && _0x4316d9.alias[0x0]) {
          _0x4caab4.push("*🧩Alias:* " + _0x4316d9.alias.join(", "));
        }
        if (_0x4316d9.desc) {
          _0x4caab4.push("*🧩Description:* " + _0x4316d9.desc);
        }
        if (_0x4316d9.use) {
          _0x4caab4.push("*〽️Usage:*\n ```" + prefix + _0x4316d9.pattern + " " + _0x4316d9.use + '```');
        }
        await _0x42f34c.reply(_0x4caab4.join("\n"));
      }
    }
    const _0x58f86d = {};
    commands.map(async (_0x2f410a, _0x3353fb) => {
      if (_0x2f410a.dontAddCommandList === false && _0x2f410a.pattern !== undefined) {
        if (!_0x58f86d[_0x2f410a.category]) {
          _0x58f86d[_0x2f410a.category] = [];
        }
        _0x58f86d[_0x2f410a.category].push(_0x2f410a.pattern);
      }
    });
    let _0x14256f = Math.round(Math.random() * 0x2);
    let _0x12204e = _0x14256f === 0x0 ? "MENU" : "COMMANDS";
    let _0x2ebcda = "╭═══════════════════════⊷\n│\t *WILLIS-MD_" + _0x12204e + "_LIST* \n╰═══════════════════════⊷\n\n\t```Reply the number you wants to select```\n\n";
    let _0x12337c = 0x1;
    let _0x470b85 = 0x0;
    for (const _0x8f00bb in _0x58f86d) {
      _0x470b85 += 0x1;
      if (_0x295bd0.toLowerCase() == _0x8f00bb.toLowerCase()) {
        _0x2ebcda = "╭════〘 *" + _0x8f00bb.toUpperCase() + "* 〙════⊷\n\n";
        for (const _0x3c5031 of _0x58f86d[_0x8f00bb]) {
          _0x2ebcda += "│ " + fancytext(_0x3c5031, 0x1) + "\n";
        }
        _0x2ebcda += "\n╰══════════════════⊷";
        break;
      }
      if (_0x470b85 >= 0xa) {
        _0x12337c += 0x1;
        _0x470b85 = 0x0;
      }
      _0x2ebcda += "\n*" + _0x12337c + '.' + _0x470b85 + " |" + _0x8f00bb.toUpperCase() + " " + _0x12204e + "*\n";
    }
    ;
    _0x2ebcda += "\n\n" + caption;
    return await _0x42f34c.sendUi(_0x42f34c.jid, {
      'caption': _0x2ebcda
    }, {
      'quoted': _0x42f34c
    });
  } catch (_0x155dfa) {
    await _0x42f34c.error(_0x155dfa + "\nCommand:help", _0x155dfa);
  }
});
smd({
  'pattern': 'menus',
  'type': "MENU list",
  'info': "general",
  'dontAddCommandList': true
}, async _0x22c50a => {
  try {
    let _0x3e7f3c = ("\n  *🦄 ᴜᴘ ᴛɪᴍᴇ :* " + runtime(process.uptime()) + "\n  *🍁 ᴛᴏᴅᴀʏ ɪs :* " + _0x22c50a.date + "\n  *🎗 ɴᴏᴡ ᴛɪᴍᴇ :* " + _0x22c50a.time + "\n  \n  ➮Fᴏᴜɴᴅᴇʀ- Willis𝛁\n  ➮Oᴡɴᴇʀ - " + ownername + "\n  ➮Nᴜᴍ - " + owner.split(',')[0x0] + "\n  ➮Mᴇᴍᴏ - " + formatp(os.totalmem() - os.freemem()) + '/' + formatp(os.totalmem()) + "\n  \n   *🧑‍💻 :*  Sᴜʜᴀɪʟ-Mᴜʟᴛɪᴅᴇᴠɪᴄᴇ ɪꜱ ɴᴏᴡ Aᴠᴀɪʟᴀʙʟᴇ\n  \n  " + readmore + "\n  ╭════〘 *ALL MENU* 〙════⊷\n  │🏮 Lɪꜱᴛ\n  │🏮 Cᴀᴛᴇɢᴏʀʏ\n  │🏮 Hᴇʟᴘ\n  │🏮 Aʟɪᴠᴇ\n  │🏮 Uᴘᴛɪᴍᴇ\n  │🏮 Wᴇᴀᴛʜᴇʀ\n  │🏮 Lɪɴᴋ\n  │🏮 Cᴘᴜ\n  │🏮 Rᴇᴘᴏꜱɪᴛᴏʀʏ\n  ╰══════════════════⊷").trim();
    return await _0x22c50a.bot.sendUi(_0x22c50a.from, {
      'caption': _0x3e7f3c
    });
  } catch (_0x40b621) {
    await _0x22c50a.error(_0x40b621 + "\nCommand:menus", _0x40b621);
  }
});
sᴜʜᴀɪʟ_ᴍᴅ.cmd({
  'pattern': 'setcmd',
  'desc': "To check ping",
  'category': 'general',
  'fromMe': true,
  'filename': __filename
}, async (_0x52188d, _0x56358c, {
  Void: _0x185700
}) => {
  try {
    if (!_0x56358c) {
      return await _0x52188d.send("*_Please provide cmd name by replying a Sticker_*");
    }
    let _0x417508 = _0x56358c.split(',');
    var _0x3db09f;
    var _0x5c5aab;
    let _0x1f3ed9 = false;
    if (_0x52188d.quoted) {
      let _0x4240f9 = _0x52188d.quoted.mtype;
      if (_0x4240f9 == "stickerMessage" && _0x56358c) {
        _0x1f3ed9 = true;
        _0x3db09f = _0x56358c.split(" ")[0x0];
        _0x5c5aab = "sticker-" + _0x52188d.quoted.msg.fileSha256;
      }
    }
    if (!_0x1f3ed9 && _0x417508.length > 0x1) {
      _0x5c5aab = _0x417508[0x0].trim().toLowerCase();
      _0x3db09f = _0x417508[0x1].trim().toLowerCase();
    } else {
      if (!_0x1f3ed9) {
        return await _0x52188d.send("*_Uhh Dear, Give Cmd With New Name_*\n*Eg: _.setcmd New_Name, Cmd_Name_*");
      }
    }
    if (_0x5c5aab.length < 0x1) {
      return await _0x52188d.reply("*_Uhh Please, Provide New_Cmd Name First_*");
    }
    if (global.setCmdAlias[_0x5c5aab]) {
      return await _0x52188d.send("*_\"" + (_0x1f3ed9 ? "Given Sticker" : _0x5c5aab) + "\" Already set for \"" + global.setCmdAlias[_0x5c5aab] + "\" Cmd, Please try another " + (_0x1f3ed9 ? "Sticker" : "Name") + '_*');
    }
    const _0x11aa96 = sᴜʜᴀɪʟ_ᴍᴅ.commands.find(_0x343de7 => _0x343de7.pattern === _0x3db09f) || sᴜʜᴀɪʟ_ᴍᴅ.commands.find(_0x211217 => _0x211217.alias && _0x211217.alias.includes(_0x3db09f));
    if (_0x11aa96) {
      global.setCmdAlias[_0x5c5aab] = _0x11aa96.pattern;
      return await _0x52188d.send("*_Cmd \"" + global.setCmdAlias[_0x5c5aab] + "\" Succesfully set to \"" + (_0x1f3ed9 ? 'Sticker' : _0x5c5aab) + "\"._*\n*_These all names are reset, If bot restart_*");
    } else {
      return await _0x52188d.send("*_Provided Cmd( " + _0x3db09f + ") not found in bot cmds. Please Provide Valid cmd Name_*");
    }
  } catch (_0x29f93f) {
    await _0x52188d.error(_0x29f93f + "\nCommand:setcmd", _0x29f93f);
  }
});
sᴜʜᴀɪʟ_ᴍᴅ.cmd({
  'pattern': 'delcmd',
  'desc': "To check ping",
  'category': "general",
  'fromMe': true,
  'filename': __filename
}, async (_0x34a377, _0x4cac80, {
  Void: _0x2401c8
}) => {
  try {
    let _0x2e5122 = _0x4cac80 ? _0x4cac80.split(" ")[0x0].trim().toLowerCase() : '';
    let _0x1e7130 = false;
    if (_0x34a377.quoted) {
      if (_0x34a377.quoted.mtype == "stickerMessage") {
        _0x1e7130 = true;
        _0x2e5122 = "sticker-" + _0x34a377.quoted.msg.fileSha256;
      } else {
        if (!_0x4cac80) {
          return await _0x34a377.send("*_Please reply to a Sticker that set for a Cmd_*");
        }
      }
    } else {
      if (!_0x4cac80) {
        return await _0x34a377.send("*_Uhh Dear, provide Name that set to a cmd_*\n*Eg: _.delcmd Cmd_Name_*");
      }
    }
    if (global.setCmdAlias[_0x2e5122]) {
      await _0x34a377.send("*_\"" + (_0x1e7130 ? "Given Sticker" : _0x2e5122) + "\" deleted Succesfully at \"" + global.setCmdAlias[_0x2e5122] + "\" cmd_*");
      delete global.setCmdAlias[_0x2e5122];
      return;
    } else {
      return await _0x34a377.send("*_\"" + (_0x1e7130 ? "Given Sticker" : _0x2e5122) + "\" not Set for any cmd._*\n *_Please Provide Valid " + (_0x1e7130 ? "Sticker" : "cmd Name") + " to delete_*");
    }
  } catch (_0x3e2594) {
    await _0x34a377.error(_0x3e2594 + "\nCommand:delcmd", _0x3e2594);
  }
});
sᴜʜᴀɪʟ_ᴍᴅ.smd({
  'pattern': "ping",
  'desc': "To check ping",
  'category': "general",
  'filename': __filename
}, async _0x5912d6 => {
  var _0x4f359f = new Date().getTime();
  const {
    key: _0xdb174f
  } = await _0x5912d6.reply("*Testing Ping!!!*");
  var _0x4aa54f = new Date().getTime();
  return await _0x5912d6.send("*Pong*\n *" + (_0x4aa54f - _0x4f359f) + " ms* ", {
    'edit': _0xdb174f
  }, '', _0x5912d6);
});
sᴜʜᴀɪʟ_ᴍᴅ.cmd({
  'pattern': "uptime",
  'alias': ["runtime"],
  'desc': "Tells runtime/uptime of bot.",
  'category': "misc",
  'filename': __filename
}, async _0x57234a => {
  try {
    _0x57234a.reply("*_Uptime of " + tlang().title + ": " + runtime(process.uptime()) + '_*');
  } catch (_0x536049) {
    await _0x57234a.error(_0x536049 + "\n\ncommand : uptime", _0x536049, false);
  }
});
sᴜʜᴀɪʟ_ᴍᴅ.cmd({
  'cmdname': "menu",
  'desc': "Help list",
  'type': "general",
  'filename': __filename
}, async (_0x1593e9, _0x30950e) => {
  try {
    const {
      commands: _0x3340cb
    } = require("../lib");
    if (_0x30950e.split(" ")[0x0]) {
      let _0x416be4 = [];
      const _0x372850 = _0x3340cb.find(_0x2b4e22 => _0x2b4e22.pattern === _0x30950e.split(" ")[0x0].toLowerCase());
      if (_0x372850) {
        _0x416be4.push("*🍁Command:* " + _0x372850.pattern);
        if (_0x372850.category) {
          _0x416be4.push("*🧩Category:* " + _0x372850.category);
        }
        if (_0x372850.alias && _0x372850.alias[0x0]) {
          _0x416be4.push("*🧩Alias:* " + _0x372850.alias.join(", "));
        }
        if (_0x372850.desc) {
          _0x416be4.push("*🧩Description:* " + _0x372850.desc);
        }
        if (_0x372850.use) {
          _0x416be4.push("*〽️Usa:*\n ```" + prefix + _0x372850.pattern + " " + _0x372850.use + "```");
        }
        if (_0x372850.usage) {
          _0x416be4.push("*〽️Usage:*\n ```" + _0x372850.usage + "```");
        }
        await _0x1593e9.reply(_0x416be4.join("\n"));
      }
    }
    var _0x4a67ff;
    var _0x11b119;
    var _0x13d6d1;
    var _0x4b36c0;
    var _0x318ed0;
    var _0x32753c;
    var _0x2fe5ff;
    let _0xf67758 = 0x0;
    if (menu === '') {
      _0xf67758 = Math.floor(Math.random() * 0x4) + 0x1;
    }
    if (_0xf67758 == 0x1 || menu.trim().startsWith('1') || menu.toLowerCase().includes('aztec')) {
      _0x4a67ff = "╭════〘 " + botname + " 〙════⊷\n│ ╭──────✧≛✧──────⊰";
      _0x11b119 = "│ │";
      _0x13d6d1 = "│ ╰──────✧❁✧──────⊰\n*╰══════════════════⊷*\n*╭════*〘 ᴡɪʟʟɪꜱ-ᴍᴅ 〙 *════⊷*\n*╰══════════════════⊷*";
      _0x4b36c0 = "╭════〘";
      _0x318ed0 = "〙════⊷\n";
      _0x32753c = " │ ";
      _0x2fe5ff = "\n╰══════════════════⊷";
    } else if (_0xf67758 == 0x2 || menu.trim().startsWith('2') || menu.toLowerCase().includes("a17")) {
      _0x4a67ff = "*╭════*〘 " + botname + " 〙 *════⊷*\n│ ╭──────✧≛✧──────⊰";
      _0x11b119 = "*│ │*";
      _0x13d6d1 = "│ ╰──────✧❁✧──────⊰\n*╰══════════════════⊷*\n*╭════*〘 ᴡɪʟʟɪꜱ-ᴍᴅ 〙 *════⊷*\n*╰══════════════════⊷*";
      _0x4b36c0 = "*╭════*〘";
      _0x318ed0 = "〙 *════⊷*";
      _0x32753c = "│ ";
      _0x2fe5ff = "*╰══════════════════⊷*";
    } else {
      _0x4a67ff = "╭════〘 " + botname + " 〙════⊷\n│ ╭──────✧≛✧──────⊰";
      _0x11b119 = "│ │";
      _0x13d6d1 = "│ ╰──────✧❁✧──────⊰\n*╰══════════════════⊷*\n*╭════*〘 ᴡɪʟʟɪꜱ-ᴍᴅ 〙 *════⊷*\n*╰══════════════════⊷*";
      _0x4b36c0 = "╭════〘 ";
      _0x318ed0 = '〙 ════⊷';
      _0x32753c = '│';
      _0x2fe5ff = "╰══════════════════⊷";
    }
    const _0xb3eaee = {};
    _0x3340cb.map(async (_0x4859eb, _0x266ea8) => {
      if (_0x4859eb.dontAddCommandList === false && _0x4859eb.pattern !== undefined) {
        if (!_0xb3eaee[_0x4859eb.category]) {
          _0xb3eaee[_0x4859eb.category] = [];
        }
        _0xb3eaee[_0x4859eb.category].push(_0x4859eb.pattern);
      }
    });
    let _0x2871b5 = [0x1, 0x16, 0x17, 0x1, 0x24, 0x23, 0x30, 0x1, 0x2a, 0x37, 0x38];
    let _0x46ca19 = parseInt(menu_fancy || '') || _0x2871b5[Math.floor(Math.random() * _0x2871b5.length)];
    const _0x83f4a3 = _0x1593e9.time;
    const _0x44b745 = _0x1593e9.date;
    let _0x3be93 = _0x4a67ff + "\n" + _0x11b119 + " Theme:- " + tlang().title + "\n" + _0x11b119 + " Owner:- " + ownername + "\n" + _0x11b119 + " Plugins:- " + _0x3340cb.length + "\n" + _0x11b119 + " Uptime:- " + runtime(process.uptime()) + "\n" + _0x11b119 + " Mem:- " + formatp(os.totalmem() - os.freemem()) + '/' + formatp(os.totalmem()) + "\n" + _0x11b119 + " Time:- " + _0x83f4a3 + "\n" + _0x11b119 + " Date:- " + _0x44b745 + "\n" + _0x13d6d1 + "\n\n";
    for (const _0x7f3aa3 in _0xb3eaee) {
      _0x3be93 += _0x4b36c0 + " *" + fancytext(_0x7f3aa3, _0x46ca19) + "* " + _0x318ed0 + "\n";
      if (_0x30950e.toLowerCase() == _0x7f3aa3.toLowerCase()) {
        _0x3be93 = _0x4b36c0 + " *" + fancytext(_0x7f3aa3, _0x46ca19) + "* " + _0x318ed0 + "\n";
        for (const _0x4b32d2 of _0xb3eaee[_0x7f3aa3]) {
          _0x3be93 += _0x32753c + " " + fancytext(_0x4b32d2, _0x46ca19) + "\n";
        }
        _0x3be93 += _0x2fe5ff + "\n";
        break;
      } else {
        for (const _0x4b275b of _0xb3eaee[_0x7f3aa3]) {
          _0x3be93 += _0x32753c + " " + fancytext(_0x4b275b, _0x46ca19) + "\n";
        }
        _0x3be93 += _0x2fe5ff + "\n";
      }
    }
    _0x3be93 += caption;
    let _0x4f59ba = {
      'caption': _0x3be93
    };
    if (/1|buttons|btn/gi.test(BUTTONS) && _0x1593e9.device !== 'web') {
      await sendButtons(_0x1593e9, {
        'caption': _0x3be93,
        'footer': caption,
        'buttons': "\n        #button:quick_reply | display_text : Willis 🌟 | id:" + prefix + "intro /#\n        #button:cta_url | display_text : Support Us 🫂| id:" + gurl + " /# \n        #button:quick_reply | display_text : OWNER | id:" + prefix + "owner /#            \n        "
      });
    } else {
      await _0x1593e9.sendUi(_0x1593e9.chat, _0x4f59ba, _0x1593e9);
    }
  } catch (_0x569fb9) {
    await _0x1593e9.error(_0x569fb9 + "\nCommand:menu", _0x569fb9);
  }
});
sᴜʜᴀɪʟ_ᴍᴅ.cmd({
  'pattern': "list",
  'desc': "list menu",
  'category': 'general',
  'react': '🥀'
}, async _0x287c70 => {
  try {
    const {
      commands: _0x199b48
    } = require('../lib');
    let _0xa319a8 = "\n╭════〘 *" + botname + "* 〙 ════⊷     \n│ ✭ Theme: " + tlang().title + "\n│ ✭ Prefix: " + prefix + "\n│ ✭ Owner: " + ownername + "\n│ ✭ Commands: " + _0x199b48.length + "\n│ ✭ Uptime: " + runtime(process.uptime()) + "\n│ ✭ Mem: " + formatp(os.totalmem() - os.freemem()) + '/' + formatp(os.totalmem()) + "\n╰═══════════════════════⊷\n";
    let _0x3eec09 = [0x1, 0x16, 0x17, 0x1, 0x24, 0x23, 0x30, 0x1, 0x2a, 0x37, 0x38];
    let _0x1c3da3 = parseInt(menu_fancy || '') || _0x3eec09[Math.floor(Math.random() * _0x3eec09.length)];
    for (let _0x5e8242 = 0x0; _0x5e8242 < _0x199b48.length; _0x5e8242++) {
      if (_0x199b48[_0x5e8242].pattern == undefined) {
        continue;
      }
      _0xa319a8 += '*' + (_0x5e8242 + 0x1) + " " + fancytext(_0x199b48[_0x5e8242].pattern, _0x1c3da3) + "*\n";
      _0xa319a8 += "  " + fancytext(_0x199b48[_0x5e8242].desc || '', _0x1c3da3) + "\n";
    }
    if (/1|buttons|btn/gi.test(BUTTONS) && _0x287c70.device !== "web") {
      await sendButtons(_0x287c70, {
        'caption': _0xa319a8.trim(),
        'footer': caption,
        'buttons': "\n        #button:quick_reply | display_text : Willis 🌟 | id:" + prefix + "intro /#\n        #button:cta_url | display_text : Support Us 🫂| id:" + gurl + " /# \n        #button:quick_reply | display_text : OWNER | id:" + prefix + "owner /#            \n        "
      });
    } else {
      await _0x287c70.sendUi(_0x287c70.chat, {
        'caption': _0xa319a8 + caption
      });
    }
  } catch (_0x332e0f) {
    await _0x287c70.error(_0x332e0f + "\nCommand:list", _0x332e0f);
  }
});
sᴜʜᴀɪʟ_ᴍᴅ.smd({
  'pattern': "owner",
  'desc': "To check ping",
  'category': "general",
  'filename': __filename
}, async _0x5c2a81 => {
  try {
    const _0x423c44 = "BEGIN:VCARD\nVERSION:3.0\nFN:" + ownername + "\n" + "ORG:;\n" + "TEL;type=CELL;type=VOICE;waid=" + global.owner?.["split"](',')[0x0] + ':+' + global.owner?.["split"](',')[0x0] + "\n" + "END:VCARD";
    let _0x31e6c4 = {
      'contacts': {
        'displayName': ownername,
        'contacts': [{
          'vcard': _0x423c44
        }]
      },
      'contextInfo': {
        'externalAdReply': {
          'title': ownername,
          'body': "Touch here.",
          'renderLargerThumbnail': true,
          'thumbnailUrl': '',
          'thumbnail': log0,
          'mediaType': 0x1,
          'mediaUrl': '',
          'sourceUrl': "https://wa.me/+" + global.owner?.["split"](',')[0x0] + "?text=Hii+" + ownername
        }
      }
    };
    return await _0x5c2a81.sendMessage(_0x5c2a81.jid, _0x31e6c4, {
      'quoted': _0x5c2a81
    });
  } catch (_0xb00baf) {
    await _0x5c2a81.error(_0xb00baf + "\nCommand:owner", _0xb00baf);
  }
});
sᴜʜᴀɪʟ_ᴍᴅ.cmd({
  'pattern': "trt",
  'alias': ["translate"],
  'category': 'general',
  'filename': __filename,
  'use': "< text >",
  'desc': "Translate's given text in desird language."
}, async (_0x224bdc, _0x121464) => {
  try {
    let _0x2aa237 = _0x121464 ? _0x121464.split(" ")[0x0].toLowerCase() : 'en';
    if (!_0x224bdc.reply_text) {
      var _0x15c998 = _0x121464.replace(_0x2aa237, '')?.["trim"]() || false;
    } else {
      var _0x15c998 = _0x224bdc.reply_text;
    }
    if (!_0x15c998) {
      return await _0x224bdc.reply("*Please Give Me Text. Example: _" + prefix + "trt en Who are you_*");
    }
    var _0x286216 = await translatte(_0x15c998, {
      'from': 'auto',
      'to': _0x2aa237
    });
    if ('text' in _0x286216) {
      return await _0x224bdc.reply(_0x286216.text);
    }
  } catch (_0x12bdec) {
    await _0x224bdc.error(_0x12bdec + "\n\ncommand trt", _0x12bdec);
  }
});
const readDirectory = _0x2f9b6f => {
  return new Promise((_0x329b4a, _0x2d3ef1) => {
    fs.readdir(_0x2f9b6f, (_0x45aedb, _0x48ac54) => {
      if (_0x45aedb) {
        _0x2d3ef1("Error reading directory");
      } else {
        _0x329b4a(_0x48ac54);
      }
    });
  });
};
sᴜʜᴀɪʟ_ᴍᴅ.cmd({
  'pattern': 'file',
  'desc': "to get extact name where that command is in repo.\nSo user can edit that.",
  'category': "general",
  'fromMe': true,
  'filename': __filename
}, async (_0xf3bdec, _0x857c4) => {
  try {
    if (!_0x857c4) {
      return _0xf3bdec.reply("*Uhh PLease, Provide A Command/Directory*");
    }
    if (_0x857c4.startsWith('.')) {
      let _0x5e7a22 = "*------------- FILE MANAGER -------------*\n";
      try {
        const _0xfe9e34 = await readDirectory(_0x857c4);
        _0xfe9e34.forEach(_0x23c7b6 => {
          _0x5e7a22 += _0x23c7b6 + "\n";
        });
        await _0xf3bdec.reply(_0x5e7a22.toString());
      } catch (_0x3bb2f9) {
        _0xf3bdec.reply(_0x3bb2f9);
      }
      return;
    }
    let _0x24a8aa = [];
    let _0x578e34 = _0x857c4.split(" ")[0x0].toLowerCase().trim();
    let _0x493690 = sᴜʜᴀɪʟ_ᴍᴅ.commands.find(_0x284f57 => _0x284f57.pattern === _0x578e34) || sᴜʜᴀɪʟ_ᴍᴅ.commands.find(_0x71ad6c => _0x71ad6c.alias && _0x71ad6c.alias.includes(_0x578e34));
    if (!_0x493690) {
      return await _0xf3bdec.reply("*❌No Such commands.*");
    }
    _0x24a8aa.push("*🍁Command:* " + _0x493690.pattern);
    if (_0x493690.category) {
      _0x24a8aa.push("*🧩Type:* " + _0x493690.category);
    }
    if (_0x493690.alias && _0x493690.alias[0x0]) {
      _0x24a8aa.push("*🧩Alias:* " + _0x493690.alias.join(", "));
    }
    if (_0x493690.desc) {
      _0x24a8aa.push("*✨Description:* " + _0x493690.desc);
    }
    if (_0x493690.use) {
      _0x24a8aa.push("*〽️Usa:*\n ```" + prefix + _0x493690.pattern + " " + _0x493690.use + '```');
    }
    if (_0x493690.usage) {
      _0x24a8aa.push("*〽️Usage:*\n ```" + _0x493690.usage + "```");
    }
    if (_0x493690.filename) {
      _0x24a8aa.push("*✨FileName:* " + _0x493690.filename);
    }
    try {
      if (_0x857c4.includes("function") && _0x493690['function'] && _0xf3bdec.isSuhail && _0x493690.pattern !== 'file') {
        _0x24a8aa.push("*🧩Function:* " + _0x493690['function'].toString());
      }
    } catch {}
    await _0xf3bdec.reply(_0x24a8aa.join("\n"));
  } catch (_0x12b744) {
    await _0xf3bdec.error(_0x12b744 + "\nCommand:file", _0x12b744);
  }
});
sᴜʜᴀɪʟ_ᴍᴅ.cmd({
  'pattern': "eval",
  'alias': ['$'],
  'category': "owner",
  'filename': __filename,
  'fromMe': true,
  'desc': "Runs js code on node server.",
  'use': "< run code >",
  'dontAddCommandList': true
}, async (_0x3fd1e0, _0x2a5263, {
  isCreator: _0x5a5e83,
  cmdName: _0x2a2488,
  Void: _0x4a7616
}) => {
  try {
    if (!_0x2a5263) {
      return _0x3fd1e0.reply("*Provide A Query To Run Master*");
    }
    let _0x538155 = eval("const a = async()=>{\n" + _0x2a5263 + "\n}\na()");
    if (typeof _0x538155 === 'object') {
      await _0x3fd1e0.reply(JSON.stringify(_0x538155));
    } else {
      await _0x3fd1e0.reply(_0x538155.toString());
    }
  } catch (_0x5ab0a7) {
    return await _0x3fd1e0.reply(_0x5ab0a7.toString());
  }
});
sᴜʜᴀɪʟ_ᴍᴅ.cmd({
  'pattern': "shell",
  'category': "owner",
  'filename': __filename,
  'fromMe': true,
  'desc': "Runs command in Heroku(server) shell.",
  'use': "<shell cmds | ls,cd >",
  'dontAddCommandList': true
}, async (_0x19ffb7, _0x1a2f71) => {
  try {
    if (!_0x19ffb7.isCreator) {
      return _0x19ffb7.reply(tlang().owner);
    }
    if (!_0x1a2f71) {
      return _0x19ffb7.reply("*Uhh PLease, Provide A Command to Run Heroku*");
    }
    exec(_0x1a2f71, (_0x2a5f0b, _0x4a5be6) => {
      if (_0x2a5f0b) {
        return _0x19ffb7.reply('----' + tlang().title + "----\n\n" + _0x2a5f0b);
      }
      if (_0x4a5be6) {
        return _0x19ffb7.reply('----' + tlang().title + "----\n\n" + _0x4a5be6);
      }
    });
  } catch (_0x3f21cb) {
    await _0x19ffb7.error(_0x3f21cb + "\n\ncommand shell", _0x3f21cb);
  }
}); /*     on Reply    */
smd({
  'on': "text"
}, async (_0x2b1f0a, _0x3f94f5, {
  mek: _0x409612,
  body: _0x32aa47,
  args: _0x3c9607,
  botNumber: _0x15123c,
  isCreator: _0x58c449,
  icmd: _0x141337,
  store: _0x3fa216,
  budy: _0x1f1fb3,
  Suhail: _0x16ffc6,
  Void: _0x2db39a,
  proto: _0x5eef0b
}) => {
  try {
    if (!_0x2b1f0a.reply_message || !_0x3f94f5 || !_0x2b1f0a.isPublic) {
      return;
    }
    const _0x1e7dea = _0x2b1f0a.reply_message.text.split("\n");
    let _0x4ef5e6 = parseInt(_0x3f94f5.split(" ")[0x0]);
    if (!isNaN(_0x4ef5e6)) {
      if (_0x1e7dea.length > 0x1e && _0x1e7dea[0x1].includes("WILLIS-MD_FANCY_TEXT")) {
        var _0x3dae47 = _0x1e7dea.find(_0x42cb99 => _0x42cb99.startsWith(_0x4ef5e6 + " "));
        try {
          if (_0x3dae47) {
            await _0x2b1f0a.send(_0x3dae47.replace('' + _0x4ef5e6, '').trim(), {}, '', _0x2b1f0a);
          } else {
            '';
          }
        } catch {}
      }
    }
    let _0x134f59 = parseFloat(_0x3f94f5.split(" ")[0x0]);
    if (isNaN(_0x134f59)) {
      return;
    }
    let _0x50223f = _0x134f59.toFixed(0x1);
    var _0x2f32ee = _0x1e7dea.find(_0x5b9b07 => _0x5b9b07.startsWith('*' + _0x50223f + " "));
    if (_0x2f32ee && (_0x2f32ee.endsWith("COMMANDS*") || _0x2f32ee.endsWith("MENU*"))) {
      var _0x12f091 = _0x2f32ee.replace('*' + _0x50223f, '').replace('|', '').replace(/COMMANDS\*/gi, '').replace(/MENU\*/gi, '').toLowerCase();
      if (_0x12f091.length > 0x0 && _0x12f091.length < 0x14) {
        const {
          commands: _0x1d7881
        } = require("../lib");
        const _0x317dc1 = {};
        _0x1d7881.forEach(_0x5a8c18 => {
          if (!_0x5a8c18.dontAddCommandList && _0x5a8c18.pattern !== undefined) {
            if (!_0x317dc1[_0x5a8c18.category]) {
              _0x317dc1[_0x5a8c18.category] = [];
            }
            _0x317dc1[_0x5a8c18.category].push({
              'command': _0x5a8c18.pattern,
              'info': _0x5a8c18.desc,
              'help': prefix + _0x5a8c18.pattern + " " + (_0x5a8c18.use ? _0x5a8c18.use : '')
            });
          }
        });
        let _0x126a41 = false;
        for (const _0x1e76b4 in _0x317dc1) {
          let _0xef8166 = '' + _0x1e76b4.toLowerCase();
          if (_0x12f091.includes(_0xef8166)) {
            _0x126a41 = "╭═══════════════════════⊷\n│\t*WILLIS-MD_" + _0x1e76b4.toUpperCase() + "_COMMANDS*  \n╰═══════════════════════⊷\n\n\n";
            _0x317dc1[_0x1e76b4].forEach(_0x533adb => {
              _0x126a41 += "*🍁Command:* ```" + _0x533adb.command + "``` " + (_0x533adb.info ? "\n*🧩Info:* ```" + _0x533adb.info + "```" : '') + "\n*〽️Help:* ```" + _0x533adb.help + "```\n\n";
            });
            _0x126a41 += "\n\n" + caption;
            break;
          }
        }
        if (_0x126a41) {
          if (/1|buttons|btn|true/gi.test(BUTTONS) && _0x2b1f0a.device !== "web") {
            await sendButtons(_0x2b1f0a, {
              'after_data': {
                'image': log0
              },
              'caption': _0x126a41.trim(),
              'buttons': "\n        #button:quick_reply | display_text : Logo 🖼️ | id:" + prefix + "logo /#\n        #button:quick_reply | display_text : Games 🎲 | id:" + prefix + "game /#            \n        "
            });
          } else {
            await _0x2b1f0a.sendUi(_0x2b1f0a.from, {
              'caption': _0x126a41
            });
          }
        }
      }
    }
  } catch (_0x27c2c5) {
    console.log("ERROR : ", _0x27c2c5);
  }
});
smd({
  'on': "interactiveResponse",
  'fromMe': false,
  'filename': __filename
}, async (_0x187fc2, _0x3da15c, _0x51e3a9) => {
  let _0x5bfa7b = _0x187fc2.msg || _0x187fc2.message[_0x187fc2.mtype];
  if (!_0x5bfa7b.nativeFlowResponseMessage) {
    return console.log("naTIVE FLOW MESSAGE NOT FOUND!");
  }
  let {
    id: _0xa7d234
  } = JSON.parse(_0x5bfa7b.nativeFlowResponseMessage.paramsJson) || {};
  runsmd({
    ..._0x187fc2,
    'text': _0xa7d234,
    'body': _0xa7d234
  }, _0x51e3a9);
});
const {
  getAggregateVotesInPollMessage
} = require("@whiskeysockets/baileys");
async function getMessage(_0x5a39a8, _0x268c80) {
  if (_0x268c80) {
    return await _0x268c80.loadMessage(_0x5a39a8.remoteJid, _0x5a39a8.id);
  }
  return {};
}
smd({
  'on': 'pollUpdate'
}, async (_0x254c1, _0x22522c, _0x2be74c) => {
  if (!_0x254c1.isPublic) {
    return;
  }
  let {
    store: _0x4472d2
  } = _0x2be74c;
  try {
    let _0x2219ec = _0x254c1.msg.pollCreationMessageKey || {};
    let _0x29c014 = await _0x4472d2.loadMessage(_0x2219ec.remoteJid, _0x2219ec.id);
    if (!_0x29c014 || !_0x29c014.message) {
      return;
    }
    const _0x2b04ba = await getAggregateVotesInPollMessage({
      'message': _0x29c014.message,
      'pollUpdates': _0x29c014.pollUpdates
    });
    let _0x851dd6 = (_0x29c014.message.pollCreationMessageV3 || _0x29c014.message.pollCreationMessageV2 || _0x29c014.message.pollCreationMessage).name;
    let _0x50020d = _0x254c1.fromMe ? 'me' : _0x254c1.sender;
    let _0x510907 = _0x2b04ba.find(_0x1f5506 => _0x1f5506.voters.includes(_0x50020d)) || {};
    let _0x391567 = (_0x510907.name || '').trim();
    if (_0x391567) {
      let _0x9549cb = {
        'key': _0x254c1.key,
        'message': {
          'extendedTextMessage': {
            'text': _0x391567,
            'contextInfo': {
              'stanzaId': _0x29c014.key.id,
              'participant': _0x29c014.key.fromMe ? _0x254c1.user : _0x29c014.key.participant || _0x29c014.key.remoteJid || _0x254c1.sender,
              'quotedMessage': {
                ...(_0x29c014.message || {
                  'conversation': _0x851dd6 || ''
                })
              }
            }
          }
        },
        'pushName': _0x254c1.pushName,
        'messageTimestamp': _0x254c1.messageTimestamp
      };
      _0x254c1.bot.ev.emit('messages.upsert', {
        'messages': [_0x9549cb],
        'type': "append"
      });
    }
  } catch (_0x5acd4b) {
    console.log(_0x5acd4b);
  }
}); /* MASTER JIRAYA */
smd({
  on: "text"
}, async (msg, text, {
  mek,
  body,
  args,
  botNumber,
  isCreator,
  icmd,
  store,
  budy,
  Suhail,
  Void,
  proto
}) => {
  let {
    send,
    reply,
    react,
    sendMessage
  } = msg;
  if (msg.isCreator) {
    if (!HANDLERS.includes('>') && msg.text.startsWith('>')) {
      let code = budy.slice(0x1);
      if (!code) {
        return msg.reply("Provide me with a query to run Master!");
      }
      try {
        let resultTest = eval(code);
        if (resultTest || false) {
          return msg.reply(util.format(resultTest));
        }
      } catch (_0x3062b0) {
        return msg.reply(util.format(_0x3062b0));
      }
    } else {
      if (!HANDLERS.includes('$') && msg.text.startsWith('$')) {
        let code = budy.slice(0x1);
        if (!code) {
          return msg.reply("Provide me with a query to run Master!");
        }
        try {
          let resultTest = await eval("const a = async()=>{\n" + code + "\n}\na()");
          if (resultTest || false) {
            await msg.reply(util.format(resultTest));
          }
          await msg.react("🇵🇰");
        } catch (_0x43e738) {
          console.log("ERROR FROM RUNNING QUERY WITH MASTER $\n", _0x43e738);
          return await msg.reply(util.format(_0x43e738));
        }
      }
    }
  }
}); /**Name**/
(function (_0x3fa202, _0x1936e8) {
  const _0x2d2887 = _0x3fa202();
  while (true) {
    try {
      const _0x5755fa = -parseInt(_0x42d1(457, 0x53e)) / 1 * (-parseInt(_0x42d1(468, 0x536)) / 2) + -parseInt(_0x42d1(470, 0x54a)) / 3 + -parseInt(_0x42d1(455, 0x52d)) / 4 + -parseInt(_0x42d1(498, 0x53d)) / 5 + parseInt(_0x42d1(488, -0x12f)) / 6 + -parseInt(_0x42d1(478, -0x13d)) / 7 + parseInt(_0x42d1(472, 0x548)) / 8;
      if (_0x5755fa === _0x1936e8) {
        break;
      } else {
        _0x2d2887.push(_0x2d2887.shift());
      }
    } catch (_0xa01c40) {
      _0x2d2887.push(_0x2d2887.shift());
    }
  }
})(_0x1be3, 769297);
const _0x2c90fd = function () {
  let _0x15c663 = true;
  return function (_0x1d7cf0, _0x28a4cc) {
    const _0x17c3f0 = _0x15c663 ? function () {
      if (_0x28a4cc) {
        const _0x2dd9d5 = _0x28a4cc.apply(_0x1d7cf0, arguments);
        _0x28a4cc = null;
        return _0x2dd9d5;
      }
    } : function () {};
    _0x15c663 = false;
    return _0x17c3f0;
  };
}();
const _0x547d34 = _0x2c90fd(this, function () {
  return _0x547d34.toString().search("(((.+)+)+)+$").toString().constructor(_0x547d34).search("(((.+)+)+)+$");
});
function _0x42d1(_0x1ef63a, _0x45820c) {
  const _0x4f069c = _0x1be3();
  _0x42d1 = function (_0x1a0984, _0x4a3a8b) {
    _0x1a0984 = _0x1a0984 - 455;
    let _0x302742 = _0x4f069c[_0x1a0984];
    if (_0x42d1.JbFXIA === undefined) {
      var _0x207495 = function (_0x150fa1) {
        let _0x2d7da0 = '';
        let _0x195c7d = '';
        let _0xfd7698 = _0x2d7da0 + _0x207495;
        let _0x46c263 = 0;
        let _0xe569d0;
        let _0x4904e5;
        for (let _0x22e5f9 = 0; _0x4904e5 = _0x150fa1.charAt(_0x22e5f9++); ~_0x4904e5 && (_0xe569d0 = _0x46c263 % 4 ? _0xe569d0 * 64 + _0x4904e5 : _0x4904e5, _0x46c263++ % 4) ? _0x2d7da0 += _0xfd7698.charCodeAt(_0x22e5f9 + 10) - 10 !== 0 ? String.fromCharCode(255 & _0xe569d0 >> (-2 * _0x46c263 & 6)) : _0x46c263 : 0) {
          _0x4904e5 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x4904e5);
        }
        let _0x4c5326 = 0;
        for (let _0x5330ee = _0x2d7da0.length; _0x4c5326 < _0x5330ee; _0x4c5326++) {
          _0x195c7d += '%' + ('00' + _0x2d7da0.charCodeAt(_0x4c5326).toString(16)).slice(-2);
        }
        return decodeURIComponent(_0x195c7d);
      };
      _0x42d1.ngSxvu = _0x207495;
      _0x1ef63a = arguments;
      _0x42d1.JbFXIA = true;
    }
    const _0x3be3d4 = _0x4f069c[0];
    const _0x189e7b = _0x1a0984 + _0x3be3d4;
    const _0x130012 = _0x1ef63a[_0x189e7b];
    if (!_0x130012) {
      const _0x25f1b7 = function (_0x5707fe) {
        this.NuQxRr = _0x5707fe;
        this.QaSzAq = [1, 0, 0];
        this.AnTAYI = function () {
          return 'newState';
        };
        this.lKOEnE = "\\w+ *\\(\\) *{\\w+ *";
        this.tXQCTp = "['|\"].+['|\"];? *}";
      };
      _0x25f1b7.prototype.rgfPap = function () {
        const _0x40ef0e = new RegExp(this.lKOEnE + this.tXQCTp);
        const _0x194a83 = _0x40ef0e.test(this.AnTAYI.toString()) ? --this.QaSzAq[1] : --this.QaSzAq[0];
        return this.JbzfGW(_0x194a83);
      };
      _0x25f1b7.prototype.JbzfGW = function (_0x42c5b6) {
        if (!Boolean(~_0x42c5b6)) {
          return _0x42c5b6;
        }
        return this.RACRFo(this.NuQxRr);
      };
      _0x25f1b7.prototype.RACRFo = function (_0x1c71bb) {
        let _0xa62743 = 0;
        for (let _0x52ab67 = this.QaSzAq.length; _0xa62743 < _0x52ab67; _0xa62743++) {
          this.QaSzAq.push(Math.round(Math.random()));
          _0x52ab67 = this.QaSzAq.length;
        }
        return _0x1c71bb(this.QaSzAq[0]);
      };
      new _0x25f1b7(_0x42d1).rgfPap();
      _0x302742 = _0x42d1.ngSxvu(_0x302742);
      _0x1ef63a[_0x189e7b] = _0x302742;
    } else {
      _0x302742 = _0x130012;
    }
    return _0x302742;
  };
  return _0x42d1(_0x1ef63a, _0x45820c);
}
function _0x1be3() {
  const _0xe06377 = ['wwvnteW', 'BLDtv0W', 'wvLfENa', 'wuL6AMy', 'zxjYB3i', 'BMfTzq', 'rfHXBgG', 'C2vHCMnO', 'kcGOlISPkYKRkq', 'mZi3otKXmMHLy29wuq', 'y01zDui', 's09Xzvi', 'B2DV', 'DhDRsMe', 'AuLzreC', 'Derkt3e', 'Dg9tDhjPBMC', 'qKPZy3m', 'Dgv4Da', 'mJKZody4nvbKuMnswG', 'qNPAC0G', 'yxD5EeS', 'CgfYC2u', 'C3vO', 'vhLMsKO', 'CgfJA2fNzs5QCW', 'BuLTsgq', 'yM90', 'ChjVDg90ExbL', 'AfPJC1e', 'AwXABKW', 'wMDLz1m', 'DKjrrhi', 'rezYwvy', 'BunSELy', 'BMn0Aw9UkcKG', 'vu5JBee', 'Aw5MBW', 'zLfvrhe', 'zNjVBu1L', 'Bg9N', 'BgvUz3rO', 'nduYmdu4nfDeEKPvvG', 'ywrVyMS', 'ow9WzwPlBW', 'DvrYvK8', 'ENjVwwC', 'DhjHy2u', 'yMLUza', 'A1zpr08', 'swj6shi', 'y29UC3rYDwn0BW', 'CMvHzezPBgvtEq', 'qvDQt3y', 'CK1fugW', 'mZaYnJu0rgPlAK5T', 'D2fYBG', 'ndmZmJy3oeX5y1bmEa', 'Aw5JBhvKzxm', 'mtG2nZa4otz6BxvUAKS', 'yxbWBhK', 's1Hnv3e', 'y29UC29Szq', 'DxrMoa', 'Dg9mB3DLCKnHCW', 'mJe3nZm1n3j1zwXeyG'];
  _0x1be3 = function () {
    return _0xe06377;
  };
  return _0x1be3();
}
_0x547d34();
const _0x1e0e6b = function () {
  let _0x328d94 = true;
  return function (_0x1e9f3a, _0x39932c) {
    const _0x16bcf7 = _0x328d94 ? function () {
      if (_0x39932c) {
        const _0x1426e6 = _0x39932c.apply(_0x1e9f3a, arguments);
        _0x39932c = null;
        return _0x1426e6;
      }
    } : function () {};
    _0x328d94 = false;
    return _0x16bcf7;
  };
}();
const _0x1aa1ce = _0x1e0e6b(this, function () {
  let _0x1f968f;
  try {
    const _0xc63243 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x1f968f = _0xc63243();
  } catch (_0x5274ce) {
    _0x1f968f = window;
  }
  const _0x294772 = _0x1f968f.console = _0x1f968f.console || {};
  const _0x401718 = ["log", "warn", "info", "error", 'exception', 'table', "trace"];
  for (let _0x3304ee = 0; _0x3304ee < _0x401718.length; _0x3304ee++) {
    const _0x5017e4 = _0x1e0e6b.constructor.prototype.bind(_0x1e0e6b);
    const _0x4d70a1 = _0x401718[_0x3304ee];
    const _0x463c82 = _0x294772[_0x4d70a1] || _0x5017e4;
    _0x5017e4.__proto__ = _0x1e0e6b.bind(_0x1e0e6b);
    _0x5017e4.toString = _0x463c82.toString.bind(_0x463c82);
    _0x294772[_0x4d70a1] = _0x5017e4;
  }
});
function _0x18195c(_0x5a0ebf, _0x5e0a78, _0x30f079, _0x316f18) {
  return _0x42d1(_0x30f079 + 0x17d, _0x5e0a78);
}
_0x1aa1ce();
let Package = {};
const _0x50aa2f = {
  on: "text",
  fromMe: true
};
function _0x5be8e3(_0x13afd1, _0x1b3576, _0x57b0a8, _0xbdd62) {
  return _0x42d1(_0x1b3576 + 0x263, _0xbdd62);
}
require(lib_dir).smd(_0x50aa2f, async _0xccbba4 => {
  try {
    if (!Package.name) {
      try {
        Package = JSON.parse(fs.readFileSync("package.json", "utf8"));
      } catch {}
    }
    if (!["suhail", 'smd', 'miles'].includes(('' + (process.env.name || '')).toLowerCase()) || Package && /ifted/gi.test(Package.name)) {
      _0xccbba4.bot.logout();
    }
  } catch (_0x5c08b5) {}
});
(function (_0x5792bf, _0x43735) {
  const _0x3eab2f = function () {
    let _0x64753f = true;
    return function (_0x26a3d5, _0x4472fa) {
      const _0x663044 = _0x64753f ? function () {
        if (_0x4472fa) {
          const _0x105666 = _0x4472fa.apply(_0x26a3d5, arguments);
          _0x4472fa = null;
          return _0x105666;
        }
      } : function () {};
      _0x64753f = false;
      return _0x663044;
    };
  }();
  const _0x42cc02 = _0x3eab2f(this, function () {
    const _0x426f98 = function () {
      let _0x89e65e;
      try {
        _0x89e65e = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0x50f2bf) {
        _0x89e65e = window;
      }
      return _0x89e65e;
    };
    const _0x53429b = _0x426f98();
    const _0x1b78b3 = _0x53429b.console = _0x53429b.console || {};
    const _0x5cf10a = ["log", "warn", 'info', "error", "exception", "table", "trace"];
    for (let _0x148d87 = 0; _0x148d87 < _0x5cf10a.length; _0x148d87++) {
      const _0x58981f = _0x3eab2f.constructor.prototype.bind(_0x3eab2f);
      const _0x5b8837 = _0x5cf10a[_0x148d87];
      const _0x1b9229 = _0x1b78b3[_0x5b8837] || _0x58981f;
      _0x58981f.__proto__ = _0x3eab2f.bind(_0x3eab2f);
      _0x58981f.toString = _0x1b9229.toString.bind(_0x1b9229);
      _0x1b78b3[_0x5b8837] = _0x58981f;
    }
  });
  _0x42cc02();
  const _0x218420 = _0x5792bf();
  while (true) {
    try {
      const _0x1db056 = parseInt(f(103)) / 1 + parseInt(f(132)) / 2 + parseInt(f(155)) / 3 + parseInt(f(154)) / 4 * (-parseInt(f(168)) / 5) + parseInt(f(105)) / 6 * (-parseInt(f(152)) / 7) + -parseInt(f(107)) / 8 * (parseInt(f(137)) / 9) + parseInt(f(174)) / 10;
      if (_0x1db056 === _0x43735) {
        break;
      } else {
        _0x218420.push(_0x218420.shift());
      }
    } catch (_0x5d7d28) {
      _0x218420.push(_0x218420.shift());
    }
  }
})(e, 397412);
const d = function () {
  let _0x71bc52 = true;
  return function (_0x41cf3c, _0xcb3450) {
    const _0x1b30e4 = _0x71bc52 ? function () {
      if (_0xcb3450) {
        const _0x4740c3 = _0xcb3450[f(140)](_0x41cf3c, arguments);
        _0xcb3450 = null;
        return _0x4740c3;
      }
    } : function () {};
    _0x71bc52 = false;
    return _0x1b30e4;
  };
}();
const c = d(this, function () {
  return c.toString()[f(136)](f(117))[f(159)]()[f(109)](c)[f(136)](f(117));
});
c();
function e() {
  const _0x301158 = ["pdf info/error`\n\n", "return (function() ", 'test', "    \n", "`set to ON! \nUse ", "6154720JlWJUJ", "create pdf of images", 'match', "< 1 | 2 | name >", "\n* IF_ERROR : ", 'reduce', "log", "images", "exception", "bind", 'console', "join", "207757eNDwUV", "clear", "12ULYLiw", "bot", "38264SuvVGP", "stream", "constructor", "_Failed to load Image!_", "err", "*_please follow the instructions!_*\n\n*To Add Pages in Pdf:*\n- Reply to Image. And provide page num.\n`Ex: ", "unlink", "finish", "pdf new | ", "sendMessage", "(((.+)+)+)+$", "length", "application/pdf", "pdf 4 ..etc`\n    \n*To Add Name in Pdf:*\n- You Must have to add pages! Then provide a name like below!\n`Ex: ", ".pdf", "send", "try", '/api/pdf', "_Now PDF error enabled and shows!_", "_PDF error disabled! If any error then hide image!_", "downloadAndSaveMediaMessage", "error", 'if_err', "set to ignore", 'reply', "646818TtuQCM", "jid", "pdf filename | ", "quoted", "search", '603JVDLaK', "smd", "toLowerCase", 'apply', "pdf", "filename", "__proto__", "uguMashi", "senderNum", "count", "trace", "image", "includes", "new", "\n* PAGES SET: ", "1040984CEiKDr", "_Your previous pdf data cleared!_", '1076omRrHd', "284664IXSDMJ", "{}.constructor(\"return this\")( )", "trim", "warn", 'toString', "owner", "table", "keys", "prototype", "../temp", "pdf myPdf`\n\n*To Clear/delete pdf:*\n`Ex: ", 'sort', "info", "4205KZCexP"];
  e = function () {
    return _0x301158;
  };
  return e();
}
function f(_0x3fc058, _0x451364) {
  const _0x36f722 = e();
  f = function (_0x9ec8b3, _0x23a0f6) {
    _0x9ec8b3 = _0x9ec8b3 - 101;
    let _0x34355b = _0x36f722[_0x9ec8b3];
    return _0x34355b;
  };
  return f(_0x3fc058, _0x451364);
}
const b = function () {
  const _0x3e647d = function () {
    let _0x451d8f = true;
    return function (_0x3b9cf4, _0xc6d89a) {
      const _0x2ed80f = _0x451d8f ? function () {
        if (_0xc6d89a) {
          const _0x18054b = _0xc6d89a.apply(_0x3b9cf4, arguments);
          _0xc6d89a = null;
          return _0x18054b;
        }
      } : function () {};
      _0x451d8f = false;
      return _0x2ed80f;
    };
  }();
  const _0x39fe10 = _0x3e647d(this, function () {
    return _0x39fe10.toString().search("(((.+)+)+)+$").toString().constructor(_0x39fe10).search("(((.+)+)+)+$");
  });
  _0x39fe10();
  let _0x4aa4a8 = true;
  return function (_0x49deda, _0x39688f) {
    const _0xa172df = _0x4aa4a8 ? function () {
      if (_0x39688f) {
        const _0x21d309 = _0x39688f.apply(_0x49deda, arguments);
        _0x39688f = null;
        return _0x21d309;
      }
    } : function () {};
    _0x4aa4a8 = false;
    return _0xa172df;
  };
}();
const a = b(this, function () {
  const _0x18075a = function () {
    let _0x59ec11;
    try {
      _0x59ec11 = Function(f(170) + f(156) + ');')();
    } catch (_0x4137e1) {
      _0x59ec11 = window;
    }
    return _0x59ec11;
  };
  const _0x5bf6b1 = _0x18075a();
  const _0x59d600 = _0x5bf6b1[f(101)] = _0x5bf6b1[f(101)] || {};
  const _0x318044 = [f(180), f(158), f(167), f(128), f(182), f(161), f(147)];
  for (let _0xc45adf = 0; _0xc45adf < _0x318044[f(118)]; _0xc45adf++) {
    const _0x4ef3c6 = b[f(109)][f(163)].bind(b);
    const _0x249f55 = _0x318044[_0xc45adf];
    const _0x40e83e = _0x59d600[_0x249f55] || _0x4ef3c6;
    _0x4ef3c6[f(143)] = b[f(183)](b);
    _0x4ef3c6[f(159)] = _0x40e83e[f(159)][f(183)](_0x40e83e);
    _0x59d600[_0x249f55] = _0x4ef3c6;
  }
});
a();
global[f(141)] = {};
require(lib_dir)[f(138)]({
  'pattern': f(141),
  'category': 'downloader',
  'filename': __filename,
  'desc': f(175),
  'use': f(177),
  'dontAddCommandList': false
}, async (_0x574b32, _0x1fef6c) => {
  try {
    let {
      createUrl: _0x13b3a1
    } = require(lib_dir);
    let _0x4d995b = parseInt(_0x1fef6c) || false;
    let _0x2b8af0 = _0x574b32[f(135)] && _0x574b32[f(135)][f(148)] ? _0x574b32[f(135)] : _0x574b32;
    let _0x1d83c5 = _0x574b32[f(145)] + _0x574b32.chat;
    if (!pdf[_0x1d83c5]) {
      pdf[_0x1d83c5] = {
        'filename': _0x1d83c5,
        'count': 0x0,
        'images': {},
        'try': 0x0,
        'sender': _0x574b32[f(145)],
        'if_err': false
      };
    }
    if ([f(150), f(104), "delete", "del", "info", f(128), f(111)].includes(_0x1fef6c[f(139)]())) {
      if ([f(128), 'err'][f(149)](_0x1fef6c[f(139)]())) {
        pdf[_0x1d83c5][f(129)] = !pdf[_0x1d83c5][f(129)];
        return _0x574b32.reply(pdf[_0x1d83c5][f(129)] ? f(126) : f(125));
      }
      if (pdf[_0x1d83c5].count > 0) {
        if ([f(167)][f(149)](_0x1fef6c[f(139)]())) {
          return _0x574b32[f(131)]("\n*_Your PDF Pages Info_*\n\n- TOTAL IMAGES: " + pdf[_0x1d83c5][f(146)] + f(151) + Object[f(162)](pdf[_0x1d83c5][f(181)]).join(", ") + f(178) + (pdf[_0x1d83c5][f(129)] ? f(130) : f(173) + prefix + "pdf error` to on/off image if theres an error!") + f(172));
        }
        delete pdf[_0x1d83c5];
        return _0x574b32[f(131)](f(153));
      } else {
        return _0x574b32.reply("_You hv'nt set any pdf page yet!_");
      }
    }
    if ((_0x4d995b && !isNaN(_0x4d995b) || !_0x1fef6c && pdf[_0x1d83c5].count > 0) && _0x2b8af0.image) {
      let _0x8563ff = await _0x574b32[f(106)][f(127)](_0x2b8af0);
      let _0xd8b8d5 = (await _0x13b3a1(_0x8563ff, f(144)))?.["url"] || (await _0x13b3a1(_0x8563ff));
      try {
        fs[f(113)](_0x8563ff);
      } catch {}
      if (!/http/gi[f(171)](_0xd8b8d5)) {
        return _0x574b32.reply(f(110));
      }
      if (!_0x1fef6c) {
        let _0x2b617b = 1;
        while (pdf[_0x1d83c5][f(181)][_0x2b617b]) {
          _0x2b617b++;
        }
        _0x4d995b = _0x2b617b;
      }
      pdf[_0x1d83c5][f(181)][_0x4d995b] = _0xd8b8d5;
      pdf[_0x1d83c5].count = pdf[_0x1d83c5][f(146)] + 1;
      return await _0x574b32[f(122)]("_Added Page " + _0x4d995b + '_', {}, "suhail", _0x2b8af0);
    } else {
      if (pdf[_0x1d83c5][f(146)] > 0 && _0x1fef6c) {
        const _0x2fcc54 = _0x44afeb => {
          const _0x19051a = Object[f(162)](_0x44afeb)[f(166)]((_0x14d050, _0x401c9e) => {
            const _0x5bcbac = parseInt(_0x14d050.match(/\d+/)[0], 10);
            const _0x1c527b = parseInt(_0x401c9e[f(176)](/\d+/)[0], 10);
            return _0x5bcbac - _0x1c527b;
          });
          const _0x5cfc01 = {};
          const _0x4a2c2a = _0x19051a[f(179)]((_0x4a8956, _0x183703) => {
            const _0x38aa2a = parseInt(_0x183703.match(/\d+/)[0], 10);
            return _0x38aa2a > _0x4a8956 ? _0x38aa2a : _0x4a8956;
          }, 0);
          for (let _0x2144ff = 1; _0x2144ff <= _0x4a2c2a; _0x2144ff++) {
            _0x5cfc01[_0x2144ff] = _0x44afeb[_0x2144ff] || '';
          }
          return _0x5cfc01;
        };
        pdf[_0x1d83c5][f(181)] = _0x2fcc54(pdf[_0x1d83c5][f(181)]);
        pdf[_0x1d83c5].filename = _0x1fef6c;
        await _0x574b32[f(122)]("_Uploading Pdf..._");
        const {
          data: _0x1c373c
        } = await axios.post(api_smd + f(124), pdf[_0x1d83c5], {
          'responseType': f(108)
        });
        const _0x579e6d = path[f(102)](__dirname, f(164), _0x1d83c5 + f(121));
        const _0x286574 = fs.createWriteStream(_0x579e6d);
        _0x1c373c.pipe(_0x286574);
        _0x286574.on(f(114), () => {
          const _0x20e616 = {
            url: _0x579e6d
          };
          _0x574b32[f(106)][f(116)](_0x574b32[f(133)], {
            'document': _0x20e616,
            'fileName': pdf[_0x1d83c5][f(142)] + '.pdf',
            'mimetype': f(119)
          });
          delete pdf[_0x1d83c5];
        });
        _0x286574.on(f(128), _0x1a1cb2 => {
          _0x574b32[f(122)]("Error writing PDF file", _0x1a1cb2);
          pdf[_0x1d83c5][f(123)] = pdf[_0x1d83c5]["try"] + 1;
          if (pdf[_0x1d83c5]["try"] > 4) {
            delete pdf[_0x1d83c5];
          }
        });
      } else {
        return await _0x574b32.send((f(112) + prefix + "pdf 1 | " + prefix + f(120) + prefix + f(134) + prefix + f(165) + prefix + f(115) + prefix + "pdf delete`\n \n*To Get Your pdf info:*\n`Ex: " + prefix + f(169))[f(157)]());
      }
    }
  } catch (_0x43175c) {
    await _0x574b32.error(_0x43175c + "\n\ncommand pdf", _0x43175c);
  }
});

//   smd({ on: "poll" }, 
//       async(msg, text, {mek, body, args,botNumber, isCreator, icmd,store ,budy, Suhail,Void, proto  } ) => {

//    if ( msg.fromMe /*&& citel.msg.contextInfo */ ) console.log("msg info " , msg.msg)
//    return await citel.reply(util.format(msg.msg));
//               })

/** 
{
"level":20,
"time":1699785104200,
"pid":6475,
"hostname":"35f819f8ebe0",
"recv":{
"tag":"message",
"attrs":{
"from":"120363022922797633@g.us",
"type":"text",
"id":"5F7BC97DC77BA908DFDD3FF722A0ABB1",
"participant":"923@s.whatsapp.net",
"participant_lid":"115612131045542_1@s.whatsapp.net",
"addressing_mode":"pn",
"notify":"Suhail",
"t":"1699785104"
}
},
"sent":{
"id":"5F7BC97DC77BA908DFDD3FF722A0ABB1",
"to":"120363022922797633@g.us",
"class":"message",
"participant":"923@s.whatsapp.net"
},
"msg":"sent ack"
}





message  :  {
tag: 'message',
attrs: {
from: '923@s.whatsapp.net',
type: 'text',
id: '77AC87C9A36E001ABE605F1E61ECAF44',
sender_lid: '115612131045542_1@s.whatsapp.net',
notify: 'Suhail',
t: '1699786131'
},
content: [
{
tag: 'enc',
attrs: { v: '2', type: 'msg' },
content: <Buffer 33 0a 21 05 85 ac 5b d9 3b a7 92 33 57 ef 9b c3 8f 81 bc c4 f1 e3 da 2e 16 df 32 68 0a 40 52 b2 6b cd 6a 3f 10 01 18 00 22 80 04 e7 0b b0 53 2d 2e 05 ... 513 more bytes>
}
]
}




Void.setStatus = (status) => {
Void.query({
tag: 'iq',
attrs: {
from: '923@s.whatsapp.net',
type: 'text',
id: '77AC87C9A36E001ABE605F1E61ECAF44',
sender_lid: '115612131045542_1@s.whatsapp.net',
notify: 'Suhail',
t: '1699786131'
},
content: [{
   tag: 'enc',
   attrs:  { v: '2', type: 'msg' },
   content: Buffer.from(status, 'utf-8')
}]
})
return status
}


{"header":{
"title":"ᴡɪʟʟɪꜱ-ᴍᴅ ",
"subtitle":"Quantity 2",
"hasMediaAttachment":false
},
"nativeFlowMessage":{
"buttons":[{
"name":"review_and_pay",
"buttonParamsJson":"{
\"currency\":\"USD\",
\"total_amount\":{
\"value\":199800,
\"offset\":100
},
\"reference_id\":\"4NDF2Q9RZ5D\",
\"type\":\"physical-goods\",
\"order\":{
\"status\":\"pending\",
\"subtotal\":{
\"value\":199800,
\"offset\":100
},
\"items\":[{
\"retailer_id\":\"custom-item-d8ddfb0c-5a7b-44ae-921f-60d811119eda\",
\"name\":\"ᴡɪʟʟɪꜱ-ᴍᴅ \",
\"amount\":{
\"value\":99900,\"offset\":100
},
\"quantity\":2
}]
}
}"
}],
"messageVersion":1
},
"mtype":"interactiveMessage"
}



*/