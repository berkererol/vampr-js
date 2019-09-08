class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampiresFromOriginal = 0;
    let currentVampire = this;
    while (currentVampire.creator) {
      currentVampire = this.creator;
      numberOfVampiresFromOriginal++;
    }
    return numberOfVampiresFromOriginal;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name) {
      return this;
    }

    let vampire;
    for (let offspring of this.offspring) {
      vampire = offspring.vampireWithName(name);
      if (vampire != null) {
        return vampire;
      }
    }

    return null;
  }

    // Returns the total number of vampires that exist
  get totalDescendents() {
    let total = 0;

    total += this.numberOfOffspring;

    for (let offspring of this.offspring) {
      total += offspring.totalDescendents;
    }

    return total;
  }
  

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let allMillennials = [];
    
    console.log( "Year Converted: " +  this.yearConverted);
    if (this.yearConverted > 1980) {
      allMillennials.push(this);
    }
    
    for (let offspring of this.offspring) {
      let childMillennials = offspring.allMillennialVampires
      if (childMillennials != null) {
        allMillennials = allMillennials.concat(childMillennials)
      }
    }
    
    return allMillennials;
  }

}





module.exports = Vampire;

