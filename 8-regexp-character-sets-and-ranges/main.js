const str1 = 'Top hop';
// console.log( str1.match(/[th]op/gi) );

const str2 = 'Vualya';
// console.log( str2.match(/V[vu]lya/) );

// console.log( "Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g) );

// short form
// \d === [0-9]
// \w === [a-zA-Z0-9_]
// \s === [\t\n\v\f\r ]

const str3 = 'Hi 你好 12';
const regexp3 = /[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]/gu;
// console.log(str3.match(regexp3));

// [^aeyo]
// [^0-9] === \D
// [^\s] === \S

// console.log( "alice15@gmail.com".match(/[^\d\sA-Z]/gi) );

const regexp4 = /[-().^+]/g;
// console.log( "1 + 2 - 3".match(regexp4) );

// console.log( '𝒳'.match(/[𝒳𝒴]/u) );
// console.log( '𝒴'.match(/[𝒳-𝒵]/u) );

const regexp5 = /\d\d[:-]\d\d/g;
console.log( "Breakfast at 09:00. Dinner at 21-30".match(regexp5) );
