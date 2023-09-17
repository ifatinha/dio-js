const numbers = [];

for (let index = 0; index < 10; index++) {
    numbers.push(Math.floor(Math.random() * 99) + 1);
}

console.log(numbers);

for (let index = 0; index < numbers.length; index++) {
    
    if(numbers[index] % 2 === 0){
        console.log(numbers[index]);
    }
}