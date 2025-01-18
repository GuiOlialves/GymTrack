const nameUser = document.querySelector("#name");
const form = document.querySelector("form");
const eyeicon = document.getElementById("eyeicon");
const cpfBox = document.getElementById("cpf");
const passwordBox = document.querySelector("#password");

form.addEventListener("submit", (event) => {
  if (/\d/.test(nameUser.value)) {
    event.preventDefault();
    alert("Nome de usuário precisa conter apenas letras.");
    console.log("Campo contém caracteres inválidos");
  } else if (nameUser.value.length < 3) {
    event.preventDefault();
    alert("Por favor, preencha o nome com no minímo 3 letras.");
    console.log("Campo vazio");
  } else {
    console.log("Nome válido");
  }

  function validaCpf(cpf) {
    cpf = cpfBox.value;
    if (cpf.length !== 11) {
      event.preventDefault;
      alert("cpf inválido");
      return;
    }

    function proximoDigitoVerificador(cpfIcompleto) {
      let somatoria = 0;

      for (let i = 0; i < cpfIcompleto.length; i++) {
        let digitoAtual = cpfIcompleto.charAt(i);

        let constante = cpfIcompleto.length + 1 - i;
        somatoria += Number(digitoAtual) * constante;
      }
      const resto = somatoria % 11;

      return resto < 2 ? "0" : (11 - resto).toString();
    }
    let primeiroDigitoVerificador = proximoDigitoVerificador(
      cpf.substring(0, 9)
    );
    let segundoDigitoVerificador = proximoDigitoVerificador(
      cpf.substring(0, 9) + primeiroDigitoVerificador
    );

    let cpfCorreto =
      cpf.substring(0, 9) +
      primeiroDigitoVerificador +
      segundoDigitoVerificador;

    if (cpf !== cpfCorreto) {
      event.preventDefault;
      alert("cpf inválido");
    } else {
      alert("cpf valido");
    }
  }
  validaCpf();
});

eyeicon.addEventListener("click", () => {
  if (passwordBox.type === "password") {
    passwordBox.type = "text";
    eyeicon.src = "../../assets/images/olho.png";
  } else {
    passwordBox.type = "password";
    eyeicon.src = "../../assets/images/visivel.png";
  }
});
