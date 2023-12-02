let str = `He said: "She's the one!".`;
let regexp = /['"](.*?)['"]/g;
console.log(str.match(regexp));

let str2 = `He said: "She's the one!".`;
let regexp2 = /(['"])(.*?)\1/g;
console.log(str2.match(regexp2));

let str3 = `He said: "She's the one!".`;
let regexp3 = /(?<quote>['"])(.*?)\k<quote>/g;
console.log(str3.match(regexp3));
