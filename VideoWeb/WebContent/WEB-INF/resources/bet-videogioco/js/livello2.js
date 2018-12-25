var muovi;
var piano = new Array();
disponibilitaArma=false;		

for (var i=0; i<R; i++) {
    piano[i]=new Array();
    for (var j=0; j<C;j++){
        piano[i][j]=SFONDO; 
		
    }
}

function disegnaLivello2(){
	
var mappa    = "000P000P000000F00000"
             + "P000000P000F00P00F00"
			 + "00F00000000000000F0S"             
			 + "00P00T00000000000F0T"
			 + "0VT000P00P00000P0P00"
             + "00T00000000000000000"
			 + "000P00000F00000TT000"             
			 + "000000P00P00000PT000"
			 + "0F00P000000000F00000"
			 + "000P000FP000P000000P";

	for (var i=0; i<R; i++) {
		for (var j=0; j<C;j++){
			var c = mappa.charAt(i*C+j);

			switch(c){
			  case 'T' : piano[i][j]=ostacolo;break;
			  case 'F' : piano[i][j]=FUNGO;break;
			  case 'P' : piano[i][j]=PILLOLA; countPillole ++; break;
			  case '0' : piano[i][j]=SFONDO;break;
			  case 'B' : piano[i][j]=buconero;break;
			  case 'L' : piano[i][j]=PORTALE1;break;
			  case 'R' : piano[i][j]=PORTALE2;break;
			  case 'V' : piano[i][j]=VINO;break;
			  case 'S' : piano[i][j]=BOTTONE;break
			  default  : piano[i][j]=SFONDO;break;
		}
	}	


	
}
	
	piano[3][10]=PORTALE1;
	PORTALE1_X=3;
	PORTALE1_Y=10;
	piano[8][14]=PORTALE2;
	PORTALE2_X=8;
	PORTALE2_Y=14; 
	disegnaPiano();
	muovi=setInterval("c.spostaNemico()",800);
	}	
	
	