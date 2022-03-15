class Character{
    constructor(name, health, tired) {
        this.name = name;
        this.health = health || 100;
        this.tired = tired || false;
        this.stamina = 35;
        this.isAlive = true;
        this.canAttack = true

    }
    attack(playerAttacked) {
        this.stamina -= 5
        playerAttacked.health -= Math.floor(Math.random() * 50) + 20;
        if (this.stamina < 1) {
            this.tired = true;
            console.log(`${this.name} ne peut plus attaquer !`)
        }
        if (playerAttacked.health < 1) {
            playerAttacked.isAlive = false
            console.log(`${playerAttacked.name} est mourru !`)
        }
    }
}

function mortalKombat(player1, player2) {

    do {
      player1.attack(player2)
      player2.attack(player1)
    } while (player1.health > 1 || player2.health > 1)
 
    if (player1.health < 1 && player2.health > 1) {
        console.log(`${player1.name} a gagné !`)
    } else if (player2.health < 1 && player1.health > 1) {
        console.log(`${player2.name} a gagné !`)
    }
}
    

module.exports = {Character, mortalKombat}