function Mostrar()
{
		var numero1,numero2;
	var resultado;
			numero1=prompt("Ingrese el primer numero: ");
			numero2=prompt("Ingrese el segundo numero: ");
				if(numero1==numero2)
				{
					resultado=numero1+numero2
					alert(resultado);
				}
				if(numero1>numero2)
				{
					numero1=parseInt(numero1);
					numero2=parseInt(numero2);
					resultado=numero1/numero2
					alert(resultado);
				}
				if (numero1<numero2) 
				{				
					numero1=parseInt(numero1);
					numero2=parseInt(numero2);
					resultado=numero1+numero2
					alert(resultado);
				}
				if(resultado<50)
				{
					alert("la suma es "+resultado+" y es menor a 50.");
				}			
}
