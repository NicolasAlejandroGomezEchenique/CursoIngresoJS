function Mostrar()
{
	var precio;
		precio=parseInt(precio);
	var descuento;
		descuento=parseInt(descuento);
	var precioFinal;

		precio=prompt("Ingrese usted un precio: ");
		descuento=prompt("Ingrese el descuento en cuestion: ");
		precioFinal=precio-((precio/100)*descuento);
		document.getElementById('elPrecioFinal').value=precioFinal;
}
