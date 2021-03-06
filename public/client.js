/* eslint-disable no-use-before-define */
// Define index elements here.
const firstNameInput = document.getElementById('first_name');
const lastNameInput = document.getElementById('last_name');
const createPersonBtn = document.getElementById('people');

// Arrays for holding attributes that are selected at random.
const firstNames = ['Lugan', 'Skerk', 'Visshi', 'Qammar', 'Solon'];
const lastNames = ["Bij'dal", 'Thoon', 'Kafortu', 'Sander', 'Qirnal'];
const philosophies = ['Materialist', 'Ermean', 'Nihilistic', 'Brutalist'];

// Default people
// eslint-disable-next-line no-unused-vars
const donJang = new Person('Don', 'Jang');
const rhynn = new Person('Rhynn', 'Ardenn');

// eslint-disable-next-line max-len
// This class takes only two arguments, a first or birth name, and a last or sonship name. The Person class should only be used to create "born" persons.
class Person {
  constructor(firstName, lastName) {
    this.birthName = firstName;
    this.sonshipName = lastName;
    this.consciousnessReleased = false;
    this.philosophy = philosophies[randomPhilosophy()];
  }

  // Will return the full name of the born person.
  get fullName() {
    return `${this.birthName} ${this.sonshipName}`;
  }

  // Return the name of the Alter.
  get alterName() {
    return `${this.alterEgo.birthName} ${this.alterEgo.sonshipName}`; 
  }


  // This method is used to create new alter persons as an object within the born person.
  createAlter() {
    this.alterEgo = new Alter(firstNames[randomName()], lastNames[randomName()]);
  }
}

class Alter extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
    this.active = false;
    this.aggressive = null;
    this.hp = 100;
  }
}

// Helper function to generate a random number that is the length of the array being queried.
const randomName = function returnRandomNumberForNames() {
  return Math.floor(Math.random() * firstNames.length);
};
const randomPhilosophy = function returnRandomNumberForPhilosophies() {
  return Math.floor(Math.random() * philosophies.length);
};


// Create new Person with one Alter on button click and display a summary.
document.getElementById('create-person').addEventListener('click', () => {
  const newPerson = new Person(firstNameInput.value, lastNameInput.value);
  newPerson.createAlter();
  return createPersonBtn.innerHTML = `${newPerson.fullName} is of ${newPerson.philosophy} philosophy and has one alter named ${newPerson.alterName} which is of ${newPerson.alterEgo.philosophy} philosophy.`;
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
