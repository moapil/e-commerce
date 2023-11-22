let res_nome = document.getElementById('nome')
let res_idade = document.getElementById('email')
let res_senha = document.getElementById('senha')
let cadastrar = document.getElementById('cadastrar')
// let consulta = document.getElementById('consulta')
let endpoint = 'http://localhost:3000/dados'

cadastrar.addEventListener('click', ()=>{
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    console.log(nome)

     let dados = {
        nome: nome,
        email: email,
        senha: senha
     }
     fetch(endpoint, {
     method:'POST',
     headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify(dados)
     })
     .then(res => res.json())
     .then(retorno =>{
    console.log(retorno)
     })
})
