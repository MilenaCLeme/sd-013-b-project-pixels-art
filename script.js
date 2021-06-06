let corPreto = document.querySelector('.preto');
let corAzul = document.querySelector('.azul');
let corVerde = document.querySelector('.verde');
let corVermelho = document.querySelector('.vermelho');
let elementoQuadro = document.querySelector('#pixel-board');
let botao = document.getElementById('clear-board');
let cadaQuadradoDoElementoQuadro = document.getElementsByClassName('pixel');
criarDiv()
selecionarCor();
pintarCorDoQuadro();
clicarDoBotao();

//criar div para criar a tabela - Ajuda na turma 13 - tribo B 
function criarDiv() {
    let numeroDeEspaços = 5;
    let elementoPai = document.getElementById('pixel-board');
    for (let index = 0; index < numeroDeEspaços; index += 1) {
        let elementoFilho = document.createElement('div');
        elementoPai.appendChild(elementoFilho);
        for (let indexFilho = 0; indexFilho < numeroDeEspaços; indexFilho += 1) {
            let elementoFilhoDoFilho = document.createElement('div');
            elementoFilhoDoFilho.className = "pixel";
            elementoFilho.appendChild(elementoFilhoDoFilho);
        }
    }
}

// Ajuda do Slack - André Moreno - turma 12
//seleciona a cor que está precisando pintar 
function selecionarCor() {
  corPreto.addEventListener('click', inserirClassSelected);
  corAzul.addEventListener('click', inserirClassSelected);
  corVerde.addEventListener('click', inserirClassSelected);
  corVermelho.addEventListener('click', inserirClassSelected);
}

function inserirClassSelected(event){
  let elemento = document.querySelector('.selected');
  elemento.classList.remove('selected');
  event.target.classList.add('selected');
 }

 //pinta a cor do quadro
function pintarCorDoQuadro(){
  elementoQuadro.addEventListener('click', indentificarCor)
}

function indentificarCor(event){
  event.target.classList.remove('vermelho');
  event.target.classList.remove('preto');
  event.target.classList.remove('azul');
  event.target.classList.remove('verde');
  if(event.target.classList.contains('pixel') === true){
   if(corPreto.classList.contains('selected') === true){
      event.target.classList.add('preto');
    } else if(corVermelho.classList.contains('selected') === true){
      event.target.classList.add('vermelho');
    } else if(corAzul.classList.contains('selected') === true){
      event.target.classList.add('azul');
    } else if(corVerde.classList.contains('selected') === true){
      event.target.classList.add('verde');
    }
  } 
}

//fazer o botão limpar a tabela 
function clicarDoBotao(){
  botao.addEventListener('click', limparElementoQuardro)
}

function limparElementoQuardro(){
  for(let index = 0; index < cadaQuadradoDoElementoQuadro.length; index += 1){
    cadaQuadradoDoElementoQuadro[index].classList.remove('preto');
    cadaQuadradoDoElementoQuadro[index].classList.remove('vermelho');
    cadaQuadradoDoElementoQuadro[index].classList.remove('verde');
    cadaQuadradoDoElementoQuadro[index].classList.remove('azul')
  }
}

