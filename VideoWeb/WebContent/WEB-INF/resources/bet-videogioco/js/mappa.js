
var ominoX = 0; 
var ominoY = 0;
var armaX = 9; 
var armaY = 9;

var energia =0;

// costanti e parametri per la configurazione del gioco
var PILLOLA =180;
var BOTTONE="button";
var DELTA_ENERGIA =10;
var PORTALE=500;
var PORTALE1="portal1";       
var PORTALE2="portal2";
var SFONDO =900;
var ARMA="gun";
var FUNGO=2450;
var VINO=118;
var CHIAVE="key";
var NEMICO="ninja";
var ostacolo="30"; 
var buconero="h";
var omino = "o1";
var ominoConSpada = "16";
var pathImg = "img1/";
// dichiarazione variabili di lavoro
var i=0;
var j=0;
var countPillole = 0;
var randomX=0;
var randomY=0;
// numero di righe e numero di colonne
var R = 10; 
var C = 20;
var BOTTONE_X=0;
var BOTTONE_Y=19; 
var disponibilitaArma=false;
var pillolaAnimazioneX=1;
var pillolaAnimazioneY=1;
var degrees=0;
var PORTALE1_X=0;
var PORTALE1_Y=0;
var PORTALE2_X=0;
var PORTALE2_y=0;


var piano = new Array();
for (var i=0; i<R; i++) {
    piano[i]=new Array();
    for (var j=0; j<C;j++){
        piano[i][j]=SFONDO; 
    }
}

function disegnaPiano(){
    for (var i=0; i<R; i++){
        for (var j=0; j<C;j++){
            disegnaCellaPng(i,j);
        }
    }
    disegnaCellaSpecialePng(ominoX,ominoY,omino); 

	


} 

function generaFungo(){
	generaOggetto(FUNGO);
}

function generaPillole(){
    countPillole ++; 
	generaOggetto(PILLOLA);
}

function generaOstacolo(){
	generaOggetto(ostacolo);
}

function generaBuconero(){
	generaOggetto(buconero);
}

function generaOggetto(valOggetto){
	 
	// si genera un indice di riga casuale tra 0 e R
	var r = Math.random(); 
	rx = Math.floor( r * R);
	// si genera un indice di colonna casuale tra 0 e C
	var c = Math.random(); 
	ry = Math.floor( c * C);
if(piano[rx][ry]==SFONDO){
	// utilizzando rx e rc si ha una posizione casuale nel piano di gioco
		piano[rx][ry] = valOggetto; //posiziona oggetto nella matrice
	// in rx, ry c'è un nuovo valore quindi meglio ridisegnare la cella
		disegnaCellaPng(rx,ry);
}else { 
 generaOggetto(valOggetto);
 
}	 
}


function disegnaCellaPng(i,j){
    var id = "c"+i+"_"+j;
    var src = pathImg + piano[i][j] + ".png";
    document.getElementById(id).src= src;
} 

function disegnaCellaSpeciale(i,j,valore) {
    var id = "c"+i+"_"+j;
    var src = pathImg + valore + ".jpg"; 

    document.getElementById(id).src=src;   
} 

function disegnaCellaSpecialePng(i,j,valore) {
    var id = "c"+i+"_"+j;
    var src = pathImg + valore + ".png"; 

    document.getElementById(id).src=src;   
} 

function disegnaOmino() {
    disegnaCellaSpecialePng(ominoX,ominoY,omino);
} 




function barraEnergia() {
   var elem = document.getElementById("energy");   
		incremento=100/countPillole;
          elem.style.width = incremento + '%';
    
}

var width = 100;
setInterval("barraClessidra()",4*120*1000/100);

function barraClessidra() {
  var elem = document.getElementById("clessidra");   
   if (width == 0) {
        gameOver();
        clearInterval(id);
    } else {
        width--; 
        elem.style.width = width + '%'; 
    }
} 

function rotateAnimationPillola(){
    var id = "c"+pillolaAnimazioneX+"_"+pillolaAnimazioneY;
    document.getElementById(id).style.
    degrees++;
    if(degrees > 359){
        degrees = 1;
    }    
}

setInterval("rotateAnimationPillola()",10);



function avviaGioco(){
	disegnaLivello1();
}
var degrees = 0;


function rotateAnimation(){
 document.getElementById("pis").style.transform = "rotateY("+degrees+"deg)";
 document.getElementById("k").style.transform = "rotateY("+degrees+"deg)";
  
	degrees++;
	if(degrees > 359){
		degrees = 1;
	}	
}

setInterval("rotateAnimation()",10);




