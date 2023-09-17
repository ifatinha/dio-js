function sayMyName(name) {
    return `Your name is ${name}`;
}

function checkAge(age) {
    if (age > 18) {
        console.log(`${sayMyName("Fatinha ")} and i'm of legal age.`);
    } else {
        console.log(`${sayMyName("Fatinha ")} and i'm underage.`);
    }
}

(function () {
    checkAge(29);
})();