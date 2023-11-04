let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let number = [Math.floor(Math.random() * 100)]

btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;
    if (input == number){
        output.innerHTML = `You guessed right! Your number was ${number}!`
    } else if (input < number){
        output.innerHTML = `Yikes! Your guess was too low! Try again, you got this!`
    };
    if (input > number){
        output.innerHTML = `Close! Your guess was too high. Dont give up!`
    }
});