// creating constructor functions.

function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}

function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}

function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}

const Samson = new Scooter(2015, "red", "swoosh");
const Allison = new Driver("Allison", "16 years", "2 years");
const poshHotel = new PickupLocation("123 Broadway", "New York City");