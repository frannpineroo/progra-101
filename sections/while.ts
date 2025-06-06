
export let gasTank:number = 50;

while (gasTank > 0) {
    console.log("Gasolina restante:", gasTank);

    gasTank -= 10; // Consuming 10 units of gas in each iteration
}

console.log("Ya no tiene gasolina")