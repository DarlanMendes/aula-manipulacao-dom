
 

    // Seleciona o botão e a lista pelo ID
    let btnAdicionarItem = document.getElementById('adicionarItem');
    //let listaItens = document.getElementById('listaItens');
    let items = listaItens.childNodes // Lista de items do nó
    // Adiciona um ouvinte de evento de clique ao botão
    btnAdicionarItem.addEventListener('click', function () {
        // Cria um novo elemento li
        let novoItem = document.createElement('li');

        // Adiciona texto ao novo item
        let textoNovoItem = document.createTextNode('Novo Item');

        // Adiciona o texto como filho do novo item
        novoItem.appendChild(textoNovoItem);

        // Adiciona o novo item à lista
        listaItens.appendChild(novoItem);
    });
   
        
 

       
        
function removerItem(){
    listaItens.removeChild(items[2])
}
