let str = 'let varName';
let regexp = /\w+/g;
let result;
// while (result = regexp.exec(str)) {
//   console.log( `${result[0]} - ${result.index}` );
// }

let str2 = 'let varName = "value"';
let regexp2 = /\w+/g;
regexp2.lastIndex = 4;
// console.log( regexp2.exec(str2) );

let str3 = 'let varName = "value"';
let regexp3 = /\w+/y;
regexp3.lastIndex = 3;
console.log( regexp3.exec(str3) );
regexp3.lastIndex = 4;
console.log( regexp3.exec(str3) );