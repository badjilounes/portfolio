export class Character{
    life = 100;
    weapon_damage = 20;
    weapon_name = 'Oui';
    mana = 50;

    potionLifeValue = 50;

    constructor(c?: Character){
        if (!!c) {
            this.life = c.life;
            this.mana = c.mana;
            this.weapon_damage = c.weapon_damage;
            this.weapon_name = c.weapon_name;
        }
    }

    receiveDamage(damage: number): void {
        this.life-=damage;
    }
    attack(c: Character): void {
        c.receiveDamage(this.weapon_damage);
    }
    drinkPotionOfLife(): void {
        this.life += this.potionLifeValue;
    }
    changeWeapon(new_weapong_name: string): void {
        this.weapon_name = new_weapong_name;
    }
    isAlive(): boolean { return this.life > 0; }
}