let nome = window.document.getElementById("nome")

let email = document.querySelector("#email")

let assunto = document.getElementById("assunto")

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
    }
}