const botaoAlterarTema = document.getElementById('botao-alterar-tema')
const imagemBotaoDeTema = document.querySelector(".botao-de-tema")
const body = document.querySelector("body")


botaoAlterarTema.addEventListener("click", () => {
    const modoClaroAtivo = body.classList.contains("modo-claro")
body.classList.toggle("modo-claro")

if (modoClaroAtivo) {
imagemBotaoDeTema.setAttribute("src", "./src/imagens/simbolo de noite ordem.png")
} 

else {
    imagemBotaoDeTema.setAttribute("src", "./src/imagens/simbolo de dia ordem.png")
}});
    

