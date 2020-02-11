function mostrar()
{
//tomo la edad  

var edad;
edad = document.getElementById("edad").value;
/*
//CON EL ELSE
if (edad >= 13 && edad <= 17) {

   // alert("La Persona NO es adolescente");
}
else
{

    alert("La Persona NO es adolescente");

}
*/
if (edad <= 13 || edad >= 17) {

    alert("La Persona NO es adolescente");
 }


}//FIN DE LA FUNCIÓN