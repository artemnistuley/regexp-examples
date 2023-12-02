let regexp = /^(\w+\s?)*$/;
let str = "An input string that takes a long time or even makes this regexp to hang!";
// console.log( str.match(regexp) );

let regexp2 = /^(\d+)*$/;
let str2 = "012345678901234567890123456789!";
// console.log( str2.match(regexp2) );

let regexp3 = /^(\w+\s)*\w*$/;
let str3 = "An input string that takes a long time or even makes this regex to hang!";
// console.log(regexp3.test(str3));

// console.log( "JavaScript".match(/\w+Script/) );
// console.log( "JavaScript".match(/(?=(\w+))\1Script/) );

let regexp4 = /^((?=(\w+))\2\s?)*$/;
let str4 = "An input string that takes a long time or even makes this regex to hang!";
// console.log(regexp4.test(str4));