let numeroOculto;
let pontuacao = 50;
let erros = 0;
let acertos = 0;

// Função para iniciar o jogo
function iniciarJogo() {
    numeroOculto = Math.floor(Math.random() * 100) + 1; // Número aleatório de 1 a 100
    atualizarInfo();
  }
// Função para atualizar informações na página
  function atualizarInfo() {
    document.getElementById('pontuacao').innerText = pontuacao;
    document.getElementById('erros').innerText = erros;
    document.getElementById('acertos').innerText = acertos;
  }

  // Função chamada ao clicar no botão "Jogar"
    function jogar() {
      const numeroDigitado = parseInt(document.getElementById('txtpalpite').value);

      if (isNaN(numeroDigitado) || numeroDigitado < 1 || numeroDigitado > 100) {
        alert("Por favor, digite um número válido de 1 a 100.");
        return;
      }

      if (pontuacao <= 0) {
        alert("Você perdeu!");
        finalizar();
        return;
      }

      if (numeroDigitado === numeroOculto) {
        // Calcula a pontuação com base em fatores arbitrários
        const recompensa = 60;
        pontuacao += recompensa;
        alert(`Parabéns! Você acertou e ganhou ${recompensa} pontos de recompensa.`);
        acertos ++;
        iniciarJogo();
      } else {
        pontuacao -= 5;
        erros ++;

        if (numeroDigitado > numeroOculto) {
          txtresultado.innerHTML = "O número oculto é menor que " + numeroDigitado + "!";
        } else {
          txtresultado.innerHTML = "O número oculto é maior que " + numeroDigitado + "!";
        }
        atualizarInfo();
      }
    }

    // Função chamada ao clicar no botão "Pular"
      function pular() {
        if (pontuacao >= 50) {
          pontuacao -= 50;
          alert("Você pulou esta rodada. -50 pontos.");
          acertos++;
          iniciarJogo();
        } else {
          alert("Você não tem pontuação suficiente para pular.");
        }
        atualizarInfo();
      }

      // Função chamada ao clicar no botão "Finalizar Jogo"
    function finalizar() {
      const mensagem = `Pontuação Total: ${pontuacao}\nAcertos: ${acertos}\nErros: ${erros}\n`;
      alert(mensagem);
    }

      // Inicia o jogo ao carregar a página
      window.onload = iniciarJogo;
