/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var Uno;
	
	Uno=document.getElementById('importe').value;
	Uno=parseInt(Uno);

	var b,c;
    b=Uno/100
    c=b*25

	var resultado;
	resultado=document.getElementById('resultado').value;
    resultado=Uno-c;
    document.getElementById('resultado').value=resultado
}
