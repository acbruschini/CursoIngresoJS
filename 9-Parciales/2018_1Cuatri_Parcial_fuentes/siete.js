function mostrar() {

    var cantVarones = 0;
    var totalNotas = 0;
    var nota;
    var sexo;

    for (var i = 0; i < 5; i++) {
        nota = parseInt(prompt("ingrese la nota "));

        while (isNaN(nota) || nota < 0 || nota > 10) {
            nota = parseInt(prompt("No es una nota ingrese la nota "));
        }

        sexo = prompt("ingrese el sexo, m o f ");

        while (sexo != "m" && sexo != "f") {
            sexo = prompt("No es un sexo, por favor ingrese m o f ");
        }

        totalNotas += nota;

        if (nota < notaMasBaja || i == 0) {

            var notaMasBaja = nota;
            var sexoMasBaja = sexo;

        }

        if (sexo == "m" && nota >= 6) {

            cantVarones++;

        }


    }

    alert("El promedio fue: " + totalNotas/i);
    alert("La nota mas baja fue: " + notaMasBaja);
    alert("El sexo de la nota mas baja fue: " + sexoMasBaja);
    alert ("Cantidad de varones con notas mas o igual a 6: " + cantVarones);


}


