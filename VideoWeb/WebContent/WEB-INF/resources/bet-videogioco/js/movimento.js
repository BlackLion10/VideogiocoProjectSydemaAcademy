//muovere l omino con il pos e la variabile delta in animazione
var contatoreDx=0;
var contatoreSx=10;
var contatoreGiu=0;
var contatoreSu=0;
var newX=0;
var newY=0;
var ubriaco=false;
var numeroLivello=1;
contatore =0;

function checkKeyDown(e) {
    e = e || window.event;
    switch(e.keyCode){
    case 39: setTimeout("destra()",100); break;
    case 40: setTimeout("giu()",100); break;
    case 37:  setTimeout("sinistra()",100);  break;
    case 38: setTimeout("su()",100);  break;    
    }    
}
function checkKeyPress (event){
    var chCode = ('charCode' in event) ? event.charCode : event.keyCode;
    
    switch(chCode){
        case 100: setTimeout("destra()",100); break;
        case 115: setTimeout("giu()",100); break;
        case 97:  setTimeout("sinistra()",100);  break;
        case 119: setTimeout("su()",100);  break;
    } 
}

function chiaveNonDisponibile(){
    piano[7][1]=SFONDO;
	disegnaCellaPng(7,1);
}
function chiaveDisponibile(){
    piano[7][1]=CHIAVE;
	disegnaCellaSpecialePng(7,1,CHIAVE);
}

function pistolaNonDisponibile(){
    piano[1][2]=SFONDO;
	disegnaCellaPng(1,2);
}
function pistolaDisponibile(){
    piano[1][2]=ARMA;
	disegnaCellaSpecialePng(1,2,ARMA);
}
function ubriachezza(){
	ubriaco=true;
}
function sobrieta(){
	ubriaco=false;
}



function controllaCella(x,y){
	
    switch (piano[x][y]){
	
    case ARMA:
        var audio=new Audio("pistola.mp3");
        audio.play();
		disponibilitaArma=true;
        //omino = ominoConSpada;
        piano[x][y] = SFONDO; 
		//NOTA: da disegnare l'arma disponibile in basso nello schermo per indicare all utente che è in possesso
		mostraPistola();
		mostraInfo();
		setTimeout("chiudiInfo()",3000);
        return true;
	case BOTTONE:
		chiaveDisponibile();
		setTimeout("chiaveNonDisponibile()",4000);
		return true;    
    case CHIAVE: 
		energia = energia + 80;
		piano[x][y] = SFONDO;
		mostraChiave();
		mostraInfoK();
		setTimeout("chiudiInfoK()",3000);
		pistolaDisponibile();
		setTimeout("pistolaNonDisponibile()",3000);
		return true;		
    case ostacolo:
            return false;
    case PILLOLA:
        var audio=new Audio("stella.mp3");
        audio.play();
        energia = energia + DELTA_ENERGIA;
        document.getElementById("energy").innerHTML=energia;
        piano[x][y] = SFONDO;
        countPillole--;
		barraEnergia();
        if (countPillole==0){
            win();
            }
            
            return true;    
    case FUNGO:
        energia = energia - DELTA_ENERGIA;
        document.getElementById("energy").innerHTML=energia;
        piano[x][y] = SFONDO;
		if(energia<=0){
			gameOver();
		}
		var audio=new Audio("fungo.mp3");
		audio.play();
            return true;            
    case buconero:
            gameOver();
            return true;
    case PORTALE1: 
    disegnaCellaPng(ominoX,ominoY);
						// disegna lo sfondo nella posizione di Omino;
			ominoX = PORTALE2_X; 
			ominoY = PORTALE2_Y;
				spostaPortale();
        var audio=new Audio("portale.mp3");
        audio.play();
            return false;  
    case PORTALE2:
            disegnaCellaPng(ominoX,ominoY);

			ominoX = PORTALE1_X; 
			ominoY = PORTALE1_Y; 
				spostaPortale();

            return false; 
	case VINO:
			ubriachezza();
			setTimeout("sobrieta()",30000);
			macchia();
			setTimeout("nascondiMacchia()",30000);
			return true;

	case NEMICO:
			gameOver();
			return true;
    default: 
            return true; 
    }
}
function mostraInfo(){
   document.getElementById("info").style.display = "block";

}
function nascondiMacchia(){
	document.getElementById("macchia").style.display = "none";
}
function chiudiInfo(){
	document.getElementById("info").style.display = "none";
}
function mostraInfoK(){
   document.getElementById("infok").style.display = "block";

}
function chiudiInfoK(){
	document.getElementById("infok").style.display = "none";
}
function mostraPistola(){
    document.getElementById("pistola").style.display = "block";
}
function mostraChiave(){
    document.getElementById("chiave").style.display = "block";
}
function nemicoMorto(){
    document.getElementById("nemico").style.display = "block";
}

