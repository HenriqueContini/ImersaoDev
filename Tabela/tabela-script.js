var jogador1 = {
    nome: "Jogador 1",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

var jogador2 = {
nome: "Jogador 2",
vitorias: 0,
empates: 0,
derrotas: 0,
pontos: 0
}

var jogadores = [jogador1, jogador2];

function calculaPontos(jogador) {
var pontos = (jogador.vitorias * 3) + jogador.empates;
return pontos;
}

function exibirJogadores(jogadores) {
var html = "";

for(var i = 0; i < jogadores.length; i++){
    html += "<tr><td>" + jogadores[i].nome + "</td>";
    html += "<td>" + jogadores[i].vitorias + "</td>";
    html += "<td>" + jogadores[i].empates + "</td>";
    html += "<td>" + jogadores[i].derrotas + "</td>";
    html += "<td>" + jogadores[i].pontos + "</td>";
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>";
}

var tabelaJogadores = document.getElementById("tabelaJogadores");

tabelaJogadores.innerHTML = html;
}

function adicionarVitoria(i){
var jogador = jogadores[i];
jogador.vitorias++;
jogador.pontos = calculaPontos(jogador);
exibirJogadores(jogadores);
}

function adicionarEmpate(i){
var jogador = jogadores[i];
jogador.empates++;
jogador.pontos = calculaPontos(jogador);
exibirJogadores(jogadores);
}
function adicionarDerrota(i){
var jogador = jogadores[i];
jogador.derrotas++;
exibirJogadores(jogadores);
}

jogador1.pontos = calculaPontos(jogador1);
jogador2.pontos = calculaPontos(jogador2);

exibirJogadores(jogadores);