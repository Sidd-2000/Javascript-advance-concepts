// localStorage.setItem('name', 'siddharth');
// if it commented then also the name siddharth will present in the localStorage

let key = prompt('Enter key to add to localStorage')
// let value = prompt('Enter value to add to localStorage')
// localStorage.setItem(key, value)

// console.log(`the value of ${key} is ${value}`)

console.log(localStorage.getItem("city"))  // mumbai

if(key == 'red' || key == 'blue'){
    localStorage.removeItem('city')
}
console.log(localStorage)