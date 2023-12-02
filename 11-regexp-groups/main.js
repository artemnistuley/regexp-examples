// console.log( 'Gogogo now!'.match(/(go)+/ig) );

let regexp = /(\w+\.)+\w+/g;
// console.log("site.com my.site.com".match(regexp));

let regexp2 = /([\w-]+\.)+\w+/gi;
// console.log("site.com my-site.com".match(regexp2));

let regexp3 = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
// console.log("my@mail.com @ his@site.com.uk".match(regexp3));

let str = '<h1>Hello, world!</h1>';
let tag = str.match(/<(.*?)>/);
// console.log(tag);

let str2 = '<span class="my">';
let regexp4 = /<(([a-z]+)\s*([^>]*))>/;
let result = str2.match(regexp4);
// console.log(result);

// console.log( 'a'.match(/a(z)?(c)?/) );

// console.log( '<h1> <h2>'.match(/<(.*?)>/g) );
let results = '<h1> <h2>'.matchAll(/<(.*?)>/gi);
// console.log( Array.from(results) );

let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
let str3 = "2019-04-30";
let groups = str3.match(dateRegexp).groups;
// console.log(groups);

let dateRegexp2 = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;
let str4 = "2019-10-30 2020-01-01";
let results2 = str4.matchAll(dateRegexp2);
// console.log( [...results] );

let str5 = "John Bull";
let regexp5 = /(\w+) (\w+)/;
// console.log( str5.replace(regexp5, '$2, $1') );

let str6 = "2019-10-30, 2020-01-01";
let regexp6 = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;
// console.log( str6.replace(regexp6, '$<day>.$<month>.$<year>') );

console.log( "Gogogo John!".match(/(?:go)+ (\w+)/i) );
