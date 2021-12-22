window.alert("This is an alert! Javascript is running!");

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName,playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Fight function
var fight = function(enemyName) {
    // repeat and execute as long as the enemy robot is alive
    while(playerHealth > 0 && enemyHealth > 0)  {
    
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if the player choses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to skip?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }
    // console.log(promptFight);

    //if player choses to fight, then fight
    // if (promptFight === "fight" || promptFight === "FIGHT") {

    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

        // award player money for winning 
        playerMoney = playerMoney + 20;

        // leave while() loop since enemy is dead
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked. 
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    
    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        // leave while() loop if player is dead 
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    
    
    // if no (false), ask question again by running fight() again
//     else {
//         fight();
//     }
    
// }   else {
//     window.alert("You need to choose a valid option. Try again!");
// }
    }
};

//function to start a new game 
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    // function to start a new game
    for(var i = 0; i < enemyNames.length; i++) {
        // let player know what round they are in, remember that arrays start at 0 so the 1 needs to be added to it.
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round: " + (i + 1) );
        
        // pick new enemy to fight based on the index of the enemyNames array.
        var pickedEnemyName = enemyNames[i];
        // reset enemyHealth before starting new fight
        enemyHealth = 50;
        // use debugger to pause script from running and check what's going on at that moment in the code.
        debugger;
        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter.
        fight(pickedEnemyName);
        }   
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // run endGame 
    endGame();
};

//function to end the game
var endGame = function() {
    // if the player is still alive
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        // restart the game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};
// start the game when the page loads
startGame();