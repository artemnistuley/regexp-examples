let regexp = /html|php|css|java(script)?/gi;
let str = "First HTML appeared, then CSS, then JavaScript";
// console.log(str.match(regexp));

let regexp2 = /([01]\d|2[0-3]):[0-5]\d/g;
// console.log("00:00 10:10 23:59 25:99 1:2".match(regexp2));

let regexp3 = /(java(script)?|php|c(\+\+)?)/gi;
// console.log("Java JavaScript PHP C++ C".match(regexp3));

let regexp4 = /<style(>|\s.*?>)/g;
console.log( '<style> <styler> <style test="...">'.match(regexp4) );