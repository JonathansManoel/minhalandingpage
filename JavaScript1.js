function Enviar() {
  var nome = document.getElementById("nomeid");

  if (nome.value != "") {
    alert(
      "Obrigado sr(a) " +
        nome.value +
        " os seus dados foram encaminhados com sucesso"
    );
  }
}
// responsável por lançar um aviso ao usuário final. Função é chamada no evento onclick(Quando o usuário clicar no botão “Enviar”)
