interface Person {
    name: string;
    age: number;
    isActive: boolean;
};

export let fernando: Person = {
    name: 'Fernando',
    age: 35,
    isActive: true,
};

let emily: Person = {
    name: 'Emily',
    age: 30,
    isActive: false,
};

let juan: Person = {
    name: 'Juan',
    age: 37,
    isActive: true,
};

let people: Person[] = [fernando, emily, juan];

for (let i = 0; i < people.length; i++) {
    let person = people[i];
    console.log(`Name: ${person.name}, Age: ${person.age}`);
}