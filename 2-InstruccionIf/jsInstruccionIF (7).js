function mostrar()
{
//tomo la edad  
var edad,estadoCivil;
edad=document.getElementById('edad').value;
estadoCivil=document.getElementById('estadoCivil').value;
edad=parseInt(edad)
if(edad<=17&&(estadoCivil!="soltero"))
{
	alert("Es muy pequeño para no ser soltero")
}	


}//FIN DE LA FUNCIÓN