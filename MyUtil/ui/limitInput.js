//vue 限制输入框输入，小数点个数，精度;@input中使用
//setup中使用
const reg = /[^\d|.]/g
export function limitNumberInput(value, decimal = 9) {
  value += ''
  let val = value.replace(reg, '') //过滤数字和小数点
  //小数点只能输入一个
  let index = val.indexOf('.')
  if (index != -1) {
    let lastStr = val[val.length - 1]

    if (lastStr == '.' && val.slice(0, val.length - 1).indexOf('.') != -1) {
      val = val.slice(0, val.length - 1) //移除第二次输入的点
    }

    //精度限制
    let lfStr = val.slice(0, index)
    let rtStr = val.slice(index + 1)
    val = lfStr + '.' + rtStr.slice(0, decimal)
  }
  return val
}

console.log(limitNumberInput('我们123.465.', 2))
