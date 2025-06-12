
export let person = {
    name: 'Leo',
    age: 30,
    isActive: true,
    hobbies: ['futbol', 'programación'],
    toString() {
        let objeto = this.name + ' ' + this.age + ' ' + this.hobbies;
        console.log(objeto);
    }
}

person.toString();