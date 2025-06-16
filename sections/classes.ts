
export class Car {
    public brand: string;
    public model: string;
    public fuelTank: number;
    public isRunning: boolean;
    public type: string;
    private readonly createdAt: number;

    constructor(brand: string, type: string) {
        this.brand = brand;
        this.model = 'None';
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = type;
        this.createdAt = 12345678;
    }

    turnOn() {
        if (this.isRunning) {
            console.log('El auto ya esta encendido.');
            return;
        }

        if (this.fuelTank <= 0) {
            console.log("El carro no tiene combustible.");
            return;
        }

        this.isRunning = true;
        console.log('El auto se ha encendido.');
    }

    fillTank(gas: number) {
        this.fuelTank = gas;
        if (gas > 100) {
            this.fuelTank = 100;
            console.log("Tanque lleno, ya no se puede cargar mas combustible")
        } else {
            console.log("Combustible cargado")
        }
    }
}

let myMazda = new Car('Mazda', 'sedan');

console.log(myMazda);
myMazda.turnOn();
myMazda.fillTank(80);
console.log(myMazda);