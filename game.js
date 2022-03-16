class Character{
    constructor(name, health, stamina) {
        this.name = name
        this.health = health || 100
        this.tired = false
        this.stamina =  stamina || 20
        this.isAlive = true
    }
    attack(playerAttacked) {
        
        this.stamina -= 5
        playerAttacked.health -= Math.floor(Math.random() * 50) + 20
        console.log(`Il reste ${playerAttacked.health} points de vie à ${playerAttacked.name}`)
        console.log(`${this.name} a ${this.stamina} points d'endurance`)

        if (this.stamina < 1) {
            this.tired = true
        }
        if (playerAttacked.health < 1) {
            playerAttacked.isAlive = false
            console.log(`${playerAttacked.name} est mourru !`)
            return
        }
    }
}

function mortalKombat(player1, player2) {
    // for (let tour = 0; tour < 50; tour ++) {
    //     console.log(`Tour ${tour} :`)
    //     if (this.tired === true) {
    //         console.log(`${this.name} ne peut plus attaquer !`)
    //         return
    //     } else if (tour % 2 === 1) {
    //         player1.attack(player2)
    //     } else {
    //         player2.attack(player1)
    //     }
    // }
    let tour = 0;

    do {
        tour ++
        if (this.tired === true) {
            console.log(`${this.name} ne peut plus attaquer !`)
            return
        } else if (tour % 2 === 1) {
            player1.attack(player2)
        } else {
            player2.attack(player1)
        }

        if (player1.health < 1 || player2.health < 1) {
            if (player1.isAlive === true && player2.isAlive === false) {
                console.log(`${player1.name} a gagné !`); 
                break;           
            } else if (player2.isAlive === true && player1.isAlive === false) {
                console.log(`${player2.name} a gagné !`)
                break;
            }
        }
      } while (player1.health > 1 || player2.health > 1)

    
}
    

module.exports = {Character, mortalKombat}