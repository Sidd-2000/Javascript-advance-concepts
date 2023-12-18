console.log() // simply prints the message and variables

console.assert(statements) // prints the message in the form of error when statements is wrong
                           // it checks the statements as a testing statement

console.error(statements) // prints the message in the form of error

console.warn("Hey siddharth your internet is down") // it givs you warnings
                                                    // output is VM264:1 Hey siddharth your internet is down

console.info(statements) // prints the message in the form of information about the variable
                        // it's same as the console.log()
        
let a = 3
let b = 6
let c = 10
console.table(a,b,c) // prints the message in the form of table

console.clear() // clears the console

console.time('forloop') 
'forloop'
console.timeEnd('forloop') // prints the execution time