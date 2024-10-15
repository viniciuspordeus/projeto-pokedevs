
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
console.log(listaSelecaoPokedevs);


listaSelecaoPokedevs.forEach(pokedev => {
   pokedev.addEventListener("click", () => {

      esconderCartaoPokedev();

      const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

      desativarPokedevNaListagem();

      ativarPokedevNaListagem(idPokedevSelecionado);

   })

})

function ativarPokedevNaListagem(idPokedevSelecionado) {
   const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
   pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
   const pokedevAtivoNaListagem = document.querySelector(".ativo");
   pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
   const idPokedevSelecionado = pokedev.attributes.id.value;
   const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
   const CartaoPokedevParaAbrir = document.
      getElementById(idDoCartaoPokedevParaAbrir);
   CartaoPokedevParaAbrir.classList.add("aberto");
   return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
   const cartaoPokedevAberto = document.querySelector(".aberto");
   cartaoPokedevAberto.classList.remove("aberto");
}
