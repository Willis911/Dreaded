const Config = require("../config");
let {
  fancytext,
  sendGImages,
  lang,
  tiny,
  runtime,
  formatp,
  botpic,
  prefix,
  sck1,
  smd
} = require("../lib");
const axios = require("axios");
const fetch = require("node-fetch");
const {
  fetchJson,
  getBuffer
} = require("../lib/");
async function sendAnime(_0x55a475, _0x509539, _0x4e419e, _0x835b9a = '') {
  try {
    if (_0x4e419e === "waifu" || _0x4e419e === "neko" || _0x4e419e === "megumin") {
      let _0x379467 = _0x835b9a.split('|')[0x0] || '';
      let _0x4c4376 = _0x835b9a.split('|')[0x1] || '1';
      let _0x117530 = _0x835b9a.split('|')[0x1] ? '' : " *" + _0x4e419e + ",Here we go*";
      let _0x43e16d = _0x379467 == "nsfw" ? "https://api.waifu.pics/nsfw/" + (_0x4e419e === 'megumin' ? "trap" : "waifu") : "https://api.waifu.pics/sfw/" + _0x4e419e;
      for (let _0x4e7334 = 0x0; _0x4e7334 < _0x4c4376; _0x4e7334++) {
        let _0x576105 = await (await fetch(_0x43e16d)).json();
        await _0x55a475.bot.sendMessage(_0x509539.chat, {
          'image': {
            'url': _0x576105.url
          },
          'caption': _0x117530
        }, {
          'quoted': _0x509539
        });
      }
    } else {
      if (_0x4e419e === "loli" || _0x4e419e === "foxgirl") {
        let _0x385596 = _0x4e419e === "loli" ? "https://waifu.pics/api/sfw/shinobu" : "https://nekos.life/api/v2/img/fox_girl";
        let _0x3e303e = await axios.get(_0x385596);
        await _0x55a475.bot.sendMessage(_0x509539.chat, {
          'image': {
            'url': _0x3e303e.data.url
          }
        }, {
          'quoted': _0x509539
        });
      } else {
        if (_0x4e419e === "demon" || _0x4e419e === "naruto") {
          let _0x3a01f7 = "https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/" + (_0x4e419e === "demon" ? 'Demonslayer' : "Naruto") + "/video.json";
          const _0x37dffc = await fetchJson(_0x3a01f7);
          const _0x51dced = _0x37dffc.result[Math.floor(Math.random() * _0x37dffc.result.length)].url;
          await _0x55a475.bot.sendMessage(_0x509539.chat, {
            'video': {
              'url': _0x51dced
            },
            'caption': "*Here we go😊!!!!*"
          });
        } else {
          if (_0x4e419e === "animenews") {
            let _0x509613 = await axios.get("https://newsapi.org/v2/everything?q=" + _0x835b9a + '&domains=techcrunch.com,animenewsnetwork.com,myanimelist.net,comingsoon.net,crunchyroll.com&language=en&sortby=publishedat&apikey=cd4116be09ef4a0caceedf21b6258460&pageSize=8');
            let _0x7f6c91 = _0x509613.data.articles;
            _0x7f6c91.map(async (_0x3a0939, _0x38234d) => {
              try {
                _0x55a475.bot.sendMessage(_0x509539.chat, {
                  'image': {
                    'url': _0x3a0939.urlToImage
                  },
                  'caption': "*Title🔰:* " + _0x3a0939.title + "\n\n*Content🧩:* " + _0x3a0939.content + "\n*Author📌:* " + _0x3a0939.author + "\n*Source♦️:* " + _0x3a0939.source.name + "\n*Created On☘️:* " + _0x3a0939.publishedAt + "\n*More on✨:* " + _0x3a0939.url + "\n\n" + Config.caption + '*'
                }, {
                  'quoted': _0x509539
                });
              } catch (_0x120a1d) {}
            });
          }
        }
      }
    }
  } catch (_0x29e730) {
    console.log("./commands/Anime.js/sendAnime()\n", _0x29e730);
    await _0x509539.error(_0x29e730);
  }
}
smd({
  'pattern': "waifu",
  'desc': "To get Waifu Random Pics",
  'category': "Anime Pics",
  'filename': __filename
}, async (_0x3f90ca, _0x18c6e6, {
  cmdName: _0x44f36d
}) => {
  try {
    return await sendAnime(_0x3f90ca, _0x3f90ca, 'waifu', _0x18c6e6);
  } catch {}
});
smd({
  'pattern': "neko",
  'category': "Anime Pics",
  'desc': "Sends a Neko Image in chat",
  'filename': __filename
}, async (_0x1cd273, _0xb77fec, {
  cmdName: _0x3c6957
}) => {
  try {
    return await sendAnime(_0x1cd273, _0x1cd273, "neko", _0xb77fec);
  } catch {}
});
smd({
  'pattern': 'megumin',
  'desc': "To get Waifu Random Pics",
  'category': "Anime Pics",
  'filename': __filename
}, async (_0x5a7e62, _0x8aed59, {
  cmdName: _0x3d1dd2
}) => {
  try {
    return await sendAnime(_0x5a7e62, _0x5a7e62, "megumin", _0x8aed59);
  } catch {}
});
smd({
  'pattern': 'loli',
  'category': "Anime Pics",
  'filename': __filename,
  'desc': "Sends image of loli."
}, async _0x11eae1 => {
  try {
    return await sendAnime(_0x11eae1, _0x11eae1, 'loli');
  } catch {}
});
smd({
  'pattern': "foxgirl",
  'category': "Anime Pics",
  'desc': "Sends image of Fox Girl Anime.",
  'filename': __filename
}, async _0x545d0f => {
  try {
    return await sendAnime(_0x545d0f, _0x545d0f, "foxgirl");
  } catch {}
});
smd({
  'pattern': "demon",
  'alias': ['ds'],
  'desc': "To get Naruto Random Videos",
  'category': "Anime Pics",
  'filename': __filename
}, async _0x88a702 => {
  try {
    return await sendAnime(_0x88a702, _0x88a702, "demon");
  } catch {}
});
smd({
  'pattern': "naruto",
  'desc': "To get Naruto Random Videos",
  'category': "Anime Pics",
  'filename': __filename
}, async _0x5ded99 => {
  try {
    return await sendAnime(_0x5ded99, _0x5ded99, "naruto");
  } catch {}
});
smd({
  'pattern': 'pokepic',
  'category': "Anime Pics",
  'filename': __filename,
  'desc': "Sends image of pokemon."
}, async (_0x583a8f, _0x26e084) => {
  try {
    return await sendGImages(_0x583a8f, _0x26e084 + "Pokemon Pics only HD ", "*---「 Poke Pic 」---*", _0x26e084);
  } catch {}
});
smd({
  'pattern': "animepic",
  'category': "Anime Pics",
  'filename': __filename,
  'desc': "Anime images"
}, async (_0x446e94, _0xff2591) => {
  try {
    return await sendGImages(_0x446e94, _0xff2591 + "Anime Pics HD", "*-----「 Anime Image 」-----*", _0xff2591);
  } catch {}
});
smd({
  'pattern': "animewall",
  'category': "Anime Pics",
  'desc': "Anime Wallpaper Random",
  'filename': __filename
}, async (_0x1be31e, _0x45a934) => {
  try {
    return await sendGImages(_0x1be31e, _0x45a934 + "anime wallpaper for desktop full hd", "*---「 Anime Wallpaper 」---*", _0x45a934);
  } catch {}
});
let qq = ["Anime News Today", "New Anime", "Uocoming Anime News", "New Anime Info", "Whats news in Anime", "Anime Series", "Manga News today", "Anime New News", "Anime News today"];
smd({
  'pattern': "animenews",
  'category': "Anime Pics",
  'desc': "Sends Anime News in chat",
  'filename': __filename
}, async (_0x119ada, _0x37095e, {
  cmdName: _0x3a6817
}) => {
  try {
    let _0x1f2ab3 = qq[Math.floor(Math.random() * qq.length)] + _0x37095e;
    return await sendAnime(message, message, _0x3a6817, _0x1f2ab3);
  } catch {}
});
smd({
  'pattern': "pokemon",
  'category': "Anime Pics",
  'filename': __filename,
  'desc': "Sends info of pokemon in current chat."
}, async (_0x127028, _0x60d63) => {
  try {
    if (!_0x60d63) {
      return _0x127028.reply("*Uhh Please Give Me Poki Name/num*");
    }
    try {
      let {
        data: _0x4e5976
      } = await axios.get("https://pokeapi.co/api/v2/pokemon/" + _0x60d63);
      if (!_0x4e5976.name) {
        return _0x127028.reply("❌ Could not found any pokemon with that name");
      }
      let _0x8d1690 = "*•Name: " + _0x4e5976.name + "*\n*•Pokedex ID: " + _0x4e5976.id + "*\n*•Height: " + _0x4e5976.height + "*\n*•Weight: " + _0x4e5976.weight + "*\n*•Abilities: " + _0x4e5976.abilities[0x0].ability.name + ", " + _0x4e5976.abilities[0x1].ability.name + "*\n*•Base Experience: " + _0x4e5976.base_experience + "*\n*•Type: " + _0x4e5976.types[0x0].type.name + "*\n*•Base Stat: " + _0x4e5976.stats[0x0].base_stat + "*\n*•Attack: " + _0x4e5976.stats[0x1].base_stat + "*\n*•Defense: " + _0x4e5976.stats[0x2].base_stat + "*\n*•Special Attack: " + _0x4e5976.stats[0x3].base_stat + "*\n*•Special Defense:" + _0x4e5976.stats[0x4].base_stat + "*\n*•Speed: " + _0x4e5976.stats[0x5].base_stat + "*\n";
      return await Suhail.bot.sendMessage(_0x127028.jid, {
        'image': {
          'url': _0x4e5976.sprites.front_default
        },
        'caption': _0x8d1690
      }, {
        'quoted': _0x127028
      });
    } catch (_0x2fa93f) {
      _0x127028.reply("*_Ahh,Couldn't found any pokemon._*");
    }
  } catch {}
});
