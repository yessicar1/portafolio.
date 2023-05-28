
const ingreso_texto = document.querySelector(".ingreso_texto");
const mensaje_final = document.querySelector (".mensaje_final ");


function btnEncriptar (){
    const textoEncriptado = encriptar(ingreso_texto.value)
    mensaje_final.value = textoEncriptado
    ingreso_texto.value = "";
    mensaje_final.style.backgroundImage ="none"
}

function encriptar (stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll (matrizCodigo [i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar (){
    const textoEncriptado = desencriptar(ingreso_texto.value)
    mensaje_final.value = textoEncriptado
    ingreso_texto.value = "";
    mensaje_final.style.backgroundImage ="none"
}

function desencriptar (stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll (matrizCodigo [i][1], matrizCodigo[i][0])
        }
        
    }
    
    
    return stringDesencriptada
}

function copy(){    
var contenido = document.querySelector(".mensaje_final");     
contenido.select();    
document.execCommand("copy"); 
}