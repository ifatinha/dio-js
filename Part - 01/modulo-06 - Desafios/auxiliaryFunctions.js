
const entradas = [2000, 250];
let index = 0;

function gets() {
    return entradas[index++];
}

function print(txt) {
    console.log(txt);
}

export default { gets, print, entradas }