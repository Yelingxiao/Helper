/*
 * @Author: 叶凌宵
 * @Date: 2019-08-05 20:11:16
 * @Last Modified by: 叶凌宵
 * @Last Modified time: 2019-08-05 20:22:27
 * 通用公用函数
 */

/**
 * 生成随机数
 * @param from
 * @param to
 * @returns {number}
 */
export function randomRange(from: number, to: number) {
  return Math.floor(Math.random() * (to - from + 1) + from)
}

/**
 * 生成随机字符串(可指定长度)
 * @param len
 * @returns {string}
 */
export function randomString(len: number = 8) {
  /** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  const maxPos = $chars.length
  let pwd = ''
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(randomRange(0, maxPos))
  }
  return pwd
}

/**
 * 截取指定字节的字符串
 * @param str 要截取的字符穿
 * @param len 要截取的长度，根据字节计算
 * @param suffix 截取前len个后，其余的字符的替换字符，一般用“…”
 * @returns {*}
 */
function cutString(str: string, len: number, suffix: string = '') {
  if (!str) return ''
  if (len <= 0) return ''
  let templen = 0
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 255) {
      templen += 2
    } else {
      templen++
    }
    if (templen === len) {
      return str.substring(0, i + 1) + suffix
    } else if (templen > len) {
      return str.substring(0, i) + suffix
    }
  }
  return str
}


/**
 * 时间延迟
 * @param ts
 * @returns {Promise}
 */
export function delay(ts: number) {
  return new Promise((resolve, reject) => {
    let timer = setTimeout(() => {
      resolve()
      clearTimeout(timer)
    }, ts)
  })
}

/**
 * 小数转化为白分数
 * @param point
 * @returns {string}
 */
export function toPercent(point: number) {
  let str = parseInt(point * 100, 10).toFixed(2)
  str += '%'
  return str
}

/**
 * 将时间戳转化为正常日期
 * @param time
 * @return {string}
 */
export function formatDateTime(time: number = Number(new Date())) {
  const date = new Date(time + 8 * 3600 * 1000) // 增加8小时
  return date.toJSON().substr(0, 19).replace('T', ' ')
}
