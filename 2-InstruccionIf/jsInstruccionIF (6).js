function mostrar() {
    //tomo la edad  


    var edad;
    edad = parseInt(document.getElementById("edad").value);

    if (edad >= 13 && edad <= 17) {

        alert("La Persona es adolescente");
    } else if (edad < 13) {

        alert("La Persona es un niño");

    } else {

        alert("La Persona es adulto");
    }


} //FIN DE LA FUNCIÓN