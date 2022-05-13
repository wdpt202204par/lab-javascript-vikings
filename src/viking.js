// Iteration 1: Soldier
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

// Iteration 2: Viking
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

// Iteration 3: Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage)
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else return "A Saxon has died in combat";

  }
}

// Iteration 4: War
class War {
  constructor() {
    this.vikingArmy = [];     // Empty Vikings army when creating a new "War" object
    this.saxonArmy  = [];     // Empty Saxons army when creating a new "War" object
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    // Checking if both armies still have soldier (cannot launch an attack if one of them is already empty)
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {

      // Choosing random Saxon and Viking in armies arrays (= choosing random indexes)
      const saxonIndex  = Math.floor(Math.random() * this.saxonArmy.length);
      const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

      // The randomly selected Saxon receive some damage from the randomly selected Viking
      const attackResult = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].strength);

      // Removing dead Saxons from the saxonArmy array
      this.saxonArmy = this.saxonArmy.filter(saxon => saxon > 0);

      // Removing dead Saxons with a "for" loop
      //for (let i = 0; i < this.saxonArmy.length; i++) {
      //  if (this.saxonArmy[i].health <= 0) {
      //    this.saxonArmy.splice(i, 1);
      //  }
      //}

      return attackResult;
    }
  }

  saxonAttack() {
    // Checking if both armies still have soldier (cannot launch an attack if one of them is already empty)
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {

      // Choosing random Viking and Saxon in armies arrays (= choosing random indexes)
      const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
      const saxonIndex  = Math.floor(Math.random() * this.saxonArmy.length);

      // The randomly selected Viking receive some damage from the randomly selected Saxon
      const attackResult = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[saxonIndex].strength);

      this.vikingArmy = this.vikingArmy.filter(viking => viking > 0);

      return attackResult;
    }
  }

  saxonAttack() {
    return this.attack("viking");
  }

  // Iteration 5: generic "attack" method and "showStatus"

  attack(victim) {
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      let attacker;

      // Getting attacker's class name depending on "victim" value passed to this method
      if      (victim === "viking") { attacker = "saxon";}
      else if (victim === "saxon")  { attacker = "viking"; }
      else    {
        console.log("Unknown type of soldier");
        return;
      }

      // Choosing random soldiers
      const victimIndex     = Math.floor(Math.random() * this[`${victim}Army`].length);
      const attackerIndex   = Math.floor(Math.random() * this[`${attacker}Army`].length);

      // Attacking the victim
      const attackResult    = this[`${victim}Army`][victimIndex].receiveDamage(this[`${attacker}Army`][attackerIndex].strength);

      // Removing dead victims from the proper array
      this[`${victim}Army`] = this[`${victim}Army`].filter(victim => victim > 0);

      return attackResult;
    }
  }

  // Updated versions of "vikingAttack" and "saxonAttack" methods (overwrite the previous ones)
  vikingAttack() {
    return this.attack("saxon");
  }

  saxonAttack() {
    return this.attack("viking");
  }

  showStatus() {
    const saxons  = this.saxonArmy.length;
    const vikings = this.vikingArmy.length;

    // No Saxon alive (ie. saxons === 0, which can be expressed as "!saxon is true")
    if (!saxons) {
      return "Vikings have won the war of the century!";
    // No Viking alive
    } else if (!vikings) {
      return "Saxons have fought for their lives and survived another day...";
    // If there are at least 1 Saxon and 1 Viking left, saxons * vikings >= 1 (which evaluates to "true")
    } else if (saxons * vikings) {
      return "Vikings and Saxons are still in the thick of battle.";
    };
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
