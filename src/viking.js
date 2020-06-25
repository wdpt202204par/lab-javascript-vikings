// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);

    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage); // call inherited receiveDamage()

    let msg;
    if (this.health > 0) {
      msg = `${this.name} has received ${damage} points of damage`;
    } else {
      msg = `${this.name} has died in act of combat`;
    }

    return msg;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage); // call inherited receiveDamage()

    let msg;
    if (this.health > 0) {
      msg = `A Saxon has received ${damage} points of damage`;
    } else {
      msg = `A Saxon has died in combat`;
    }

    return msg;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const viking_index = Math.floor(Math.random()*this.vikingArmy.length);
    const saxon_index = Math.floor(Math.random()*this.saxonArmy.length);

    const viking = this.vikingArmy[viking_index];
    const saxon = this.saxonArmy[saxon_index];

    const saxon_damage = saxon.receiveDamage(viking.strength);
    if (saxon.health <= 0) {
      this.saxonArmy.splice(saxon_index, 1);
    }

    return saxon_damage;
  }

  saxonAttack() {
    const viking_index = Math.floor(Math.random()*this.vikingArmy.length);
    const saxon_index = Math.floor(Math.random()*this.saxonArmy.length);

    const viking = this.vikingArmy[viking_index];
    const saxon = this.saxonArmy[saxon_index];

    const viking_damage = viking.receiveDamage(saxon.strength);
    if (viking.health <= 0) {
      this.vikingArmy.splice(viking_index, 1);
    }

    return viking_damage;
  }

  showStatus() {
    if (this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length <= 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}