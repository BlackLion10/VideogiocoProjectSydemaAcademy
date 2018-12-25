
window.addEventListener("load",function(){
var pwd1 = document.getElementById("pwd1");
var nickname = document.getElementById("nickname");
var pwd2 = document.getElementById("pwd2"); 
var cf = document.getElementById("cf");
var pattern = /^[a-zA-Z]{6}[0-9]{2}[a-zA-Z][0-9]{2}[a-zA-Z][0-9]{3}[a-zA-Z]$/;
var pattern2 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
var lunghezza=/^\w{10,}$/;


pwd2.addEventListener("blur", function(e) {
    if (pwd1.value != pwd2.value) {
        e.target.setCustomValidity("Le password non corrispondono!");
    } else {
        e.target.setCustomValidity("");
    }
	
});

cf.addEventListener("blur", function(e) {
     if (cf.value.search(pattern) == -1) {
         e.target.setCustomValidity("Il valore inserito non è un codice fiscale!");
     } else {
         e.target.setCustomValidity("");
     }
  
});

nickname.addEventListener("blur", function(e) {
     if (nickname.value.search(lunghezza) == -1) {
         e.target.setCustomValidity("Il valore inserito è inferiore a 10!");
     } else {
         e.target.setCustomValidity("");
     }
  
});

pwd1.addEventListener("blur", function(e) {
     if (pwd1.value.search(lunghezza) == -1) {
         e.target.setCustomValidity("Il valore inserito è inferiore a 10!");
     } else if(pwd1.value.search(pattern2) == -1) {
         e.target.setCustomValidity("La password deve rispettare i caratteri");
     }else{

         e.target.setCustomValidity("");
     }
  
});

});


function mostraPassword() {
     var temp = document.getElementById("pwd1"); 
         var temp2 = document.getElementById("pwd2"); 
         var pass=document.getElementById("pass");
     
        
            if (temp.type === "password" && temp2.type==="password") { 
                temp.type = "text"; 
                temp2.type= "text";

                pass.classList.add("fa-eye-slash");
                pass.classList.remove("fa-eye");
            ;
            } 
            else { 
                temp.type = "password"; 
                 temp2.type = "password"; 


                 pass.classList.remove("fa-eye-slash");
                 pass.classList.add("fa-eye");
             
            } 
        } 

