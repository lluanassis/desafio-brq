const opcao = document.querySelector("#opcoes");

function exibirTexto() {
  let nome = document.getElementById("nome_usuario").value;
  document.getElementById("introducao").innerHTML = `Olá <strong>${nome}</strong>, vamos jogar! 
  De acordo com a opção de intervalo que<br> 
  você escolheu, descubra o número.`;
  event.preventDefault();

  let funcao = opcao.value;
  console.log("Valor da opção: " + funcao);

  aleatorio = Math.random();
  console.log("Número gerado: " + aleatorio);

  if (funcao == 0) {
    palpite_correto = Math.floor(aleatorio * 10 + 1);
    console.log("Palpite correto: " + palpite_correto);
    console.log("--------------");
  } else if (funcao == 1) {
    palpite_correto = Math.floor(aleatorio * 100 + 1);
    console.log("Palpite correto: " + palpite_correto);
    console.log("---------------");
  } else if (funcao == 2) {
    palpite_correto = Math.floor(aleatorio * 200 + 1);
    console.log("Palpite correto: " + palpite_correto);
    console.log("---------------");
  }
}

const btn1 = document.querySelector("#btn1");
const jogar = document.querySelector("#jogar");
let numero_tentativa = 3;

btn1.onclick = (event) => {
  event.preventDefault();

  let palpite_usuario = jogar.value;
  console.log("Palpite usuário: " + palpite_usuario);
  console.log("---");

  if (palpite_correto == palpite_usuario) {
    document.getElementById("resultado").innerHTML = "Parabéns, você conseguiu adivinhar!";
  } else if (palpite_correto > palpite_usuario) {
    numero_tentativa--;
    if (numero_tentativa == 1){
      document.getElementById("resultado").innerHTML = "<strong>O número é maior!</strong><br/> Você ainda tem 1 tentativa.";
    } else if (numero_tentativa == 2){
      document.getElementById("resultado").innerHTML = "<strong>O número é maior!</strong><br/> Você ainda tem 2 tentativas.";
    } else{
      document.getElementById("resultado").innerHTML = "<strong>Você perdeu!</strong><br> Fim de jogo.";
    }
  } else if (palpite_correto < palpite_usuario) {
    numero_tentativa--;
    if (numero_tentativa == 1){
      document.getElementById("resultado").innerHTML = "<strong>O número é menor!</strong><br/> Você ainda tem 1 tentativa.";
    } else if (numero_tentativa == 2){
      document.getElementById("resultado").innerHTML = "<strong>O número é menor!</strong><br/> Você ainda tem 2 tentativas.";
    } else{
      document.getElementById("resultado").innerHTML = "<strong>Você perdeu!</strong><br> Fim de jogo.";
    }
  }
};
