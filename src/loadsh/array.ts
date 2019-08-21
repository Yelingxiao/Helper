/*
 * @Author: 叶凌宵
 * @Date: 2019-08-21 19:32:20
 * @Last Modified by: 叶凌宵
 * @Last Modified time: 2019-08-21 21:05:23
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
    console.log(newArray)
  })
  return newArray
}
console.log(chunk([2, 3, 4, 45, 22], 3))
