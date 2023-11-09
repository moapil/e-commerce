let res_email = document.getElementById('email')
let res_senha = document.getElementById('senha')
let pesquisa = document.getElementById('pesquisa')
// let consulta = document.getElementById('consulta')
let endpoint = 'http://localhost:3000/login'

pesquisa.addEventListener('click', ()=>{
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    console.log(email,senha)


     let login = {
        email: email,
        senha: senha
     }
     fetch(endpoint, {
     method:'POST',
     headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify(login)
     })
     .then(res => res.json())
     .then(retorno =>{
    console.log(retorno)
     })
})


// consulta.addEventListener('click', ()=>{
//      const cadastrar = document.getElementById('cadastrar').value
//      fetch(`${endpoint}/${cadastrar}`,{
//          method: "GET",
//          headers: {
//             'Content-Type':'application/json'
//         }
//     })
//      .then(res => res.json())
//     .then(dados => {
//         console.log(dados)
//         // res_nome.innerHTML = 'nome: ' + dados.nome
//         // res_email.innerHTML = 'email: ' + dados.email
//         // res_senha.innerHTML = 'senha: ' + dados.senha
//      })
// })