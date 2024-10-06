// #1 creating class uisng class Name

class Mobile {
    // for passing properties
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    // get method
    calling() {
        console.log(`calling to a person`);
    }

    // set method
    setName(newName) {
        this.name = newName;
    }
}

// #2 creating/Instatiating Objects by using class

// passing name and color of mobile
let apple = new Mobile(`Model X`, `Rose Pink`)
console.log(apple)

// #3 getting/ setting properties and actions with created object
console.log(apple.color);
console.log(apple.name);
apple.calling()
apple.setName("iPhone 16+")
console.log("Changed mobile name: ", apple.name);




