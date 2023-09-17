
const entradas = [5, 3, 4, 1, 10, 8];
let index = 1;

function gets() {
    return entradas[index++];
}

function print(txt) {
    console.log(txt);
}

export default { gets, print, entradas }