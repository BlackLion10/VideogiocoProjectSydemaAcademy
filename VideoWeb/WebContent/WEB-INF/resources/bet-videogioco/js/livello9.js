var piano = new Array();


for (var i=0; i<R; i++) {
    piano[i]=new Array();
    for (var j=0; j<C;j++){
        piano[i][j]=SFONDO; 
    }
}

function disegnaLivello9(){
var mappa    = "P0000000000000P00000"
             + "0000P00000000P000P00"
			 + "00000000000000000000"             
			 + "0000T00FT000000000T0"
			 + "P0000T00VF000000P000"
             + "0000000000000000P000"
			 + "000P000P0TT0000P0000"             
			 + "000P0000000000000000"
			 + "00000000S00000P00000"
			 + "0P000T00000000000000";
			 


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
			  case 'S' : piano[i][j]=BOTTONE;break
			  default  : piano[i][j]=SFONDO;break;
		}
	}	

	
}
		 
	piano[0][18]=PORTALE1;
	PORTALE1_X=0;
	PORTALE1_Y=18;
	piano[5][7]=PORTALE2;
	PORTALE2_X=5;
	PORTALE2_Y=7; 
	muovi=setInterval("c.spostaNemico()",800);	
	disegnaPiano();	
	}	
 