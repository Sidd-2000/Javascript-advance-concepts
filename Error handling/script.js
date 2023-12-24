setTimeout(() => {  
    console.log('hakking wifi');
}, 1000);

setTimeout(() => {  
    console.log('hakking wifi');
    try{
        
        console.log(rahul)
    }
    catch(e) {
        console.log(e);
    }
}, 2000);

// try cannot handlie scheduled code
try {
    setTimeout(() => {  
        console.log(rahul);
    }, 1000);
}catch(error){
    console.log(error);
}
setTimeout(() => {  
    console.log('hakking wifi');
}, 3000);

setTimeout(() => {  
    console.log('hakking wifi');
}, 4000);

setTimeout(() => {  
    console.log('hakking wifi');
}, 5000);