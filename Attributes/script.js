let a = document.getElementById('hey');
let b = hey.getAttribute('class');
console.log(a);
console.log(hey1.getAttribute('class'));
console.log(hey1.hasAttribute('name'));
console.log(hey1.hasAttribute('onclick'));

hey1.setAttribute('hidden', 'true'); // set attribute hidden

hey.removeAttribute('style'); // remove attribute style

// to get all attributes of the element

console.log(hey.attributes)

// To set custom attributes
console.log(hey.dataset.siddharth) // data-siddharth='siddhu'