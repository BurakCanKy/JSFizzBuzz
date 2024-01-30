function divideInt(number, divide) {
    return number % divide == 0;
}

function fizzBuzz(randomInt) {
    divideInt(randomInt, 15)  ? console.log('FizzBuzz') :
        divideInt(randomInt, 3)  ? console.log('Fizz') :
            divideInt(randomInt, 5)  ? console.log('Buzz') : console.log('None');
}

while (true) {
    var number = prompt("Please enter a number (type 'exit' to end): ");

    isNaN(number) ? console.log('Please enter a valid number.') : fizzBuzz(number);;

    if (number.toLowerCase() === 'exit') {
        break;
    }
}