function spostaPortale(){
		daX=ominoX;
		
        var daSrc = "c" +daX+"_"+daY; 
        var aSrc  = "c" + aX+"_"+ aY;
        console.log(daSrc + " " +aSrc);
        document.getElementById(daSrc).src = pathImg +  piano[daX][daY] + ".png";
        ominoX= aX;
        ominoY= aY;
        disegnaOmino();
    
}

function sposta (daX,daY, aX,aY,dir){
    if (controllaCella(aX, aY)){  
        var daSrc = "c" +daX+"_"+daY; 
        var aSrc  = "c" + aX+"_"+ aY;
        console.log(daSrc + " " +aSrc);
        document.getElementById(daSrc).src = pathImg +  piano[daX][daY] + ".png";
        ominoX= aX;
        ominoY= aY;
        disegnaOmino();
		contatore=(contatore+1)%9;
		var img =dir+contatore;
		disegnaCellaSpecialePng(aX,aY,img);
    }
}


function su(){

    newX = (ominoX -1 + R)%R; 
	if(ubriaco){
		newX=(ominoX + 1 + R)%R; 
	}
    sposta (ominoX,ominoY, newX,ominoY,"jump");
	

}

function sinistra(){
    newY = (ominoY -1 + C)%C; 
	if(ubriaco){
		newY=(ominoY + 1 + C)%C; 
	}
    sposta (ominoX,ominoY, ominoX,newY,"runSx");
	
}

function giu(){

    newX = (ominoX + 1 + R)%R;
	if(ubriaco){
		newX=(ominoX -1 + R)%R;  
	}
    sposta (ominoX,ominoY, newX,ominoY,"jump");
	
	
}

function destra(){
    newY = (ominoY + 1 + C)%C;
	if(ubriaco){
		newY=(ominoY -1 + C)%C; 
	}
	sposta (ominoX,ominoY, ominoX,newY,"run");
	
}
function macchia(){
	
 document.getElementById("macchia").style.display = "block";
           

}

function gameOver(){
document.getElementById("pistola").style.display = "none";
 document.getElementById("over").style.display = "block";
    var audio=new Audio("gameOver.mp3");
    audio.play();
	disponibilitaArma=false;
	console.log(disponibilitaArma);	
}
function win(){
	document.getElementById("pistola").style.display = "none";
	document.getElementById("win").style.display = "block";
	clearInterval(muovi);
	var audio=new Audio("win.mp3");
	setTimeout("togliTucano()",2000);
    audio.play();
	numeroLivello++;
	setTimeout("disegnaLivello"+numeroLivello+"()",2100);  
	clearInterval(muovi);
	disponibilitaArma=false;
}

function rotateAnimationPillola(){
    var id = "c"+pillolaAnimazioneX+"_"+pillolaAnimazioneY;
    document.getElementById(id).style.transform = "rotateY("+degrees+"deg)";
    degrees++;      
}

function togliTucano(){
	document.getElementById("win").style.display = "none";
}



var x = 0;
var y = 0;
var z = 0;
var j = 0;

function myMoveFunction() {
	document.getElementById("demo").innerHTML = z="+10 punti!";  
    document.getElementById("demo1").innerHTML = z=" passaggio da un portale all'altro";
    document.getElementById("demo2").innerHTML = z="-10 punti!";
    document.getElementById("demo3").innerHTML = z="permette di uccidere il nemico";
}

