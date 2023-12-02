let str = "I love JavaScript";
let result = str.match(/Java(Script)/);
// console.log(result);

let str2 = "I love JavaScript";
let result2 = str.match(/Java(Script)/g);
// console.log(result2);

let str3 = "I love JavaScript";
let result3 = str.match(/HTML/) || [];
// console.log(result3);

let str4 = '<h1>Hello, world!</h1>';
let regexp4 = /<(.*?)>/g;
let matchAll = str4.matchAll(regexp4);
// console.log([...matchAll]);

// console.log('12, 34, 56'.split(/,\s*/));

let str5 = "I love JavaScript!";
let regexp5 = /Java.+/;
// console.log( str5.search(regexp5) ); // 8

// console.log( '12-34-56'.replace("-", ":") );

let str6 = "John Smith";
// console.log( str6.replace(/(\w+) (\w+)/i, '$2, $1') );

let str7 = "html and css";
let result7 = str.replace(/html|css/gi, str => str.toUpperCase());
// console.log(result7);

// console.log("Хо-Хо-хо".replace(/хо/gi, (match, offset) => offset));

let str8 = "John Smith";
let result8 = str8.replace(/(\w+) (\w+)/, (match, name, surname) => `${surname}, ${name}`);
// console.log(result8);

// console.log("John Smith".replace(/(\w+) (\w+)/, (...match) => `${match[2]}, ${match[1]}`));

let str9 = "I love JavaScript";
// console.log( /love/i.test(str9) ); // true
// console.log( str9.search(/love/i) != -1 ); // true

let regexp10 = /love/gi;
let str10 = "I love JavaScript";
regexp10.lastIndex = 10;
// console.log( regexp10.test(str10) ); // false