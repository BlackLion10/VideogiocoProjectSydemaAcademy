var piano = new Array();


for (var i=0; i<R; i++) {
    piano[i]=new Array();
    for (var j=0; j<C;j++){
        piano[i][j]=SFONDO; 
    }
}

function disegnaLivello4(){
var mappa    = "00T000000T0000P0000P"
             + "T0F00P00000000000000"
			 + "T0F000000T0000000000"             
			 + "0FF00F000P000F000000"
			 + "00000000000000000P00"
             + "0T00F000000000F00000"
			 + "000000P00000P0000S00"             
			 + "000P00000T00000P0000"
			 + "P000V000000000000000"
			 + "000000000T00000000P0";
			 


function mostraChiave(){
    document.getElementById("chiave").style.display = "block";
}
function chiaveNonDisponibile(){
    piano[2][1]=SFONDO;
	disegnaCellaPng(2,1);
}
function chiaveDisponibile(){
    piano[2][1]=CHIAVE;
	disegnaCellaSpecialePng(2,1,CHIAVE);
}



	for (var i=0; i<R; i++) {
		for (var j=0; j<C;j++){
			var c = mappa.charAt(i*C+j);
			switch(c){
			  case 'T' : piano[i][j]=ostacolo;break;
			  case 'F' : piano[i][j]=FUNGO;break;
			  case 'P' : piano[i][j]=PILLOLA ;countPillole ++; break;
			  case '0' : piano[i][j]=SFONDO;break;
			  case 'B' : piano[i][j]=buconero;break;
			  case 'L' : piano[i][j]=PORTALE1;break;
			  case 'R' : piano[i][j]=PORTALE2;break;
			  case 'S' : piano[i][j]=BOTTONE;break
			  default  : piano[i][j]=SFONDO;break;
		}
	}	

			 
	
}
	piano[1][2]=PORTALE1;
	PORTALE1_X=1;
	PORTALE1_Y=2;
	piano[8][5]=PORTALE2;
	PORTALE2_X=8;
	PORTALE2_Y=5; 
	muovi=setInterval("c.spostaNemico()",800);
	disegnaPiano();	
	}	
 