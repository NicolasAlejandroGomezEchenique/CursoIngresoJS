function Mostrar()
{
	var nota;
	nota=document.getElementById('laHora').value;
		switch(nota)
			{
				case "0":
				case "1":
				case "2":
				case "3":
					alert("La proxima sera");
					break;
				case "4":
				case "5":
				case "6":
					if(nota==6)
						{
							alert("Raspando");
						}else
							{
								alert("Raspando, debes esforzarte mas");
							}
					break;
				case "7":
				case "8":
				case "9":
				case "10":
					if(nota==7)
					{
						alert("aprobo");
					}else
						{
							alert("aprobo,muy bien");
						}
					break;
				default:
					alert("la nota ingresada es invalida");
			}
}
