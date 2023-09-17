
const entradas = [5, 50, 10, 98, 23];
let index = 0;

function gets() {
    return entradas[index++];
}

function print(txt) {
    console.log(txt);
}

export default { gets, print, entradas }