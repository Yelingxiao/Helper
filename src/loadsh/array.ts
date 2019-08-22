/*
 * @Author: 叶凌宵
 * @Date: 2019-08-21 19:32:20
 * @Last Modified by: 叶凌宵
 * @Last Modified time: 2019-08-22 16:25:52
 * loadsh 4.17.15
 */
export function chunk(array: Array, size: Number = 1): Array {
  let newArray = []
  let nowArray = []
  array.forEach((item, index) => {
    nowArray.push(item)
    if (!((index + 1) % size)) {
      newArray.push(nowArray)
      nowArray = []
    }
  })
  if (nowArray.length) newArray = [...newArray, nowArray]
  return newArray
}

export function compact(array: Array): Array {
  return array.filter(item => item)
}

export function concat(...theArgs: any): Array {
  return theArgs.map(item => {
    return Array.isArray(item) ? Number(item.join(',')) : item
  })
}
console.log(concat([1], 2, [3], [[4]]))
