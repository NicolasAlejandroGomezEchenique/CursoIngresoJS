function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
	case"Febrero":
		alert("Este mes no tiene mas de 29 dìas");
		break
	case"Abril":
	case"Junio":
	case"Septiembre":
	case"Noviembre":
		alert("Este mes tiene 30 dìas");
		break
	default:
		alert("Este mes tiene 31 dìas");
}
	
	



}//FIN DE LA FUNCIÓN