/**
 * 生成随机数
 * @param from
 * @param to
 */
export function randomRange(from: number, to: number) {
  return Math.floor(Math.random() * (to - from + 1) + from)
}

/**
 * 时间延迟
 * @param ts
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
 */
export function toPercent(point: number) {
  let str = parseInt(point * 100, 10).toFixed(2)
  str += '%'
  return str
}
