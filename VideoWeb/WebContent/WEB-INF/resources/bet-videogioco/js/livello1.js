var piano = new Array();


for (var i=0; i<R; i++) {
    piano[i]=new Array();
    for (var j=0; j<C;j++){
        piano[i][j]=SFONDO; 
		
    }
}


function disegnaLivello1(){
	
var mappa    = "00TT000P000000P00000"
             + "000T0P00000P000P00P0"
			 + "SF00T00F000000FT0000"             
			 + "TF000000000T00000000"
			 + "0000P00000P000P00P00"
             + "00000P000F0000000000"
			 + "0F000000000000P00000"
			 + "000P00000P000000FP00"
			 + "P000P000000000P00000";
			 


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
			  case 'S' : piano[i][j]=BOTTONE;break;
			  default  : piano[i][j]=SFONDO;break;
		}
	}		 
}
piano[1][1]=PORTALE1;
PORTALE1_X=1;
PORTALE1_Y=1;
piano[8][3]=PORTALE2;
PORTALE2_X=8;
PORTALE2_Y=3;
ominoX=1;
ominoY=2;

disegnaPiano();	
muovi=setInterval("c.spostaNemico()",800);
}	
 


