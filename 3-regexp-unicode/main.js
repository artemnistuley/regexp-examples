let str = "A ბ ㄱ";
// console.log(str.match(/\p{Letter}/gu));
// console.log(str.match(/\p{L}/gu));

let regexp = /x\p{Hex_Digit}\p{Hex_Digit}/u;
// console.log("number: xAF".match(regexp));

let regexp2 = /\p{Sc}\d/gu;
let str2 = `Prices: $2, €1, ¥9`;
// console.log(str2.match(regexp2));