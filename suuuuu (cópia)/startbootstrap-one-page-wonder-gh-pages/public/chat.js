const lista = document.getElementById('chat');
const razaoNome = document.getElementById('texto');
const addButton = document.getElementById('enviar');
const db1 = firebase.database();

addButton.addEventListener('click', function(e) {  
    msgn = document.getElementById("texto");
    var dados = {
        msgn:msgn.value
    }
    db1.ref('/dados').push(dados);
    e.preventDefault();
});



  db1.ref('/dados').on('child_added', function(item) {
    var childKey = item.key;
    var div = document.createElement('div');
    div.className = 'msj-rta macro';

    var pp = document.createElement('p');
    pp.style.width = 100 + '%';
    div.appendChild(pp);

    var div2 = document.createElement('div');
    div2.className = 'text text-r';
    div2.textContent = item.val().msgn;
    pp.appendChild(div2);

    var img = document.createElement('img');
    img.className = 'img-fluid rounded-circle';
    img.setAttribute("id", "foto");
    img.setAttribute("src", "img/avatar5.jpg");
    lista.appendChild(img);
    lista.appendChild(div);
    
  }); 

