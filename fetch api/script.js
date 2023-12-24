let p = fetch("https://goweather.herokuapp.com/weather/newyork")
p.then((value) => {
    console.log(value.status)
    console.log(value.ok)
    console.log(value.headers)
    return value.json()
}).then((value) => {
    console.log(value);
})