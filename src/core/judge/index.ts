/*
 * @Author: 叶凌宵
 * @Date: 2019-08-05 20:10:42
 * @Last Modified by: 叶凌宵
 * @Last Modified time: 2019-08-05 20:16:26
 * 判断环境
 */

/**
 * 判断微信浏览器
 * @returns {Boolean}
 */
function isWeiXin() {
  const ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    return true
  } else {
    return false
  }
}

/**
 * 移动终端浏览器版本信息
 * @returns {string}
 */
function parseUA() {
  const u = navigator.userAgent
  const u2 = navigator.userAgent.toLowerCase()
  return { // 移动终端浏览器版本信息
    trident: u.indexOf('Trident') > -1,
    // IE内核
    presto: u.indexOf('Presto') > -1,
    // opera内核
    webKit: u.indexOf('AppleWebKit') > -1,
    // 苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1,
    // 火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/),
    // 是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    // ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
    // android终端或uc浏览器
    iPhone: u.indexOf('iPhone') > -1,
    // 是否为iPhone或者QQHD浏览器
    iPad: u.indexOf('iPad') > -1,
    // 是否iPad
    webApp: u.indexOf('Safari') === -1,
    // 是否web应该程序，没有头部与底部
    iosv: u.substr(u.indexOf('iPhone OS') + 9, 3),
    weixin: u2.match(/MicroMessenger/i) === 'micromessenger',
    ali: u.indexOf('AliApp') > -1,
  }
}

