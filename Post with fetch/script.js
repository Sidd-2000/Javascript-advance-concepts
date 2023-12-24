const fun = async (todo) => {
    let options = {
        method:"POST",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
            title:'foo',
            body:'bar',
            userId:1
        })
    }
    let p = await fetch("https://jsonplaceholder.typicode.com/posts",options)
    let response = await p.json()
    return response
};

const mainfunc = async () => {
    let todo = {title:'siddharth',
                body:"siddharth",
                userId:1100,
            }

            let todor = await fu(todo);
            console.log(todor);

};

mainfunc()