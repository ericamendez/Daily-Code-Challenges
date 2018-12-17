class Character {
    constructor(type, name, attackStrength, defenseStrength, specialMove) {
        this.type = type
        this.name = name
        this.hp = 100
        this.xp = 0
        this.attackStrength = attackStrength
        this.defenseStrength = defenseStrength
        this.specialMove = specialMove
    }

    attack(target){
        if(this.hp > 0){
            const damage = this.attackStrength
            console.log(`${this.name} attacks ${target.name} and causes ${damage} damage points`)
            target.hp -= damage
            if(target.hp > 0){
                console.log(`${target.name} has ${target.hp} health points left`)
            }else{
                target.hp = 0
                const bonusXP = 10;
                console.log(`${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`);
                this.xp += bonusXP;
            }
        }else{
            return `${this.name} can't attack (they've been eliminated)`
        }
    }

    defense(target){

    }

    move(){

    }

    specialAttack(){

    }

    describe(){
        return `${this.name} the ${this.type} has ${this.hp} hp and ${this.xp} xp. 
            Attack strength is at ${this.attackStrength} and defense strength is at ${this.defenseStrength}. 
            ${this.name}'s special move is ${this.specialMove}`
    }
}

let Erica = new Character()