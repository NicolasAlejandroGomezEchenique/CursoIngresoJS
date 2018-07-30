function Mostrar()
/*ingresar:
	Maria f 15
	Jose M 33
	Pepe m 81
mostrar:
	1)mayores de edad 
	2)menores de edad
	3)cant.mujeres
	4)cant.hombres
nombre:
	5)nombre del mayor edad
	6)nombre del menor edad
	7)nombre hombre de menor edad 
*/
{
	var nombre;
	var edad;
		edad=parseInt(edad);
	var sexo;
	var contador;
	var contadorMayoresDeEdad;
	var contadorMenoresDeEdad;
	var contadorMujeres;
	var contadorHombres;
		//inicializacion
		contador=0;
		contadorMayoresDeEdad=0;
		contadorMenoresDeEdad=0;
		contadorMujeres=0;
		contadorHombres=0;

while(contador<3)
	{
		//carga de datos
		contador++;
		nombre=prompt("Ingrese su nombre por favor: ");
		sexo=prompt("ingrese su sexo: ");
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("error al ingresar el sexo,intentelo nuevamente: ");
		}
		edad=prompt("Ingrese su edad por favor: ");
		while(edad<0||edad>100)
		{
			edad=prompt("error al introducir la edad,intentelo nuevamente: ");
		}

		//analisis

		if(edad>18)
		{
			contadorMayoresDeEdad++;
		}else
			{
				contadorMenoresDeEdad++;
			}
		if(sexo="f")
		{
			contadorMujeres++;
		}else
			{
				contadorHombres++;
			}
	}

//mostrar
document.write("<br> la cantidad de mayores es: "+contadorMayoresDeEdad);
document.write("<br> la cantidad de menores es: "+contadorMenoresDeEdad);
document.write("<br> la cantidad de mujeres es: "+contadorMujeres);
document.write("<br> la cantidad de hombre es: "+contadorHombres);

}
