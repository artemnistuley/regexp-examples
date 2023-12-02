let str = 'a "witch" and her "broom" is one';
let regexp = /".+"/g;
// console.log(str.match(regexp));

let str2 = 'a "witch" and her "broom" is one';
let regexp2 = /".+?"/g;
// console.log(str2.match(regexp2));

// console.log( "123 456".match(/\d+ \d+?/) );

let regexp3 = /"[^"]+"/g;
let str3 = 'a "witch" and her "broom" is one';
// console.log(str3.match(regexp3));

let str4 = '...<a href="link" class="doc">...';
let regexp4 = /<a href=".*" class="doc">/g;
// console.log(str4.match(regexp4));

let str5 = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
let regexp5 = /<a href=".*" class="doc">/g;
// console.log(str5.match(regexp5));

let str6 = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
let regexp6 = /<a href=".*?" class="doc">/g;
// console.log(str6.match(regexp6));

let str7 = '...<a href="link1" class="wrong">... <p style="" class="doc">...';
let regexp7 = /<a href=".*?" class="doc">/g;
// console.log(str7.match(regexp7));

let str8 = '...<a href="link1" class="wrong">... <p style="" class="doc">...';
let str9 = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
let regexp8 = /<a href="[^"]*" class="doc">/g;
// console.log(str8.match(regexp8));
// console.log(str9.match(regexp8));
