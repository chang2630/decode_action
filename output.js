//Thu Aug 29 2024 08:56:24 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x17edb3 = new _0x5df346("多娇江山");
_0x23fa46();
const _0xba9328 = "djjsCookie",
  _0x3eaeea = require("request"),
  _0x44429c = require("fs"),
  _0x149fe6 = require("form-data"),
  _0x272913 = require("./utils");
let _0x3f6e77 = "",
  _0x1c05b5 = "https://app.21js.com/webChannels/invite?inviteCode=WE8Z8Y&tenantId=24&accountId=649cbdd63cbc286cbf6f3478",
  _0x54dc6d = "幻生提示：有错请在仓库建立issue，说明运行环境：青龙版本、机器是 本地机器、服务器 还是 手机面具模块；附上运行截图，谢谢",
  _0x2143ac = "请在 配置文件 里添加 " + _0xba9328 + " 变量，具体配置请看脚本最上方说明\n注册地址：" + _0x1c05b5 + "\n投稿？请建Issue 或者 +Q：3385445213";
const _0x28950e = Number.isInteger(_0x17edb3.isNode() ? process.env[_0xba9328 + "enabledNotify"] : _0x17edb3.getdata(_0xba9328 + "EnabledNotify")) || Number.isInteger(_0x17edb3.isNode() ? process.env.enabledNotify : _0x17edb3.getdata("enabledNotify")) || 1;
let _0x560b58 = 0,
  _0x52111c = ["@", "\n"],
  _0x38626e = (_0x17edb3.isNode() ? process.env[_0xba9328] : _0x17edb3.getdata(_0xba9328)) || "",
  _0x862c3e = ["1", 1, "true"]?.["includes"](_0x17edb3.isNode() ? process.env[_0xba9328 + "EnabledPostComment"] : _0x17edb3.getdata(_0xba9328 + "EnabledPostComment")) || false,
  _0x429a5b = ["1", 1, "true"]?.["includes"](_0x17edb3.isNode() ? process.env[_0xba9328 + "EnabledForumPost"] : _0x17edb3.getdata(_0xba9328 + "EnabledForumPost")) || false,
  _0x4fdb07 = ["1", 1, "true"]?.["includes"](_0x17edb3.isNode() ? process.env[_0xba9328 + "EnabledPostCommentBy1Y"] : _0x17edb3.getdata(_0xba9328 + "EnabledPostCommentBy1Y")) || false,
  _0x2215d9 = ["1", 1, "true"]?.["includes"](_0x17edb3.isNode() ? process.env[_0xba9328 + "ForceLikeAndShare"] : _0x17edb3.getdata(_0xba9328 + "ForceLikeAndShare")) || false,
  _0x28d53a = [],
  _0xeb1579 = 0,
  _0x2b9d3b = 0,
  _0x9dcc03 = "WE8Z8Y",
  _0x525cde = "35",
  _0x2dc6d5 = 24,
  _0x16b394 = "vapp.tmuyun.com",
  _0x4d4548 = "请注意：已" + (_0x862c3e ? "开启" : "关闭") + " 对文章的评论功能； 已" + (_0x429a5b ? "开启" : "关闭") + " 论坛发帖功能； 已" + (_0x4fdb07 ? "开启" : "关闭") + " 一言随机评论功能； 已" + (_0x4fdb07 ? "开启" : "关闭") + " 强制点赞/分享功能（强行点不一定能加分）",
  _0x8b07ba = "63777162fe3fc118b09fab89",
  _0x19e8cc = ["赞", "👍", "😄", "111", "支持", "点赞"],
  _0x4b1819 = "1.2.2;00000000-62d6-e9e6-0000-0000777fa720;Xiaomi Mi 10;Android;13;xiaomi",
  _0x1be5eb = ["5d3fe981b198500f695bdebf ", "6264b0b6fe3fc11a653387d2", "5d3fe99a1b011b0b08d5244b", "637c91d5b40eef5a490bcea9", "5d3fea3ab198500f695bdec4"],
  _0x430f11 = ["1", 1, "true"]?.["includes"](_0x17edb3.isNode() ? process.env[_0xba9328 + "OldConfigTranform"] : _0x17edb3.getdata(_0xba9328 + "OldConfigTranform")) || false,
  _0x5a280a = "",
  _0x24e931 = "";
