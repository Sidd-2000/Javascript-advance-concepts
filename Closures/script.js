// const fun = () => {
//     let result = 'passed';
//     return res = () => {
//         console.log(result)
//     }
// }
// let a = fun();
// a()

function fun() {
const x = () => {
    let a = 1;
    console.log(a)
    const y = () => {
        let a = 2;
        console.log(a)
        const z = () => {
            let a = 3;
            console.log(a)
        }
        z();
    }
    y();
}
    return x;
}

let funt = fun()
funt();