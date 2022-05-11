// Soldier
class Soldier {
  constructor(h, s) {
    this.strength = s;
    this.health = h;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(d) {
    this.health -= d;
  }


}

// Viking
class Viking extends Soldier {
  constructor(name, health, strentgh) {
    super(health, strentgh);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);

    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    } else {
      return `${this.name} has received ${damage} points of damage`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage)
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else return "A Saxon has died in combat"

  }
}

// War
class War { }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
