let num = [5, 2, 8, 6];
num.push(9);
num.sort();
console.log(num)
console.log(`O vetor tem ${num.length} posições.`);

let pos = num.indexOf(8);
console.log(`O valor 8 está na posição ${pos}`)

/*
for (let i = 0; i < num.length; i++) {
    console.log(`O valor ${i} da array é: ${num[i]}`);
}
*/

for (let i in num) {
    console.log(`O valor ${i} da array é: ${num[i]}`);
}