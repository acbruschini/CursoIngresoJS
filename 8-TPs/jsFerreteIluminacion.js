/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.

 */
function CalcularPrecio() {
  var cantidad;
  var marca;
  var precioConDescuento;
  var precio = 35;
  var porcentajeDeDescuento;
  var descuento;
  var iibb;

  cantidad = parseInt(document.getElementById("Cantidad").value);
  marca = document.getElementById("Marca").value;

  //CON IFS

  /*
    if (cantidad >= 6) {

      porcentajeDeDescuento = 50;

    } else if (cantidad == 5) {
      if (marca == "ArgentinaLuz") {

        porcentajeDeDescuento = 40;

      } else {

        porcentajeDeDescuento = 30;

      }
    } else if (cantidad == 4) {

      if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {

        porcentajeDeDescuento = 25;

      } else {

        porcentajeDeDescuento = 20;

      }

    } else if (cantidad == 3) {

      if (marca == "ArgentinaLuz") {

        porcentajeDeDescuento = 15;

      } else if (marca == "FelipeLamparas") {

        porcentajeDeDescuento = 10;

      } else {

        porcentajeDeDescuento = 5;
      }

    } else {

      porcentajeDeDescuento = 0;
    }
  */

//CON IFS Y SWITCHS


  if (cantidad >= 6) {

    porcentajeDeDescuento = 50;

  } else if (cantidad == 5) {

    switch (marca) {
      case "ArgentinaLuz":
        porcentajeDeDescuento = 40;
        break;
      default:
        porcentajeDeDescuento = 30;

    }

  } else if (cantidad == 4) {

    switch (marca) {
      case "ArgentinaLuz": case "FelipeLamparas":
        porcentajeDeDescuento = 25;
        alert (porcentajeDeDescuento);
        break;
      default:
        porcentajeDeDescuento = 20;

    }

  } else if (cantidad == 3) {

    switch (marca) {
      case "ArgentinaLuz":
        porcentajeDeDescuento = 15;
        break;
      case "FelipeLamparas":
        porcentajeDeDescuento = 10;
        break;
      default:
        porcentajeDeDescuento = 5;

    }

  } else {

    porcentajeDeDescuento = 0;
  }

  descuento = ((precio * cantidad) * porcentajeDeDescuento) / 100;
  precioConDescuento = (precio * cantidad) - descuento;

  if (precioConDescuento > 120) {

    iibb = (precioConDescuento * 10) / 100;
    precioConDescuento = precioConDescuento + iibb;
    alert("Usted pago " + iibb + " de Ingresos Brutos");

  }

  document.getElementById("precioDescuento").value = precioConDescuento;

}
