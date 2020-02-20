function mostrar() {

	//var contador = 0;
	var positivo = 0;
	var negativo = 1;

	var respuesta = 'si';

	while (respuesta == 'si') {

		numero = parseInt(prompt("Coloque el numero"));

		while (isNaN(numero)) {

			numero = parseInt(prompt("No es un numero por favor coloque el numero"));

		}

		if (numero < 0) {

			negativo = negativo * numero;

		} else {

			positivo = positivo + numero;

		}

		respuesta = prompt("Quiere colocar otro numero? Responda si o no");
		contador++;

	}

	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN