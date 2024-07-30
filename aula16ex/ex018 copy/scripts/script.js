let num = document.getElementById('txtnum');
let list = document.getElementById('list');
let res = document.getElementById('res');
let valores = [];

function isNumber(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inList(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar(){
    if (isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value));

        let item = document.createElement('option');
        item.text = `O valor ${num.value} foi adicionado.`
        list.appendChild(item);
    } else {
        alert('Valor inválido ou já adicionado.');
    }
    num.value = null;
    num.focus();
}

function finalizar(){
    let tam = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;

    for (let pos in valores) {
        soma += valores[pos];
        if (valores[pos] > maior){
            maior = valores[pos];
        }
        if (valores[pos] < menor){
            menor = valores[pos];
        }
    }
    let media = soma / tam;

    res.innerHTML = null;
    res.innerHTML += `<p>Foram adicionados ${tam} valores;</p>`
    res.innerHTML += `<p>O maior valor é: ${maior};</p>`
    res.innerHTML += `<p>O menor valor é: ${menor};</p>`
    res.innerHTML += `<p>A soma dos valores é: ${soma};</p>`
    res.innerHTML += `<p>A média dos valores é: ${media};</p>`
}