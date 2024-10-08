//função eviar dados para a planilha do google drive
const manipularEnviar = (event) => {
  //capturar o evento e da uma preventdefault para evitar que a pág. recarregue
  event.preventDefault();

  const name = document.querySelector("input[name=seu-nome]").value;
  const nameUp = name.toUpperCase();
  const endereco = document.querySelector("input[name=seu-endereco]").value;
  const enderecoUp = endereco.toUpperCase();
  const numero = document.querySelector("input[name=seu-numero]").value;
  const bairro = document.querySelector("input[name=seu-bairro]").value;
  const bairroUp = bairro.toUpperCase();
  const responsavelName = document.querySelector("input[name=responsavel-nome]").value;
  const responsavelNameUp = responsavelName.toUpperCase();
  const texto = document.querySelector("textarea[name=sua-mensagem]").value;
  const textoUp = texto.toUpperCase();
  // o elemento checkbox deve conter .checked ao invés de .value e o input[type=checkbox]
  const autorizacao = document.querySelector("input[type=checkbox]").checked;
  // foi criado uma nova variável que vai fazer a condicional se foi marcada ou não retornado o valor sim ou não.
  const autorizacaoString = autorizacao ? "SIM" : "NÃO";

  //Função Post que vai enviar para o endpoint da api sheet monkey
  // através do objeto iremos enviar via json as strings para nossa planilha
  fetch("https://api.sheetmonkey.io/form/efSzpgs3y46tbKRhizu2Km", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nameUp,
      numero: numero,
      Endereco: enderecoUp,
      bairro: bairroUp,
      responsavel: responsavelNameUp,
      texto: textoUp,
      autorizacao: autorizacaoString,
    }), // valor autorizacao recebe o ternario autorizacaoString
  })
    .then(() => alert("Dados sendo enviados..."))
    .then(() => {
      window.location = "agradecimento.html";
    });
  //após envio temos uma then com função alert e outra com função redirecionar página
};

// Capturar o evento de submit(enviar) e ativar a função manipularEviar
document.querySelector("form").addEventListener("submit", manipularEnviar);
