function mostrar()
{

	var contador=0;
	// declarar variables
	var mayor;
	var menor;
	var respuesta='si';
	var bandera=0;

	while(respuesta!='no')
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		if(bandera==0)
		{
			menor=numero;
			mayor=numero;
			bandera=1;
		}	

		if(numero<menor)
		{
			menor=numero;
		}	
	
		if(numero>mayor)
		{
			mayor=numero;
		}	
		respuesta=prompt("desea continuar ?")
	}
document.getElementById('maximo').value=mayor;
document.getElementById('minimo').value=menor;

//hermoso,tambien se puede hacer con if/else pero marea banda.
	}//FIN DE LA FUNCIÓN