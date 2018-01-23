var games = {
    number_guess: function(name) {
        function useGuess(g, n, rn, mg) {
            n = prompt("What is your guess? You have " + mg - g + " guesses remaining.");
            g++;
            if (n > rn) {
                alert("Too high. Try again. You have " + mg - g + " guesses remaining.");
            } else if (n < rn) {
                alert("Too low. Try again. You have " + mg - g + " guesses remaining.");
            } else {
                alert("YOU WIN!");
            }
        };
        var difficulty, number, guess, guesses, maxGuesses, score, multiplier, scoreEarned;
        alert("On harder difficulties, the numbers will be larger, you will have fewer guesses, and earn more points.");
        difficulty = prompt("What difficulty would you like to play at?\nThere is easy, medium, hard, impossible, and death.");
        switch (difficulty.toLowerCase()) {
            case "easy":
                alert("The number will be from 0 to 50, you will have 20 guesses, and you will have a score multiplier of 1.0");
                number = Math.round(50 * Math.random());
                guesses = 0;
                maxGuesses = 20;
                multiplier = 1.0;
                break;
            case "medium":
                alert("The number will be from 0 to 100, you will have 15 guesses, and you will have a score multiplier of 2.5");
                number = Math.round(100 * Math.random());
                guesses = 0;
                maxGuesses = 15;
                multiplier = 2.5;
                break;
            case "hard":
                alert("The number will be from 0 to 1000, you will have 10 guesses, and you will have a score multiplier of 5.0");
                number = Math.round(1000 * Math.random());
                guesses = 0;
                maxGuesses = 10;
                multiplier = 5.0;
                break;
            case "impossible":
                alert("The number will be from 0 to 10000, you will have 5 guesses, and you will have a score multiplier of 10.0");
                number = Math.round(10000 * Math.random());
                guesses = 0;
                maxGuesses = 10;
                multiplier = 10.0   
                break;
            case "death":
                alert("THE NUMBER WILL BE FROM 0 TO 1 MILLION, YOU WILL HAVE 1 GUESS, AND YOU WILL HAVE A SCORE MULTIPLIER OF 100.0");
                number = Math.round(1000000 * Math.random());
                guesses = 0;
                maxGuesses = 1;
                multiplier = 100.0;
                break;
        }
        alert("Press OK to begin the game");
        do {
            useGuess(guesses, guess, number, maxGuesses);
        } while (guess !== number && guesses < maxGuesses);
        if (guess === number) {
            alert("Your score is " + (maxGuesses - number) * multiplier + ".");
        }
    },
    rock_paper_scissors: function(name) {
    
    }
};

