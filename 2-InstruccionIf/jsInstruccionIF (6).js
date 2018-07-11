function mostrar()
{
//tomo la edad  
var edad;
                   
edad=parseInt(document.getElementById('edad').value);
	if(edad<13)
{
  alert("eres un niño"); 
}
else if(edad>17)
{
	alert("eres un adulto");
}
else
{
	alert("eres un adolecente");
}

}//FIN DE LA FUNCIÓN