async function _0x205cba() {
  console.log("\n================== 用户登录 帐号数：[" + _0x28d53a?.["length"] + "]==================\n");
  let _0x46f21f = [];
  for (let _0x4a6e6f of _0x28d53a) {
    !_0x4a6e6f.sessionId ? (_0x4a6e6f.loadCache(), !_0x4a6e6f.valid ? _0x46f21f.push(await _0x4a6e6f.login()) : await _0x17edb3.wait(200)) : (_0x46f21f.push(await _0x4a6e6f.user_info()), await _0x17edb3.wait(200));
  }
  await Promise.all(_0x46f21f);
  _0x28d53a = _0x28d53a?.["filter"](_0x12dec7 => _0x12dec7?.["valid"]);
  if (!_0x28d53a?.["length"]) {
    console.log("\n无可用账号，停止运行\n");
    return;
  }
  console.log("\n================== 用户信息 帐号数：[" + _0x28d53a?.["length"] + "]==================\n");
  _0x46f21f = [];
  for (let _0x5f214c of _0x28d53a) {
    _0x46f21f.push(await _0x5f214c.task_tasklist("用户信息"));
    await _0x281bf5(0.2 + Math.random() * 1);
    _0x46f21f.push(await _0x5f214c.get_unread_msg());
  }
  await Promise.all(_0x46f21f);
  const _0x57b3f1 = _0x28d53a?.["filter"](_0x440425 => _0x440425?.["jobList"]?.["find"](_0x543c61 => _0x543c61?.["name"]?.["includes"]("签到") && _0x543c61?.["frequency"] && _0x543c61?.["frequency"] > _0x543c61?.["finish_times"]));
  if (_0x57b3f1?.["length"]) {
    console.log("\n================== 每日签到任务开始执行 待执行帐号数：[" + _0x57b3f1?.["length"] + "]==================\n");
    _0x46f21f = [];
    for (let _0x547255 of _0x57b3f1) {
      _0x46f21f.push(await _0x547255.task_sign("每日签到"));
      await _0x281bf5(0.2 + Math.random() * 1);
    }
    await Promise.all(_0x46f21f);
  } else console.log("\n无签到任务 或 当前帐号都已签到过了，无需执行签到任务\n");
  const _0x4f7c1c = _0x28d53a?.["filter"](_0x34f07b => _0x34f07b?.["jobList"]?.["find"](_0x48c759 => {
    return _0x48c759?.["name"]?.["includes"]("帖子发布") && _0x48c759?.["frequency"] && _0x48c759?.["frequency"] > _0x48c759?.["finish_times"] && _0x429a5b || _0x48c759?.["name"]?.["includes"]("帖子点赞") && _0x48c759?.["frequency"] && _0x48c759?.["frequency"] > _0x48c759?.["finish_times"];
  }));
  if (_0x4f7c1c?.["length"]) {
    console.log("\n================== 社区帖子相关任务开始执行 待执行帐号数：[" + _0x4f7c1c?.["length"] + "]==================\n");
    _0x46f21f = [];
    for (let _0x3880e of _0x4f7c1c) {
      _0x46f21f.push(await _0x3880e.task_forum_info("社区帖子列表"));
      await _0x281bf5(0.2 + Math.random() * 1);
    }
    await Promise.all(_0x46f21f);
  } else console.log("\n无社区帖子相关任务 或 当前帐号都已做完了社区帖子任务，无需执行\n");
  await _0x281bf5(0.2 + Math.random() * 1);
  const _0x5c0f76 = _0x28d53a?.["filter"](_0x1bc45e => _0x1bc45e?.["jobList"]?.["find"](_0x2d5180 => {
    return _0x2d5180?.["name"]?.["includes"]("资讯评论") && _0x2d5180?.["frequency"] > _0x2d5180?.["finish_times"] && _0x862c3e || _0x2d5180?.["name"]?.["includes"]("分享资讯") && _0x2d5180?.["frequency"] && _0x2d5180?.["frequency"] > _0x2d5180?.["finish_times"] || _0x2d5180?.["name"]?.["includes"]("资讯点赞") && _0x2d5180?.["frequency"] && _0x2d5180?.["frequency"] > _0x2d5180?.["finish_times"] || _0x2d5180?.["name"]?.["includes"]("资讯阅读") && _0x2d5180?.["frequency"] && _0x2d5180?.["frequency"] > _0x2d5180?.["finish_times"];
  }));
  if (_0x5c0f76?.["length"]) {
    console.log("\n================== 文章列表相关任务开始执行 待执行帐号数：[" + _0x5c0f76?.["length"] + "]==================\n");
    _0x46f21f = [];
    for (let _0x267caf of _0x5c0f76) {
      console.log("\n开始执行帐号[" + _0x267caf.index + "] 文章任务😄\n");
      _0x46f21f.push(await _0x267caf.task_articlelist("文章列表"));
      await _0x281bf5(0.2 + Math.random() * 1);
    }
    await Promise.all(_0x46f21f);
  } else {
    console.log("\n无文章资讯任务 或 当前帐号都已做完了资讯任务，无需执行相关任务\n");
  }
  await _0x281bf5(0.2 + Math.random() * 1);
  const _0x5353a3 = _0x28d53a?.["filter"](_0x1e9bc6 => _0x1e9bc6?.["jobList"]?.["find"](_0xa87846 => {
    return _0xa87846?.["name"]?.["includes"]("本地服务") && _0xa87846?.["frequency"] && _0xa87846?.["frequency"] > _0xa87846?.["finish_times"];
  }));
  if (_0x5353a3?.["length"]) {
    console.log("\n================== 本地服务任务开始执行 待执行帐号数：[" + _0x5353a3?.["length"] + "]==================\n");
    _0x46f21f = [];
    for (let _0x3784a6 of _0x5353a3) {
      const _0x3ff588 = _0x3784a6?.["jobList"]?.["find"](_0x31a679 => {
        return _0x31a679?.["name"]?.["includes"]("本地服务") && _0x31a679?.["frequency"] && _0x31a679?.["frequency"] > _0x31a679?.["finish_times"];
      });
      for (let _0x53483b = 0; _0x53483b < _0x3ff588?.["frequency"] - _0x3ff588?.["finish_times"]; _0x53483b++) {
        _0x46f21f.push(await _0x3784a6.task_share("6", undefined, "本地服务"));
        await _0x281bf5(1 + Math.random() * 1);
      }
    }
    await Promise.all(_0x46f21f);
  } else console.log("\n无本地服务任务 或 当前帐号都已做完了本地服务任务，无需执行相关任务\n");
  console.log("\n================== 删除历史评论任务开始执行 待执行帐号数：[" + _0x28d53a?.["length"] + "]==================\n");
  for (let _0x4a47c5 of _0x28d53a) {
    await _0x4a47c5.get_comment_history();
    await _0x281bf5(1 + Math.random() * 1);
  }
}
class _0x468293 {
  ["valid"] = false;
  constructor(_0xe8660e) {
    this.index = ++_0xeb1579;
    this.accountId = "";
    this.host = _0x16b394;
    this.hostname = "https://" + this.host;
    this.key = "FR*r!isE5W";
    const _0x3e31ce = _0x1be5eb,
      _0x3e1db2 = Math.floor(Math.random() * _0x3e31ce.length);
    this.artlistdata = _0x3e31ce[_0x3e1db2];
    if (_0xe8660e?.["length"] === 1) {
      if (_0xe8660e[0]?.["includes"]("#")) _0xe8660e = _0xe8660e[0]?.["split"]("#");else _0xe8660e[0]?.["includes"]("&") && (_0xe8660e = _0xe8660e[0]?.["split"]("&"));
    }
    if (_0xe8660e[0]?.["length"] === 11) this.account = _0xe8660e[0], this.password = _0xe8660e[1];else {
      _0x430f11 ? (this.sessionId = _0xe8660e[1], this.accountId = _0xe8660e[0]) : (this.sessionId = _0xe8660e[0], this.accountId = _0xe8660e[1]);
    }
  }
  ["loadCache"]() {
    let _0xab2a77 = _0x482654(_0xba9328 + "_config", this.account);
    if (_0xab2a77) {
      _0xab2a77 = JSON.parse(_0xab2a77);
      console.log("账号[" + this.index + "]从缓存读取成功 😄 ，其ID为： " + _0xab2a77?.["id"] + "，手机号为：" + this.account);
      this.accountId = _0xab2a77?.["id"];
      this.sessionId = _0xab2a77?.["sessionId"];
      this.valid = true;
      return;
    }
  }
  async ["txt_api"]() {
    try {
      let _0x5c318c = {
          "method": "GET",
          "url": "https://v1.hitokoto.cn/",
          "qs": {
            "c": "d"
          },
          "headers": {
            "content-type": "multipart/form-data; boundary=---011000010111000001101001"
          },
          "formData": {}
        },
        _0x1f24f9 = await _0x313711(_0x5c318c, "");
      if (_0x1f24f9.id) return _0x1f24f9.hitokoto;else {}
    } catch (_0x2b3242) {
      console.log(_0x2b3242);
    }
  }
  async ["task_tasklist"](_0x4609bd) {
    let _0x38a4fa = "/api/user_mumber/numberCenter",
      _0xd76897 = _0x272913.guid(),
      _0x497e28 = _0x272913.ts13(),
      _0x3ab9a2 = _0x38a4fa + "&&" + this.sessionId + "&&" + _0xd76897 + "&&" + _0x497e28 + "&&" + this.key + "&&" + _0x2dc6d5,
      _0x3651c8 = _0x272913.SHA256_Encrypt(_0x3ab9a2);
    try {
      let _0xa66fbe = {
          "method": "GET",
          "url": "" + this.hostname + _0x38a4fa + "?is_new=1",
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0xd76897,
            "X-TIMESTAMP": _0x497e28,
            "X-SIGNATURE": _0x3651c8,
            "X-TENANT-ID": _0x2dc6d5,
            "User-Agent": _0x4b1819,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x45dad1 = await _0x313711(_0xa66fbe, _0x4609bd);
      if (_0x45dad1.code == 0) {
        !this.requestedUserInfo && (await this.user_info(), await _0x281bf5(0.3));
        _0x11b078("账号[" + this.index + "],欢迎用户:[" + _0x45dad1.data.rst.nick_name + "],当前积分为[" + _0x45dad1.data.rst.total_integral + "]");
        _0x5a280a += "账号[" + this.index + "],欢迎用户:[" + _0x45dad1.data.rst.nick_name + "],当前积分为[" + _0x45dad1.data.rst.total_integral + "]\n";
        await _0x281bf5(0.3);
        this.jobList = _0x45dad1.data.rst.user_task_list?.["map"](_0x1a5298 => {
          return {
            "name": _0x1a5298?.["name"],
            "finish_times": Number(_0x1a5298?.["finish_times"]),
            "frequency": Number(_0x1a5298?.["frequency"]),
            "integral": _0x1a5298?.["integral"],
            "member_task_type": _0x1a5298?.["member_task_type"]
          };
        });
        if (_0x45dad1?.["data"]?.["daily_sign_info"]?.["name"]?.["includes"]("签到")) {
          let _0x2ef02e = _0x45dad1?.["data"]?.["daily_sign_info"]?.["daily_sign_list"]?.["find"](_0x59995 => _0x59995?.["current"])?.["signed"];
          this.jobList.push({
            "name": "每日签到",
            "finish_times": _0x2ef02e ? 1 : 0,
            "frequency": 1
          });
        }
        _0x11b078("账号[" + this.index + "],获取任务列表成功 😄 :");
        await _0x281bf5(0.3);
        let _0x2c8dcb = "";
        await _0x281bf5(0.2 + Math.random() * 1);
        for (let _0x3d4c21 = 0; _0x3d4c21 < this.jobList.length; _0x3d4c21++) {
          _0x2c8dcb += this.jobList[_0x3d4c21].name + "[" + this.jobList[_0x3d4c21].finish_times + "/" + this.jobList[_0x3d4c21].frequency + "]\n";
        }
        await _0x281bf5(0.3);
        _0x11b078(_0x2c8dcb);
      } else _0x11b078("账号[" + this.index + "],获取任务列表:失败 🙁 了呢,原因：" + _0x45dad1?.["message"]), console.log(_0x45dad1);
    } catch (_0x1e6ad5) {
      console.log(_0x1e6ad5);
    }
  }
  async ["activity_login"](_0x5be76d) {
    try {
      let _0x305e75 = {
          "method": "POST",
          "url": "http://api.576tv.com/AppActive/Public/setAppLogin",
          "headers": {
            "Accept": " */*",
            "Origin": " http://api.576tv.com",
            "X-Requested-With": " XMLHttpRequest",
            "User-Agent": " Mozilla/5.0 (Linux; Android 9; PBBM00 Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;5.3.1;native_app",
            "Content-Type": " application/x-www-form-urlencoded; charset=UTF-8"
          },
          "body": "uuid=tzmxc&cookie=0&accountId=" + this.accountId + "&sessionId=" + this.sessionId
        },
        _0x2ffd9c = await _0x313711(_0x305e75, _0x5be76d, true),
        _0x5c1d3f = _0x2ffd9c?.["body"];
      _0x5c1d3f.status == 1 ? (this.authCookie = _0x2ffd9c?.["rawHeaders"]?.["filter"](_0x2c2a4e => _0x2c2a4e?.["includes"]("path=/"))?.["join"](";"), _0x11b078("账号[" + this.index + "],授权活动成功 😄"), await this.activity_vote("投票")) : _0x11b078("账号[" + this.index + "],授权活动:失败 🙁 了呢,原因：" + JSON.stringify(_0x5c1d3f));
    } catch (_0x172602) {
      console.log(_0x172602);
    }
  }
  async ["activity_vote"](_0x60836d) {
    try {
      let _0x576567 = {
          "method": "POST",
          "url": "http://api.576tv.com/AppActive/Vote/postVote",
          "headers": {
            "Accept": " */*",
            "Origin": " http://api.576tv.com",
            "X-Requested-With": " XMLHttpRequest",
            "User-Agent": " Mozilla/5.0 (Linux; Android 9; PBBM00 Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;5.3.1;native_app",
            "Content-Type": " application/x-www-form-urlencoded; charset=UTF-8",
            "Cookie": this.authCookie
          },
          "body": "uuid=tzmxc&voteids=10461%2C10455%2C10476%2C10448%2C10456"
        },
        _0x11f7dd = await _0x313711(_0x576567, _0x60836d);
      _0x11f7dd.status == 1 ? (_0x11b078("账号[" + this.index + "],投票成功 😄"), await this.activity_draw("抽奖")) : (_0x11b078("账号[" + this.index + "],投票:失败 🙁 了呢,原因：" + _0x11f7dd?.["info"]), await this.activity_get_prize("读取奖品"));
    } catch (_0xf77f80) {
      console.log(_0xf77f80);
    }
  }
  async ["activity_draw"](_0x2164be) {
    try {
      let _0x2fe23c = {
          "method": "POST",
          "url": "http://api.576tv.com/AppActive/Prize/start",
          "headers": {
            "Accept": " */*",
            "Origin": " http://api.576tv.com",
            "X-Requested-With": " XMLHttpRequest",
            "User-Agent": " Mozilla/5.0 (Linux; Android 9; PBBM00 Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;5.3.1;native_app",
            "Content-Type": " application/x-www-form-urlencoded; charset=UTF-8",
            "Cookie": this.authCookie
          },
          "body": "uuid=tzmxc"
        },
        _0x5872b1 = await _0x313711(_0x2fe23c, _0x2164be);
      if (_0x5872b1.status == 1) {
        _0x11b078("账号[" + this.index + "],抽奖成功 😄：" + JSON.stringify(_0x5872b1));
      } else _0x11b078("账号[" + this.index + "],抽奖失败 🙁 了呢,原因：" + _0x5872b1?.["info"]);
      await this.activity_get_prize("读取奖品");
    } catch (_0x101baf) {
      console.log(_0x101baf);
    }
  }
  async ["activity_get_prize"](_0x5dec81) {
    try {
      let _0x3a6800 = {
          "method": "POST",
          "url": "http://api.576tv.com/AppActive/Prize/getPrize",
          "headers": {
            "Accept": " */*",
            "Origin": " http://api.576tv.com",
            "X-Requested-With": " XMLHttpRequest",
            "User-Agent": " Mozilla/5.0 (Linux; Android 9; PBBM00 Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;5.3.1;native_app",
            "Content-Type": " application/x-www-form-urlencoded; charset=UTF-8",
            "Cookie": this.authCookie
          },
          "body": "uuid=tzmxc"
        },
        _0x5e3f51 = await _0x313711(_0x3a6800, _0x5dec81);
      if (_0x5e3f51.status == 1) {
        let _0x3e5614 = "";
        for (let _0xc0e6ba = 0; _0xc0e6ba < _0x5e3f51?.["data"]?.["length"]; _0xc0e6ba++) {
          const _0x9698f5 = _0x5e3f51?.["data"][_0xc0e6ba];
          _0x3e5614 += "\n奖品名称：" + _0x9698f5?.["title"] + "----" + (_0x9698f5?.["url"] || _0x9698f5?.["time"]) + "----" + (_0x9698f5?.["valid"] === "1" ? "未领取" : "已领取") + "----全部信息：" + JSON.stringify(_0x9698f5);
        }
        _0x11b078("账号[" + this.index + "],读取奖品成功 😄：" + (_0x3e5614 || JSON.stringify(_0x5e3f51?.["data"])));
      } else {
        _0x11b078("账号[" + this.index + "],读取中奖记录失败 🙁 了呢,原因：" + _0x5e3f51?.["info"]);
      }
    } catch (_0x1a65d1) {
      console.log(_0x1a65d1);
    }
  }
  async ["task_sign"](_0x4fa820) {
    let _0x5a18cb = "/api/user_mumber/sign",
      _0x4cca18 = _0x272913.guid(),
      _0x4805f0 = _0x272913.ts13(),
      _0x11a90b = _0x5a18cb + "&&" + this.sessionId + "&&" + _0x4cca18 + "&&" + _0x4805f0 + "&&" + this.key + "&&" + _0x2dc6d5,
      _0x472eef = _0x272913.SHA256_Encrypt(_0x11a90b);
    try {
      let _0x511b7a = {
          "method": "GET",
          "url": "" + this.hostname + _0x5a18cb,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x4cca18,
            "X-TIMESTAMP": _0x4805f0,
            "X-SIGNATURE": _0x472eef,
            "X-TENANT-ID": _0x2dc6d5,
            "User-Agent": _0x4b1819,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x45fe06 = await _0x313711(_0x511b7a, _0x4fa820);
      _0x45fe06.code == 0 ? _0x11b078("账号[" + this.index + "],签到成功 😄 [" + _0x45fe06.data.signCommonInfo.date + "],获得积分:[" + _0x45fe06.data.signExperience + "]") : (_0x11b078("账号[" + this.index + "],签到:失败 🙁 了呢,原因：" + _0x45fe06?.["message"]), console.log(_0x45fe06));
    } catch (_0x2d1f88) {
      console.log(_0x2d1f88);
    }
  }
  async ["task_forum_info"](_0x101284) {
    let _0x4a0b33 = "/api/forum/forum_list",
      _0x320025 = _0x272913.guid(),
      _0x402c4b = _0x272913.ts13(),
      _0x30fe79 = _0x4a0b33 + "&&" + this.sessionId + "&&" + _0x320025 + "&&" + _0x402c4b + "&&" + this.key + "&&" + _0x2dc6d5,
      _0x20c685 = _0x272913.SHA256_Encrypt(_0x30fe79);
    try {
      let _0x1e3f50 = {
          "method": "GET",
          "url": "" + this.hostname + _0x4a0b33 + ("?tenantId=" + _0x2dc6d5),
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x320025,
            "X-TIMESTAMP": _0x402c4b,
            "X-SIGNATURE": _0x20c685,
            "X-TENANT-ID": _0x2dc6d5,
            "User-Agent": _0x4b1819,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x540748 = await _0x313711(_0x1e3f50, _0x101284);
      if (_0x540748.code == 0) {
        const _0xbc4b75 = _0x540748?.["data"]?.["forum_list"]?.["length"] ? _0x540748?.["data"]?.["forum_list"][0]?.["id"] : undefined;
        _0xbc4b75 ? (_0x11b078("账号[" + this.index + "],获取社区信息成功 😄 ，准备开始获取相关列表"), await this.task_forum_list(_0xbc4b75)) : _0x11b078("账号[" + this.index + "],获取社区为空 🙁 ，跳过社区任务");
      } else _0x11b078("账号[" + this.index + "],获取社区信息:失败 🙁 了呢,原因：" + _0x540748?.["message"]), console.log(_0x540748);
    } catch (_0x1ea01d) {
      console.log(_0x1ea01d);
    }
  }
  async ["task_forum_list"](_0xd724ee) {
    let _0x564da0 = "/api/forum/thread_list",
      _0x326356 = _0x272913.guid(),
      _0x58d1a7 = _0x272913.ts13(),
      _0x38a34e = _0x564da0 + "&&" + this.sessionId + "&&" + _0x326356 + "&&" + _0x58d1a7 + "&&" + this.key + "&&" + _0x2dc6d5,
      _0x21e0fc = _0x272913.SHA256_Encrypt(_0x38a34e);
    try {
      let _0x2f1c96 = {
          "method": "GET",
          "url": "" + this.hostname + _0x564da0 + ("?forum_id=" + _0xd724ee),
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x326356,
            "X-TIMESTAMP": _0x58d1a7,
            "X-SIGNATURE": _0x21e0fc,
            "X-TENANT-ID": _0x2dc6d5,
            "User-Agent": _0x4b1819,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0xf9b139 = await _0x313711(_0x2f1c96, "获取帖子");
      if (_0xf9b139.code == 0) for (let _0x29d3ad = 0; _0x29d3ad < _0xf9b139.data.thread_list?.["length"]; _0x29d3ad++) {
        if (!this?.["jobList"]?.["find"](_0x18b1ad => {
          return _0x18b1ad?.["name"]?.["includes"]("帖子发布") && _0x18b1ad?.["frequency"] > _0x18b1ad?.["finish_times"] && _0x429a5b || _0x18b1ad?.["name"]?.["includes"]("帖子点赞") && _0x18b1ad?.["frequency"] > _0x18b1ad?.["finish_times"];
        })) {
          _0x11b078("账号[" + this.index + "],社区任务已完成，跳过-----");
          break;
        }
        _0x11b078("账号[" + this.index + "],对帖子[" + _0xf9b139.data.thread_list[_0x29d3ad].id + "]操作-----");
        await _0x281bf5(0.3 + Math.random() * 1);
        this?.["jobList"]?.["find"](_0x13cb14 => {
          return _0x13cb14?.["name"]?.["includes"]("帖子点赞") && _0x13cb14?.["frequency"] > _0x13cb14?.["finish_times"];
        }) ? (_0xf9b139.data.thread_list[_0x29d3ad].already_liked ? _0x11b078("账号[" + this.index + "],之前已经对帖子[" + _0xf9b139.data.thread_list[_0x29d3ad].id + "]点赞过，不能再次点赞") : await this.task_forum_like(_0xf9b139.data.thread_list[_0x29d3ad].id), await _0x281bf5(1 + Math.random() * 1)) : _0x11b078("账号[" + this.index + "],无需对帖子点赞");
        this?.["jobList"]?.["find"](_0xf90895 => {
          return _0xf90895?.["name"]?.["includes"]("帖子发布") && _0xf90895?.["frequency"] > _0xf90895?.["finish_times"] && _0x429a5b;
        }) ? (await this.task_forum_post(_0xd724ee), await _0x281bf5(1 + Math.random() * 1)) : _0x11b078("账号[" + this.index + "],无需发布帖子，可能是 已执行完毕该任务，或者 未开启该任务");
      } else _0x11b078("账号[" + this.index + "],获取社区帖子:失败 🙁 了呢,原因：" + _0xf9b139?.["message"]), console.log(_0xf9b139);
    } catch (_0x190cc5) {
      console.log(_0x190cc5);
    }
  }
  async ["task_forum_like"](_0x2d022c) {
    let _0x37e28e = "/api/forum/like",
      _0x10174f = _0x272913.guid(),
      _0x25e5b5 = _0x272913.ts13(),
      _0x140c59 = _0x37e28e + "&&" + this.sessionId + "&&" + _0x10174f + "&&" + _0x25e5b5 + "&&" + this.key + "&&" + _0x2dc6d5,
      _0x5d918a = _0x272913.SHA256_Encrypt(_0x140c59);
    try {
      let _0x3928b7 = _0x149fe6();
      _0x3928b7.append("target_type", "1");
      _0x3928b7.append("target_id", _0x2d022c);
      let _0x77612f = {
        "method": "POST",
        "url": "" + this.hostname + _0x37e28e,
        "headers": {
          "X-SESSION-ID": "" + this.sessionId,
          "X-REQUEST-ID": _0x10174f,
          "X-TIMESTAMP": _0x25e5b5,
          "X-SIGNATURE": _0x5d918a,
          "X-TENANT-ID": _0x2dc6d5,
          "User-Agent": _0x4b1819,
          "Cache-Control": "no-cache",
          "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryTDSOjpwy3A5ypRAo",
          "Host": this.host,
          "Connection": "Keep-Alive",
          "Accept": "*/*",
          "X-ACCOUNT-ID": this.accountId
        },
        "body": _0x3928b7
      };
      _0x77612f.headers["Content-Type"] = "multipart/form-data; boundary=" + _0x3928b7.getBoundary();
      let _0x434ccd = await _0x313711(_0x77612f, "点赞帖子");
      if (_0x434ccd.code == 0) {
        const _0x1f3a3d = this?.["jobList"]?.["find"](_0xc30774 => {
          return _0xc30774?.["name"]?.["includes"]("帖子点赞") && _0xc30774?.["frequency"] > _0xc30774?.["finish_times"];
        });
        _0x1f3a3d.finish_times++;
        _0x11b078("账号[" + this.index + "],点赞帖子成功 😄 :[" + _0x2d022c + "]");
      } else _0x11b078("账号[" + this.index + "],点赞帖子:失败 🙁 了呢,原因：" + _0x434ccd?.["message"]), console.log(_0x434ccd);
    } catch (_0x1f3584) {
      console.log(_0x1f3584);
    }
  }
  async ["task_forum_post"](_0x5be3cc) {
    let _0x4af037 = "/api/forum/post_thread",
      _0x4a6961 = _0x272913.guid(),
      _0x548ab5 = _0x272913.ts13(),
      _0x379cbe = _0x4af037 + "&&" + this.sessionId + "&&" + _0x4a6961 + "&&" + _0x548ab5 + "&&" + this.key + "&&" + _0x2dc6d5,
      _0x4b4683 = _0x272913.SHA256_Encrypt(_0x379cbe);
    try {
      let _0x43a4a2 = _0x149fe6();
      _0x43a4a2.append("forum_id", _0x5be3cc);
      _0x43a4a2.append("title", "签到");
      _0x43a4a2.append("content", "今日打卡");
      _0x43a4a2.append("attachments", "");
      _0x43a4a2.append("location_name", "{}");
      let _0x420b7d = {
        "method": "POST",
        "url": "" + this.hostname + _0x4af037,
        "headers": {
          "X-SESSION-ID": "" + this.sessionId,
          "X-REQUEST-ID": _0x4a6961,
          "X-TIMESTAMP": _0x548ab5,
          "X-SIGNATURE": _0x4b4683,
          "X-TENANT-ID": _0x2dc6d5,
          "User-Agent": _0x4b1819,
          "Cache-Control": "no-cache",
          "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryMdIuuLGEa01BfEzM",
          "Host": this.host,
          "Connection": "Keep-Alive",
          "Accept": "*/*",
          "X-ACCOUNT-ID": this.accountId
        },
        "body": _0x43a4a2
      };
      _0x420b7d.headers["Content-Type"] = "multipart/form-data; boundary=" + _0x43a4a2.getBoundary();
      let _0x159b4e = await _0x313711(_0x420b7d, "发布帖子");
      if (_0x159b4e.code == 0) {
        const _0x205894 = this?.["jobList"]?.["find"](_0x461996 => {
          return _0x461996?.["name"]?.["includes"]("帖子发布") && _0x461996?.["frequency"] > _0x461996?.["finish_times"];
        });
        _0x205894.finish_times++;
        _0x11b078("账号[" + this.index + "],发布帖子成功 😄 :[" + _0x5be3cc + "]");
        await this.deleteForumPost(_0x159b4e?.["data"]?.["thread_id"]);
      } else _0x11b078("账号[" + this.index + "],发布帖子:失败 🙁 了呢,原因：" + _0x159b4e?.["message"]), console.log(_0x159b4e);
    } catch (_0x5cc9ad) {
      console.log(_0x5cc9ad);
    }
  }
  async ["deleteForumPost"](_0x3c1da3) {
    let _0x1ff92b = "/api/forum/delete_thread",
      _0x4dc08e = _0x272913.guid(),
      _0x89a26 = _0x272913.ts13(),
      _0x807add = _0x1ff92b + "&&" + this.sessionId + "&&" + _0x4dc08e + "&&" + _0x89a26 + "&&" + this.key + "&&" + _0x2dc6d5,
      _0x86d4cd = _0x272913.SHA256_Encrypt(_0x807add);
    try {
      let _0x56cdc6 = _0x149fe6();
      _0x56cdc6.append("thread_id", _0x3c1da3);
      let _0x3df9b3 = {
        "method": "POST",
        "url": "" + this.hostname + _0x1ff92b,
        "headers": {
          "X-SESSION-ID": "" + this.sessionId,
          "X-REQUEST-ID": _0x4dc08e,
          "X-TIMESTAMP": _0x89a26,
          "X-SIGNATURE": _0x86d4cd,
          "X-TENANT-ID": _0x2dc6d5,
          "User-Agent": _0x4b1819,
          "Cache-Control": "no-cache",
          "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryi1cQvxsAzoTagcpx",
          "Host": this.host,
          "Connection": "Keep-Alive",
          "Accept": "*/*",
          "X-ACCOUNT-ID": this.accountId
        },
        "body": _0x56cdc6
      };
      _0x3df9b3.headers["Content-Type"] = "multipart/form-data; boundary=" + _0x56cdc6.getBoundary();
      let _0x4efdd1 = await _0x313711(_0x3df9b3, "删除帖子");
      _0x4efdd1.code == 0 ? _0x11b078("账号[" + this.index + "],删除帖子成功 😄 :[" + _0x3c1da3 + "]") : (_0x11b078("账号[" + this.index + "],删除帖子:失败 🙁 了呢,原因：" + _0x4efdd1?.["message"]), console.log(_0x4efdd1));
    } catch (_0x2b2147) {
      console.log(_0x2b2147);
    }
  }
  async ["task_articlelist"](_0x290211) {
    let _0x1cb217 = "/api/article/channel_list",
      _0x230825 = _0x272913.guid(),
      _0x4a18ab = _0x272913.ts13(),
      _0x21b05d = _0x1cb217 + "&&" + this.sessionId + "&&" + _0x230825 + "&&" + _0x4a18ab + "&&" + this.key + "&&" + _0x2dc6d5,
      _0x269d2d = _0x272913.SHA256_Encrypt(_0x21b05d);
    try {
      let _0x1609e5 = {
          "method": "GET",
          "url": "" + this.hostname + _0x1cb217 + ("?channel_id=" + this.artlistdata + "&isDiangHao=false&is_new=" + (Math.random() >= 0.5) + "&list_count=" + Math.floor(Math.random() * 10) + "&size=10"),
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x230825,
            "X-TIMESTAMP": _0x4a18ab,
            "X-SIGNATURE": _0x269d2d,
            "X-TENANT-ID": _0x2dc6d5,
            "User-Agent": _0x4b1819,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x48e407 = await _0x313711(_0x1609e5, _0x290211);
      if (_0x48e407.code == 0) {
        let _0x1d429d = false;
        for (let _0x8a2c8e = 0; _0x8a2c8e < _0x48e407.data.article_list?.["length"]; _0x8a2c8e++) {
          if (!this?.["jobList"]?.["find"](_0x331dde => {
            return _0x331dde?.["name"]?.["includes"]("资讯评论") && _0x331dde?.["frequency"] > _0x331dde?.["finish_times"] && _0x862c3e || _0x331dde?.["name"]?.["includes"]("分享资讯") && _0x331dde?.["frequency"] > _0x331dde?.["finish_times"] || _0x331dde?.["name"]?.["includes"]("资讯点赞") && _0x331dde?.["frequency"] > _0x331dde?.["finish_times"] || _0x331dde?.["name"]?.["includes"]("资讯阅读") && _0x331dde?.["frequency"] > _0x331dde?.["finish_times"];
          })) {
            _0x11b078("账号[" + this.index + "],文章任务已完成，跳过后续文章-----");
            break;
          }
          await this.task_comment_pre();
          await _0x281bf5(1 + Math.random() * 1);
          _0x11b078("账号[" + this.index + "],对 第" + (_0x8a2c8e + 1) + "篇 文章[" + _0x48e407.data.article_list[_0x8a2c8e].id + "]操作-----");
          let _0x1038db = _0x48e407.data.article_list[_0x8a2c8e].id;
          await this.task_read(_0x1038db);
          await _0x281bf5(1 + Math.random() * 1);
          if (this?.["jobList"]?.["find"](_0x4696e1 => {
            return _0x4696e1?.["name"]?.["includes"]("资讯点赞") && _0x4696e1?.["frequency"] > _0x4696e1?.["finish_times"];
          })) {
            if (_0x48e407.data.article_list[_0x8a2c8e].liked) _0x11b078("账号[" + this.index + "],之前已经对资讯[" + _0x1038db + "]点赞过，不能再次点赞");else !_0x48e407.data.article_list[_0x8a2c8e].like_enabled && !_0x2215d9 ? _0x11b078("账号[" + this.index + "],资讯[" + _0x1038db + "]未开启点赞功能，无法进行点赞") : await this.task_like(_0x1038db);
            await _0x281bf5(1 + Math.random() * 1);
          }
          if (!_0x1d429d) {
            if (_0x862c3e && !this.commentError && this?.["jobList"]?.["find"](_0x15fa45 => {
              return _0x15fa45?.["name"]?.["includes"]("资讯评论") && _0x15fa45?.["frequency"] > _0x15fa45?.["finish_times"];
            })) await this.task_comment(_0x1038db), await _0x281bf5(2 + Math.random() * 1);else {
              if (this.commentError) {
                _0x11b078("账号[" + this.index + "],评论文章遇见了一些问题 🙁 ，暂无解决方法，即将跳过后续评论，如果您有解决方法，欢迎提供，错误信息：该篇新闻不支持评论【评论失败，请重新进入当前页面！】");
                _0x1d429d = true;
              }
            }
          } else {
            if (!this?.["jobList"]?.["find"](_0x55e24c => {
              return _0x55e24c?.["name"]?.["includes"]("分享资讯") && _0x55e24c?.["frequency"] > _0x55e24c?.["finish_times"] || _0x55e24c?.["name"]?.["includes"]("资讯点赞") && _0x55e24c?.["frequency"] > _0x55e24c?.["finish_times"] || _0x55e24c?.["name"]?.["includes"]("资讯阅读") && _0x55e24c?.["frequency"] > _0x55e24c?.["finish_times"];
            })) break;
          }
          this?.["jobList"]?.["find"](_0x4cd45d => {
            return _0x4cd45d?.["name"]?.["includes"]("分享资讯") && _0x4cd45d?.["frequency"] > _0x4cd45d?.["finish_times"];
          }) && (!_0x48e407.data.article_list[_0x8a2c8e].share_enabled && !_0x2215d9 ? _0x11b078("账号[" + this.index + "],文章[" + _0x1038db + "]未开启分享功能，无法进行分享") : await this.task_share("3", _0x1038db, "分享"));
        }
      } else _0x11b078("账号[" + this.index + "],获取文章:失败 🙁 了呢,原因：" + _0x48e407?.["message"]), console.log(_0x48e407);
    } catch (_0x5d88c8) {
      console.log(_0x5d88c8);
    }
  }
  async ["get_comment_history"](_0x52b35a) {
    let _0x391e01 = "/api/account_comment/comment_list",
      _0x22ddb9 = _0x272913.guid(),
      _0x586d9c = _0x272913.ts13(),
      _0x1879e0 = _0x391e01 + "&&" + this.sessionId + "&&" + _0x22ddb9 + "&&" + _0x586d9c + "&&" + this.key + "&&" + _0x2dc6d5,
      _0x1d58d7 = _0x272913.SHA256_Encrypt(_0x1879e0);
    try {
      let _0x18d5f7 = {
          "method": "GET",
          "url": "" + this.hostname + _0x391e01 + "?size=999",
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x22ddb9,
            "X-TIMESTAMP": _0x586d9c,
            "X-SIGNATURE": _0x1d58d7,
            "X-TENANT-ID": _0x2dc6d5,
            "User-Agent": _0x4b1819,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x4ea677 = await _0x313711(_0x18d5f7, _0x52b35a);
      if (_0x4ea677.code == 0) {
        let _0x42df39 = _0x4ea677.data.comment_list?.["length"];
        for (let _0x3299d4 = 0; _0x3299d4 < _0x4ea677.data.comment_list?.["length"]; _0x3299d4++) {
          _0x11b078("账号[" + this.index + "],对 第" + (_0x3299d4 + 1) + "个 评论[" + _0x4ea677.data.comment_list[_0x3299d4].id + "]删除，删除总数量：" + _0x4ea677.data.comment_list?.["length"] + "，待删除：" + _0x42df39 + " 条-----");
          let _0x59ae0d = _0x4ea677.data.comment_list[_0x3299d4].id;
          await this.deleteComment(_0x59ae0d);
          _0x42df39--;
          await _0x281bf5(1 + Math.random() * 1);
        }
      } else _0x11b078("账号[" + this.index + "],删除评论:失败 🙁 了呢,原因：" + _0x4ea677?.["message"]), console.log(_0x4ea677);
    } catch (_0x59e538) {
      console.log(_0x59e538);
    }
  }
  async ["task_read"](_0x19729d) {
    let _0x53b6a4 = "/api/article/detail",
      _0x4cbb8f = _0x272913.guid(),
      _0x477eae = _0x272913.ts13(),
      _0x447468 = _0x53b6a4 + "&&" + this.sessionId + "&&" + _0x4cbb8f + "&&" + _0x477eae + "&&" + this.key + "&&" + _0x2dc6d5,
      _0x51954d = _0x272913.SHA256_Encrypt(_0x447468);
    try {
      let _0x1af272 = {
          "method": "GET",
          "url": "" + this.hostname + _0x53b6a4 + "?id=" + _0x19729d,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x4cbb8f,
            "X-TIMESTAMP": _0x477eae,
            "X-SIGNATURE": _0x51954d,
            "X-TENANT-ID": _0x2dc6d5,
            "User-Agent": _0x4b1819,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x4a216f = await _0x313711(_0x1af272, "阅读文章");
      if (_0x4a216f.code == 0) {
        const _0x5057fc = this?.["jobList"]?.["find"](_0x633ed0 => {
          return _0x633ed0?.["name"]?.["includes"]("资讯阅读") && _0x633ed0?.["frequency"] > _0x633ed0?.["finish_times"];
        });
        _0x5057fc && _0x5057fc.finish_times++;
        _0x11b078("账号[" + this.index + "],阅读文章成功 😄 :[" + _0x4a216f.data.article.id + "]");
      } else _0x11b078("账号[" + this.index + "],阅读文章:失败 🙁 了呢,原因：" + _0x4a216f?.["message"]);
    } catch (_0x2c4261) {
      console.log(_0x2c4261);
    }
  }
  async ["task_like"](_0x21aa6e) {
    let _0x3360e5 = "/api/favorite/like",
      _0x2b19bb = _0x272913.guid(),
      _0x4347bf = _0x272913.ts13(),
      _0x151dcc = _0x3360e5 + "&&" + this.sessionId + "&&" + _0x2b19bb + "&&" + _0x4347bf + "&&" + this.key + "&&" + _0x2dc6d5,
      _0x2c087a = _0x272913.SHA256_Encrypt(_0x151dcc);
    try {
      let _0x4a701d = {
          "method": "POST",
          "url": "" + this.hostname + _0x3360e5,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x2b19bb,
            "X-TIMESTAMP": _0x4347bf,
            "X-SIGNATURE": _0x2c087a,
            "X-TENANT-ID": _0x2dc6d5,
            "User-Agent": _0x4b1819,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          },
          "form": {
            "action": "true",
            "id": _0x21aa6e
          }
        },
        _0x3727de = await _0x313711(_0x4a701d, "点赞文章");
      if (_0x3727de.code == 0) {
        const _0x46772a = this?.["jobList"]?.["find"](_0x18c1a9 => {
          return _0x18c1a9?.["name"]?.["includes"]("资讯点赞") && _0x18c1a9?.["frequency"] > _0x18c1a9?.["finish_times"];
        });
        _0x46772a.finish_times++;
        _0x11b078("账号[" + this.index + "],点赞文章成功 😄 :[" + _0x21aa6e + "]");
      } else _0x11b078("账号[" + this.index + "],用户查询:失败 🙁 了呢,原因：" + _0x3727de?.["message"]), console.log(_0x3727de);
    } catch (_0x926cd1) {
      console.log(_0x926cd1);
    }
  }
  async ["RSA_Encrypt"](_0x2fa1c9) {
    const _0x4b0bf1 = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB\n-----END PUBLIC KEY-----",
      _0x2d80b3 = _0x272913.RSA_Encrypt(_0x2fa1c9, _0x4b0bf1);
    return _0x2d80b3;
  }
  async ["loginByCode"](_0x59f331, _0xa5dfec) {
    try {
      let _0x542070 = "/api/zbtxz/login",
        _0x5a524e = _0x272913.guid(),
        _0x1e257a = _0x272913.ts13(),
        _0x41345a = _0x542070 + "&&" + (this.sessionId || _0x59f331) + "&&" + _0x5a524e + "&&" + _0x1e257a + "&&" + this.key + "&&" + _0x2dc6d5,
        _0xd4cfe = _0x272913.SHA256_Encrypt(_0x41345a),
        _0x26bfee = {
          "method": "POST",
          "url": "" + this.hostname + _0x542070,
          "headers": {
            "X-SESSION-ID": "" + (this.sessionId || _0x59f331),
            "X-REQUEST-ID": _0x5a524e,
            "X-TIMESTAMP": _0x1e257a,
            "X-SIGNATURE": _0xd4cfe,
            "X-TENANT-ID": _0x2dc6d5,
            "User-Agent": _0x4b1819,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive"
          },
          "form": "code=" + _0xa5dfec
        },
        _0xcb4dde = await _0x313711(_0x26bfee, "取Token");
      if (_0xcb4dde.code == 0) {
        this.valid = true;
        this.sessionId = _0xcb4dde.data.session.id;
        this.accountId = _0xcb4dde.data.session.account || _0xcb4dde.data.session.account_id;
        _0x51de0b(_0xba9328 + "_config", this.account, JSON.stringify({
          "id": this.accountId,
          "sessionId": this.sessionId
        }));
        _0x11b078("账号[" + this.index + "],取Token成功 😄 ");
      } else {
        this.valid = false;
        _0x11b078("账号[" + this.index + "],取Token:失败 🙁 了呢,原因：" + _0xcb4dde?.["message"]);
        console.log(_0xcb4dde);
      }
    } catch (_0x24f50f) {
      console.log(_0x24f50f);
    }
  }
  async ["loginInit"](_0x4a7d58) {
    try {
      const _0x5779f4 = "";
      let _0x47fcd6 = "/api/account/init",
        _0x5f326e = _0x272913.guid(),
        _0x4af9e5 = _0x272913.ts13(),
        _0x195aa5 = _0x47fcd6 + "&&" + _0x5f326e + "&&" + _0x4af9e5 + "&&" + this.key + "&&" + _0x2dc6d5,
        _0x33ee9a = _0x272913.SHA256_Encrypt(_0x195aa5),
        _0x4da4b7 = {
          "method": "POST",
          "url": "" + this.hostname + _0x47fcd6,
          "headers": {
            "User-Agent": _0x4b1819,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-SIGNATURE": _0x33ee9a,
            "X-REQUEST-ID": _0x5f326e,
            "Content-Length": _0x5779f4?.["length"],
            "X-SESSION-ID": "",
            "X-TENANT-ID": _0x2dc6d5,
            "X-TIMESTAMP": _0x4af9e5
          },
          "form": _0x5779f4
        };
      if (this.authCookie) {
        _0x4da4b7.headers.Cookie = this.authCookie;
      }
      let _0x3a5c59 = await _0x313711(_0x4da4b7, "登录初始化");
      _0x3a5c59.code == 0 ? (_0x11b078("账号[" + this.index + "],登录初始化成功 😄 "), _0x24e931 = _0x3a5c59.data.session.id, await this.loginByCode(_0x3a5c59.data.session.id, _0x4a7d58)) : (this.valid = false, _0x11b078("账号[" + this.index + "],登录初始化:失败 🙁 了呢,原因：" + _0x3a5c59?.["message"]));
    } catch (_0x2a3e5f) {
      console.log(_0x2a3e5f);
    }
  }
  async ["login"]() {
    let _0x2b83ab = "/web/oauth/credential_auth",
      _0x5d25be = _0x272913.guid(),
      _0x5164a5 = _0x272913.ts13(),
      _0x37ac30 = _0x2b83ab + "&&" + _0x5d25be + "&&" + _0x5164a5 + "&&" + this.key + "&&" + _0x2dc6d5,
      _0x406e3f = _0x272913.SHA256_Encrypt(_0x37ac30);
    try {
      let _0x4056a3 = {
        "method": "POST",
        "url": "https://passport.tmuyun.com/web/oauth/credential_auth",
        "headers": {
          "X-TIMESTAMP": _0x5164a5,
          "User-Agent": _0x4b1819,
          "Cache-Control": "no-cache",
          "Content-Type": "application/x-www-form-urlencoded",
          "Host": "passport.tmuyun.com",
          "Connection": "Keep-Alive",
          "X-SIGNATURE": _0x406e3f,
          "X-REQUEST-ID": _0x5d25be
        },
        "form": "client_id=" + (_0x525cde || "10001") + "&password=" + encodeURIComponent(await this.RSA_Encrypt(this.password)) + "&phone_number=" + this.account
      };
      this.authCookie && (_0x4056a3.headers.Cookie = this.authCookie);
      let _0x29629b = await _0x313711(_0x4056a3, "登录");
      _0x29629b.code == 0 ? (_0x11b078("账号[" + this.index + "],登录成功 😄 "), !_0x24e931 ? await this.loginInit(_0x29629b.data.authorization_code.code) : await this.loginByCode(_0x24e931, _0x29629b.data.authorization_code.code)) : (this.valid = false, _0x11b078("账号[" + this.index + "],登录:失败 🙁 了呢,原因：" + _0x29629b?.["message"]), console.log(_0x29629b));
    } catch (_0x4a8da5) {
      console.log(_0x4a8da5);
    }
  }
  async ["app_start"]() {
    let _0x3735eb = "/api/app_start_page/list/new",
      _0x51b278 = _0x272913.guid(),
      _0x1c059d = _0x272913.ts13(),
      _0x1f7d26 = _0x3735eb + "&&" + _0x8b07ba + "&&" + _0x51b278 + "&&" + _0x1c059d + "&&" + this.key + "&&" + _0x2dc6d5,
      _0xe3ec7d = _0x272913.SHA256_Encrypt(_0x1f7d26);
    try {
      let _0x442a89 = {
          "method": "GET",
          "url": "" + this.hostname + _0x3735eb + "?height=2206&width=1080",
          "headers": {
            "X-SESSION-ID": "" + _0x8b07ba,
            "X-REQUEST-ID": _0x51b278,
            "X-TIMESTAMP": _0x1c059d,
            "X-SIGNATURE": _0xe3ec7d,
            "X-TENANT-ID": _0x2dc6d5,
            "User-Agent": _0x4b1819,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x52ec98 = await _0x313711(_0x442a89, "App启动中");
      if (_0x52ec98.code == 0) {
        _0x11b078("账号[" + this.index + "],App启动成功 😄 ");
      } else _0x11b078("账号[" + this.index + "],App启动:失败 🙁 了呢,原因：" + _0x52ec98?.["message"]);
    } catch (_0x5c369e) {
      console.log(_0x5c369e);
    }
  }
  async ["web_start"]() {
    let _0x339e01 = "/web/init",
      _0x34b821 = _0x272913.guid(),
      _0x432018 = _0x272913.ts13(),
      _0x42a75a = _0x339e01 + "&&" + _0x8b07ba + "&&" + _0x34b821 + "&&" + _0x432018 + "&&" + this.key + "&&" + _0x2dc6d5,
      _0x434126 = _0x272913.SHA256_Encrypt(_0x42a75a);
    try {
      let _0x380ad4 = {
          "method": "GET",
          "url": "https://passport.tmuyun.com/web/init?client_id=" + _0x525cde,
          "headers": {
            "X-SESSION-ID": "" + _0x8b07ba,
            "X-REQUEST-ID": _0x34b821,
            "X-TIMESTAMP": _0x432018,
            "X-SIGNATURE": _0x434126,
            "X-TENANT-ID": _0x2dc6d5,
            "User-Agent": _0x4b1819,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": "passport.tmuyun.com",
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0xc26513 = await _0x313711(_0x380ad4, "Web初始化中", true),
        _0x481efc = _0xc26513?.["body"];
      if (_0x481efc.code == 0) {
        let _0x14e444 = _0xc26513?.["rawHeaders"]?.["find"](_0x5581e3 => _0x5581e3?.["includes"]("SESSION"));
        _0x14e444 && (this.authCookie = _0x14e444);
        _0x11b078("账号[" + this.index + "],Web初始化成功 😄 ");
      } else _0x11b078("账号[" + this.index + "],Web初始化:失败 🙁 了呢,原因：" + _0x481efc?.["message"]);
    } catch (_0x3ebefc) {
      console.log(_0x3ebefc);
    }
  }
  async ["iframe_start"]() {
    let _0x280626 = "/api/bullet_frame/detail",
      _0x5a0008 = _0x272913.guid(),
      _0xf7dad3 = _0x272913.ts13(),
      _0x2260c6 = _0x280626 + "&&" + _0x8b07ba + "&&" + _0x5a0008 + "&&" + _0xf7dad3 + "&&" + this.key + "&&" + _0x2dc6d5,
      _0x184c9c = _0x272913.SHA256_Encrypt(_0x2260c6);
    try {
      let _0x630c96 = {
          "method": "GET",
          "url": "" + this.hostname + _0x280626,
          "headers": {
            "X-SESSION-ID": "" + _0x8b07ba,
            "X-REQUEST-ID": _0x5a0008,
            "X-TIMESTAMP": _0xf7dad3,
            "X-SIGNATURE": _0x184c9c,
            "X-TENANT-ID": _0x2dc6d5,
            "User-Agent": _0x4b1819,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x433bdf = await _0x313711(_0x630c96, "启动WebView中");
      _0x433bdf.code == 0 ? _0x11b078("账号[" + this.index + "],启动WebView成功 😄 ") : _0x11b078("账号[" + this.index + "],启动WebView:失败 🙁 了呢,原因：" + _0x433bdf?.["message"]);
    } catch (_0x5deab2) {
      console.log(_0x5deab2);
    }
  }
  async ["get_app_version"]() {
    let _0x56aecb = "/api/app_version/detail",
      _0xa7ab97 = _0x272913.guid(),
      _0x5ef51f = _0x272913.ts13(),
      _0x127829 = _0x56aecb + "&&" + _0x8b07ba + "&&" + _0xa7ab97 + "&&" + _0x5ef51f + "&&" + this.key + "&&" + _0x2dc6d5,
      _0x42aaa6 = _0x272913.SHA256_Encrypt(_0x127829);
    try {
      let _0x33f0e3 = {
          "method": "GET",
          "url": "" + this.hostname + _0x56aecb,
          "headers": {
            "X-SESSION-ID": "" + _0x8b07ba,
            "X-REQUEST-ID": _0xa7ab97,
            "X-TIMESTAMP": _0x5ef51f,
            "X-SIGNATURE": _0x42aaa6,
            "X-TENANT-ID": _0x2dc6d5,
            "User-Agent": _0x4b1819,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive"
          }
        },
        _0x537ba0 = await _0x313711(_0x33f0e3, "获取版本信息中");
      _0x537ba0.code == 0 ? _0x11b078("账号[" + this.index + "],获取版本信息成功 😄 ") : _0x11b078("账号[" + this.index + "],获取版本信息:失败 🙁 了呢,原因：" + _0x537ba0?.["message"]);
    } catch (_0x4bab37) {
      console.log(_0x4bab37);
    }
  }
  async ["config_get"]() {
    let _0x37467d = "/api/app_version_customize_config/mine",
      _0x1fe550 = _0x272913.guid(),
      _0x58b613 = _0x272913.ts13(),
      _0x43d66a = _0x37467d + "&&" + _0x8b07ba + "&&" + _0x1fe550 + "&&" + _0x58b613 + "&&" + this.key + "&&" + _0x2dc6d5,
      _0x2c23ff = _0x272913.SHA256_Encrypt(_0x43d66a);
    try {
      let _0x161280 = {
          "method": "GET",
          "url": "" + this.hostname + _0x37467d,
          "headers": {
            "X-SESSION-ID": "" + _0x8b07ba,
            "X-REQUEST-ID": _0x1fe550,
            "X-TIMESTAMP": _0x58b613,
            "X-SIGNATURE": _0x2c23ff,
            "X-TENANT-ID": _0x2dc6d5,
            "User-Agent": _0x4b1819,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive"
          }
        },
        _0x5173b4 = await _0x313711(_0x161280, "获取App配置中");
      _0x5173b4.code == 0 ? _0x11b078("账号[" + this.index + "],获取App配置成功 😄 ") : _0x11b078("账号[" + this.index + "],获取App配置:失败 🙁 了呢, 原因：" + _0x5173b4?.["message"]);
    } catch (_0x2da574) {
      console.log(_0x2da574);
    }
  }
  async ["get_unread_msg"]() {
    let _0x564c22 = "/api/chuanbo/unread",
      _0x145c17 = _0x272913.guid(),
      _0x49505c = _0x272913.ts13(),
      _0x54deaf = _0x564c22 + "&&" + this.sessionId + "&&" + _0x145c17 + "&&" + _0x49505c + "&&" + this.key + "&&" + _0x2dc6d5,
      _0x3424d3 = _0x272913.SHA256_Encrypt(_0x54deaf);
    try {
      let _0x4cfc58 = {
          "method": "GET",
          "url": "" + this.hostname + _0x564c22,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x145c17,
            "X-TIMESTAMP": _0x49505c,
            "X-SIGNATURE": _0x3424d3,
            "X-TENANT-ID": _0x2dc6d5,
            "User-Agent": _0x4b1819,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x170989 = await _0x313711(_0x4cfc58, "获取未读信息");
      if (_0x170989.code == 0) {
        _0x11b078("账号[" + this.index + "],获取未读信息成功 😄 ");
      } else _0x11b078("账号[" + this.index + "],获取未读信息:失败 🙁 了呢,原因：" + _0x170989?.["message"]);
    } catch (_0x403141) {
      console.log(_0x403141);
    }
  }
  async ["task_comment_pre"]() {
    let _0x3de687 = "/api/app_feature_switch/list",
      _0x4e7d2b = _0x272913.guid(),
      _0x34c91b = _0x272913.ts13(),
      _0x2f51ad = _0x3de687 + "&&" + this.sessionId + "&&" + _0x4e7d2b + "&&" + _0x34c91b + "&&" + this.key + "&&" + _0x2dc6d5,
      _0x2580bb = _0x272913.SHA256_Encrypt(_0x2f51ad);
    try {
      let _0x1e5a38 = {
          "method": "GET",
          "url": "" + this.hostname + _0x3de687,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x4e7d2b,
            "X-TIMESTAMP": _0x34c91b,
            "X-SIGNATURE": _0x2580bb,
            "X-TENANT-ID": _0x2dc6d5,
            "User-Agent": _0x4b1819,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x40e78d = await _0x313711(_0x1e5a38, "文章准备工作");
      _0x40e78d.code == 0 ? _0x11b078("账号[" + this.index + "],文章准备工作成功 😄 ") : _0x11b078("账号[" + this.index + "],文章准备工作:失败 🙁 了呢,原因：" + _0x40e78d?.["message"]);
    } catch (_0x46f8f4) {
      console.log(_0x46f8f4);
    }
  }
  async ["task_comment"](_0x5ccc99) {
    let _0x40c9da = _0x4fdb07 ? await this.txt_api() : _0x19e8cc[Math.floor(Math.random() * _0x19e8cc?.["length"])],
      _0x3f2e83 = "/api/comment/create",
      _0x1cc66e = _0x272913.guid(),
      _0x255832 = _0x272913.ts13(),
      _0x9ede6e = _0x3f2e83 + "&&" + this.sessionId + "&&" + _0x1cc66e + "&&" + _0x255832 + "&&" + this.key + "&&" + _0x2dc6d5,
      _0x39ab05 = _0x272913.SHA256_Encrypt(_0x9ede6e);
    try {
      let _0x3edb05 = {
          "method": "POST",
          "url": "" + this.hostname + _0x3f2e83,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x1cc66e,
            "X-TIMESTAMP": _0x255832,
            "X-SIGNATURE": _0x39ab05,
            "X-TENANT-ID": _0x2dc6d5,
            "User-Agent": _0x4b1819,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          },
          "form": {
            "channel_article_id": _0x5ccc99,
            "content": _0x40c9da
          }
        },
        _0x28050f = await _0x313711(_0x3edb05, "评论");
      if (_0x28050f.code == 0) {
        const _0x4ae596 = this?.["jobList"]?.["find"](_0x50dd4c => {
          return _0x50dd4c?.["name"]?.["includes"]("资讯评论") && _0x50dd4c?.["frequency"] > _0x50dd4c?.["finish_times"];
        });
        _0x4ae596.finish_times++;
        _0x11b078("账号[" + this.index + "],评论成功 😄 [" + _0x40c9da + "]");
        const _0x8f2733 = _0x28050f?.["data"]?.["comment"]?.["id"];
        await _0x281bf5(1 + Math.random() * 1);
        await this.deleteComment(_0x8f2733);
      } else {
        _0x11b078("账号[" + this.index + "],评论:失败 🙁 了呢,原因：" + _0x28050f?.["message"]);
        this.commentError = _0x28050f?.["message"]?.["includes"]("请重新进入当前页面");
      }
    } catch (_0x34e690) {
      console.log(_0x34e690);
    }
  }
  async ["deleteComment"](_0x4c8a55) {
    let _0x5ca4c9 = "/api/comment/delete",
      _0x299bf3 = _0x272913.guid(),
      _0x35fdfd = _0x272913.ts13(),
      _0x575643 = _0x5ca4c9 + "&&" + this.sessionId + "&&" + _0x299bf3 + "&&" + _0x35fdfd + "&&" + this.key + "&&" + _0x2dc6d5,
      _0x49f429 = _0x272913.SHA256_Encrypt(_0x575643);
    try {
      let _0x2e3a3f = {
          "method": "POST",
          "url": "" + this.hostname + _0x5ca4c9,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x299bf3,
            "X-TIMESTAMP": _0x35fdfd,
            "X-SIGNATURE": _0x49f429,
            "X-TENANT-ID": _0x2dc6d5,
            "User-Agent": _0x4b1819,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          },
          "form": {
            "comment_id": _0x4c8a55
          }
        },
        _0x33363a = await _0x313711(_0x2e3a3f, "删除评论");
      _0x33363a.code == 0 ? _0x11b078("账号[" + this.index + "], 删除评论成功 😄 ") : _0x11b078("账号[" + this.index + "],删除评论失败 🙁 了呢,原因：" + _0x33363a?.["message"]);
    } catch (_0x9aec5a) {
      console.log(_0x9aec5a);
    }
  }
  async ["task_share"](_0x3664aa, _0x2c43aa, _0x5a7ba2) {
    let _0x41b192 = "/api/user_mumber/doTask",
      _0x3641a6 = _0x272913.guid(),
      _0x22bddc = _0x272913.ts13(),
      _0x12ddcf = _0x41b192 + "&&" + this.sessionId + "&&" + _0x3641a6 + "&&" + _0x22bddc + "&&" + this.key + "&&" + _0x2dc6d5,
      _0x56d41a = _0x272913.SHA256_Encrypt(_0x12ddcf);
    try {
      let _0x28344b = {
          "method": "POST",
          "url": "" + this.hostname + _0x41b192,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x3641a6,
            "X-TIMESTAMP": _0x22bddc,
            "X-SIGNATURE": _0x56d41a,
            "X-TENANT-ID": _0x2dc6d5,
            "User-Agent": _0x4b1819,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          },
          "form": {
            "memberType": _0x3664aa,
            "member_type": _0x3664aa,
            "target_id": _0x2c43aa
          }
        },
        _0x6c9657 = await _0x313711(_0x28344b, _0x5a7ba2);
      if (_0x6c9657.code == 0) {
        const _0x3834d8 = this?.["jobList"]?.["find"](_0xdfffe9 => {
          return _0xdfffe9?.["name"]?.["includes"](_0x3664aa === "3" ? "分享资讯" : "使用本地服务") && _0xdfffe9?.["frequency"] > _0xdfffe9?.["finish_times"];
        });
        if (_0x3834d8) {
          _0x3834d8.finish_times++;
        }
        _0x11b078("账号[" + this.index + "]," + _0x5a7ba2 + "成功 😄 ");
        _0x6c9657.data && "账号[" + this.index + "]," + _0x5a7ba2 + ("执行完毕共获得:[" + _0x6c9657.data.score_notify.integral + "]");
      } else _0x11b078("账号[" + this.index + "], " + _0x5a7ba2 + " :失败 🙁 了呢,原因：" + _0x6c9657?.["message"]), console.log(_0x6c9657);
    } catch (_0x991bdb) {
      console.log(_0x991bdb);
    }
  }
  async ["user_info"]() {
    let _0x80d3ae = "/api/user_mumber/account_detail",
      _0x23d52e = _0x272913.guid(),
      _0x56f880 = _0x272913.ts13(),
      _0x196935 = _0x80d3ae + "&&" + this.sessionId + "&&" + _0x23d52e + "&&" + _0x56f880 + "&&" + this.key + "&&" + _0x2dc6d5,
      _0x47a46a = _0x272913.SHA256_Encrypt(_0x196935);
    try {
      let _0x495790 = {
          "method": "GET",
          "url": "" + this.hostname + _0x80d3ae,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x23d52e,
            "X-TIMESTAMP": _0x56f880,
            "X-SIGNATURE": _0x47a46a,
            "X-TENANT-ID": _0x2dc6d5,
            "User-Agent": _0x4b1819,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x343df2 = await _0x313711(_0x495790, "用户信息");
      _0x343df2.code == 0 ? (this.valid = true, this.requestedUserInfo = true, _0x11b078("账号[" + this.index + "],验证成功 😄 ，账号可正常使用，[" + _0x343df2.data.rst.nick_name + "]"), _0x343df2.data.rst.ref_user_uid == "" && (await this.share_code("推荐"))) : (this.valid = false, _0x343df2?.["message"]?.["includes"]("Session无效或者过期") ? _0x11b078("账号[" + this.index + "],验证失败 🙁 了呢,请检查配置是否正确 或者 账户凭证是否过期；请看脚本头部说明，如果是老脚本配置，需在配置文件配置：export djjsCookieOldConfigTranform='true'") : _0x11b078("账号[" + this.index + "],验证失败 🙁 了呢,原因：" + _0x343df2?.["message"]));
    } catch (_0x4ddc43) {
      console.log(_0x4ddc43);
    }
  }
  async ["share_code"](_0x16381d) {
    let _0x3ac301 = "/api/account/update_ref_code",
      _0xb4399b = _0x272913.guid(),
      _0x5e6f94 = _0x272913.ts13(),
      _0x5b414a = _0x3ac301 + "&&" + this.sessionId + "&&" + _0xb4399b + "&&" + _0x5e6f94 + "&&" + this.key + "&&" + _0x2dc6d5,
      _0x18dfda = _0x272913.SHA256_Encrypt(_0x5b414a);
    try {
      let _0x3a393d = {
          "method": "POST",
          "url": "" + this.hostname + _0x3ac301,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0xb4399b,
            "X-TIMESTAMP": _0x5e6f94,
            "X-SIGNATURE": _0x18dfda,
            "X-TENANT-ID": _0x2dc6d5,
            "User-Agent": _0x4b1819,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          },
          "form": {
            "ref_code": _0x9dcc03 || "WET28W"
          }
        },
        _0x3afa40 = await _0x313711(_0x3a393d, _0x16381d);
      if (_0x3afa40.code == 0) {} else {}
    } catch (_0x333d7e) {
      console.log(_0x333d7e);
    }
  }
}
!(async () => {
  _0x11b078("开始读取配置的数据……");
  if (!(await _0x580d7b())) return;
  _0x28d53a.length > 0 ? (_0x11b078(_0x4d4548), await _0x281bf5(0.1), await _0x205cba()) : (console.log("无可用账号，停止执行\n" + _0x2143ac), exit());
  await _0x132bab(_0x17edb3?.["name"] + "：" + _0x54dc6d + "\n" + _0x5a280a);
})().catch(_0x4d2407 => console.log(_0x4d2407)).finally(() => _0x17edb3.done());
function _0x51de0b(_0x31cd90, _0x361b20, _0x8a7ef6) {
  let _0x2bbbb3 = {},
    _0x3938f1 = {};
  try {
    _0x2bbbb3 = _0x44429c.readFileSync(_0x31cd90 + ".json", "utf8");
    _0x3938f1 = JSON.parse(_0x2bbbb3);
  } catch (_0x5b7507) {}
  _0x3938f1[_0x361b20] = _0x8a7ef6;
  const _0x3e2004 = JSON.stringify(_0x3938f1);
  try {
    _0x44429c.writeFileSync(_0x31cd90 + ".json", _0x3e2004);
  } catch (_0x5aa449) {
    if (_0x5aa449.code === "ENOENT") {
      _0x44429c.writeFileSync(_0x31cd90 + ".json", _0x3e2004);
    } else console.error("保存文件时发生错误：", _0x5aa449);
  }
}
function _0x482654(_0x193904, _0x4028b5) {
  try {
    const _0x250523 = _0x44429c.readFileSync(_0x193904 + ".json", "utf8"),
      _0x2e9275 = JSON.parse(_0x250523);
    return _0x2e9275[_0x4028b5];
  } catch (_0x25d038) {
    if (_0x25d038.code === "ENOENT") return undefined;else console.error("读取文件时发生错误：", _0x25d038);
  }
}
async function _0x580d7b() {
  if (_0x38626e) {
    let _0xd34d84 = _0x52111c[0];
    for (let _0x368aa0 of _0x52111c) if (_0x38626e.indexOf(_0x368aa0) > -1) {
      _0xd34d84 = _0x368aa0;
      break;
    }
    for (let _0x523550 of _0x38626e.split(_0xd34d84)) _0x523550 && _0x28d53a.push(new _0x468293(_0x430f11 && _0x523550?.["includes"]("&") ? _0x523550?.["split"]("&") : _0x523550?.["split"]("#")));
    _0x2b9d3b = _0x28d53a.length;
  } else {
    console.log("未找到CK");
    return;
  }
  return console.log("共找到" + _0x2b9d3b + "个账号"), true;
}
async function _0x313711(_0x29237b, _0x2c7af1, _0x5144c6) {
  return new Promise(_0x1f398a => {
    if (!_0x2c7af1) {
      let _0x4f7b26 = arguments.callee.toString(),
        _0xf54319 = /function\s*(\w*)/i,
        _0x147231 = _0xf54319.exec(_0x4f7b26);
      _0x2c7af1 = _0x147231[1];
    }
    if (_0x560b58) {
      console.log("\n【debug】===============这是" + _0x2c7af1 + "请求信息===============");
      console.log(_0x29237b);
    }
    _0x560b58 && (_0x29237b.rejectUnauthorized = false);
    _0x3eaeea(_0x29237b, function (_0x5a1424, _0x2a0f56) {
      if (_0x5a1424) throw new Error(_0x5a1424);
      let _0x45a7b0 = _0x2a0f56.body;
      try {
        _0x560b58 && (console.log("\n\n【debug】===============这是" + _0x2c7af1 + "返回数据=============="), console.log(_0x45a7b0));
        if (typeof _0x45a7b0 == "string") {
          if (_0x267a8c(_0x45a7b0)) {
            let _0x17b33e = JSON.parse(_0x45a7b0);
            _0x560b58 && (console.log("\n【debug】=============这是" + _0x2c7af1 + "json解析后数据============"), console.log(_0x17b33e));
            !_0x5144c6 ? _0x1f398a(_0x17b33e) : _0x1f398a({
              ..._0x2a0f56,
              "body": _0x17b33e
            });
          } else {
            let _0xe6045c = _0x45a7b0;
            !_0x5144c6 ? _0x1f398a(_0xe6045c) : _0x1f398a({
              ..._0x2a0f56,
              "body": _0xe6045c
            });
          }
          function _0x267a8c(_0x3f02f4) {
            if (typeof _0x3f02f4 == "string") try {
              if (typeof JSON.parse(_0x3f02f4) == "object") return true;
            } catch (_0xa11039) {
              return false;
            }
            return false;
          }
        } else {
          let _0x5c2494 = _0x45a7b0;
          !_0x5144c6 ? _0x1f398a(_0x5c2494) : _0x1f398a({
            ..._0x2a0f56,
            "body": _0x5c2494
          });
        }
      } catch (_0xdb64de) {
        console.log(_0x5a1424, _0x2a0f56);
        console.log("\n " + _0x2c7af1 + "失败了!请稍后尝试!!");
      } finally {
        _0x1f398a();
      }
    });
  });
}
function _0x281bf5(_0x177462) {
  return new Promise(function (_0x2ee8e5) {
    setTimeout(_0x2ee8e5, _0x177462 * 1000);
  });
}
function _0x11b078(_0x103f1e) {
  _0x17edb3.isNode() ? _0x103f1e && (console.log("" + _0x103f1e), _0x3f6e77 += "" + _0x103f1e) : (console.log("" + _0x103f1e), msg += "" + _0x103f1e);
}
async function _0x132bab(_0x1e003d) {
  if (!_0x1e003d) return;
  if (_0x28950e > 0) {
    if (_0x17edb3.isNode()) {
      var _0x2b993b = require("./sendNotify");
      await _0x2b993b.sendNotify(_0x17edb3.name, _0x1e003d);
    } else _0x17edb3.msg(_0x17edb3.name, "", _0x1e003d);
  } else console.log("通知服务未开启，不予推送：", _0x1e003d);
}
function _0x23fa46() {
  _0x17edb3.isNode() && (process.on("uncaughtException", function (_0x2a50c1) {
    if (_0x2a50c1.code === "MODULE_NOT_FOUND") {
      const _0x5ddc5e = _0x2a50c1.message.split("'")[1];
      _0x5ddc5e.startsWith("./") ? console.log("缺少依赖文件，请前往代码库寻找 " + _0x5ddc5e?.["replace"]("./", "")?.["replace"]("../", "") + " 代码文件，放在本脚本同一目录下 \n 什么？不会？v我50我教你！") : console.log("缺少依赖，请安装 " + _0x5ddc5e + " 库： " + _0x5ddc5e + " \n 什么？不会？v我50我教你！");
    } else console.log("发生错误：" + _0x2a50c1.message);
  }), process.on("unhandledRejection", function (_0x494e14) {
    const _0x2c0b72 = _0x494e14.stack.split("\n");
    if (_0x2c0b72.length > 1) {
      const _0x215178 = _0x2c0b72[1],
        _0xb11c1 = _0x215178.match(/\((.*):(\d+):(\d+)\)/);
      if (_0xb11c1) {
        const _0x44765a = _0xb11c1[1],
          _0x5cfaca = _0xb11c1[2];
        console.log("程序执行出现异常，错误信息：" + _0x494e14.message + ("，错误发生在 " + _0x44765a + " 的第 " + _0x5cfaca + " 行 \n 请在本仓库建立 issue 并附上日志或者截图即可？什么，很着急？v我50疯狂星期四！"));
      }
    } else console.log("发生错误：" + _0x494e14.message);
  }));
}
function _0x5df346(_0x57945f, _0x1e6db3) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x37f7af {
    constructor(_0x30b1bf) {
      this.env = _0x30b1bf;
    }
    ["send"](_0x2da6b2, _0x2922c2 = "GET") {
      _0x2da6b2 = "string" == typeof _0x2da6b2 ? {
        "url": _0x2da6b2
      } : _0x2da6b2;
      let _0x556c5e = this.get;
      return "POST" === _0x2922c2 && (_0x556c5e = this.post), new Promise((_0x4339c0, _0x1daec1) => {
        _0x556c5e.call(this, _0x2da6b2, (_0x5656d2, _0x26cd82, _0x5aab19) => {
          _0x5656d2 ? _0x1daec1(_0x5656d2) : _0x4339c0(_0x26cd82);
        });
      });
    }
    ["get"](_0x5b6910) {
      return this.send.call(this.env, _0x5b6910);
    }
    ["post"](_0x4824cf) {
      return this.send.call(this.env, _0x4824cf, "POST");
    }
  }
  return new class {
    constructor(_0x5f00a1, _0x11db9a) {
      this.name = _0x5f00a1;
      this.http = new _0x37f7af(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x11db9a);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x1d9085, _0x96f876 = null) {
      try {
        return JSON.parse(_0x1d9085);
      } catch {
        return _0x96f876;
      }
    }
    ["toStr"](_0xb01baa, _0x74607f = null) {
      try {
        return JSON.stringify(_0xb01baa);
      } catch {
        return _0x74607f;
      }
    }
    ["getjson"](_0x38e394, _0x56e31e) {
      let _0x47990d = _0x56e31e;
      const _0x28c972 = this.getdata(_0x38e394);
      if (_0x28c972) try {
        _0x47990d = JSON.parse(this.getdata(_0x38e394));
      } catch {}
      return _0x47990d;
    }
    ["setjson"](_0x1cc3a3, _0x4456f1) {
      try {
        return this.setdata(JSON.stringify(_0x1cc3a3), _0x4456f1);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x219eb6) {
      return new Promise(_0xe98391 => {
        this.get({
          "url": _0x219eb6
        }, (_0x2072e8, _0x2325b7, _0x13e0d6) => _0xe98391(_0x13e0d6));
      });
    }
    ["runScript"](_0x49ece9, _0x4e6f51) {
      return new Promise(_0x107379 => {
        let _0x176e62 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x176e62 = _0x176e62 ? _0x176e62.replace(/\n/g, "").trim() : _0x176e62;
        let _0xaad7a4 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0xaad7a4 = _0xaad7a4 ? 1 * _0xaad7a4 : 20;
        _0xaad7a4 = _0x4e6f51 && _0x4e6f51.timeout ? _0x4e6f51.timeout : _0xaad7a4;
        const [_0x45ba48, _0x553b5b] = _0x176e62.split("@"),
          _0x4a267a = {
            "url": "http://" + _0x553b5b + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x49ece9,
              "mock_type": "cron",
              "timeout": _0xaad7a4
            },
            "headers": {
              "X-Key": _0x45ba48,
              "Accept": "*/*"
            }
          };
        this.post(_0x4a267a, (_0x2371da, _0x3d2eb6, _0x4abe52) => _0x107379(_0x4abe52));
      }).catch(_0x58191e => this.logErr(_0x58191e));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x34c06e = this.path.resolve(this.dataFile),
          _0x852e6d = this.path.resolve(process.cwd(), this.dataFile),
          _0x9a1019 = this.fs.existsSync(_0x34c06e),
          _0x5657f5 = !_0x9a1019 && this.fs.existsSync(_0x852e6d);
        if (!_0x9a1019 && !_0x5657f5) return {};
        {
          const _0xf432b8 = _0x9a1019 ? _0x34c06e : _0x852e6d;
          try {
            return JSON.parse(this.fs.readFileSync(_0xf432b8));
          } catch (_0x1e161d) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x4f110c = this.path.resolve(this.dataFile),
          _0x305246 = this.path.resolve(process.cwd(), this.dataFile),
          _0x10c336 = this.fs.existsSync(_0x4f110c),
          _0x2b204d = !_0x10c336 && this.fs.existsSync(_0x305246),
          _0x3fd862 = JSON.stringify(this.data);
        _0x10c336 ? this.fs.writeFileSync(_0x4f110c, _0x3fd862) : _0x2b204d ? this.fs.writeFileSync(_0x305246, _0x3fd862) : this.fs.writeFileSync(_0x4f110c, _0x3fd862);
      }
    }
    ["lodash_get"](_0x2fd1ed, _0x3e33df, _0x467800) {
      const _0x27a111 = _0x3e33df.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x45a233 = _0x2fd1ed;
      for (const _0x946ed2 of _0x27a111) if (_0x45a233 = Object(_0x45a233)[_0x946ed2], void 0 === _0x45a233) return _0x467800;
      return _0x45a233;
    }
    ["lodash_set"](_0x34fd47, _0x4a8e6b, _0x1a5025) {
      return Object(_0x34fd47) !== _0x34fd47 ? _0x34fd47 : (Array.isArray(_0x4a8e6b) || (_0x4a8e6b = _0x4a8e6b.toString().match(/[^.[\]]+/g) || []), _0x4a8e6b.slice(0, -1).reduce((_0x55d4e1, _0x55268b, _0x297d24) => Object(_0x55d4e1[_0x55268b]) === _0x55d4e1[_0x55268b] ? _0x55d4e1[_0x55268b] : _0x55d4e1[_0x55268b] = Math.abs(_0x4a8e6b[_0x297d24 + 1]) >> 0 == +_0x4a8e6b[_0x297d24 + 1] ? [] : {}, _0x34fd47)[_0x4a8e6b[_0x4a8e6b.length - 1]] = _0x1a5025, _0x34fd47);
    }
    ["getdata"](_0x411014) {
      let _0x15d1bc = this.getval(_0x411014);
      if (/^@/.test(_0x411014)) {
        const [, _0x4f5cbd, _0x314c2f] = /^@(.*?)\.(.*?)$/.exec(_0x411014),
          _0x78f3eb = _0x4f5cbd ? this.getval(_0x4f5cbd) : "";
        if (_0x78f3eb) try {
          const _0x61a356 = JSON.parse(_0x78f3eb);
          _0x15d1bc = _0x61a356 ? this.lodash_get(_0x61a356, _0x314c2f, "") : _0x15d1bc;
        } catch (_0x124191) {
          _0x15d1bc = "";
        }
      }
      return _0x15d1bc;
    }
    ["setdata"](_0x16b9fb, _0x2e1238) {
      let _0x668579 = false;
      if (/^@/.test(_0x2e1238)) {
        const [, _0x1ef07f, _0x29371f] = /^@(.*?)\.(.*?)$/.exec(_0x2e1238),
          _0x7192b7 = this.getval(_0x1ef07f),
          _0x135a20 = _0x1ef07f ? "null" === _0x7192b7 ? null : _0x7192b7 || "{}" : "{}";
        try {
          const _0x338ff7 = JSON.parse(_0x135a20);
          this.lodash_set(_0x338ff7, _0x29371f, _0x16b9fb);
          _0x668579 = this.setval(JSON.stringify(_0x338ff7), _0x1ef07f);
        } catch (_0xf5e4d1) {
          const _0x2a4ee6 = {};
          this.lodash_set(_0x2a4ee6, _0x29371f, _0x16b9fb);
          _0x668579 = this.setval(JSON.stringify(_0x2a4ee6), _0x1ef07f);
        }
      } else _0x668579 = this.setval(_0x16b9fb, _0x2e1238);
      return _0x668579;
    }
    ["getval"](_0x139cca) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x139cca) : this.isQuanX() ? $prefs.valueForKey(_0x139cca) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x139cca]) : this.data && this.data[_0x139cca] || null;
    }
    ["setval"](_0x46be77, _0x549b31) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x46be77, _0x549b31) : this.isQuanX() ? $prefs.setValueForKey(_0x46be77, _0x549b31) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x549b31] = _0x46be77, this.writedata(), !0) : this.data && this.data[_0x549b31] || null;
    }
    ["initGotEnv"](_0x19872b) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x19872b && (_0x19872b.headers = _0x19872b.headers ? _0x19872b.headers : {}, void 0 === _0x19872b.headers.Cookie && void 0 === _0x19872b.cookieJar && (_0x19872b.cookieJar = this.ckjar));
    }
    ["get"](_0x1ad325, _0x1dc471 = () => {}) {
      _0x1ad325.headers && (delete _0x1ad325.headers["Content-Type"], delete _0x1ad325.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x1ad325.headers = _0x1ad325.headers || {}, Object.assign(_0x1ad325.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x1ad325, (_0x24a3e1, _0x5a73c1, _0x1f9b0d) => {
        !_0x24a3e1 && _0x5a73c1 && (_0x5a73c1.body = _0x1f9b0d, _0x5a73c1.statusCode = _0x5a73c1.status);
        _0x1dc471(_0x24a3e1, _0x5a73c1, _0x1f9b0d);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x1ad325.opts = _0x1ad325.opts || {}, Object.assign(_0x1ad325.opts, {
        "hints": !1
      })), $task.fetch(_0x1ad325).then(_0x31d3ba => {
        const {
          statusCode: _0x44ba1f,
          statusCode: _0x32da45,
          headers: _0x69ee9a,
          body: _0x105144
        } = _0x31d3ba;
        _0x1dc471(null, {
          "status": _0x44ba1f,
          "statusCode": _0x32da45,
          "headers": _0x69ee9a,
          "body": _0x105144
        }, _0x105144);
      }, _0xf7e78a => _0x1dc471(_0xf7e78a))) : this.isNode() && (this.initGotEnv(_0x1ad325), this.got(_0x1ad325).on("redirect", (_0x40586c, _0x59cf14) => {
        try {
          if (_0x40586c.headers["set-cookie"]) {
            const _0x501f32 = _0x40586c.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x501f32 && this.ckjar.setCookieSync(_0x501f32, null);
            _0x59cf14.cookieJar = this.ckjar;
          }
        } catch (_0xbb9fe0) {
          this.logErr(_0xbb9fe0);
        }
      }).then(_0x4bb8ab => {
        const {
          statusCode: _0x28b08a,
          statusCode: _0x35b475,
          headers: _0x472574,
          body: _0x18d87c
        } = _0x4bb8ab;
        _0x1dc471(null, {
          "status": _0x28b08a,
          "statusCode": _0x35b475,
          "headers": _0x472574,
          "body": _0x18d87c
        }, _0x18d87c);
      }, _0x59ee89 => {
        const {
          message: _0x8fdd05,
          response: _0x3465d5
        } = _0x59ee89;
        _0x1dc471(_0x8fdd05, _0x3465d5, _0x3465d5 && _0x3465d5.body);
      }));
    }
    ["post"](_0x12c1b4, _0xd957f0 = () => {}) {
      if (_0x12c1b4.body && _0x12c1b4.headers && !_0x12c1b4.headers["Content-Type"] && (_0x12c1b4.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x12c1b4.headers && delete _0x12c1b4.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x12c1b4.headers = _0x12c1b4.headers || {}, Object.assign(_0x12c1b4.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(_0x12c1b4, (_0x70f9a0, _0xb3a96c, _0x1059cd) => {
        !_0x70f9a0 && _0xb3a96c && (_0xb3a96c.body = _0x1059cd, _0xb3a96c.statusCode = _0xb3a96c.status);
        _0xd957f0(_0x70f9a0, _0xb3a96c, _0x1059cd);
      });else {
        if (this.isQuanX()) _0x12c1b4.method = "POST", this.isNeedRewrite && (_0x12c1b4.opts = _0x12c1b4.opts || {}, Object.assign(_0x12c1b4.opts, {
          "hints": !1
        })), $task.fetch(_0x12c1b4).then(_0x408b5c => {
          const {
            statusCode: _0x59617e,
            statusCode: _0x39ce4d,
            headers: _0x30a8ae,
            body: _0x4450c5
          } = _0x408b5c;
          _0xd957f0(null, {
            "status": _0x59617e,
            "statusCode": _0x39ce4d,
            "headers": _0x30a8ae,
            "body": _0x4450c5
          }, _0x4450c5);
        }, _0xb31ef5 => _0xd957f0(_0xb31ef5));else {
          if (this.isNode()) {
            this.initGotEnv(_0x12c1b4);
            const {
              url: _0x4ad838,
              ..._0x132915
            } = _0x12c1b4;
            this.got.post(_0x4ad838, _0x132915).then(_0x577f10 => {
              const {
                statusCode: _0x267de5,
                statusCode: _0x5b63d5,
                headers: _0x4144ed,
                body: _0x5788a2
              } = _0x577f10;
              _0xd957f0(null, {
                "status": _0x267de5,
                "statusCode": _0x5b63d5,
                "headers": _0x4144ed,
                "body": _0x5788a2
              }, _0x5788a2);
            }, _0x289185 => {
              const {
                message: _0x37ae99,
                response: _0x22bdbf
              } = _0x289185;
              _0xd957f0(_0x37ae99, _0x22bdbf, _0x22bdbf && _0x22bdbf.body);
            });
          }
        }
      }
    }
    ["time"](_0x54a2b0, _0x29c386 = null) {
      const _0x20900f = _0x29c386 ? new Date(_0x29c386) : new Date();
      let _0x46a2de = {
        "M+": _0x20900f.getMonth() + 1,
        "d+": _0x20900f.getDate(),
        "H+": _0x20900f.getHours(),
        "m+": _0x20900f.getMinutes(),
        "s+": _0x20900f.getSeconds(),
        "q+": Math.floor((_0x20900f.getMonth() + 3) / 3),
        "S": _0x20900f.getMilliseconds()
      };
      /(y+)/.test(_0x54a2b0) && (_0x54a2b0 = _0x54a2b0.replace(RegExp.$1, (_0x20900f.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x2b2f92 in _0x46a2de) new RegExp("(" + _0x2b2f92 + ")").test(_0x54a2b0) && (_0x54a2b0 = _0x54a2b0.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x46a2de[_0x2b2f92] : ("00" + _0x46a2de[_0x2b2f92]).substr(("" + _0x46a2de[_0x2b2f92]).length)));
      return _0x54a2b0;
    }
    ["msg"](_0x3a54fd = _0x57945f, _0x14d38d = "", _0x4b4a6 = "", _0x31acc4) {
      const _0x42ad74 = _0x2108be => {
        if (!_0x2108be) return _0x2108be;
        if ("string" == typeof _0x2108be) return this.isLoon() ? _0x2108be : this.isQuanX() ? {
          "open-url": _0x2108be
        } : this.isSurge() ? {
          "url": _0x2108be
        } : void 0;
        if ("object" == typeof _0x2108be) {
          if (this.isLoon()) {
            let _0x51724a = _0x2108be.openUrl || _0x2108be.url || _0x2108be["open-url"],
              _0x411dc7 = _0x2108be.mediaUrl || _0x2108be["media-url"];
            return {
              "openUrl": _0x51724a,
              "mediaUrl": _0x411dc7
            };
          }
          if (this.isQuanX()) {
            let _0x113868 = _0x2108be["open-url"] || _0x2108be.url || _0x2108be.openUrl,
              _0x111487 = _0x2108be["media-url"] || _0x2108be.mediaUrl;
            return {
              "open-url": _0x113868,
              "media-url": _0x111487
            };
          }
          if (this.isSurge()) {
            let _0x11d4ea = _0x2108be.url || _0x2108be.openUrl || _0x2108be["open-url"];
            return {
              "url": _0x11d4ea
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x3a54fd, _0x14d38d, _0x4b4a6, _0x42ad74(_0x31acc4)) : this.isQuanX() && $notify(_0x3a54fd, _0x14d38d, _0x4b4a6, _0x42ad74(_0x31acc4))), !this.isMuteLog) {
        let _0xf33c79 = ["", "==============📣系统通知📣=============="];
        _0xf33c79.push(_0x3a54fd);
        _0x14d38d && _0xf33c79.push(_0x14d38d);
        _0x4b4a6 && _0xf33c79.push(_0x4b4a6);
        console.log(_0xf33c79.join("\n"));
        this.logs = this.logs.concat(_0xf33c79);
      }
    }
    ["log"](..._0xcb0884) {
      _0xcb0884.length > 0 && (this.logs = [...this.logs, ..._0xcb0884]);
      console.log(_0xcb0884.join(this.logSeparator));
    }
    ["logErr"](_0x50b8b3, _0x7e28a) {
      const _0x54e40a = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x54e40a ? this.log("", "❗️" + this.name + ", 错误!", _0x50b8b3.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x50b8b3);
    }
    ["wait"](_0xa10303) {
      return new Promise(_0x1ae776 => setTimeout(_0x1ae776, _0xa10303));
    }
    ["done"](_0x3faa7c = {}) {
      const _0x43c89c = new Date().getTime(),
        _0x59c3d3 = (_0x43c89c - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x59c3d3 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x3faa7c);
    }
  }(_0x57945f, _0x1e6db3);
}