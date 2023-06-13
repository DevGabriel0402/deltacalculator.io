function permitirApenasNumeros(event) {
  let keyCode = event.keyCode || event.which;
  let tecla = String.fromCharCode(keyCode);
  let regex = /[0-9-/]|\./; // Apenas números são permitidos

  if (!regex.test(tecla)) {
    event.preventDefault();
  }
}

function calcularDelta() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById("dadosValido").classList.add("validar");
    document.getElementById("dadosValido").innerHTML =
      "Informe os valores de <strong>(A,B e C)</strong> solicitados.";
  } else {
    document.getElementById("dadosValido").innerHTML = "";
    document.getElementById("dadosValido").classList.remove("validar");

    resultadoHTML = "";
    resultadoHTML +=
      "<strong>Resolução:</strong>" +
      "<br>" +
      "&Delta; = " +
      b +
      "<sup>2</sup> - 4 * (" +
      a +
      " * " +
      c +
      ") <br>";
    resultadoHTML +=
      "&Delta; = " + b * b + " - 4 * (" + a + " * " + c + ")<br>";
    resultadoHTML += "&Delta; = " + b * b + " - " + 4 * a + " * " + c + "<br>";
    resultadoHTML += "&Delta; = " + b * b + " - " + 4 * a * c + "<br>";
    resultadoHTML += "&Delta; = " + parseInt(b * b - 4 * a * c) + "<br>";
    document.getElementById("resultadoDelta").innerHTML = resultadoHTML;
    document
      .getElementById("resultadoDelta")
      .classList.add("resultadoDeltaClasse");
  }
}

function limpar() {
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("c").value = "";
  document.getElementById("resultadoDelta").innerHTML = "";
  document
    .getElementById("resultadoDelta")
    .classList.remove("resultadoDeltaClasse");
  document.getElementById("dadosValido").innerHTML = "";
  document.getElementById("dadosValido").classList.remove("validar");
}
