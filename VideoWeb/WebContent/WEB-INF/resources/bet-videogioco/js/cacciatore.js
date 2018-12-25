var OMINO="omino";
var distanzaOmino;
var newX;
var newY;
var muovi;
var contatoreNemicoDx=1;
var contatoreNemicoSx=10;
var contatoreNemicoGiu=0;
var contatoreNemicoSu=0;

function Cacciatore(x,y,nome){
	this.x=x;
	this.y=x;
	this.nome=nome;
}

var c= new Cacciatore(8,17,NEMICO);

	
Cacciatore.prototype.spostaNemico = function () {	
	if(Math.sqrt(Math.pow((ominoX-this.x),2)+Math.pow((ominoY-this.y),2))<5){	
		var precX = this.x;
		var precY = this.y;
		var newX = this.x; 
		var newY = this.y; 
		if (this.x < ominoX) { newX = this.x +1; }
		if (this.x > ominoX) { newX = this.x - 1; }
		if (this.y < ominoY) {newY = this.y +1;}
		if (this.y > ominoY) {newY = this.y - 1;}		
		if (piano[newX][newY]!=ostacolo){
			this.x = newX; 
			this.y = newY;
			document.getElementById("c"+precX+"_"+precY).src=pathImg+piano[precX][precY] + ".png";
			document.getElementById("c"+this.x+"_"+this.y).src= pathImg+this.nome + ".png"; 
		}	
	}	
	else{		
		var precX = this.x;
		var precY = this.y;
		var newX = this.x; 
		var newY = this.y; 
		var min=1; 
        var max=4;  
        var random =Math.floor(Math.random() * (+max - +min)) + +min;
		if (random==1)
			if(newX>0)
			newX=(newX -1 + R)%R;
		if (random==2)
			if(newX<R-1)
			newX=(newX +1 + R)%R;
		if (random==3)
			if(newY>0)
			newY=(newY -1 + C)%C;
		if (random==4)
			if(newY<C-1)
			newY=(newY +1 + C)%C;		
		if (piano[newX][newY]!=ostacolo){
			this.x= newX;
			this.y= newY;		
			document.getElementById("c"+precX+"_"+precY).src=pathImg+piano[precX][precY] + ".png";
			document.getElementById("c"+this.x+"_"+this.y).src= pathImg+this.nome + ".png"; 
		}
	}
	if (this.x == ominoX && this.y == ominoY ){
				if (disponibilitaArma==true){
					nemicoMorto();
					clearInterval(muovi);
					
				}	
				else{
					gameOver();
					clearInterval(muovi);
				}
	}
}




	



