//Fri Aug 23 2024 15:50:16 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "上海崇明";
VALY = ["shcmck"];
LOGS = 0;
CK = "";
var userList = [];
usid = 0;
class Bar {
  constructor(_0x4e461a) {
    this.o = _0x4e461a;
  }
  async user() {
    let _0x181401 = {
        "log-header": "I am the log request header.",
        token: this.o
      },
      _0x57d77c = await task("post", "https://cmapi.shmedia.tech/media-basic-port/api/app/personal/get", _0x181401);
    this.name = _0x57d77c.data.nickname;
    console.log("用户名：【" + this.name + "】==>现有积分：" + _0x57d77c.data.score);
  }
  async list() {
    let _0x10d950 = {
        "log-header": "I am the log request header.",
        token: this.o
      },
      _0x86620 = await task("post", "https://cmapi.shmedia.tech/media-basic-port/api/app/personal/score/info", _0x10d950),
      _0x599fe3 = _0x86620.data.jobs,
      _0x556957 = _0x599fe3[1].progress,
      _0x32bc4d = _0x599fe3[1].totalProgress,
      _0x22e839 = _0x599fe3[2].progress,
      _0x4b21ca = _0x599fe3[2].totalProgress,
      _0x3c2b0f = _0x599fe3[3].progress,
      _0x3ca34c = _0x599fe3[3].totalProgress,
      _0x2c2a21 = _0x599fe3[4].progress,
      _0x4a921b = _0x599fe3[4].totalProgress,
      _0x27d588 = _0x599fe3[6].progress,
      _0x226e0 = _0x599fe3[6].totalProgress,
      _0x4883ac = _0x599fe3[7].progress,
      _0xd0cb7a = _0x599fe3[7].totalProgress;
    if (_0x86620.data.jobs) {
      _0x599fe3[1].status == 0 ? await this.signin() : console.log("【" + this.name + "】签到任务已完成，请勿重复运行脚本");
      if (_0x599fe3[1].status == 0) {
        for (let _0x116766 = _0x556957; _0x116766 < _0x32bc4d; _0x116766++) {
          await this.read();
        }
      } else {
        console.log("【" + this.name + "】阅读任务已完成，请勿重复运行脚本");
      }
      if (_0x599fe3[2].status == 0) {
        for (let _0x19f934 = _0x22e839; _0x19f934 < _0x4b21ca; _0x19f934++) {
          await this.video();
        }
      } else {
        console.log("【" + this.name + "】视频任务已完成，请勿重复运行脚本");
      }
      if (_0x599fe3[3].status == 0) {
        for (let _0x4d5d15 = _0x3c2b0f; _0x4d5d15 < _0x3ca34c; _0x4d5d15++) {
          await this.favor();
        }
      } else {
        console.log("【" + this.name + "】收藏任务已完成，请勿重复运行脚本");
      }
      if (_0x599fe3[4].status == 0) {
        for (let _0x4a0a45 = _0x2c2a21; _0x4a0a45 < _0x4a921b; _0x4a0a45++) {
          await this.like();
        }
      } else {
        console.log("【" + this.name + "】点赞任务已完成，请勿重复运行脚本");
      }
      if (_0x599fe3[6].status == 0) {
        for (let _0x4b0cd8 = _0x27d588; _0x4b0cd8 < _0x226e0; _0x4b0cd8++) {
          await this.share();
        }
      } else {
        console.log("【" + this.name + "】分享任务已完成，请勿重复运行脚本");
      }
      if (_0x599fe3[7].status == 0) {
        for (let _0x16c002 = _0x4883ac; _0x16c002 < _0xd0cb7a; _0x16c002++) {
          await this.moment();
        }
      } else {
        console.log("【" + this.name + "】发圈子任务已完成，请勿重复运行脚本");
      }
    } else {
      console.log("【" + this.name + "】未找到任务列表，请检查变量是否正确");
    }
  }
  async readlist() {
    let _0x302250 = {
        "log-header": "I am the log request header.",
        token: this.o
      },
      _0x38675d = "{\"channel\":{\"id\":\"7e59ea39a0ab49978c58c6e9a5c95bca\"},\"orderBy\":\"release_desc\",\"pageNo\":" + RT(1, 166) + ",\"pageSize\":20}",
      _0x9aad8d = await task("post", "https://cmapi.shmedia.tech/media-basic-port/api/app/news/content/list", _0x302250, _0x38675d);
    this.bb = _0x9aad8d.data.records;
  }
  async read() {
    let _0x23f8ca = {
        token: this.o
      },
      _0x43c576 = "{}",
      _0xcd4629 = await task("post", "https://cmapi.shmedia.tech/media-basic-port/api/app/points/read/add", _0x23f8ca, _0x43c576);
    _0xcd4629.code == 0 ? (console.log("【" + this.name + "】阅读 成功"), await wait(15000)) : (console.log("【" + this.name + "】阅读 " + _0xcd4629.msg), await wait(5000));
  }
  async video() {
    let _0x62c972 = {
        token: this.o
      },
      _0x3e61cc = "{}",
      _0x3dfca0 = await task("post", "https://cmapi.shmedia.tech/media-basic-port/api/app/points/video/add", _0x62c972, _0x3e61cc);
    _0x3dfca0.code == 0 ? (console.log("【" + this.name + "】看视频 成功"), await wait(5000)) : (console.log("【" + this.name + "】看视频 " + _0x3dfca0.msg), await wait(5000));
  }
  async moment() {
    let _0x31b969 = {
        token: this.o
      },
      _0xb6ce93 = "{\"content\":\"生活就是这样，起起伏伏，然后伏伏伏伏伏伏伏\",\"orderBy\":\"release_desc\",\"requestType\":\"1\",\"siteId\":\"310151\"}",
      _0x2c7629 = await task("post", "https://cmapi.shmedia.tech/media-basic-port/api/app/moment/status/add", _0x31b969, _0xb6ce93);
    _0x2c7629.code == 0 ? (console.log("【" + this.name + "】发圈子 成功"), await wait(61000)) : (console.log("【" + this.name + "】发圈子 " + _0x2c7629.msg), await wait(5000));
  }
  async share() {
    let _0x2b95f7 = {
        token: this.o
      },
      _0x5503cc = "{}",
      _0x19ba14 = await task("post", "https://cmapi.shmedia.tech/media-basic-port/api/app/points/share/add", _0x2b95f7, _0x5503cc);
    _0x19ba14.code == 0 ? (console.log("【" + this.name + "】分享文章 成功"), await wait(15000)) : (console.log("【" + this.name + "】分享文章 " + _0x19ba14.msg), await wait(5000));
  }
  async like() {
    let _0xa8746e = this.bb[RT(0, 19)].id,
      _0x56b392 = this.bb[RT(0, 19)].title,
      _0x1287e7 = {
        "log-header": "I am the log request header.",
        token: this.o
      },
      _0x2853d3 = "{\"liveStatus\":\"\",\"topLevel\":0,\"id\":\"" + _0xa8746e + "\"}",
      _0x208b62 = await task("post", "https://cmapi.shmedia.tech/media-basic-port/api/app/news/content/like", _0x1287e7, _0x2853d3);
    _0x208b62.code == 0 ? (console.log("【" + this.name + "】点赞【" + _0x56b392 + "】成功"), await wait(5000)) : (console.log("【" + this.name + "】点赞 " + _0x208b62.msg), await wait(5000));
  }
  async favor() {
    let _0x525fc4 = this.bb[RT(0, 19)].id,
      _0x403cab = this.bb[RT(0, 19)].title,
      _0x1cd957 = {
        "log-header": "I am the log request header.",
        token: this.o
      },
      _0x3a198c = "{\"liveStatus\":\"\",\"topLevel\":0,\"id\":\"" + _0x525fc4 + "\"}",
      _0x5b9b13 = await task("post", "https://cmapi.shmedia.tech/media-basic-port/api/app/news/content/favor", _0x1cd957, _0x3a198c);
    _0x5b9b13.code == 0 ? (console.log("【" + this.name + "】收藏【" + _0x403cab + "】成功"), await wait(5000)) : (console.log("【" + this.name + "】收藏 " + _0x5b9b13.msg), await wait(5000));
  }
  async comment() {
    let _0x34e0a2 = this.bb[RT(0, 9)].id,
      _0xeadb10 = this.bb[RT(0, 19)].title,
      _0x4e2f75 = {
        "log-header": "I am the log request header.",
        token: this.o
      },
      _0x5e0336 = "{\"content\":\"每天看崇明，每次都有新知识，继续加油哦" + (1 + RT(56, 7463829)) + "\",\"displayResources\":[],\"targetId\":\"" + _0x34e0a2 + "\",\"targetType\":\"content\"}",
      _0x5d3fbc = await task("post", "https://cmapi.shmedia.tech/media-basic-port/api/app/common/comment/add", _0x4e2f75, _0x5e0336);
    _0x5d3fbc.code == 0 ? (console.log("【" + this.name + "】评论【" + _0xeadb10 + "】成功"), await wait(30000)) : (console.log("【" + this.name + "】评论 " + _0x5d3fbc.msg), await wait(5000));
  }
  async signin() {
    let _0x49498e = "{}",
      _0xdfb0c0 = {
        "log-header": "I am the log request header.",
        token: this.o
      },
      _0x8b40ca = await task("post", "https://cmapi.shmedia.tech/media-basic-port/api/app/personal/score/sign", _0xdfb0c0, _0x49498e);
    _0x8b40ca.code == 0 ? (console.log("【" + this.name + "】 签到 成功"), await wait(5000)) : (console.log("【" + this.name + "】签到 " + _0x8b40ca.msg), await wait(5000));
  }
}
!(async () => {
  console.log("蛋炒饭美食交流频道：https://t.me/+s7DXGAezpNhjOGU1");
  console.log(NAME);
  checkEnv();
  for (let _0x5c9e31 of userList) {
    await _0x5c9e31.user();
    await _0x5c9e31.readlist();
    await _0x5c9e31.list();
  }
})().catch(_0x3b1f53 => {
  console.log(_0x3b1f53);
}).finally(() => {});
function RT(_0x17d582, _0x20d2a7) {
  return Math.round(Math.random() * (_0x20d2a7 - _0x17d582) + _0x17d582);
}
function times(_0x2dee36) {
  if (_0x2dee36 == 10) {
    let _0x2e72db = Math.round(new Date().getTime() / 1000).toString();
    return _0x2e72db;
  } else {
    let _0x2338e6 = new Date().getTime();
    return _0x2338e6;
  }
}
async function task(_0x8ad565, _0xd4e6a4, _0x4a029f, _0x2e70bd) {
  _0x8ad565 == "delete" ? _0x8ad565 = _0x8ad565.toUpperCase() : _0x8ad565 = _0x8ad565;
  const _0xeb4cb0 = require("request");
  _0x8ad565 == "post" && (delete _0x4a029f["content-type"], delete _0x4a029f["Content-type"], delete _0x4a029f["content-Type"], safeGet(_0x2e70bd) ? _0x4a029f["Content-Type"] = "application/json;charset=UTF-8" : _0x4a029f["Content-Type"] = "application/x-www-form-urlencoded", _0x2e70bd && (_0x4a029f["Content-Length"] = lengthInUtf8Bytes(_0x2e70bd)));
  _0x4a029f.Host = _0xd4e6a4.replace("//", "/").split("/")[1];
  if (_0x8ad565.indexOf("T") < 0) {
    var _0x477c52 = {
      url: _0xd4e6a4,
      headers: _0x4a029f,
      body: _0x2e70bd
    };
  } else {
    var _0x477c52 = {
      url: _0xd4e6a4,
      headers: _0x4a029f,
      form: JSON.parse(_0x2e70bd)
    };
  }
  return new Promise(async _0x92c373 => {
    _0xeb4cb0[_0x8ad565.toLowerCase()](_0x477c52, (_0x156293, _0x4c64ee, _0x5362ec) => {
      try {
        LOGS == 1 && (console.log("==================请求=================="), console.log(_0x477c52), console.log("==================返回=================="), console.log(JSON.parse(_0x5362ec)));
      } catch (_0x272aa5) {} finally {
        !_0x156293 ? safeGet(_0x5362ec) ? _0x5362ec = JSON.parse(_0x5362ec) : _0x5362ec = _0x5362ec : _0x5362ec = _0xd4e6a4 + "   API请求失败，请检查网络重试\n" + _0x156293;
        return _0x92c373(_0x5362ec);
      }
    });
  });
}
function SJS(_0x505502) {
  _0x505502 = _0x505502 || 32;
  var _0x17635a = "1234567890",
    _0x137bdc = _0x17635a.length,
    _0xc6a764 = "";
  for (i = 0; i < _0x505502; i++) {
    _0xc6a764 += _0x17635a.charAt(Math.floor(Math.random() * _0x137bdc));
  }
  return _0xc6a764;
}
function SJSxx(_0x45dfbc) {
  _0x45dfbc = _0x45dfbc || 32;
  var _0xb4ae14 = "abcdefghijklmnopqrstuvwxyz1234567890",
    _0x1737a5 = _0xb4ae14.length,
    _0x5b47a2 = "";
  for (i = 0; i < _0x45dfbc; i++) {
    _0x5b47a2 += _0xb4ae14.charAt(Math.floor(Math.random() * _0x1737a5));
  }
  return _0x5b47a2;
}
function safeGet(_0x4c50c9) {
  try {
    if (typeof JSON.parse(_0x4c50c9) == "object") {
      return true;
    }
  } catch (_0x3658d5) {
    return false;
  }
}
function lengthInUtf8Bytes(_0x455321) {
  let _0x3d9e32 = encodeURIComponent(_0x455321).match(/%[89ABab]/g);
  return _0x455321.length + (_0x3d9e32 ? _0x3d9e32.length : 0);
}
async function checkEnv() {
  let _0x195ae0 = process.env[VALY] || CK,
    _0x367cc2 = 0;
  if (_0x195ae0) {
    for (let _0x4ff645 of _0x195ae0.split("&").filter(_0x1af596 => !!_0x1af596)) {
      userList.push(new Bar(_0x4ff645));
    }
    _0x367cc2 = userList.length;
  } else {
    console.log("\n【" + NAME + "】：未填写变量: " + VALY);
  }
  console.log("共找到" + _0x367cc2 + "个账号");
  return userList;
}
function wait(_0x217100) {
  return new Promise(_0x4522d6 => setTimeout(_0x4522d6, _0x217100));
}
function stringToBase64(_0x486865) {
  var _0x294b94 = Buffer.from(_0x486865).toString("base64");
  return _0x294b94;
}
function EncryptCrypto(_0x15eef4, _0x2f7c54, _0x7d5c82, _0x51119e, _0xf6a36f, _0x4d9dce) {
  const _0x4afa32 = require("crypto-js"),
    _0x334c6b = _0x4afa32.enc.Utf8.parse(_0x51119e),
    _0x21c86f = _0x4afa32.enc.Utf8.parse(_0x4d9dce),
    _0x1195ef = _0x4afa32.enc.Utf8.parse(_0xf6a36f),
    _0x3ae9e5 = _0x4afa32[_0x15eef4].encrypt(_0x334c6b, _0x1195ef, {
      iv: _0x21c86f,
      mode: _0x4afa32.mode[_0x2f7c54],
      padding: _0x4afa32.pad[_0x7d5c82]
    });
  return _0x3ae9e5.toString();
}
function DecryptCrypto(_0xab684a, _0x5d9373, _0x1889b8, _0x38a655, _0x531b37, _0x12c642) {
  const _0x203d93 = require("crypto-js"),
    _0x5e4341 = _0x203d93.enc.Utf8.parse(_0x12c642),
    _0x109b28 = _0x203d93.enc.Utf8.parse(_0x531b37),
    _0x49e888 = _0x203d93[_0xab684a].decrypt(_0x38a655, _0x109b28, {
      iv: _0x5e4341,
      mode: _0x203d93.mode[_0x5d9373],
      padding: _0x203d93.pad[_0x1889b8]
    });
  return _0x49e888.toString(_0x203d93.enc.Utf8);
}
function RSA(_0x2efe06, _0x39b28) {
  const _0x4bfb72 = require("node-rsa");
  let _0x7e9633 = new _0x4bfb72("-----BEGIN PUBLIC KEY-----\n" + _0x39b28 + "\n-----END PUBLIC KEY-----");
  _0x7e9633.setOptions({
    encryptionScheme: "pkcs1"
  });
  return _0x7e9633.encrypt(_0x2efe06, "base64", "utf8");
}
function SHA1_Encrypt(_0x3078f8) {
  return CryptoJS.SHA1(_0x3078f8).toString();
}
function SHA256(_0x3ba7c7) {
  const _0x3c5382 = 8,
    _0x1f14e3 = 0;
  function _0x187545(_0x43e9d0, _0x31bb13) {
    const _0x3a7394 = (65535 & _0x43e9d0) + (65535 & _0x31bb13);
    return (_0x43e9d0 >> 16) + (_0x31bb13 >> 16) + (_0x3a7394 >> 16) << 16 | 65535 & _0x3a7394;
  }
  function _0x4e007b(_0x22a2e1, _0x46f94b) {
    return _0x22a2e1 >>> _0x46f94b | _0x22a2e1 << 32 - _0x46f94b;
  }
  function _0x35be91(_0x27444a, _0x2967bf) {
    return _0x27444a >>> _0x2967bf;
  }
  function _0x1220fe(_0x495b33, _0x331c6d, _0x2e29a5) {
    return _0x495b33 & _0x331c6d ^ ~_0x495b33 & _0x2e29a5;
  }
  function _0x5973cc(_0x57bdb4, _0x4a319b, _0x541ce9) {
    return _0x57bdb4 & _0x4a319b ^ _0x57bdb4 & _0x541ce9 ^ _0x4a319b & _0x541ce9;
  }
  function _0x3aa3d7(_0x1b9929) {
    return _0x4e007b(_0x1b9929, 2) ^ _0x4e007b(_0x1b9929, 13) ^ _0x4e007b(_0x1b9929, 22);
  }
  function _0x476d14(_0x5b26b0) {
    return _0x4e007b(_0x5b26b0, 6) ^ _0x4e007b(_0x5b26b0, 11) ^ _0x4e007b(_0x5b26b0, 25);
  }
  function _0x43e1e7(_0xa2033c) {
    return _0x4e007b(_0xa2033c, 7) ^ _0x4e007b(_0xa2033c, 18) ^ _0x35be91(_0xa2033c, 3);
  }
  return function (_0x1fddbc) {
    const _0x492abb = _0x1f14e3 ? "0123456789ABCDEF" : "0123456789abcdef";
    let _0x59fe58 = "";
    for (let _0x15aba6 = 0; _0x15aba6 < 4 * _0x1fddbc.length; _0x15aba6++) {
      _0x59fe58 += _0x492abb.charAt(_0x1fddbc[_0x15aba6 >> 2] >> 8 * (3 - _0x15aba6 % 4) + 4 & 15) + _0x492abb.charAt(_0x1fddbc[_0x15aba6 >> 2] >> 8 * (3 - _0x15aba6 % 4) & 15);
    }
    return _0x59fe58;
  }(function (_0x16fc34, _0x3371a3) {
    const _0x2da0b1 = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
      _0x49ab17 = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
      _0x517615 = new Array(64);
    let _0x3dd1fc, _0x258159, _0x1b884d, _0x219a37, _0x11f1ba, _0x5f1b34, _0x3bce09, _0x35d38a, _0x4f85af, _0x1b9289, _0x23f6e6, _0x23015f;
    for (_0x16fc34[_0x3371a3 >> 5] |= 128 << 24 - _0x3371a3 % 32, _0x16fc34[15 + (_0x3371a3 + 64 >> 9 << 4)] = _0x3371a3, _0x4f85af = 0; _0x4f85af < _0x16fc34.length; _0x4f85af += 16) {
      for (_0x3dd1fc = _0x49ab17[0], _0x258159 = _0x49ab17[1], _0x1b884d = _0x49ab17[2], _0x219a37 = _0x49ab17[3], _0x11f1ba = _0x49ab17[4], _0x5f1b34 = _0x49ab17[5], _0x3bce09 = _0x49ab17[6], _0x35d38a = _0x49ab17[7], _0x1b9289 = 0; _0x1b9289 < 64; _0x1b9289++) {
        _0x517615[_0x1b9289] = _0x1b9289 < 16 ? _0x16fc34[_0x1b9289 + _0x4f85af] : _0x187545(_0x187545(_0x187545(_0x4e007b(_0x463075 = _0x517615[_0x1b9289 - 2], 17) ^ _0x4e007b(_0x463075, 19) ^ _0x35be91(_0x463075, 10), _0x517615[_0x1b9289 - 7]), _0x43e1e7(_0x517615[_0x1b9289 - 15])), _0x517615[_0x1b9289 - 16]);
        _0x23f6e6 = _0x187545(_0x187545(_0x187545(_0x187545(_0x35d38a, _0x476d14(_0x11f1ba)), _0x1220fe(_0x11f1ba, _0x5f1b34, _0x3bce09)), _0x2da0b1[_0x1b9289]), _0x517615[_0x1b9289]);
        _0x23015f = _0x187545(_0x3aa3d7(_0x3dd1fc), _0x5973cc(_0x3dd1fc, _0x258159, _0x1b884d));
        _0x35d38a = _0x3bce09;
        _0x3bce09 = _0x5f1b34;
        _0x5f1b34 = _0x11f1ba;
        _0x11f1ba = _0x187545(_0x219a37, _0x23f6e6);
        _0x219a37 = _0x1b884d;
        _0x1b884d = _0x258159;
        _0x258159 = _0x3dd1fc;
        _0x3dd1fc = _0x187545(_0x23f6e6, _0x23015f);
      }
      _0x49ab17[0] = _0x187545(_0x3dd1fc, _0x49ab17[0]);
      _0x49ab17[1] = _0x187545(_0x258159, _0x49ab17[1]);
      _0x49ab17[2] = _0x187545(_0x1b884d, _0x49ab17[2]);
      _0x49ab17[3] = _0x187545(_0x219a37, _0x49ab17[3]);
      _0x49ab17[4] = _0x187545(_0x11f1ba, _0x49ab17[4]);
      _0x49ab17[5] = _0x187545(_0x5f1b34, _0x49ab17[5]);
      _0x49ab17[6] = _0x187545(_0x3bce09, _0x49ab17[6]);
      _0x49ab17[7] = _0x187545(_0x35d38a, _0x49ab17[7]);
    }
    var _0x463075;
    return _0x49ab17;
  }(function (_0x5b2278) {
    const _0x3866b7 = [],
      _0x3130f3 = (1 << _0x3c5382) - 1;
    for (let _0x231e6d = 0; _0x231e6d < _0x5b2278.length * _0x3c5382; _0x231e6d += _0x3c5382) {
      _0x3866b7[_0x231e6d >> 5] |= (_0x5b2278.charCodeAt(_0x231e6d / _0x3c5382) & _0x3130f3) << 24 - _0x231e6d % 32;
    }
    return _0x3866b7;
  }(_0x3ba7c7 = function (_0x258107) {
    _0x258107 = _0x258107.replace(/\r\n/g, "\n");
    let _0x20e061 = "";
    for (let _0x1c2613 = 0; _0x1c2613 < _0x258107.length; _0x1c2613++) {
      const _0x4992f8 = _0x258107.charCodeAt(_0x1c2613);
      _0x4992f8 < 128 ? _0x20e061 += String.fromCharCode(_0x4992f8) : _0x4992f8 > 127 && _0x4992f8 < 2048 ? (_0x20e061 += String.fromCharCode(_0x4992f8 >> 6 | 192), _0x20e061 += String.fromCharCode(63 & _0x4992f8 | 128)) : (_0x20e061 += String.fromCharCode(_0x4992f8 >> 12 | 224), _0x20e061 += String.fromCharCode(_0x4992f8 >> 6 & 63 | 128), _0x20e061 += String.fromCharCode(63 & _0x4992f8 | 128));
    }
    return _0x20e061;
  }(_0x3ba7c7)), _0x3ba7c7.length * _0x3c5382));
}
function MD5Encrypt(_0x538141) {
  function _0x2f7ae7(_0x4a0597, _0x465f8b) {
    return _0x4a0597 << _0x465f8b | _0x4a0597 >>> 32 - _0x465f8b;
  }
  function _0x203a90(_0x36f1ef, _0x107d3b) {
    var _0x5b354d, _0x209da5, _0x44d0c8, _0x46d81b, _0x2c1d2e;
    _0x44d0c8 = 2147483648 & _0x36f1ef;
    _0x46d81b = 2147483648 & _0x107d3b;
    _0x5b354d = 1073741824 & _0x36f1ef;
    _0x209da5 = 1073741824 & _0x107d3b;
    _0x2c1d2e = (1073741823 & _0x36f1ef) + (1073741823 & _0x107d3b);
    return _0x5b354d & _0x209da5 ? 2147483648 ^ _0x2c1d2e ^ _0x44d0c8 ^ _0x46d81b : _0x5b354d | _0x209da5 ? 1073741824 & _0x2c1d2e ? 3221225472 ^ _0x2c1d2e ^ _0x44d0c8 ^ _0x46d81b : 1073741824 ^ _0x2c1d2e ^ _0x44d0c8 ^ _0x46d81b : _0x2c1d2e ^ _0x44d0c8 ^ _0x46d81b;
  }
  function _0x134fba(_0x32e4ca, _0x1e2665, _0x2c666c, _0x54024b, _0x4c134a, _0x2659cf, _0x56f5c0) {
    var _0x484acb, _0x1e4b49;
    _0x32e4ca = _0x203a90(_0x32e4ca, _0x203a90(_0x203a90((_0x484acb = _0x1e2665) & (_0x1e4b49 = _0x2c666c) | ~_0x484acb & _0x54024b, _0x4c134a), _0x56f5c0));
    return _0x203a90(_0x2f7ae7(_0x32e4ca, _0x2659cf), _0x1e2665);
  }
  function _0x546cbe(_0x4b6646, _0xec8b78, _0x443906, _0xe20026, _0x4a99e9, _0x45eb0d, _0x59b6cb) {
    var _0x1e9377, _0x24c683, _0xc61ac5;
    _0x4b6646 = _0x203a90(_0x4b6646, _0x203a90(_0x203a90((_0x1e9377 = _0xec8b78, _0x24c683 = _0x443906, _0x1e9377 & (_0xc61ac5 = _0xe20026) | _0x24c683 & ~_0xc61ac5), _0x4a99e9), _0x59b6cb));
    return _0x203a90(_0x2f7ae7(_0x4b6646, _0x45eb0d), _0xec8b78);
  }
  function _0x465952(_0x4a9f61, _0x24d8a7, _0x57aa10, _0x2e5f16, _0x45a408, _0x58003e, _0x53c2ac) {
    var _0x427bba, _0x4badc9;
    _0x4a9f61 = _0x203a90(_0x4a9f61, _0x203a90(_0x203a90((_0x427bba = _0x24d8a7) ^ (_0x4badc9 = _0x57aa10) ^ _0x2e5f16, _0x45a408), _0x53c2ac));
    return _0x203a90(_0x2f7ae7(_0x4a9f61, _0x58003e), _0x24d8a7);
  }
  function _0x523824(_0x1c4771, _0x16a319, _0x4c6480, _0x3c47ad, _0x284200, _0x28f1f6, _0x41e26d) {
    var _0x11d325, _0x4132a0;
    _0x1c4771 = _0x203a90(_0x1c4771, _0x203a90(_0x203a90((_0x11d325 = _0x16a319, (_0x4132a0 = _0x4c6480) ^ (_0x11d325 | ~_0x3c47ad)), _0x284200), _0x41e26d));
    return _0x203a90(_0x2f7ae7(_0x1c4771, _0x28f1f6), _0x16a319);
  }
  function _0x26c090(_0x22f742) {
    var _0x5290e0,
      _0x1bbbb8 = "",
      _0x17dd19 = "";
    for (_0x5290e0 = 0; 3 >= _0x5290e0; _0x5290e0++) {
      _0x1bbbb8 += (_0x17dd19 = "0" + (_0x22f742 >>> 8 * _0x5290e0 & 255).toString(16)).substr(_0x17dd19.length - 2, 2);
    }
    return _0x1bbbb8;
  }
  var _0x214e24,
    _0x387ebf,
    _0x4fd4a1,
    _0x415e73,
    _0x5e5111,
    _0x4fd311,
    _0x1f48d4,
    _0x3061ad,
    _0x22e670,
    _0x3e069d = [];
  for (_0x3e069d = function (_0x2f6020) {
    for (var _0x4ce8, _0x389e50 = _0x2f6020.length, _0x324c83 = _0x389e50 + 8, _0x3fe26d = 16 * ((_0x324c83 - _0x324c83 % 64) / 64 + 1), _0x474877 = Array(_0x3fe26d - 1), _0x5af544 = 0, _0x26677b = 0; _0x389e50 > _0x26677b;) {
      _0x4ce8 = (_0x26677b - _0x26677b % 4) / 4;
      _0x5af544 = _0x26677b % 4 * 8;
      _0x474877[_0x4ce8] = _0x474877[_0x4ce8] | _0x2f6020.charCodeAt(_0x26677b) << _0x5af544;
      _0x26677b++;
    }
    _0x4ce8 = (_0x26677b - _0x26677b % 4) / 4;
    _0x5af544 = _0x26677b % 4 * 8;
    _0x474877[_0x4ce8] = _0x474877[_0x4ce8] | 128 << _0x5af544;
    _0x474877[_0x3fe26d - 2] = _0x389e50 << 3;
    _0x474877[_0x3fe26d - 1] = _0x389e50 >>> 29;
    return _0x474877;
  }(_0x538141 = function (_0x12f11e) {
    _0x12f11e = _0x12f11e.replace(/\r\n/g, "\n");
    for (var _0x4730ae = "", _0x1ca6b2 = 0; _0x1ca6b2 < _0x12f11e.length; _0x1ca6b2++) {
      var _0x586cb8 = _0x12f11e.charCodeAt(_0x1ca6b2);
      128 > _0x586cb8 ? _0x4730ae += String.fromCharCode(_0x586cb8) : _0x586cb8 > 127 && 2048 > _0x586cb8 ? (_0x4730ae += String.fromCharCode(_0x586cb8 >> 6 | 192), _0x4730ae += String.fromCharCode(63 & _0x586cb8 | 128)) : (_0x4730ae += String.fromCharCode(_0x586cb8 >> 12 | 224), _0x4730ae += String.fromCharCode(_0x586cb8 >> 6 & 63 | 128), _0x4730ae += String.fromCharCode(63 & _0x586cb8 | 128));
    }
    return _0x4730ae;
  }(_0x538141)), _0x4fd311 = 1732584193, _0x1f48d4 = 4023233417, _0x3061ad = 2562383102, _0x22e670 = 271733878, _0x214e24 = 0; _0x214e24 < _0x3e069d.length; _0x214e24 += 16) {
    _0x387ebf = _0x4fd311;
    _0x4fd4a1 = _0x1f48d4;
    _0x415e73 = _0x3061ad;
    _0x5e5111 = _0x22e670;
    _0x4fd311 = _0x134fba(_0x4fd311, _0x1f48d4, _0x3061ad, _0x22e670, _0x3e069d[_0x214e24 + 0], 7, 3614090360);
    _0x22e670 = _0x134fba(_0x22e670, _0x4fd311, _0x1f48d4, _0x3061ad, _0x3e069d[_0x214e24 + 1], 12, 3905402710);
    _0x3061ad = _0x134fba(_0x3061ad, _0x22e670, _0x4fd311, _0x1f48d4, _0x3e069d[_0x214e24 + 2], 17, 606105819);
    _0x1f48d4 = _0x134fba(_0x1f48d4, _0x3061ad, _0x22e670, _0x4fd311, _0x3e069d[_0x214e24 + 3], 22, 3250441966);
    _0x4fd311 = _0x134fba(_0x4fd311, _0x1f48d4, _0x3061ad, _0x22e670, _0x3e069d[_0x214e24 + 4], 7, 4118548399);
    _0x22e670 = _0x134fba(_0x22e670, _0x4fd311, _0x1f48d4, _0x3061ad, _0x3e069d[_0x214e24 + 5], 12, 1200080426);
    _0x3061ad = _0x134fba(_0x3061ad, _0x22e670, _0x4fd311, _0x1f48d4, _0x3e069d[_0x214e24 + 6], 17, 2821735955);
    _0x1f48d4 = _0x134fba(_0x1f48d4, _0x3061ad, _0x22e670, _0x4fd311, _0x3e069d[_0x214e24 + 7], 22, 4249261313);
    _0x4fd311 = _0x134fba(_0x4fd311, _0x1f48d4, _0x3061ad, _0x22e670, _0x3e069d[_0x214e24 + 8], 7, 1770035416);
    _0x22e670 = _0x134fba(_0x22e670, _0x4fd311, _0x1f48d4, _0x3061ad, _0x3e069d[_0x214e24 + 9], 12, 2336552879);
    _0x3061ad = _0x134fba(_0x3061ad, _0x22e670, _0x4fd311, _0x1f48d4, _0x3e069d[_0x214e24 + 10], 17, 4294925233);
    _0x1f48d4 = _0x134fba(_0x1f48d4, _0x3061ad, _0x22e670, _0x4fd311, _0x3e069d[_0x214e24 + 11], 22, 2304563134);
    _0x4fd311 = _0x134fba(_0x4fd311, _0x1f48d4, _0x3061ad, _0x22e670, _0x3e069d[_0x214e24 + 12], 7, 1804603682);
    _0x22e670 = _0x134fba(_0x22e670, _0x4fd311, _0x1f48d4, _0x3061ad, _0x3e069d[_0x214e24 + 13], 12, 4254626195);
    _0x3061ad = _0x134fba(_0x3061ad, _0x22e670, _0x4fd311, _0x1f48d4, _0x3e069d[_0x214e24 + 14], 17, 2792965006);
    _0x1f48d4 = _0x134fba(_0x1f48d4, _0x3061ad, _0x22e670, _0x4fd311, _0x3e069d[_0x214e24 + 15], 22, 1236535329);
    _0x4fd311 = _0x546cbe(_0x4fd311, _0x1f48d4, _0x3061ad, _0x22e670, _0x3e069d[_0x214e24 + 1], 5, 4129170786);
    _0x22e670 = _0x546cbe(_0x22e670, _0x4fd311, _0x1f48d4, _0x3061ad, _0x3e069d[_0x214e24 + 6], 9, 3225465664);
    _0x3061ad = _0x546cbe(_0x3061ad, _0x22e670, _0x4fd311, _0x1f48d4, _0x3e069d[_0x214e24 + 11], 14, 643717713);
    _0x1f48d4 = _0x546cbe(_0x1f48d4, _0x3061ad, _0x22e670, _0x4fd311, _0x3e069d[_0x214e24 + 0], 20, 3921069994);
    _0x4fd311 = _0x546cbe(_0x4fd311, _0x1f48d4, _0x3061ad, _0x22e670, _0x3e069d[_0x214e24 + 5], 5, 3593408605);
    _0x22e670 = _0x546cbe(_0x22e670, _0x4fd311, _0x1f48d4, _0x3061ad, _0x3e069d[_0x214e24 + 10], 9, 38016083);
    _0x3061ad = _0x546cbe(_0x3061ad, _0x22e670, _0x4fd311, _0x1f48d4, _0x3e069d[_0x214e24 + 15], 14, 3634488961);
    _0x1f48d4 = _0x546cbe(_0x1f48d4, _0x3061ad, _0x22e670, _0x4fd311, _0x3e069d[_0x214e24 + 4], 20, 3889429448);
    _0x4fd311 = _0x546cbe(_0x4fd311, _0x1f48d4, _0x3061ad, _0x22e670, _0x3e069d[_0x214e24 + 9], 5, 568446438);
    _0x22e670 = _0x546cbe(_0x22e670, _0x4fd311, _0x1f48d4, _0x3061ad, _0x3e069d[_0x214e24 + 14], 9, 3275163606);
    _0x3061ad = _0x546cbe(_0x3061ad, _0x22e670, _0x4fd311, _0x1f48d4, _0x3e069d[_0x214e24 + 3], 14, 4107603335);
    _0x1f48d4 = _0x546cbe(_0x1f48d4, _0x3061ad, _0x22e670, _0x4fd311, _0x3e069d[_0x214e24 + 8], 20, 1163531501);
    _0x4fd311 = _0x546cbe(_0x4fd311, _0x1f48d4, _0x3061ad, _0x22e670, _0x3e069d[_0x214e24 + 13], 5, 2850285829);
    _0x22e670 = _0x546cbe(_0x22e670, _0x4fd311, _0x1f48d4, _0x3061ad, _0x3e069d[_0x214e24 + 2], 9, 4243563512);
    _0x3061ad = _0x546cbe(_0x3061ad, _0x22e670, _0x4fd311, _0x1f48d4, _0x3e069d[_0x214e24 + 7], 14, 1735328473);
    _0x1f48d4 = _0x546cbe(_0x1f48d4, _0x3061ad, _0x22e670, _0x4fd311, _0x3e069d[_0x214e24 + 12], 20, 2368359562);
    _0x4fd311 = _0x465952(_0x4fd311, _0x1f48d4, _0x3061ad, _0x22e670, _0x3e069d[_0x214e24 + 5], 4, 4294588738);
    _0x22e670 = _0x465952(_0x22e670, _0x4fd311, _0x1f48d4, _0x3061ad, _0x3e069d[_0x214e24 + 8], 11, 2272392833);
    _0x3061ad = _0x465952(_0x3061ad, _0x22e670, _0x4fd311, _0x1f48d4, _0x3e069d[_0x214e24 + 11], 16, 1839030562);
    _0x1f48d4 = _0x465952(_0x1f48d4, _0x3061ad, _0x22e670, _0x4fd311, _0x3e069d[_0x214e24 + 14], 23, 4259657740);
    _0x4fd311 = _0x465952(_0x4fd311, _0x1f48d4, _0x3061ad, _0x22e670, _0x3e069d[_0x214e24 + 1], 4, 2763975236);
    _0x22e670 = _0x465952(_0x22e670, _0x4fd311, _0x1f48d4, _0x3061ad, _0x3e069d[_0x214e24 + 4], 11, 1272893353);
    _0x3061ad = _0x465952(_0x3061ad, _0x22e670, _0x4fd311, _0x1f48d4, _0x3e069d[_0x214e24 + 7], 16, 4139469664);
    _0x1f48d4 = _0x465952(_0x1f48d4, _0x3061ad, _0x22e670, _0x4fd311, _0x3e069d[_0x214e24 + 10], 23, 3200236656);
    _0x4fd311 = _0x465952(_0x4fd311, _0x1f48d4, _0x3061ad, _0x22e670, _0x3e069d[_0x214e24 + 13], 4, 681279174);
    _0x22e670 = _0x465952(_0x22e670, _0x4fd311, _0x1f48d4, _0x3061ad, _0x3e069d[_0x214e24 + 0], 11, 3936430074);
    _0x3061ad = _0x465952(_0x3061ad, _0x22e670, _0x4fd311, _0x1f48d4, _0x3e069d[_0x214e24 + 3], 16, 3572445317);
    _0x1f48d4 = _0x465952(_0x1f48d4, _0x3061ad, _0x22e670, _0x4fd311, _0x3e069d[_0x214e24 + 6], 23, 76029189);
    _0x4fd311 = _0x465952(_0x4fd311, _0x1f48d4, _0x3061ad, _0x22e670, _0x3e069d[_0x214e24 + 9], 4, 3654602809);
    _0x22e670 = _0x465952(_0x22e670, _0x4fd311, _0x1f48d4, _0x3061ad, _0x3e069d[_0x214e24 + 12], 11, 3873151461);
    _0x3061ad = _0x465952(_0x3061ad, _0x22e670, _0x4fd311, _0x1f48d4, _0x3e069d[_0x214e24 + 15], 16, 530742520);
    _0x1f48d4 = _0x465952(_0x1f48d4, _0x3061ad, _0x22e670, _0x4fd311, _0x3e069d[_0x214e24 + 2], 23, 3299628645);
    _0x4fd311 = _0x523824(_0x4fd311, _0x1f48d4, _0x3061ad, _0x22e670, _0x3e069d[_0x214e24 + 0], 6, 4096336452);
    _0x22e670 = _0x523824(_0x22e670, _0x4fd311, _0x1f48d4, _0x3061ad, _0x3e069d[_0x214e24 + 7], 10, 1126891415);
    _0x3061ad = _0x523824(_0x3061ad, _0x22e670, _0x4fd311, _0x1f48d4, _0x3e069d[_0x214e24 + 14], 15, 2878612391);
    _0x1f48d4 = _0x523824(_0x1f48d4, _0x3061ad, _0x22e670, _0x4fd311, _0x3e069d[_0x214e24 + 5], 21, 4237533241);
    _0x4fd311 = _0x523824(_0x4fd311, _0x1f48d4, _0x3061ad, _0x22e670, _0x3e069d[_0x214e24 + 12], 6, 1700485571);
    _0x22e670 = _0x523824(_0x22e670, _0x4fd311, _0x1f48d4, _0x3061ad, _0x3e069d[_0x214e24 + 3], 10, 2399980690);
    _0x3061ad = _0x523824(_0x3061ad, _0x22e670, _0x4fd311, _0x1f48d4, _0x3e069d[_0x214e24 + 10], 15, 4293915773);
    _0x1f48d4 = _0x523824(_0x1f48d4, _0x3061ad, _0x22e670, _0x4fd311, _0x3e069d[_0x214e24 + 1], 21, 2240044497);
    _0x4fd311 = _0x523824(_0x4fd311, _0x1f48d4, _0x3061ad, _0x22e670, _0x3e069d[_0x214e24 + 8], 6, 1873313359);
    _0x22e670 = _0x523824(_0x22e670, _0x4fd311, _0x1f48d4, _0x3061ad, _0x3e069d[_0x214e24 + 15], 10, 4264355552);
    _0x3061ad = _0x523824(_0x3061ad, _0x22e670, _0x4fd311, _0x1f48d4, _0x3e069d[_0x214e24 + 6], 15, 2734768916);
    _0x1f48d4 = _0x523824(_0x1f48d4, _0x3061ad, _0x22e670, _0x4fd311, _0x3e069d[_0x214e24 + 13], 21, 1309151649);
    _0x4fd311 = _0x523824(_0x4fd311, _0x1f48d4, _0x3061ad, _0x22e670, _0x3e069d[_0x214e24 + 4], 6, 4149444226);
    _0x22e670 = _0x523824(_0x22e670, _0x4fd311, _0x1f48d4, _0x3061ad, _0x3e069d[_0x214e24 + 11], 10, 3174756917);
    _0x3061ad = _0x523824(_0x3061ad, _0x22e670, _0x4fd311, _0x1f48d4, _0x3e069d[_0x214e24 + 2], 15, 718787259);
    _0x1f48d4 = _0x523824(_0x1f48d4, _0x3061ad, _0x22e670, _0x4fd311, _0x3e069d[_0x214e24 + 9], 21, 3951481745);
    _0x4fd311 = _0x203a90(_0x4fd311, _0x387ebf);
    _0x1f48d4 = _0x203a90(_0x1f48d4, _0x4fd4a1);
    _0x3061ad = _0x203a90(_0x3061ad, _0x415e73);
    _0x22e670 = _0x203a90(_0x22e670, _0x5e5111);
  }
  return (_0x26c090(_0x4fd311) + _0x26c090(_0x1f48d4) + _0x26c090(_0x3061ad) + _0x26c090(_0x22e670)).toLowerCase();
}