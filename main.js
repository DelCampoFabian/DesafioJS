let programa
let ingresarTienda 


function opciones () {
   programa = parseInt (prompt("Ingrese la opcion que desea:\n 1- Indumentaria \n 2- Accesorios \n 3- Suplementos \n 4- Barritas y snacks ")); 
}
function ingTienda (){
   ingresarTienda = prompt ("¿Desea ingresar a la tienda?\n si/no") 
   if (ingresarTienda == "no"){
      alert ("Muchas gracias");
   }
}

ingTienda ()

    while (ingresarTienda != "no") {

      opciones ();
      if(programa === 1) {
         alert("Tenemos para usted las siguentes opciones");
          let indumentaria = prompt("Ingrese la opcion que desee:\n a- Conjunto Adidas Hombre $10500 \n b- Conjunto Adidas Mujer $10500 \n c- Zapatillas Nike Hombre (Talles 39-43) $15000 \n d- Zapatillas Nike Mujer (Talles 34-40) $15000\n \n Presione cualquier tecla para volver al inicio ")
          if (indumentaria === "a") {
             alert ("Su compra de Conjunto Adidas Hombre ha sido realizada")
          }else if (indumentaria === "b"){
             alert ("Su compra de Conjunto Adidas Mujer ha sido realizada")
          }else if (indumentaria === "c"){
             alert ("Su compra de Zapatillas Nike Hombre (Talles 39-43) ha sido realizada")
          }else if (indumentaria === "d"){
             alert ("Su compra de Zapatillas Nike Mujer (Talles 34-40) ha sido realizada")
          }else if ((indumentaria != "a") && (indumentaria != "b") && (indumentaria != "c") && (indumentaria != "d")){
             alert ("Estas volviendo al inicio");
          }else {
            alert ("Volviendo al inicio");
            ingTienda ()
          }
     }
     
     
     if(programa === 2) {
         alert("Tenemos para usted las siguentes opciones");
         let accesorios = prompt("Ingrese la opcion que desee:\n a- Mancuernas 10kg $15000  \n b- Set Barra olimpica + 6 discos 10kg c/u $25000  \n c- Set colchoneta + bandas elasticas + rueda abdominal $6000  \n d- Banco pecho inclinable $20000\n \n Presione cualquier tecla para volver al inicio")
         if (accesorios === "a") {
            alert ("Su compra de Mancuernas 10kg ha sido realizada")
         }else if (accesorios === "b"){
            alert ("Su compra de Set Barra olimpica + 6 discos 10kg c/u ha sido realizada")
         }else if (accesorios === "c"){
            alert ("Su compra de Set colchoneta + bandas elasticas + rueda abdominal ha sido realizada")
         }else if (accesorios === "d"){
            alert ("Su compra de Banco pecho inclinable ha sido realizada")
         }else if ((accesorios != "a") && (accesorios != "b") && (accesorios != "c") && (accesorios != "d")){
             alert ("Estas volviendo al inicio");
         }else {
            alert ("Volviendo al inicio");
            ingTienda ()
          }
     }
     
     if(programa === 3) {
         alert("Tenemos para usted las siguentes opciones");
         let suplementos = prompt("Ingrese la opcion que desee:\n a- Proteina Star nutrition 1kg $2800  \n b- Creatina Hardcore nutrition 500g $1500  \n c- BCAA Star nutrition 1kg $2000  \n d- Vaso shaker batidos $550\n \n Presione cualquier tecla para volver al inicio")
         if (suplementos === "a") {
            alert ("Su compra de Proteina Star nutrition 1kg ha sido realizada")
         }else if (suplementos === "b"){
            alert ("Su compra de Creatina Hardcore nutrition 500g ha sido realizada")
         }else if (suplementos === "c"){
            alert ("Su compra de BCAA Star nutrition 1kg ha sido realizada")
         }else if (suplementos === "d"){
            alert ("Su compra de Vaso shaker batidos ha sido realizada")
         }else if ((suplementos != "a") && (suplementos != "b") && (suplementos != "c") && (suplementos != "d")){
             alert ("Estas volviendo al inicio");
             ingTienda()
          }else {
            alert ("Volviendo al inicio");
            
          }
     }
     
     if(programa === 4) {
         alert("Tenemos para usted las siguentes opciones");
         let barritasSnacks = prompt("Ingrese la opcion que desee:\n a- 60 Unidades barritas cereal mix $700  \n b- 60 Unidades frutos secos Arcor $1200\n c- 2kg frutos secos a eleccion $1600  \n d- 60 Unidades Galletas Nutrip $2200\n \n Presione cualquier tecla para volver al inicio")
         if (barritasSnacks === "a") {
            alert ("Su compra de 60 Unidades barritas cereal mix $700 ha sido realizada")
         }else if (barritasSnacks === "b"){
            alert ("Su compra de 60 Unidades frutos secos Arcor ha sido realizada")
         }else if (barritasSnacks === "c"){
            alert ("Su compra de 2kg frutos secos a eleccion ha sido realizada")
         }else if (barritasSnacks === "d"){
            alert ("Su compra de 60 Unidades Galletas Nutrip ha sido realizada")
         }else if ((barritasSnacks != "a") && (barritasSnacks != "b") && (barritasSnacks != "c") && (barritasSnacks != "d")){
             alert ("Estas volviendo al inicio");
          }else {
            alert ("Volviendo al inicio");
            ingTienda ()
          }
     }
      alert ("Volviendo al inicio");
      ingTienda ()
    }




