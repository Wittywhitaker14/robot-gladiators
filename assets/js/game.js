var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
            
            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
            
            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
                );
                
                // check player's health
                if (playerHealth <= 0) {
                    window.alert(playerName + " has died!");
                } else {
                    window.alert(playerName + " still has " + playerHealth + " health left.");
                }
                // if player choses to skip
            } else if (promptFight === "skip" || promptFight === "SKIP") {
                var confirmSkip = confirm("Are you sure you'd like to quit?");
                
                if (confirmSkip) {
                    alert(playerName + " has decided to skip this fight. Goodbye!");
                    playerMoney = playerMoney - 2;
                }
                
                else {
                    fight();
                }
                window.alert(playerName + " has chosen to skip the fight!");
            } else {
                window.alert("You need to choose a valid option. Try again!");
            }
        };
        
        for(var i = 0; i < enemyNames.length; i++) {
           fight(enemyNames[i]);
          }
