var piano = new Array();


for (var i=0; i<R; i++) {
    piano[i]=new Array();
    for (var j=0; j<C;j++){
        piano[i][j]=SFONDO; 
    }
}

function disegnaLivello13(){
var mappa    = "00F0000000000P000000"
             + "0P0000P0000000PP0000"
			 + "00000000000000000000"             
			 + "0000000000P000000F00"
			 + "00P00000000000000000"
             + "00000F000P0000000P00"
			 + "000P000000000F000000"             
			 + "000000P00000P00TTTT0"
			 + "000000000000000T0ST0"
			 + "00P000000F00000T00P0";
			 


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
			  case 'P' : piano[i][j]=PILLOLA; countPillole ++; break;
			  case '0' : piano[i][j]=SFONDO;break;
			  case 'B' : piano[i][j]=buconero;break;
			  case 'L' : piano[i][j]=PORTALE1;break;
			  case 'R' : piano[i][j]=PORTALE2;break;
			  case 'K' : piano[i][j]=CHIAVE;break;
			  case 'V' : piano[i][j]=VINO;break;
			  default  : piano[i][j]=SFONDO;break;
		}
	}	

				 
	
}	piano[5][9]=PORTALE1;
	PORTALE1_X=5;
	PORTALE1_Y=9;
	piano[8][16]=PORTALE2;
	PORTALE2_X=8;
	PORTALE2_Y=16; 
	muovi=setInterval("c.spostaNemico()",800);
	disegnaPiano();
	}	
 