// try{
//        harry
//        console.log(harry); 
// }
// catch(e){
//     console.log(e); // full error 
//     console.log(e.name)
//     console.log(e.message)
// }

try{
    console.log(siddharth)
    throw new RangeError('siddharth is best') 
}
catch(e){
 console.log(e); // full error 
 console.log(e.name)
 console.log(e.message)
 console.log(e.stack)
}