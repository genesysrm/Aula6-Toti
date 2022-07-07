//INICIO

let pessoas = []; //array para almacenar os objetos criados
let mensagensErros = [];

function Pessoa(nome,idade){ // função construtora aqui definiremos a estrutura de nosso objeto e os parametros que deve ter
    this.nome = nome;
    this.idade = idade;
}

let nome = document.querySelector('#input-nome')
let idade = document.querySelector('#input-idade')
let lista = document.querySelector('#lista-registro')
let comparacoes = document.querySelector('#comparacoes')
let registroPessoaJovem = document.createElement('p')
let registroPessoaVelha = document.createElement('p')
let erros = document.querySelector('#erros')

function AdicionarNovoRegistro(){ 
    if (ValidacaoCampo() != 0 ){
    let nomeUsuario = nome.value;
    let idadeUsuario = idade.value;
    let pessoa = new Pessoa(nomeUsuario,idadeUsuario)
    pessoas.push(pessoa);
    let novaPessoa = document.createElement('li')
    novaPessoa.innerHTML = `Nome: ${nomeUsuario} <br> Idade: ${idadeUsuario} anos`;
    novaPessoa.classList.add('list-group-item')
    lista.appendChild(novaPessoa);
    // nome.value = ""
    // idade.value = ""
    form.reset(); // serve para resetar os campos do formulario;
    } else {
        erros.textContent = mensagensErros.join(', ')
        erros.classList.add('error')

    }
    
}

function ValidacaoCampo(){
    if(nome.value ==""){
        mensagensErros.push("Campo nome é obrigatorio")
        nome.focus()
        return 0
    }
    if (nome.value.length < 2){
        mensagensErros.push("Campo nome deve ter pelo menos 3 carateres")
    
    }else if (idade.value == ""){
        mensagensErros.push("Campo idade é obrigatorio")
        idade.focus();
        return 0 
    }
    else if (email.value.indexOf('@')==-1 ||
    email.value.indexOf('.')==-1 ) {
        alert("e-mail inválido") // exemplo de como validar email.
    }

}

function calcularPessoaMaisVelha(pessoa){
    pessoa.sort(function(a, b) // o sort funciona para ordenar listas, só serve para strings mas usando essa função conseguimos fazer que ordene numeros támbem, dessa vez de menor a maior;
    {
        return a.idade - b.idade
    });
    
    let resultado = pessoa[pessoa.length - 1]; // pegamos o último elemento de nosso array já ordenado de menor a maior, por ser o último elemento quer dizer que estamos escolhendo o valor maior ou a pessoa mais velha da lista;
    return resultado;
}

function calcularPessoaMaisJovem(pessoa){
    pessoa.sort(function(a, b) // o sort funciona para ordenar listas, só serve para strings mas usando essa função conseguimos fazer que ordene numeros támbem, dessa vez de maior a menor;
    {
        return b.idade - a.idade
    });
    
    let resultado = pessoa[pessoa.length - 1]; // pegamos o último elemento de nosso array já ordenado de maior a menor, por ser o último elemento quer dizer que estamos escolhendo o valor menor ou a pessoa mais jovem da lista;
    return resultado;
}


function MostrarPessoaMaisVelha() { 
     let pessoaMaisVelha = calcularPessoaMaisVelha(pessoas);
     registroPessoaVelha.textContent =  `A pessoa mais velha é: ${pessoaMaisVelha.nome} com ${pessoaMaisVelha.idade} anos`
     comparacoes.appendChild(registroPessoaVelha)
     return 
  }

  function MostrarPessoaMaisJovem() {
    let pessoaMaisJovem = calcularPessoaMaisJovem(pessoas); 
    registroPessoaJovem.textContent = `A pessoa mais jovem é: ${pessoaMaisJovem.nome} com ${pessoaMaisJovem.idade} anos`
    comparacoes.appendChild(registroPessoaJovem)
    return
 }
 
 document.querySelector('#btn-submit').addEventListener('click',function(evt){
    evt.preventDefault();
 } )
 document.querySelector('#btn-submit').addEventListener('click',AdicionarNovoRegistro)

 document.querySelector('#btn-submit').addEventListener('click',MostrarPessoaMaisVelha)

 document.querySelector('#btn-submit').addEventListener('click',MostrarPessoaMaisJovem)
 document.querySelector('#btn-submit').addEventListener('click',ValidacaoCampo)

//FIM