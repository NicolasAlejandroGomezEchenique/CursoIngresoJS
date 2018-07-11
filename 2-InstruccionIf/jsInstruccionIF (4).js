function mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;
edad=parseInt(edad)
if(edad>=13&&edad<=17)
{
	alert("Eres un adolecente");
}
else
{
	alert("Eres mayor de edad");
}
}//FIN DE LA FUNCIÓN