var piano = new Array();


for (var i=0; i<R; i++) {
    piano[i]=new Array();
    for (var j=0; j<C;j++){
        piano[i][j]=SFONDO; 
    }
}

function disegnaLivello5(){
var mappa    = "0TT00000000000F00P00"
			 + "00T0000F000P00000000"             
			 + "00T00P0000000F0P0000"
			 + "00T0000000P000000000"
             + "00F0000P00000000F0P0"
			 + "0000K0000000P0000000"             
			 + "0F00000P000000000000"
			 + "0P0P000000F0000F00P0"
			 + "00000000000P000000B0";
			 


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
	 
	piano[2][18]=PORTALE1;
	PORTALE1_X=2;
	PORTALE1_Y=18;
	piano[8][4]=PORTALE2;
	PORTALE2_X=8;
	PORTALE2_Y=4;
	muovi=setInterval("c.spostaNemico()",800);	
	disegnaPiano();		
	}	
 

