var contadorCartas = 0
const cajita = document.getElementById("txt-area")
const notas = document.getElementById("contenido-notas")

function btnAgregar(){
    if (!cajita.value) {
        console.log("No hay texto para agregar")
        return
    }

    // Columna Nota
    let divFuera = document.createElement("div")
    divFuera.classList.add("col-sm-12", "col-md-4")

    //Nota
    let divNota = document.createElement("div")
    divNota.classList.add("card","w-100", "card-border", "mb-5")

    //Cuerpo Nota
    let divCuerpoNota = document.createElement("div")
    divCuerpoNota.classList.add("card-body")

    //Contenido Nota
    let contenido = document.createElement("p")
    contenido.classList.add("card-text","text-center")
    contenido.textContent = cajita.value
    let boton = document.createElement("button")
    boton.classList.add("btn","btn-sm", "fr")
    let icono = document.createElement("i")
    icono.classList.add("fa-regular", "fa-trash-can")

    //Generar Jerariquia
    notas.appendChild(divFuera)
    divFuera.appendChild(divNota)
    divNota.appendChild(divCuerpoNota)
    divCuerpoNota.appendChild(contenido)
    boton.appendChild(icono)
    divCuerpoNota.appendChild(boton)
    
    //Vacio contenido Caja
    cajita.value=""

}

function cargarTexto(pTxtArea)
{
    
}

function btnEditar(pDiv){
    const dCuerpoNota = pDiv.children[0]

}

function btnBorrar(){

}