/* 
  @des 填充显示字符串
  @param leftKepp 要保留的前面部分字符串个数
  @param rightKeep 要保留的前面部分字符串个数
  @param fillLen （可选）指定填充的个数
*/
export function fillString(str, value, leftKepp, rightKeep, fillLen) {
  if (leftKepp + rightKeep >= str.length) {
    return str
  }
  if (leftKepp) {
    let lfStr = str.slice(0, leftKepp)
    if (rightKeep) {
      let rtStr = str.slice(str.length - rightKeep)
      fillLen = fillLen || str.length - rightKeep - leftKepp
      return lfStr + new Array(fillLen).fill(value).join('') + rtStr
    }
    fillLen = fillLen || str.length - leftKepp
    return lfStr + new Array(str.length - leftKepp).fill(value).join('')
  }
}

//output: 1**********6789
console.log(fillString('123456789', '*', 1, 4, 10))
