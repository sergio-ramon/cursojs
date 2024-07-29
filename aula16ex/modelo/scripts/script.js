var narray = [];

function adicionar() {
    let num = Number(document.getElementById('txtnum').value);
    let res = document.getElementById('res');

    if (narray.includes(num)) {
        alert('ERRO!')
    } else {
        narray.push(num);
    
        let item = document.createElement('option');
        item.value = `n${num}`;
        res.appendChild(item);
        item.text = `O número ${num} foi adicionado!`;
    }
}

function finalizar() {
    
}