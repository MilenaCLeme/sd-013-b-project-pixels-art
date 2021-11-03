const corPreto = document.querySelector('.preto');
const corAzul = document.querySelector('.azul');
const corVerde = document.querySelector('.verde');
const corVermelho = document.querySelector('.vermelho');
const elementoQuadro = document.querySelector('#pixel-board');
const botao = document.getElementById('clear-board');
const cadaQuadradoDoElementoQuadro = document.getElementsByClassName('pixel');
const botaoVQV = document.getElementById('generate-board');
const elementoPai = document.getElementById('pixel-board');

function criarDiv(numeroDeEspaco) {
  for (let index = 0; index < numeroDeEspaco; index += 1) {
    const elementoFilho = document.createElement('div');
    elementoFilho.className = 'juntar';
    elementoPai.appendChild(elementoFilho);
    for (let indexFilho = 0; indexFilho < numeroDeEspaco; indexFilho += 1) {
      const elementoFilhoDoFilho = document.createElement('div');
      elementoFilhoDoFilho.className = 'pixel';
      elementoFilho.appendChild(elementoFilhoDoFilho);
    }
  }
}

function adicionarMaisPixels() {
  const classPixel = document.querySelectorAll('.pixel');
  classPixel.forEach((elemento) => {
    elemento.remove();
  });
  const numeroDeEspaco = document.getElementById('board-size').value;
  if (numeroDeEspaco <= 0) {
    alert('Board inválido!');
  } if (numeroDeEspaco > 50) {
    criarDiv(50);
  } else if (numeroDeEspaco < 5) {
    criarDiv(5);
  } else {
    criarDiv(numeroDeEspaco);
  }
}

botaoVQV.addEventListener('click', adicionarMaisPixels);

criarDiv(5);

function inserirClassSelected(event) {
  const elementoS = document.querySelector('.selected');
  elementoS.classList.remove('selected');
  event.target.classList.add('selected');
}

function selecionarCor() {
  corPreto.addEventListener('click', inserirClassSelected);
  corAzul.addEventListener('click', inserirClassSelected);
  corVerde.addEventListener('click', inserirClassSelected);
  corVermelho.addEventListener('click', inserirClassSelected);
}

selecionarCor();

function pintarCor(pixel) {
  const quadrado = pixel;
  if (corPreto.classList.contains('selected') === true) {
    quadrado.classList.add('preto');
  } else if (corVermelho.classList.contains('selected') === true) {
    const corAtualVermelho = corVermelho.style.backgroundColor;
    quadrado.classList.add('vermelho');
    quadrado.style.backgroundColor = corAtualVermelho;
  } else if (corAzul.classList.contains('selected') === true) {
    const corAtualAzul = corAzul.style.backgroundColor;
    quadrado.classList.add('azul');
    quadrado.style.backgroundColor = corAtualAzul;
  } else if (corVerde.classList.contains('selected') === true) {
    const corAtualVerde = corVerde.style.backgroundColor;
    quadrado.classList.add('verde');
    quadrado.style.backgroundColor = corAtualVerde;
  }
}

function indentificarCor({ target }) {
  const targets = target;
  if (target.className !== 'pixel') {
    targets.classList.remove('vermelho');
    targets.classList.remove('preto');
    targets.classList.remove('azul');
    targets.classList.remove('verde');
    targets.style = '';
  }
  if (targets.classList.contains('pixel') === true) {
    pintarCor(targets);
  }
}

function pintarCorDoQuadro() {
  elementoQuadro.addEventListener('click', indentificarCor);
}

pintarCorDoQuadro();

function limparElementoQuardro() {
  for (let index = 0; index < cadaQuadradoDoElementoQuadro.length; index += 1) {
    cadaQuadradoDoElementoQuadro[index].classList.remove('preto');
    cadaQuadradoDoElementoQuadro[index].classList.remove('vermelho');
    cadaQuadradoDoElementoQuadro[index].classList.remove('verde');
    cadaQuadradoDoElementoQuadro[index].classList.remove('azul');
    cadaQuadradoDoElementoQuadro[index].style = '';
  }
}

function clicarDoBotao() {
  botao.addEventListener('click', limparElementoQuardro);
}

clicarDoBotao();

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function gerarcolorAleadoria() {
  document.querySelector('.verde').style.backgroundColor = `${getRandomColor()}`;
  document.querySelector('.vermelho').style.backgroundColor = `${getRandomColor()}`;
  document.querySelector('.azul').style.backgroundColor = `${getRandomColor()}`;
}

gerarcolorAleadoria();

/*
criar alteração na div pelo numero de espaços atribuitos a ela. criar div para criar a tabela - Ajuda na turma 13 - tribo B;

botaoVQV.addEventListener('click', function(){
  document.getElementById('pixel-board').remove()
  let elementoPaiPai = document.getElementById('pixel-paipai')
  let elementoPai = document.createElement('div')
  elementoPaiPai.appendChild(elementoPai);
  elementoPai.id = 'pixel-board'
  let numeroDeEspaco = 0;
  numeroDeEspaco = document.getElementById('board-size').value
  if(numeroDeEspaco <= 0){
    alert('Board inválido!')
  } if (numeroDeEspaco > 50) {
      criarDiv(50)
  } else if (numeroDeEspaco < 5) {
      criarDiv(5)
  } else {
    criarDiv(numeroDeEspaco)
  }
})

function criarDiv(numeroDeEspaco) {
  let elementoPai = document.getElementById('pixel-board');
  for (let index = 0; index < numeroDeEspaco; index += 1) {
    let elementoFilho = document.createElement('div');
    elementoPai.appendChild(elementoFilho);
    for (let indexFilho = 0; indexFilho < numeroDeEspaco; indexFilho += 1) {
      let elementoFilhoDoFilho = document.createElement('div');
      elementoFilhoDoFilho.className = "pixel";
      elementoFilho.appendChild(elementoFilhoDoFilho);
    }
  }
}

Ajuda do Slack - André Moreno - turma 12
seleciona a cor que está precisando pintar

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

function pintarCorDoQuadro() {
elementoQuadro.addEventListener('click', indentificarCor)
}

function indentificarCor(event) {
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

fazer o botão limpar a tabela
function clicarDoBotao() {
  botao.addEventListener('click', limparElementoQuardro)
}

function limparElementoQuardro() {
  for(let index = 0; index < cadaQuadradoDoElementoQuadro.length; index += 1){
    cadaQuadradoDoElementoQuadro[index].classList.remove('preto');
    cadaQuadradoDoElementoQuadro[index].classList.remove('vermelho');
    cadaQuadradoDoElementoQuadro[index].classList.remove('verde');
    cadaQuadradoDoElementoQuadro[index].classList.remove('azul')
  }
}

criarDiv(5);
selecionarCor();
pintarCorDoQuadro();
clicarDoBotao();
*/
