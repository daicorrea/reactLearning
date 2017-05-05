class Person {
    constructor(name) {
        this.name = name
    }

    toString() {
        return `Person: ${this.name}`
    }
}

const person = new Person("Daiane");
console.log(person);