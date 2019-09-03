/*
 * @Author: 叶凌宵
 * @Date: 2019-08-21 19:32:20
 * @Last Modified by: 叶凌宵
 * @Last Modified time: 2019-08-22 16:25:52
 * loadsh 4.17.15
 */
export function chunk(array: array, size: number = 1): array {
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

export function compact(array: array): array {
  return array.filter(item => item)
}

export function concat(...theArgs: any): array {
  return theArgs.map(item => {
    return Array.isArray(item) ? Number(item.join(',')) : item
  })
}

export function difference(inspect: array, exclude: Array): array {
  return inspect.filter(item => !exclude.includes(item))
}

export function drop(array: array, n: number = 1): array {
  for (let i = 0; i < n; i++) {
    array.shift()
  }
  return array
}

export function dropRight(array: array, n: number = 1): array {
  for (let i = 0; i < n; i++) {
    array.pop()
  }
  return array
}

export function dropRightWhile(array: array, n: Function): array {
  for (let i = 0; i < n; i++) {
    array.pop()
  }
  return array
}

export function fill(array: array, value: any, start: number = 0, end: number = array.length): array {
  for (let i = start; i < end; i++) array[i] = value
  return array
}

export function fromPairs(pairs: array): object {
  let obj = {}
  pairs.forEach(item => { obj[item[0]] = item[1] })
  return obj
}

export function head(array: array): any {
  return array[0]
}
console.log(head([]))
