const person {
    firstName = "Sarwar",
    lastName = "Farhad",
    age = 24,
    Email = "atik.faisal111684@gmail.com",
    adress = {
        city = "chapainawabganj",
        zipCode = 6300,
    }
    getBirthYear(): function(){
        return2019 - this.age;
    }
}


let value;
value = person;

value = person.firstName;
value = person.lastName;
value = person.age;
value = person.adress.city;
value = person.adress.zipCode;
value = person.getBirthYear();

console.log(value);


const people = [
    {name: "sara", age:34},
    {name: "jim", age:26},
    {name: "abdul", age:30},
];

for(let i=0; i<people.length; i++){
    console.log(people[i].name)
}

