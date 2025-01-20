//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let nomes_amigos = [];
let botao_adicionar = document.getElementById('button-add');
let lista_amigos = document.querySelector('#listaAmigos');
let resultado = document.querySelector('#resultado');

function adicionarAmigo() {
    let input = document.getElementById('amigo').value;
    
    if (input == '') {
        alert('O nome não pode estar vazio.');
    }
    else {
        if (nomes_amigos.includes(input)) {
            alert('O nome não pode ser repetido.');
        }
        else {
            nomes_amigos.push(input.toLowerCase());
            console.log(nomes_amigos);
        
            lista_amigos.innerHTML += `<li>${input}</li>`;
        }
    }
}

function sortearAmigo() {
    let indiceAleatorio = Math.floor(Math.random() * nomes_amigos.length);
    let nomeEscolhido = nomes_amigos[indiceAleatorio];

    resultado.innerHTML = `Nome escolhido: ${nomeEscolhido}`;
}
