var piano = new Array();


for (var i=0; i<R; i++) {
    piano[i]=new Array();
    for (var j=0; j<C;j++){
        piano[i][j]=SFONDO; 
    }
}
var PORTALE1_X=6;
var PORTALE1_Y=10;
var PORTALE2_X=17;
var PORTALE2_Y=0;

function disegnaLivello8(){
var mappa    = "00P0000000P0F000P000"
             + "00T0000T00000000FK00"
			 + "0F00000000000000T0P0"             
			 + "000P000T00P000000000"
			 + "000F00000TTT00000P00"
             + "0P0T00000TPT0000T000"
			 + "0000F0000T0T00000P00"             
			 + "0000P00000000PF00T00"
			 + "0P0000T0000000000000"
			 + "0000F00P00000000P000";
			 


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
			 
	piano[0][18]=PORTALE1;
	PORTALE1_X=0;
	PORTALE1_Y=18;
	piano[6][10]=PORTALE2;
	PORTALE2_X=6;
	PORTALE2_Y=10; 
	muovi=setInterval("c.spostaNemico()",800);	
	disegnaPiano();	
	}	
 