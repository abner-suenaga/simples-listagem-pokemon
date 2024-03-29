/*
    Oque precisamos fazer? - quando clicarmos no botão de troca de tema temos que
    alterar a cor do tema da página para as cores do tema escuro ou do tema claro

     objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua

       • passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
       • passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
       • passo 3 - dar um jeito de indentificar o clique do usuário no botão de troca delo
       tema
       • passo 4 - adicionar a classe modo-escuro no body
       • passo 5 - trocar a imagem do botão de alterar tema pra lua

     objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha classe
     modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol

       • passo 1 - verificar se o body já tem a classe modo-escuro
       • passo 2 - remover a classe do modo escuro do body
       • passo 3 - trocar a imagem do botão de alterar tema pra sol
*/

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

      const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

     if(modoEscuroEstaAtivo) { body.classList.remove("modo-escuro")

       imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png"); } else { body.classList.add("modo-escuro");

      imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png"); };

});