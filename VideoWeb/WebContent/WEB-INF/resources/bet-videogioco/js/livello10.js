var piano = new Array();


for (var i=0; i<R; i++) {
    piano[i]=new Array();
    for (var j=0; j<C;j++){
        piano[i][j]=SFONDO; 
    }
}

function disegnaLivello10(){
var mappa    = "00000000000000000000"
             + "000000000000000T0000"
			 + "00000000000000T0T000"             
			 + "0000000000000T0B0T00"
			 + "000000000000TB000BT0"
             + "0000000000000T0K0T00"
			 + "00000000000000TTT000"             
			 + "0T000000000000000000"
			 + "T0V00000000000000000"
			 + "0T000000000000000000";
			 


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
	disegnaPiano();			 
	piano[8][1]=PORTALE1;
	PORTALE1_X=8;
	PORTALE1_Y=1;
	piano[4][15]=PORTALE2;
	PORTALE2_X=4;
	PORTALE2_Y=15;
	muovi=setInterval("c.spostaNemico()",800);	
	disegnaPiano();	
	}	
 