var piano = new Array();
var muovi;

for (var i=0; i<R; i++) {
    piano[i]=new Array();
    for (var j=0; j<C;j++){
        piano[i][j]=SFONDO; 
    }
}


function disegnaLivello3(){


var mappa    = "0TT000000000000P0000"
             + "0P00000F000000000000"
			 + "F0BP000000000000F000"             
			 + "P0P00000000000P000P0"
			 + "000P00000P0000000000"
             + "000000000000000000F0"
			 + "00P0000F000P000000P0"             
			 + "0000V00000000P000000"
			 + "0TT0000P0000000000F0"
			 + "0B00000P00000000P000";

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
			  default  : piano[i][j]=SFONDO;break;
		}
	}	

				 
	
}
	piano[8][0]=PORTALE1;
	PORTALE1_X=8;
	PORTALE1_Y=0;
	piano[2][9]=PORTALE2;
	PORTALE2_X=2;
	PORTALE2_Y=9; 
	piano[8][6]=ARMA;
	armaX=8;
	armaY=6;
	muovi=setInterval("c.spostaNemico()",800);
	disegnaPiano();	
	}	