const cajita = document.getElementById("txt-areaAgregar")
const notas = document.getElementById("contenido-notas")
let cantNotas = 4;
let myModal=null;

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
    contenido.setAttribute("id",cantNotas);
    cantNotas++;
    contenido.classList.add("card-text","text-center")
    contenido.setAttribute("onclick","mostrarEditar(this)")
    contenido.textContent = cajita.value
    let boton = document.createElement("button")
    boton.classList.add("btn","btn-danger","btn-sm", "fr")
    boton.setAttribute("onclick","mostrarBorrar(this)")
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

function mostrarEditar(pTexto)
{
    let contenidoTxt = document.getElementById("txt-areaEditar");
    contenidoTxt.value = pTexto.textContent;
    document.getElementById('staticBackdropEditar').setAttribute("data-edit",pTexto.getAttribute("id"));
    myModal = new bootstrap.Modal(document.getElementById('staticBackdropEditar'))
    myModal.show();
}


function btnEditar(PBoton){
    let idEditado = document.getElementById("staticBackdropEditar").getAttribute("data-edit");
    let texto = document.getElementById(idEditado);
    let textoNuevo = PBoton.parentElement.parentElement.children[1].children[0].value;
    
    texto.textContent = textoNuevo;
    myModal.hide();
}


function mostrarBorrar(pBoton)
{
    let contenidoTxt = document.getElementById("txt-areaBorrar");
    let texto = pBoton.parentElement.children[0];
    contenidoTxt.value = texto.textContent;
    document.getElementById('staticBackdropBorrar').setAttribute("data-edit",texto.getAttribute("id"));
    myModal = new bootstrap.Modal(document.getElementById('staticBackdropBorrar'))
    myModal.show();
}


function btnBorrar(){
    let idEditado = document.getElementById("staticBackdropBorrar").getAttribute("data-edit");
    let texto = document.getElementById(idEditado);
    let carta = texto.parentElement.parentElement.parentElement.remove()
    myModal.hide();

}