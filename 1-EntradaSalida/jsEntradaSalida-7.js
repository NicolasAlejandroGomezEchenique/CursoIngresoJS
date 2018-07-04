/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var Uno;
	var Dos;
	var Resultado;
	Uno=document.getElementById('numeroUno').value;
	Uno=parseInt(Uno);
	Dos=document.getElementById('numeroDos').value;
	Dos=parseInt(Dos);	
	resultado=Uno+Dos;
	alert(resultado);
}

function restar()
{
	var Uno;
	var Dos;
	var Resultado;
	Uno=document.getElementById('numeroUno').value;
	Uno=parseInt(Uno);
	Dos=document.getElementById('numeroDos').value;
	Dos=parseInt(Dos);	
	resultado=Uno-Dos;
	alert(resultado);
}

function multiplicar()
{ 
	var Uno;
	var Dos;
	var Resultado;
	Uno=document.getElementById('numeroUno').value;
	Uno=parseInt(Uno);
	Dos=document.getElementById('numeroDos').value;
	Dos=parseInt(Dos);	
	resultado=Uno*Dos;
	alert(resultado);
}

function dividir()
{
	var Uno;
	var Dos;
	var Resultado;
	Uno=document.getElementById('numeroUno').value;
	Uno=parseInt(Uno);
	Dos=document.getElementById('numeroDos').value;
	Dos=parseInt(Dos);	
	resultado=Uno/Dos;
	alert(resultado);
}

