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
        switch (difficulty.toLowerCase) {
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
    while (a0 !== undefined) {
        alert("Tell me your name.");
        a0 = prompt("What's your name?");
    }
    alert("Hello, " + a0 + ".");
    a1 = prompt("What do you want me to do?\nAlways type in lowercase letters.");
    switch (a1) {
        case "go away":
        case "shut down":
        case "shut up":
        case "off":
        case "turn off":
        case "leave":
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
    }
}
