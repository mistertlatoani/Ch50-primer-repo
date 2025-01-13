

function solicitarYCambiarNombre (){
    const nombre = prompt ("Cual es tu nombre?");
    // uso de la api dom para cambiar el texto a un elemento
    document.getElementById("texto-saludo").innerText = "Hola" + nombre;
    
}