class Person {
    firstname = 'Michael';
    lastname = 'Pope';
    
    constructor() {

    }

    introduceMyself() {
        console.log(`${this.firstname} ${this.lastname}`);
    }
};

class Car {
    name;
    speed;
    coolness;

    constructor(name: any, speed: any, coolness: any) {
        this.name = name;
        this.speed = speed;
        this.coolness = coolness;
    }

    getStats() {
        console.log(`name: ${this.name} speed: ${this.speed} coolness: ${this.coolness}`);
    }
}

// Toyota is an instance of the car class
const Toyota = new Car('Toyota', 35, 4);
Toyota.getStats();

const Hellcat = new Car('Hellcat', 100, 7.5);
Hellcat.getStats();

const Tesla = new Car('Tesla', 85, 8);
Tesla.getStats();

// Toyota is car
// hellcat is car
// tesla is car