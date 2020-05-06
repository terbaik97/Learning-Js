//Objects in Javascript
//key: value
//Each of these keys is referred to as properties
const school = {
  name: "Vivekananda School",
  location: "Delhi",
  established: "1971",
  displayInfo: function() {
    console.log(`${school.name} was established  
              in ${school.established} at ${school.location}`);
  },
  //Property names can also be strings
  "school name": "Vivekananda School",
};
console.log(typeof school);
console.log(school.name);
console.log(typeof displayInfo); // cause its a key
console.log(typeof school.displayInfo); //values that is a function type
school.displayInfo();

//Inherited Properties
// value: The property’s value.
// writable: When true, the property’s value can be changed
// enumerable: When true, the property can be iterated over by “for-in” enumeration. Otherwise, the property is said to be non-enumerable.
// configurable:If false, attempts to delete the property, change the property to be an access-or property, or change its attributes (other than [[Value]], or changing [[Writable]] to false) will fail.

//Creating Objects
//Object Constructor
const school1 = new Object();
school1.name = "Vivekanada school";
school1.location = "Delhi";
school1.established = 1971;

console.log(typeof school1); //Object that been created by object constructor
console.log(school1);

school.displayInfo = function() {
  console.log(`${school1.name} was established  
          in ${school1.established} at ${school1.location}`);
};

school.displayInfo();

//Constructors:
function Vehicle(name, maker) {
  this.name = name;
  this.maker = maker;
}

let car1 = new Vehicle("Fiesta", "Ford"); //att went to a function
let car2 = new Vehicle("Santa Fe", "Hyundai");

console.log(car1.name); // Output: Fiesta
console.log(car2.name); // Output: Santa Fe

//Class
class people {
  constructor() {
    this.name = "Adam";
  }
}

let person2 = new people();

// Output : Adam
console.log(person2.name);

//Accessing Object Members

//1-dot notation :
//(objectName.memberName)
console.log(school.name);

//2-Bracket Notation
//objectName["memberName"]
console.log(school["name"]);

//notes
//somePerson.first name // invalid if string cant use dot

//Iterating over all keys of an object

let person5 = {
  gender: "male",
};
var person1 = Object.create(person5);
person1.name = "Adam";
person1.age = 45;
person1.nationality = "Australian";

for (let key in person1) {
  // Output : name, age, nationality
  // and gender
  console.log(key);
}
