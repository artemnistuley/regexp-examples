let str = "1 turkey costs 30€";
// console.log( str.match(/\d+(?=€)/g) );

let str2 = "1 turkey costs 30€";
// console.log( str2.match(/\d+(?=\s)(?=.*30)/) );

let str3 = "2 turkeys cost 60€";
// console.log( str3.match(/\d+(?!€)/) );

let str4 = "1 turkey costs $30";
// console.log( str4.match(/(?<=\$)\d+/) );

let str5 = "2 turkeys cost $60";
// console.log( str5.match(/(?<!\$)\b\d+/g) );

let str6 = "1 turkey costs 30€";
// console.log( str6.match(/\d+(?=(€|kr))/) );

let str7 = "1 turkey costs $30";
// console.log( str7.match(/(?<=(\$|£))\d+/) );

let regexp = /(?<![-\d])\d+/g;
let str8 = "0 12 -5 123 -18";
// console.log( str8.match(regexp) );
