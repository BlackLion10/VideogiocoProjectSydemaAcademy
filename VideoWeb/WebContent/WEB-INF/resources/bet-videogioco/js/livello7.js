var piano = new Array();


for (var i=0; i<R; i++) {
    piano[i]=new Array();
    for (var j=0; j<C;j++){
        piano[i][j]=SFONDO; 
    }
}

function disegnaLivello7(){
var mappa    = "00FP0000000000000P00"
             + "B00000P0000P0F000000"
			 + "0P000F00000000P00000"             
			 + "000P000F0P00000000P0"
			 + "00000000000000F00000"
             + "00TT0000000000000000"
			 + "0T00T0000000P0000P00"             
			 + "T00KB000P00000000F00"
			 + "0T00T0000000F0000000"
			 + "00TT000000000000P000";
			 


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
			  default  : piano[i][j]=SFONDO;break;
		}
	}	

	
}
			 
	piano[7][2]=PORTALE1;
	PORTALE1_X=7;
	PORTALE1_Y=2;
	piano[3][12]=PORTALE2;
	PORTALE2_X=3;
	PORTALE2_Y=12;
	muovi=setInterval("c.spostaNemico()",800);	
	disegnaPiano();		
	}	
 