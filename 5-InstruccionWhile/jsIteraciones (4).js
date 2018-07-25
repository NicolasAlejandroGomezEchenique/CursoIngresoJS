function mostrar()
{

	var numero =parseInt (prompt("ingrese un número entre 0 y 10."));
while(numero<=0 || numero>=10 || isNaN(numero))
{
	numero = (prompt("Numero invalido,ingrese un número entre 0 y 10."));
}
document.getElementById('Numero').value=("numero valido: "+numero)

}//FIN DE LA FUNCIÓN