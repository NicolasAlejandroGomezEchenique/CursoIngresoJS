function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var promedio;

	contador=0;
	acumulador=0;
	respuesta='si';
	promedio=parseInt(promedio);

while(respuesta !="n" )
{
	contador=contador+1;
	numero=prompt("Ingrese un numero #"+contador);
	numero=parseInt(numero);

	acumulador=acumulador + numero;

	respuesta=prompt("desea seguir ingresando numeros ? : (Si/No) ");
}//sigue estando mal :´(
	promedio=acumulador+contador;
}
}

document.getElementById('suma').value="la suma es : "+acumulador;
document.getElementById('promedio').value="el promedio es: "+promedio;
}//FIN DE LA FUNCIÓN