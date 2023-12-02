const str1 = 'This is 12345 and 123456 number.';
// console.log( str1.match(/\d{5}/) );
// console.log( str1.match(/\b\d{5}\b/g) );

// console.log( "I'm not 12, but 1234 years old".match(/\d{3,5}/) );
// console.log( "I'm not 12, but 345678 years old".match(/\d{3,}/) );

const str2 = "+7(903)-123-45-67";
// console.log( str2.match(/\d{1,}/g) );

// + === {1,}
// console.log( "+7(903)-123-45-67".match(/\d+/g) );

// ? === {0,1}
// console.log( "Should I write color or colour?".match(/colou?r/g) );

// * === {0,}
// console.log( "100 10 1".match(/\d0*/g) );
// console.log( "100 10 1".match(/\d0+/g) );

// console.log( "0 1 12.345 7890".match(/\d+\.\d+/g) );
// console.log( "<body> ... </body>".match(/<[a-z]+>/gi) );

// console.log( "<h1>Hi!</h1>".match(/<[a-z][a-z0-9]*>/gi) );
// console.log( "<h1>Hi!</h1>".match(/<\/?[a-z][a-z0-9]*>/gi) );

// console.log( "Hello!... How goes?.....".match(/\.{1,}/g) );
// console.log( "Hello!... How goes?.....".match(/\.+/g) );
