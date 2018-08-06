function Mostrar()
{
	var precio,descuento,iva,precioDescuento,precioFinal,precioDescuento2;
		precio=parseInt(precio);
		descuento=parseInt(descuento);

			precio=prompt("Ingrese el precio: ");
			descuento=prompt("Ingrese el descuento: ");

			iva=(precio/100)*21;
			precioDescuento=(precio/100)*descuento;
			precioDescuento2=precio-precioDescuento;
			precioFinal=iva+precioDescuento2;

			alert("El descuento: "+precioDescuento+". El precio con el descuento: "+precioDescuento2+". El IVA: "+iva);
			document.getElementById('elPrecioFinal').value=precioFinal
}
