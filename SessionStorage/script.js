// sessionStorage.setItem('name','siddharth')

// console.log(sessionStorage.getItem('name'))

// // sessionStorage.removeItem('name')

// console.log(sessionStorage);
// // sessionStorage.clear()  it clears all the sessionStorage keys and values

window.onstorage = (e) => {
    alert('sessionStorage')
    console.log(e)
}