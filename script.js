// h1 {color: red}
// .parrafito {...}
// #pid {...}

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});


h1.innerHTML = 'Patito <br> Feo';
h1.innerText = 'Patito <br> Feo';
//console.log(h1.getAttribute('pantalla'));
//h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

input.value = "456";

const img = document.createElement('img')
img.setAttribute('src', 'https://tresubresdobles.com/wp-content/uploads/2021/04/skft-23aff38e10ee3c4e430a1f3450c4a01d.jpeg');
console.log(img);

pid.innerHTML = "";
pid.append(img);


