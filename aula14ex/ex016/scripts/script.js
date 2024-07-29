
var btn = document.getElementById('btn');
var res = document.getElementById('res');

btn.addEventListener('click', contar);

function contar(num) {
    let i = Number(document.getElementById('inicio').value);
    let f = Number(document.getElementById('fim').value);
    let p = Number(document.getElementById('passo').value);

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO]')
        res.innerHTML = null;
    }else {
        res.innerHTML = `Contando: <br>`;
        if (p <= 0) {
            p = 1;
        }
        if (i < f) {
            // Contagem crescente
            for (num = i; num < f; num += p) {
                res.innerHTML += `${num}, `;
            }
            res.innerHTML += `${num}.`;
        } else {
            // Contagem decrescente
            for (num = i; num > f; num -= p) {
                res.innerHTML += `${num}, `;
            }
            res.innerHTML += `${num}.`;
        }
    }
}