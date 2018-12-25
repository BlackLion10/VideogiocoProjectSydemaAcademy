var piano = new Array();


for (var i=0; i<R; i++) {
    piano[i]=new Array();
    for (var j=0; j<C;j++){
        piano[i][j]=SFONDO; 
    }
}

function disegnaLivello15(){
var mappa    = "0000T0000000F0000P00"
             + "0000P000T000PP000000"
			 + "00000000000F00000000"             
			 + "0P000000P000000P0000"
			 + "0000P000000000000000"
             + "00T00000000F0000T000"
			 + "00000000000P00000000"
			 + "0TK0T0000000F00P0000"
			 + "0TTV000000000000S0T0";
			 


function mostraChiave(){
    document.getElementById("chiave").style.display = "block";
}
function chiaveNonDisponibile(){
    piano[7][3]=SFONDO;
	disegnaCellaPng(7,3);
}
function chiaveDisponibile(){
    piano[7][3]=CHIAVE;
	disegnaCellaSpecialePng(7,3,CHIAVE);
}



	for (var i=0; i<R; i++) {
		for (var j=0; j<C;j++){
			var c = mappa.charAt(i*C+j);
			switch(c){
			  case 'T' : piano[i][j]=ostacolo;break;
			  case 'F' : piano[i][j]=FUNGO;break;
			  case 'P' : piano[i][j]=PILLOLA;countPillole ++;break;
			  case '0' : piano[i][j]=SFONDO;break;
			  case 'B' : piano[i][j]=buconero;break;
			  case 'L' : piano[i][j]=PORTALE1;break;
			  case 'R' : piano[i][j]=PORTALE2;break;
			  case 'K' : piano[i][j]=CHIAVE;break;
			  case 'V' : piano[i][j]=VINO;break;
			  default  : piano[i][j]=SFONDO;break;
		}
	}	

		 
		 
}	piano[0][13]=PORTALE1;
	PORTALE1_X=0;
	PORTALE1_Y=13;
	piano[7][3]=PORTALE2;
	PORTALE2_X=7;
	PORTALE2_Y=3;
	muovi=setInterval("c.spostaNemico()",800);
	disegnaPiano();	
	}	
 