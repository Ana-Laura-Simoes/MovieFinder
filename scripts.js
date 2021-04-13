const filmes=[{}];
const promessa=axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes');
promessa.then(processarResposta);

function processarResposta(resposta) {
console.log(resposta.data);
    renderizarFilme(resposta.data);

}
function renderizarFilme(filme){
    const movies=document.querySelector(".movies");
    const descricao=filme.descricao;
    const id=filme.id;
    const imagem=filme.imagem;
    const titulo=filme.titulo;
    let movie={descricao: descricao,id: id,imagem: imagem,titulo: titulo};
    filmes.push(movie);
    console.log(movie);
    movies.innerHTML += filmes;
}
