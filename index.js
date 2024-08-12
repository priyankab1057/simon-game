$(document).on('keypress', function () {
    $('h1').text("Level 1");
    var randomNum = Math.floor(Math.random() * 4 + 1);
    if (randomNum === 1) {
        $('div.green').toggleClass('one');
    } else if (randomNum === 2) {
        $('div.red').toggleClass('two');
    } else if (randomNum === 3) {
        $('div.yellow').toggleClass('three');
    }
    else {
        $('div.blue').toggleClass('four');
    }

    console.log(randomNum);
});

// var gamePattern = [];


// var divColors = ['red', 'blue', 'green', 'yellow'];

// var randomChosenColour = divColors[randomNum];

// function nextSequence() {
//     var randomNum = Math.floor(Math.random() * 4);
//     return randomNum;
// }

// gamePattern.push(randomChosenColour);

// $('div').on('click', function () {
//     var userChosenColor = [];
//     if (this.hasClass('green')) {
//         userChosenColor.push('green');
//     } else if (this.hasClass('red')) {
//         userChosenColor.push('red');
//     } else if (this.hasClass('yellow')) {
//         userChosenColor.push('yellow');
//     } else {
//         userChosenColor.push('blue');
//     }

// })

// function playSound(name) {
    
// }