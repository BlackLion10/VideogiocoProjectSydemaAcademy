var piano = new Array();


for (var i=0; i<R; i++) {
    piano[i]=new Array();
    for (var j=0; j<C;j++){
        piano[i][j]=SFONDO; 
    }
}

function disegnaLivello12(){
var mappa    = "00000F000000000000F00"
             + "00000P0000F00TKFT000"
			 + "F0P000000P0000TT0000"             
			 + "00000000000000000000"
			 + "000F00P000P0000F000"
             + "00000000000000000000"
			 + "000P0000F000000000F0"             
			 + "000F0000000000000000"
			 + "000000000000000F0000"
			 + "0F00B00P000000000P00";
			 


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
			  case 'P' : piano[i][j]=PILLOLA;    countPillole ++; break;
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
	piano[0][14]=PORTALE1;
	PORTALE1_X=0;
	PORTALE1_Y=14;
	piano[6][13]=PORTALE2;
	PORTALE2_X=6;
	PORTALE2_Y=13; 
	muovi=setInterval("c.spostaNemico()",800);
	disegnaPiano();		
	}	
 