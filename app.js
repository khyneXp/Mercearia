function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    
    let resultados = "";
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    if(!campoPesquisa||campoPesquisa==" "){
        section.innerHTML ="<p>Digite o nome do produto</p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()
    let titulo = "";
    let descricao = "";
    let Tags = "";
    for(let dado of itens){
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        Tags = dado.Tags.toLocaleLowerCase(); 
        if(titulo.includes(campoPesquisa)||descricao.includes(campoPesquisa)||Tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                <h2>
                    <p class="titulo">${dado.titulo}</p>
                </h2>
                <p class="descricao-meta">${dado.descricao}
                </p>
                    <ul>
                        <li>${dado.unidade === 'peso' ? 'Peso:' : 'Volume:'} ${dado.volume || dado.peso} </li>
                        <li>Ingredientes:${dado.Ingredientes}</li>    
                        <li>Validade:${dado.Validade}</li>   
                    </ul>
                    <p class="preco">Preço:${dado.Preço}</p>
            </div>
            `;
        }
        
    }
    if(!resultados){
        resultados = "<p>O produto digitado não foi encontrado</p>"
    }
    section.innerHTML = resultados;
    
}
