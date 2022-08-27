const l1= document.getElementById("lista1")
const l2 = document.getElementById("lista2")
function clickBtnAgregar()
{
    let nuevoElemento = document.getElementById("tElementoInputAgregar")
    let lista = document.getElementById("tListaInputAgregar")
    let elemento = document.createElement("li")
    elemento.textContent = nuevoElemento.value
    if(lista.value == 1)
    {
        let largo =l1.childElementCount + 1
        if((largo % 2) == 0 )
        {
            elemento.className = "par"
        }
        else
        {
            elemento.className = "impar"
        }
        console.log(elemento)
        l1.appendChild(elemento)
    }
    else if(lista.value == 2)
    {
        let largo =l2.childElementCount + 1
        if((largo % 2) == 0 )
        {
            elemento.className = "par"
        }
        else
        {
            elemento.className = "impar"
        }
        l2.appendChild(elemento)
    }
    else{
        alert("No existe la lista ingresada")
    }
    nuevoElemento.value = ""
    lista.value = ""
}

function clickBtnEliminar()
{
    let inputAEliminar = document.getElementById("tElementoInputEliminar")
    let inputLista = document.getElementById("tListaInputElminar")
    let hijosLista = null;
    if(inputLista.value == 1 || inputLista.value == 2)
    {
        hijosLista = document.getElementById("lista"+inputLista.value).children;
        for(var i = 0; i <hijosLista.length;i++)
        {
            
            if(hijosLista[i].textContent == inputAEliminar.value)
            {
                hijosLista[i].remove();
                break;
            }
        } 
        ordenarParImpar()  
    }
    else{
        alert("No existe la lista ingresada")
    }

    inputAEliminar.value = ""
    inputLista.value = ""
}

function ordenarParImpar()
{
    let inputLista = document.getElementById("tListaInputElminar")
    let hijosLista = document.getElementById("lista"+inputLista.value).children;
    for(var i = 0; i < hijosLista.length;i++)
    {
        if((i %2) ==0)
        {
            hijosLista[i].className = "impar"
        }
        else
        {
            hijosLista[i].className = "par"
        }
    }

}