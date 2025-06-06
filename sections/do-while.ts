
export let gasTank:number = 0;

do {
    console.log("Gasolina restante:", gasTank);

    gasTank -= 10; // Consuming 10 units of gas in each iteration
} while (gasTank > 0);

console.log("Ya no tiene gasolina")