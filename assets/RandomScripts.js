	TotalNum = 20; 
	RNG1 = Math.floor((Math.random() * TotalNum) + 1);
	RNG2 = Math.floor((Math.random() * TotalNum) + 1);
	while(RNG1 == RNG2){
		RNG2 = Math.floor((Math.random() * TotalNum) + 1);
	}
 	Operador = 2 ;
 	cont = 0;

function GetE(e){
	//alert(e.innerHTML);
	//alert(RNG1);

	if (cont < 2) {

	color_selec = "blue";
	color_correct = "black";
	console.log(e.innerHTML);
	var Clicked = e.innerHTML;

	console.log(Clicked)
	switch(Clicked){
	case "1":break;;
	case "2":break;;
	case "3":break;;
	case "4":break;;
	case "5":break;;
	case "6":break;;
	case "7":break;;
	case "8":break;;
	case "9":break;;
	case "10":break;;
	case "11":break;;
	case "12":break;;
	case "13":break;;
	case "14":break;;
	case "15":break;;
	case "16":break;;
	case "17":break;;
	case "18":break;;
	case "19":break;;
	case "20":break;;
	default:
		Clicked = Math.floor((Math.random() * TotalNum) + 1);
		i=0;
	while(((document.getElementById(Clicked).style.background == color_selec)||(document.getElementById(Clicked).style.background == color_correct))&&(i <500)){
		Clicked = Math.floor((Math.random() * TotalNum) + 1);
		i++;
	}
	break;
	}


	if((RNG1 != Clicked)&&(RNG2 != Clicked)){
			if((document.getElementById(Clicked).style.background != color_selec) && (document.getElementById(Clicked).style.background != color_correct)){
					document.getElementById(Clicked).style.background = color_selec;
					document.getElementById(Clicked).style.color = "white"
					TotalNum -= 1  ;
					document.getElementById("pointsNum").innerHTML = TotalNum;
			}
		//Probabilidad: 
		// 25 == 100 > 1 == ? 1*100/25 = 4 
			if(TotalNum != 0 ){
				NUM1 = 100 / (TotalNum) ;   
		//alert(NUM1);
				Prob = Math.round(NUM1 * 100) / 100;

				Prob = Prob * Operador ;


				document.getElementById("ProbNum").innerHTML = Prob + "%";
			}else{
				document.getElementById("ProbNum").innerHTML = "0%";
			}
	}else if(document.getElementById(Clicked).style.background != color_correct){document.getElementById(Clicked).style.color = "white";document.getElementById(Clicked).style.background = color_correct;TotalNum -= 1;document.getElementById("pointsNum").innerHTML = TotalNum; Operador -= 1;cont+=1}
}
if (cont == 2) {function Finish(){alert("SE ACABO!");}
setTimeout(Finish(),5000);}
}


