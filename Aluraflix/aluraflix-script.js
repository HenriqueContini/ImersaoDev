function adicionarFilme() {
  
    var campoFilmeFavorito = document.querySelector("#filme");
    var filmeFavorito = campoFilmeFavorito.value;
    if(filmeFavorito.endsWith(".jpg")){
      listarFilmesNaTela(filmeFavorito);
    }else{
      alert("Não é uma imagem!!!");
    }
    
    campoFilmeFavorito.value = ""
}
  
function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes');
  var elementoFilme = "<img src=" + filme + ">";
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
}

listarFilmesNaTela("https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX182_CR0,0,182,268_AL_.jpg");
listarFilmesNaTela("https://m.media-amazon.com/images/M/MV5BNTAxZWM2OTgtOTQzOC00ZTI5LTgyYjktZTRhYWM4YWQxNWI0XkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_UX182_CR0,0,182,268_AL_.jpg");
listarFilmesNaTela("https://m.media-amazon.com/images/M/MV5BYzQ0ZWIxZjAtYWI3Yy00MGM0LWFjOGYtNzcyYThiOTA3ODI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX182_CR0,0,182,268_AL_.jpg");
listarFilmesNaTela("https://m.media-amazon.com/images/M/MV5BMmYxZWY2NzgtYzJjZC00MDFmLTgxZTctMjRiYjdjY2FhODg3XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_UX182_CR0,0,182,268_AL_.jpg");
