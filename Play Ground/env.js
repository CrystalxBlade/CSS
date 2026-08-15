
var a = 42;
var b = 69;

console.log(`
    Before:

    a = ${a}
    b = ${b}
    `)

a = b + a;
b = a - b;
a = a - b;

console.log(`
    After:
    
    a = ${a}
    b = ${b}
    `);