var piano = new Array();


for (var i=0; i<R; i++) {
    piano[i]=new Array();
    for (var j=0; j<C;j++){
        piano[i][j]=SFONDO; 
    }
}

function disegnaLivello14(){
var mappa    = "000000F00000000F0T00"
             + "000000T0000000F00F000"
			 + "0F0000000000000V000T"             
			 + "00T00000TTT000000000"
			 + "00T00T00TKT0000F0000"
             + "00000000F0F000000000"
			 + "0000000000000000T000"             
			 + "0000T0000000000F0000"
			 + "00000000T00000000000"
			 + "0000F0000000000F00T0";
			 


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
	piano[1][15]=PORTALE1;
	PORTALE1_X=1;
	PORTALE1_Y=15;
	piano[5][9]=PORTALE2;
	PORTALE2_X=5;
	PORTALE2_Y=9; 
	muovi=setInterval("c.spostaNemico()",800);
	disegnaPiano();
}	
 