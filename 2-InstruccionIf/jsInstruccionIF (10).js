function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var randomNum = Math.floor(Math.random() * 10)+1;
	if ( randomNum == 9 || randomNum == 10){

		alert (randomNum + " EXCELENTE");

	} else if (randomNum >= 4 && randomNum < 9) {

		alert (randomNum + " APROBO");
	} else {

		alert (randomNum + " PONETE LAS PILAS WACHIN");
	}

}//FIN DE LA FUNCIÓN