function init() {
    var a0 = prompt("What's your name?");
    alert("Hello, " + a0 + ".");
    a1 = prompt("What do you want me to do?");
    switch (a1.toLowerCase()) {
        case "go away":
        case "shut down":
        case "shut up":
        case "off":
        case "turn off":
        case "leave":
        case "die":
            var a2 = confirm("Are sure you want me to leave?");
            for (var i = 0; i < 20; i++) {
                alert("Shutting down " + i * 5 + "% complete.");
            }
            throw new Error("Successfully shut down.");
            break;
        case "turn on":
        case "on":
            alert("I am already on.");
            break;
        case "joke":
        case "funny":
        case "tell a joke":
        case "be funny":
        case "tell me a joke":
            alert("I am a computer. I am not funny.");
            break;
        case "play a game":
        case "game":
        case "play":
        case "play game":
            alert("There is rock paper scissors, and number guessing.");
            var a3 = prompt("Which game do you want to play?");
            switch (a3) {
                case "rock paper scissors":
                case "rockpaperscissors":
                    games.rock_paper_scissors(a0);
                    break;
                case "number guessing":
                case "number guess":
                case "number":
                case "guess":
                    games.number_guess(a0);
                    break;
            }
            break;
        case "who are you":
            alert("I am a JavaScript program.");
            break;
        case "calculator":
        case "calculate":
        case "calculate something":
        case "math":
        case "do math":
        case "do math for me":
        case "add":
        case "addition":
        case "+":
        case "-":
        case "*":
        case "x":
        case "X":
        case "\";
        case "/":
        case "^":
        case "%":
        case "sin":
        case "cos":
        case "sqrt":
        case "square root":
        case "cube root":
        case "cbrt":
        case "tan":
        case "sine":
        case "cosine":
        case "tangent":
        case "arcsin":
        case "arcsine":
        case "arccos":
        case "arccosine":
        case "arctan":
        case "arctangent":
        case "inverse sine":
        case "inverse cosine":
        case "inverse tangent":
        case "secant":
        case "sec":
        case "csc":
        case "cot":
        case "cosecant":
        case "cotangent":
        case "arcsecant":
        case "arcsec":
        case "arccosecant":
        case "arccot":
        case "arccotangent":
        case "inverse secant":
        case "inverse cosecant":
        case "inverse cotangent":
        case "asin":
        case "acos":
        case "atan":
        case "asec":
        case "acsc":
        case "acot":
        case "sinh":
        case "hyperbolic sine":
        case "cosh":
        case "hyperbolic cosine":
        case "tanh":
        case "hyperbolic tangent":
        case "sech":
        case "hyperbolic secant":
        case "csch":
        case "hyperbolic cosecant":
        case "coth":
        case "hyperbolic cotangent":
        case "hyperbolic sin":
        case "hyperbolic cos":
        case "hyperbolic tan":
        case "hyperbolic sec":
        case "hyperbolic csc":
        case "hyperbolic cot":
        case "sin^-1":
        case "cos^-1":
        case "tan^-1":
        case "sec^-1":
        case "csc^-1":
        case "cot^-1":
        case "inverse hyperbolic sine":
        case "arcsinh":
        case "inverse hyperbolic sin":
        case "asinh":
        case "sinh^-1":
        case "inverse hyperbolic cosine":
        case "arccosh":
        case "inverse hyperbolic cos":
        case "acosh":
        case "cosh^-1":
        case "inverse hyperbolic tangent":
        case "arctanh":
        case "inverse hyperbolic tan":
        case "atanh":
        case "tanh^-1":
        case "inverse hyperbolic secant":
        case "arcsech":
        case "inverse hyperbolic sec":
        case "asech":
        case "sech^-1":
        case "inverse hyperbolic cosecant":
        case "arccsch":
        case "inverse hyperbolic csc":
        case "acsch":
        case "csch^-1":
        case "inverse hyperbolic cotangent":
        case "arccoth":
        case "inverse hyperbolic coth":
        case "acoth":
        case "coth^-1":
        case "subtract":
        case "subtraction":
        case "multiply":
        case "times":
        case "multiplication":
        case "division":
        case "divide":
        case "mathematics":
        case "turn on calculator":
            alert("You have turned on the calculator");
            alert("There is addition, subtraction, multiplication, division, radicals, exponents, modulo, logarithm, and trigonometry."); 
            var a4 = prompt("What operation would you like to perform?");
            switch (a4.toLowerCase()) {
                case "add":
                case "addition":
                case "+":
                case "plus":
                    var addends = [];
                    addends.push(parseInt(prompt("What is your first addend?"),10));
                    var another = confirm("Would you like to add another addend?");
                    while (another) {
                        addends.push(parseInt(prompt("What is the new addend?"),10));
                        another = confirm("Would you like to add another addend?");
                    }
                    var sum = 0;
                    for (var i = 0; i < addends.length; i++) {
                        sum += addends[i];    
                    }
                    alert("The sum is " + sum + ".");
                    break;
                case "-":
                case "subtract":
                case "subtraction":
                case "minus":
                    var large = parseInt(prompt("What is your first number?"), 10);
                    var small = parseInt(prompt("What is your second number?"),10);
                    alert("The difference is " + large - small + ".");
                    break;
                case "*":
                case "times":
                case "multply":
                case "multiplication":
                case "x":
                case "X":
                    var factors = [];
                    factors.push(parseInt(prompt("What is your first factor?"),10));
                    var newF = confirm("Would you like to add another factor?");
                    while (newF) {
                        factors.push(parseInt(prompt("What is your new factor?"),10));
                        newF = confirm("Would you like to add another factor?");
                    }
                    var product = 1;
                    for (var j = 0; j < factors.length; j++) {
                        product *= factors[i];    
                    }
                    break;
                case "/":
                case "\":
                case "divide":
                case "division":
                case "fraction":
                    var dividend = parseInt(prompt("What is your dividend?"),10);
                    var divisor = parseInt(prompt("What is your divisor?"), 10);
                    alert("The quotient is " + dividend / divisor + ".");
                    break;
            }
    }
}
