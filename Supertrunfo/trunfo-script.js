var carta1 = {
    nome: "Charmander",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    atributos: {
        ataque: 80,
        defesa: 60,
        beleza: 65
    }
}
var carta2 = {
    nome: "Bulbasaur",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    atributos: {
        ataque: 70,
        defesa: 70,
        beleza: 60
    }
}
var carta3 = {
    nome: "Squirtle",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
    atributos: {
        ataque: 75,
        defesa: 85,
        beleza: 65
    }
}
var carta4 = {
    nome: "Muk",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/089.png",
    atributos: {
        ataque: 80,
        defesa: 60,
        beleza: 30
    }
}
var carta5 = {
    nome: "Axew",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/610.png",
    atributos: {
        ataque: 80,
        defesa: 85,
        beleza: 60
    }
}
var carta6 = {
    nome: "Jirachi",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/385.png",
    atributos: {
        ataque: 60,
        defesa: 60,
        beleza: 70
    }
}
var carta7 = {
    nome: "Rapidash",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/078.png",
    atributos: {
        ataque: 70,
        defesa: 60,
        beleza: 60
    }
}
var carta8 = {
    nome: "Guzzlord",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/799.png",
    atributos: {
        ataque: 60,
        defesa: 80,
        beleza: 30
    }
}

var cartaMaquina = 0;
var cartaJogador = 0;
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];

var pontosJogador = 0;
var pontosMaquina = 0;

atualizaQuantidadeDeCartas();
atualizaPlacar();

function atualizaPlacar(){
    var divPlacar = document.getElementById("placar");

    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina";
    divPlacar.innerHTML = html;
}

function atualizaQuantidadeDeCartas(){
    var divQuantidadeCartas = document.getElementById("quantidade-cartas");

    var html = "Quantidade de cartas no joga: " + cartas.length;
    divQuantidadeCartas.innerHTML = html;
}

function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina];
    cartas.splice(numeroCartaMaquina, 1);

    var numeroCartaJogador = parseInt(Math.random() * cartas.length);
    cartaJogador = cartas[numeroCartaJogador];
    cartas.splice(numeroCartaJogador, 1);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirCartaJogador();
}

function exibirCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador");
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    var opcoesTexto = "";

    for(var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura  + nome + html + opcoesTexto + "</div>";
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");

    for(var i = 0; i < radioAtributo.length; i++){
        if(radioAtributo[i].checked) {
            return radioAtributo[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
    
    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = "<p class='resultado-final'>Venceu</p>";
        pontosJogador++;
    }else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Perdeu</p>";
        pontosMaquina++;
    }else{
        htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }

    if(cartas.length == 0){
        alert("Game over!");

        if(pontosJogador > pontosMaquina) {
            htmlResultado = "<p class='resultado-final'>Venceu</p>";
        }else if(pontosJogador < pontosMaquina){
            htmlResultado = "<p class='resultado-final'>Perdeu</p>";
        }else{
            htmlResultado = "<p class='resultado-final'>Empatou</p>";
        }
    } else {
        document.getElementById("btnProximaRodada").disabled = false;
    }

    divResultado.innerHTML = htmlResultado;

    document.getElementById("btnJogar").disabled = true;

    atualizaPlacar();
    exibeCartaMaquina();
    atualizaQuantidadeDeCartas();
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    var opcoesTexto = "";

    for(var atributo in cartaMaquina.atributos){
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>";
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaMaquina.innerHTML = moldura  + nome + html + opcoesTexto + "</div>";
}

function proximaRodada() {
    var divCartas = document.getElementById("cartas");

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`;

    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnProximaRodada").disabled = true;

    var divResultado = document.getElementById("resultado");
    divResultado.innerHTML = "";
}