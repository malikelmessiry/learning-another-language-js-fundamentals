// ======================
//      VARIABLES
// ======================
// veggie = "carrot"
// veggie = "onion"
let veggie = 'carrot';
veggie = 'onion';
//
//
// =========================
//      DATA STRUCTURES
// =========================

// animals = ["tiger", "panda", "raccoon"]
// animals.append("opossum")
let animals = ['tiger', 'panda', 'raccoon'];

// dog = {"name": "Sprinkles", "age": 3}
// dog["is_friendly"] = True

//
//
// =================
//       LOOPS
// =================

// num = 5
// for i in range(num):
//    print(i)

// for animal in animals:
//    print(animal)

// for k, v in dog.items():
//    print(f"{k}: {v}")

//
//
// ===================================
//       FUNCTIONS / CONDITIONALS
// ===================================

// def fizzbuzz(num):
//    if num % 3 == 0 and num % 5 == 0:
//        return "fizzbuzz"
//    elif num % 3 == 0:
//        return "fizz"
//    elif num % 5 == 0:
//        return "buzz"
//    else:
//        return num

// Old way: Function Declaration
// function fizzBuzz(num) {
//     if (num % 3 === 0 && num % 5 === 0) {
//         return 'fizzbuzz';
//     } else if (num % 3 === 0) {
//         return 'fizz';
//     } else if (num % 5 === 0) {
//         return 'buzz';
//     } else {
//         return num;
//     }
// }
// console.log(fizzBuzz(15));
//
// ES6 way: Function Expression
const fizzBuzz = function (num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzbuzz';
    } else if (num % 3 === 0) {
        return 'fizz';
    } else if (num % 5 === 0) {
        return 'buzz';
    } else {
        return num;
    }
}
console.log(fizzBuzz(5));

//
//
// ======================
//       CLASSES
// ======================

// class Animal:
//    def __init__(self,species,name):
//        self.species = species
//        self.name = name
//
//    def __str__(self):
//        return f"{self.name} is a {self.species}"

class Animal {
    constructor(species, name) {
        this.species = species;
        this.name = name;
    }

    toString() {
        return `${this.name} is a ${this.species}`;
    }
}



const cow = new Animal('milk cow', 'Milky');
console.log(cow);
console.log(cow.toString());

// class Dog(Animal):
//    def __init__(self, name, trick):
//        super().__init__(species="dog", name=name)
//        self.trick = trick
//
//    def __str__(self):
//        return f"{super().__str__()} that can {self.trick}"

class Dog extends Animal {
    constructor(name, trick) {
        super('dog', name);
        this.trick = trick;
    }
    toString() {
        return `${super.toString()} that can ${this.trick}`
    }
}

const dog = new Dog('Lucky', 'shake hands');
console.log(dog.toString());