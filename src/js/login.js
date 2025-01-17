const nameUser = document.querySelector("#name");
const form = document.querySelector("form");
const eyeicon = document.getElementById("eyeicon");
const passwordBox = document.querySelector("#password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Valor do campo:", nameUser.value);

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

console.log(passwordBox);
