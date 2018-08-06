
function Mostrar()
{
 var base,altura,perimetro,area;
 	base=prompt("Ingrese la base: ");
 	altura=prompt("Ingrese la altura: ");
 	base=parseInt(base);
 	altura=parseInt(altura);


 	perimetro=base*3
 	area=(base*altura)/2

 	alert("perimetro: "+perimetro+" superficie: "+area);
}
