var contador = document.querySelector('.badge');


document.querySelector('#um').addEventListener('click', function(){
  var numero = parseInt(contador.textContent) + 1;
  contador.textContent = numero;
});

document.querySelector('#dois').addEventListener('click', function(){
    var numero = parseInt(contador.textContent) + 1;
    contador.textContent = numero;
  });