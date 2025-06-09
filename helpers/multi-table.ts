
export function multiTable(num1: number, num2: number): void {
    let base:number = num1;
    let limit:number = num2;

    while (base <= limit) {
        console.log("10 x", base, "=", base * 10);
        base++; // imprime la tabla del 10 desde el num1 hasta el num2
    }
}