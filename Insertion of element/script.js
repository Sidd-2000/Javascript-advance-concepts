let a = document.getElementsByClassName('div1')
let b = document.getElementById('div2')
console.log(a)
console.log(b)
b.innerHTML = b.innerHTML + "<h1>hello siddharth</h1>";

let h1 = document.createElement("h1");
h1.innerHTML = "hello h1";
// b.appendChild(h1)

// b.prepend(h1)
// b.after(h1); // after coatiner
// b.before(h1); // befor conatainer

a.replaceWith(b)