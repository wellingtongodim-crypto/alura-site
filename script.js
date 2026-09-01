let botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
  let curtiu = false;

  botao.addEventListener("click", botaoClicado);

  function botaoClicado() {
    console.log("fui clicado");
    let texto = botao.querySelector("span");

    if (curtiu === false) {
      texto.textContent++;
      curtiu = true;
    } else {
      texto.textContent--;
      curtiu = false;
    }
  }
});
// Alternância do Tema (Claro / Escuro)
const btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", function () {
  document.body.classList.toggle("tema-escuro");
});

// Funcionalidade de Curtir / Descurtir com limite de 1 por botão
const botoesLike = document.querySelectorAll(".btn-like");

botoesLike.forEach(function (botao) {
  let curtiu = false;

  botao.addEventListener("click", function () {
    let texto = botao.querySelector("span");

    if (curtiu === false) {
      texto.textContent++;
      curtiu = true;
    } else {
      texto.textContent--;
      curtiu = false;
    }
  });
});
