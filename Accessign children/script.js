let b = document.body.firstChild; 
console.log(b);// it return text node 

console.log(document.body.lastChild)

console.log(document.body.childNodes)

let c = Array.from(document.body.childNodes)
console.log(c)