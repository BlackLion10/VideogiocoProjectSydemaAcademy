var piano = new Array();


for (var i=0; i<R; i++) {
    piano[i]=new Array();
    for (var j=0; j<C;j++){
        piano[i][j]=SFONDO; 
    }
}

function disegnaLivello6(){
var mappa    = "000P0000000P000000000"
			 + "000000000000000FFF00"             
			 + "0P0000P00000P00FSF00"
			 + "00000000000000TT0P00"
             + "P000000000000000B000"
			 + "000B00P000P000000000"             
			 + "0000P0000000000P0000"
			 + "00000000000000000000"
			 + "0000P00000000P000000";
			 


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
			  case 'S' : piano[i][j]=BOTTONE;break
			  default  : piano[i][j]=SFONDO;break;
		}
	}	

			 
	piano[3][18]=PORTALE1;
	PORTALE1_X=3;
	PORTALE1_Y=18;
	piano[6][3]=PORTALE2;
	PORTALE2_X=6;
	PORTALE2_Y=3; 
	muovi=setInterval("c.spostaNemico()",800);	
	disegnaPiano();	

}	}	
 