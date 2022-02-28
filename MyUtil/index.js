import { utils, ethers } from "ethers";

//href url search param 格式化
export function decode_base58(base58) {
  const unit8 = ethers.utils.base58.decode(base58);
  return new TextDecoder().decode(unit8);
}

export function encode_base58(str) {
  const unit8 = new TextEncoder().encode(str);
  return ethers.utils.base58.encode(unit8);
}

// 精度的计算用bignumber，显示时格式化
export function getDefaultAllowance(decimals) {
  return utils.parseUnits("100000000", decimals);
}

//search params 对象转查询字符串
export function objectToUrlParam(obj) {
  let str = "";
  Object.keys(obj).forEach((key) => {
    str += `${key}=${obj[key]}&&`;
  });
  return str.slice(0, -2);
}
