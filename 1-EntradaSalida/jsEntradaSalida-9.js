/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var Uno;
	
	Uno=document.getElementById('sueldo').value;
	Uno=parseInt(Uno);

	var b,c;
    b=Uno/100
    c=b*10

	var resultado;
	resultado=document.getElementById('resultado').value;
    resultado=Uno+c;
    document.getElementById('resultado').value=resultado
}

