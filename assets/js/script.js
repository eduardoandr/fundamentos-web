
let nome = window.document.getElementById("nome")

let email = document.querySelector("#email")

let assunto = document.getElementById("assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"
assunto.style.width = "100%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.collor = "red"
     }
     else{
         txtNome.innerHTML = "Nome Válido"
         txtNome.style.collor = "green"
         nomeOk = true
     }
}
function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") ==-1 ){
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.collor = "red"
    }
    else{
        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.collor = "green"
        emailOk = true
    }
}
function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >99){
        txtAssunto.innerHTML = "Coloque no máximo 100 caracteres"
        txtAssunto.style.collor = "red"
    }
    else{
        txtAssunto.innerHTML = "Obrigado por sua opnião/sugestão"
        txtAssunto.style.collor = "green"
        assuntoOk = true
    }
}
function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulário enviado com sucesso!")
    }
    else{
        alert("Preencha o formulário corretamente!")
    }
}
function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.heigth = "600px"
}
function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.heigth = "300px"
}