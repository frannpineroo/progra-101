export let people = ['Juan', 'Pedro', 'Maria', 'Ana', 'Luis'];

function printPeople(people: string[]): void {
    for (let i = 0; i < people.length; i++) {
        console.log(`Persona ${i + 1}: ${people[i]}`);
    }
}

printPeople(people);