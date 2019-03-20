// Define index elements here.
const firstNameInput = document.getElementById('first_name');
const lastNameInput = document.getElementById('last_name');
const person = document.getElementById('people');

// This class takes only two arguments, a first or birth name, and a last or sonship name. The Person class should only be used to create "born" persons.
class Person {
    constructor(firstName, lastName) {
      this._birthName = firstName;
      this._sonshipName = lastName;
      this.consciousnessReleased = false;
      this.philosophy = philosophies[randomNum2()];
    }
    
    // Will return the full name of the born person.
    get fullName() {
      return `${this._birthName} ${this._sonshipName}`;
    }
    // Return the name of the Alter.
    get alterName() {
      return `${this._alter._birthName} ${this._alter._sonshipName}`; 
    }
  

    // This method is used to create new alter persons as an object within the born person.
    createAlter() {
        this._alter = new Alter(firstNames[randomNum()], lastNames[randomNum()]);
    }
  }

class Alter extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
    this._active = false;
    this._aggressive = null;
    this.hp = 100;
  }
}

// Helper function to generate a random number that is the length of the array being queried.
const randomNum = () => {
      return Math.floor(Math.random() * firstNames.length)
  }
const randomNum2 = () => {
      return Math.floor(Math.random() * philosophies.length)
  }

// Arrays for holding attributes that are selected at random.
const firstNames = ['Lugan', 'Skerk', 'Visshi', 'Qammar', 'Solon'];
const lastNames = ["Bij'dal", 'Thoon', 'Kafortu', 'Sander', 'Qirnal']
const philosophies = ['Materialist', 'Ermean', 'Nihilistic', 'Brutalist'];

// Default people
const donJang = new Person('Don', 'Jang');
const rhynn = new Person('Rhynn', 'Ardenn');

// Create new Person with one Alter on button click and display a summary.

document.getElementById('create-person').addEventListener('click', () => {
  const person1 = new Person(firstNameInput.value, lastNameInput.value);
  person1.createAlter();
  return person.innerHTML = `${person1.fullName} is of ${person1.philosophy} philosophy and has one alter named ${person1.alterName} which is of ${person1._alter.philosophy} philosophy.`;
});


/* TESTS
console.log(rhynn.fullName);
console.log(donJang.fullName);
donJang.createAlter();
donJang.createAlter();
rhynn.createAlter();
console.log(donJang);
console.log(rhynn);
*/