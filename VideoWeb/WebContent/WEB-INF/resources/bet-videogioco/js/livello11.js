var piano = new Array();


for (var i=0; i<R; i++) {
    piano[i]=new Array();
    for (var j=0; j<C;j++){
        piano[i][j]=SFONDO; 
    }
}

function disegnaLivello11(){
var mappa    = "0000000TTT00000P0000"
             + "0000000FPF00000000P0"
			 + "000P0000000000000000"             
			 + "000000000P00000P0000"
			 + "00000000000000P00000"
             + "000P000000000000P000"
			 + "0000000000000000T0K0"             
			 + "00000000000P0000T0V0"
			 + "0000P00000000P000000"
			 + "P0000000P000000000P0";
			 


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

			 
	
}	
	piano[8][11]=PORTALE1;
	PORTALE1_X=8;
	PORTALE1_Y=11;
	piano[3][3]=PORTALE2;
	PORTALE2_X=3;
	PORTALE2_Y=3; 
	muovi=setInterval("c.spostaNemico()",800);
	disegnaPiano();	
	}	
 