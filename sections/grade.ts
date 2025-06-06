

console.log("Start of the program");
export let grade:number = 70;
let gradeLetter:string;

if (grade >= 90) {
    gradeLetter = "A";
}else if (grade >= 80) {
    gradeLetter = "B";
}else if (grade >= 70) {
    gradeLetter = "C";
}else if (grade >= 60) {
    gradeLetter = "D";
}else {
    gradeLetter = "F";
}

console.log(`La nota final es una: ${gradeLetter}`);

console.log("End of the program");
