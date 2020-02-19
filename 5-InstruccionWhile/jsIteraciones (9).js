function mostrar()
{

	var contador=0;
	// declarar variables
	var numero = 0;
	var maximo;
	var minimo;

	var respuesta='si';

	while(respuesta!='no')
	{
		numero = parseInt(prompt ("Coloque el numero"));
		if (contador == 0) {
			maximo = numero;
			minimo = numero;

		} else {
			
			if(numero > maximo){
				maximo = numero;
	
			}
			if(numero < minimo){
	
				minimo = numero;
			}

		}
		
		document.getElementById("maximo").value = maximo;
		document.getElementById("minimo").value = minimo;

		respuesta = prompt ("Quiere continuar: si o no");

		contador++;


	}




}//FIN DE LA FUNCIÓN