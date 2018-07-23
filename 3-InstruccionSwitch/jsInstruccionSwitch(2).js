function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
	{
		case"Julio":
		case"Agosto":
			alert("abrigate que hace frìo");
			break;
		case"Abril":
		case"Mayo":
		case"Junio":	
			alert("Falta para el invierno");
			break
		default:
			alert("ya pasamos el frio,ahora calor");
	}


}//FIN DE LA FUNCIÓN