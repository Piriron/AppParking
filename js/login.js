const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    
    if(!regexEmail.test(email.value)){
        warnings += `El email no es correcto <br>`
        entrar = true
    }
    if(pass.value.length < 6){
        warnings += `La contraseña no es correcto <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        window.location.href = "./home_page.html";
    }
})