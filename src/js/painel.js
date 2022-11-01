/*
    Quando clicar na seta para avanças temos que esconder
    todas as imagens e mostrar a próxima imagem
        A imagem atual começa a contar do 0 (zero) pq é a primeira imagem
        assim que clicado no avançar, preciso adicionar mais 1 (um) ao contador de imagem
        pra saber que agora vou mostrar a segunda imagem
    
        Esconder todas as imagens
            pegar todas as imagem usando o DOM e remover a classe mostrar
    
        Mostrar a próxima imagem
            pegar todas as imagens, descobrir qual é a próxima e colocar a classe mostrar nela
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove ('mostrar')
    });
};

function mostrarImagens() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

/*
    Quando clicar na seta para avanças temos que esconder
    todas as imagens e mostrar a próxima imagem
*/
setaAvancar.addEventListener('click', function() {
    // testar se o contador da imagemAtual é igual ao total de imagens
    const totalDeImagens = imagensPainel.length -1;
    if (imagemAtual === totalDeImagens) {
        console.log("não pode avançar mais");
        return;
    };
    /* A imagem atual começa a contar do 0 (zero) pq é a primeira imagem
    assim que clicado no avançar, preciso adicionar mais 1 (um) ao contador de imagem
    pra saber que agora vou mostrar a segunda imagem
    */
    imagemAtual++;
   
   /* Esconder todas as imagens
            pegar todas as imagem usando o DOM e remover a classe mostrar
   */
    esconderImagens();

    /* Mostrar a próxima imagem
            pegar todas as imagens, descobrir qual é a próxima e colocar a classe mostrar nela
    */
    mostrarImagens();

});

/*
    Quando clicar na seta para voltar temos que esconder
    todas as imagens e mostrar a imagem anterior
*/
setaVoltar.addEventListener("click", function(){
    
    if (imagemAtual === 0) {
        console.log("não tem mais como voltar");
        return;
    };
    
    imagemAtual--;

    /* Esconder todas as imagens
            pegar todas as imagem usando o DOM e remover a classe mostrar
   */
    esconderImagens();
    
    /* Mostrar a imagem anterior
        pegar todas as imagens, descobrir qual é a anterior e colocar a classe mostrar nela
    */
    mostrarImagens();
});