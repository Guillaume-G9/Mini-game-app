let {Character} = require('./game')
let {mortalKombat} = require('./game')



test('should have a name', () => {
    let perso1 = new Character('Brousse_Lit')
    let perso2 = new Character('Jicévédé')

    expect(perso1.name).toBe('Brousse_Lit')
    expect(perso2.name).toBe('Jicévédé')
})

test('should have different health capacity', ()=> {
    let perso1 = new Character('Brousse_Lit', 145)
    let perso2 = new Character('Jicévédé')

    expect(perso1.health).toBe(145)
    expect(perso2.health).toBe(100)
})

test('one player should die when health is below 0', () => {
    let perso1 = new Character('Brousse_Lit', 145)
    let perso2 = new Character('Jicévédé', 15)

    expect(perso2.isAlive).toBe(true)
    perso1.attack(perso2)
    expect(perso2.isAlive).toBe(false)
})

test('two players should fight together', () => {
    let perso1 = new Character('Brousse_Lit', 10)
    let perso2 = new Character('Jicévédé', 200)

    mortalKombat(perso1,perso2)
    expect(console.log)
    
})