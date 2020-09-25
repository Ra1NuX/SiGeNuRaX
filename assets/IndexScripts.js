	TotalNum = 20; 

function GetE(e){
	//alert(e.innerHTML);

	color_selec = "blue";
	color_correct = "black";
	var Clicked = e.innerHTML;

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
	;


	if((document.getElementById(Clicked).style.background != color_selec) && (document.getElementById(Clicked).style.background != color_correct)){
		document.getElementById(Clicked).style.background = color_selec;
		document.getElementById(Clicked).style.color = "white";
	}else if(document.getElementById(Clicked).style.background == color_selec){
		document.getElementById(Clicked).style.background = color_correct;
		document.getElementById(Clicked).style.color = "white";
	}else if((document.getElementById(Clicked).style.background != color_selec) && (document.getElementById(Clicked).style.background != "azure") && (document.getElementById(Clicked).style.background != "white")){
		document.getElementById(Clicked).style.background = "white";
		document.getElementById(Clicked).style.color = "black";
	}

	if(document.getElementById(Clicked).style.background == color_selec){
		TotalNum -= 1  ;
		//alert(TotalNum);
		document.getElementById("pointsNum").innerHTML = TotalNum;

	}else if(document.getElementById(Clicked).style.background == "white"){
		TotalNum += 1 ;
		//alert(TotalNum);
		document.getElementById("pointsNum").innerHTML = TotalNum;
	}
	//Probabilidad: 
	// 25 == 100 > 1 == ? 1*100/25 = 4 
	if(TotalNum != 0 ){
	NUM1 = 100 / (TotalNum) ;   
	//alert(NUM1);
	Prob = Math.round(NUM1 * 100) / 100;
	
	document.getElementById("ProbNum").innerHTML = Prob + "%";
	}else{
	document.getElementById("ProbNum").innerHTML = "100%";
	}
}
