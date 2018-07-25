function mostrar()
{

var sexo = prompt("ingrese f ó m .");
sexo=sexo.toLowerCase();
while(!(sexo=="f" || sexo=="m"))	
{
	sexo = prompt("sexo invalido por favor volver a ingresar los datos");
	sexo=sexo.toLowerCase();

}



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN