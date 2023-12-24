// try {
//     let a = 0;
//     console.log(b)
// }
// catch(e){
//     console.log(e.message);
// }
// finally{
//     console.log('executed')
// }
// try {
//     let a = 0;
//     console.log(a)
// }
// catch(e){
//     console.log(e.message);
// }
// finally{
//     console.log('executed')
// }

// why use finally
const f = () => {
    try {
        let a = 0;
        console.log(a)
        return 
    }
    catch(e){
        console.log(e.message);
        console.log(b); // error in catch
    }
    finally{
        console.log('executed')
    }
};

f();