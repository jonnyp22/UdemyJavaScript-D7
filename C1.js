function extraccion(elementoID){

    let extraccionUno = document.getElementById(elementoID);
    let extraccionDValor = extraccionUno.value;
    let conversionANumero = Number(extraccionDValor);

    //console.log("Función extraccion");
    //console.log(conversionANumero);
    return conversionANumero;

}
function resultadoVentas(){

    let ventas1,ventas2,ventas3,ventas4,ventas5,ventas6;

    ventas1 = extraccion("c1");
    ventas2 = extraccion("c2");
    ventas3 = extraccion("c3");
    ventas4 = extraccion("c4");
    ventas5 = extraccion("c5");
    ventas6 = extraccion("c6");

    let resultadoSuma = (ventas1+ventas2+ventas3+ventas4+ventas5+ventas6);

    
    let resultadoTotal = document.getElementById("resultado");
    resultadoTotal.textContent= resultadoSuma;

}