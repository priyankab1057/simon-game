var tileArrBlinked = [];
var tiles = ['green', 'red', 'yellow', 'blue'];
var userClicks = [];


var gameStart = $(document).on('keypress', () => {
    startAGame();
    var win = arraysHaveExactSameStringValues();
});


function startAGame() {
    console.log("Game has started!!");
    var til = tileColor();
    console.log(tileArrBlinked);
    console.log(userClicks);
}



function tileColor() {
    var randomClick = Math.floor((Math.random() * 4));

    if (randomClick === 0) {
        $('div.green').animate({ 'opacity': 0.3 });
        
        // tileColor();
    } else if (randomClick === 1) {
        $('div.red').animate({ 'opacity': 0.3 });
       
        // tileColor();
    } else if (randomClick === 2) {
        $('div.yellow').animate({ 'opacity': 0.3 });
       
        // tileColor();
    } else if (randomClick === 3) {
        $('div.blue').animate({ 'opacity': 0.3 });

        
        // tileColor();
    }

    return tileArrBlinked.push(tiles[randomClick]);

}

$('div.green').on('click', () => {
    userClicks.push('green');
});

$('div.red').on('click', () => {
    userClicks.push('red');
});

$('div.yellow').on('click', () => {
    userClicks.push('yellow');
});

$('div.blue').on('click', () => {
    userClicks.push('blue');
});

function restart() {
    $('h1').text("Game Over, Press Any Key to Start the Game");
    // startAGame();
}


function arraysHaveExactSameStringValues(tileArrBlinked, userClicks) {
    // Check if arrays have the same length
    if (tileArrBlinked.length !== userClicks.length) {
        return restart();  // Call restart if lengths differ
    }

    // Compare each element in the arrays
    for (let i = 0; i < tileArrBlinked.length; i++) {
        if (tileArrBlinked[i] !== userClicks[i]) {
            return restart();  // Call restart if any elements differ
        }
    }

    return startAGame();  // Call startAGame if all elements match
}
