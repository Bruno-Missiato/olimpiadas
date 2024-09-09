function pesquisar(){
//console.log(dados);

let section = document.getElementById("resultados-pesquisa");
//console.log(section);

let campoPesquisa = document.getElementById("campo-pesquisa").value
//console.log(campoPesquisa);

// se campoPesquisa for uma string sem nada , não mostre nada

if(campoPesquisa == ""){
    section.innerHTML= "<p>Nada foi encontrado!!!<p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

let resultados ="";
let titulo ="";
let descricao ="";
let tags ="";


//para cada dados dentro da lista de dados
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags= dado.tags.toLowerCase()

    //se titulo includes o dado da pesquisa, então faça x
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
        {
        resultados +=`
        <div class="item-resultado">
        <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
            </h2> 
            <p class="descrição-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais Informações</a>
            </div> -->`
            ;

    }
    console.log(dado.titulo.includes(campoPesquisa))
    


}
if(!resultados){
    resultados = "<p>Nada foi encontrado!!!<p>"
}

section.innerHTML = resultados;
}




