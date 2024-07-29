document.body.addEventListener('load', carregar());

function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img');
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    msg.innerText = `Agora são ${hora}:${min}`

    if (hora >= 0 && hora < 12) {
        img.style = "background-image: url(imagens/manha.jpg);"
        document.body.style.background = '#f5b56c'
    } else if (hora >= 12 && hora < 18) {
        img.style = "background-image: url(imagens/tarde.jpg);"
        document.body.style.background = '#f99740'
    } else {
        img.style = "background-image: url(imagens/noite.jpg);"
        document.body.style.background = '#3d1c51'
    }
}