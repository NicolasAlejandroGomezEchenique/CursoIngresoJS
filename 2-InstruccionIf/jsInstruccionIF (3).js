function mostrar()
{
//tomo la edad  

var edad;
edad=document.getElementById('edad').value;
edad=parseInt(edad);
if(edad>=18)
{
	alert("Mayor de Edad");
}

else
{
	alert("Menor de Edad");
}
}//FIN DE LA FUNCIÓN