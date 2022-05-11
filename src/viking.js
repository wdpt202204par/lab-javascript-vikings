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
class Viking { }

// Saxon
class Saxon { }

// War
class War { }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
