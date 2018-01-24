function afunc() {
    var a1 = prompt("What is your name?");
    alert("Hello, " + a1 + ".");
    return a1;
};
var shutdown = false;
var memorynum = 0;
var memory = "";
function updateMemory() {
    switch (Math.trunc(Math.log10(memorynum))) {
        case 0:
            memory = memorynum + "B";
            break;
        case 3:
            memory = Math.round(memorynum / 1000 * 10) / 10 + "KB";
            break;
        case 6:
            memory = Math.round(memorynum / 1000000 * 10) / 10 + "MB";
            break;
        case 9:
            memory = Math.round(memorynum / 1000000000 * 10) / 10 + "GB";
            break;
        case 12:
            memory = Math.round(memorynum / 1000000000000 * 10) / 10 + "TB";
            break;
    }
};
function ask() {
    var a1 = prompt("Hey " + afunc() + ", what do you want me to do?");
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
            alert("Successfully shut down, saving " + memory + ".");
            shut
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
        case "\/":
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
                    addends.push(parseInt(prompt("What is your first addend?"), 10));
                    var another = confirm("Would you like to add another addend?");
                    while (another) {
                        addends.push(parseInt(prompt("What is the new addend?"), 10));
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
                    var small = parseInt(prompt("What is your second number?"), 10);
                    alert("The difference is " + large - small + ".");
                    break;
                case "*":
                case "times":
                case "multply":
                case "multiplication":
                case "x":
                case "X":
                    var factors = [];
                    factors.push(parseInt(prompt("What is your first factor?"), 10));
                    var newF = confirm("Would you like to add another factor?");
                    while (newF) {
                        factors.push(parseInt(prompt("What is your new factor?"), 10));
                        newF = confirm("Would you like to add another factor?");
                    }
                    var product = 1;
                    for (var j = 0; j < factors.length; j++) {
                        product *= factors[i];
                    }
                    break;
                case "\/":
                case "divide":
                case "division":
                case "fraction":
                    var dividend = parseInt(prompt("What is your dividend?"), 10);
                    var divisor = parseInt(prompt("What is your divisor?"), 10);
                    alert("The quotient is " + dividend / divisor + ".");
                    break;
                case "square root":
                case "sqrt":
                case "sqroot":
                case "sqrtx":
                    var qwe = parseInt(prompt("What is your number?"),10);
                    alert("The square root of " + qwe + " is " + Math.round(qwe * 1000) / 1000);
            }
            break;
    }
}
