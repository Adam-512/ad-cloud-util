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



/**
 * 格式化显示数字
 * @param {BigNumber} num
 **/
 export function formatNumber(num, digits = 3) {
  num = num.toNumber()
  return num
    ? num
      .toFixed(digits)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      .replace('.000', '')
    : '0'
}


//科学计数法还原
export function stringNumber(val) {
  let result = String(val)
  if (result.indexOf('-') >= 0) {
    result = '0' + String(Number(result) + 1).substr(1)
  }
  return result
}
