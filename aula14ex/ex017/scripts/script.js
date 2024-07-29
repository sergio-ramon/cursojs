var btn = document.getElementById('btn');
btn.addEventListener('click', gerar);

function gerar(i) {
    let num = document.getElementById('txtnum');
    let res = document.getElementById('res');

    if (num.value.length == 0) {
        window.alert('Digite um valor!')
    } else {
        let n = Number(num.value);
        res.innerHTML = null;
        for (i = 0; i <= 10; i++) {
            let item = document.createElement('option');
            item.text = `${n} x ${i} = ${n*i}`;
            item.value = `tab${i}`;
            res.appendChild(item);
        }
    }
}