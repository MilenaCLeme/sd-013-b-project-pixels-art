criarDiv();

let corPreto = document.querySelector('.preto');
let corAzul = document.querySelector('.azul');
let corVerde = document.querySelector('.verde');
let corVermelho = document.querySelector('.vermelho')

//criar div // turma do urução ajudou 
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

//botão da cor 
let botaoNaCor = document.getElementsByClassName('color');

function selecionaAClassNaCor(){
  for(let index = 0; index < botaoNaCor.length; index += 1){
    botaoNaCor[index].addEventListener("click", function(){
      botaoNaCor[index].classList.add('select');
      if (document.getElementsByClassName('select') ===  ){
       
      }
    });
  }
}

selecionaAClassNaCor();
