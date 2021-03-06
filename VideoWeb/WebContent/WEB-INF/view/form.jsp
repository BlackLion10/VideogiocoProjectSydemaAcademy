<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/form.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
  <script src="js/app1.js"></script>

  <script src="js/mycontroller1.js"></script> 	
  
<meta name='viewport' content='width=device-width, initial-scale=1'>
<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.5.0/css/all.css' integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU' crossorigin='anonymous'>
  <style>
body {
background: url('img1/Untitled.jpg');
background-repeat: no-repeat;
background-position: 0 0;
-moz-background-size: cover;
-webkit-background-size: cover;
background-size: cover;
}



input:hover  {
    background-color: #fff999;
  
}

input[type="password"]:focus:invalid  {
  outline: 2px solid #ff4747;
 background-color:  #ff4747;
}


 h1{

         color:yellow; 
}


input:focus:valid {
  outline: 2px solid #6dff54;
 background-color:  #6dff54	;

 }
 input[type="submit"] {

  opacity: .99;
  width:120px;
  background: #08c;
  box-shadow: inset 0 1px 2px rgba(255,255,255, .35), 0px 1px 6px rgba(0,246,255,.5);
  border: 1px solid #0a5378;
  border-radius: 4px;
  color: #eee;
}
.col-2{display:none;}
.row:hover > .col-2{display:block;}

input[type="submit"]:hover {
  background: #08c;
  width:120px;
  border: 1px solid #0a5378;
  border-radius: 3px;
  box-shadow: inset 0px 3px 16px rgba(0,0,0,.25),0px 1px 10px rgba(255,255,255,.5),inset 0px -1px 2px rgba(255,255,255,.35);
  text-shadow:0px 1px 1px rgba(0,0,0,.65);
  -webkit-transition: all 0.40s ease-out;
  transition: all 0.40s ease-out;
}
#error{color:red;}
img[id^="tucano"]{ height: 50px; width:50px; }

</style>
</head>
<body>



<nav class="navbar navbar-expand-sm navbar-light" style="background-color: #b0f442" id="nav">
  <a class="navbar-brand" href="home">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="giocoDemo">Gioco Demo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="class">Classifica</a>
      </li>   
    </ul>
    
  </div>  
</nav>


<div class="bg">
<div class="container"><br>
<div class="row">
  <div class="col-sm-4">
  </div>
  <div class="col-sm-4">
<h1><span class="badge badge-warning">Registrati </span></h1>
<br>
</div>
  <div class="col-sm-4">
  </div>
    </div>



<form method="get" action="registrazioneUtente" novalidate>
<div class="container">
  <div class="row">
  <div class="col-7">
<div class="form-group">
<h2><span class="badge badge-warning">NickName</span></h2>
<input type="text"   class="form-control input-sm" id="nickname"  name="nickname" placeholder="Inserisci nickname" required maxlength="14">

<div id="error" nf-if="${messaggio}">${messaggio}</div>

</div>
</div>
<div class="col-2">
<img id="tucano2" src="img1/tucano.png">
</div>
</div>
</div>



<div class="container">
  <div class="row">
  <div class="col-7">
<div class="form-group">
<h2><span class="badge badge-warning">E-mail</span></h2>
<input type="email" class="form-control input-sm" id="email1"  placeholder="Inserisci la tua E-mail" required>
</div>
</div>
<div class="col-2">
<img id="tucano3" src="img1/tucano.png">
</div>
</div>
</div>


<div ng-app="myApp3" ng-controller="paesiCtrl">
<div class="container">
  <div class="row">
  <div class="col-7">
<div class="form-group">
<h2><span class="badge badge-warning">Paese</span></h2>
    
  
      <div class="input-group mb-3">
      <select ng-model="selectedItem" 
        ng-options="x.name group by x.subregion for x in elenco" class="form-control input-sm" id="sel1" name="paese" required> 
              
            </select>
			
			
			<div class="input-group-append">
			<img src="{{selectedItem.flag}}" height="40px" width="80px"> 
			</div>
			</div>
</div>
</div>
<div class="col-2">
<img id="tucano2" src="img1/tucano.png">
</div>
</div>
</div>
</div>






<div class="container">
  <div class="row">
  <div class="col-7">
<div class="form-group">
<h2><span class="badge badge-warning">Password</span></h2>
<div class="input-group mb-3">
<input type="password"   class="form-control input-sm" id="pwd1" name="pwd1" placeholder="Inserisci password" required>
 
<div class="input-group-append">
   <button onclick="mostraPassword()"><i id="pass" class='far fa-eye-slash'></i></button>
  </div>
</div>

</div>
</div>
<div class="col-2">
<img id="tucano3" src="img1/tucano.png">
</div>
</div>
</div>


<div class="container">
  <div class="row">
  <div class="col-7">
<div class="form-group">
<h2><span class="badge badge-warning">Conferma Password</span></h2>
<input type="password"  class="form-control input-sm" id="pwd2" name="pwd2" placeholder="Conferma la tua password" required >

</div>
</div>
<div class="col-2">
<img id="tucano4" src="img1/tucano.png">
</div>
</div>
</div>


<div class="container">
  <div class="row">
  <div class="col-7">
<div class="form-group">
<h2><span class="badge badge-warning">Codice Fiscale</span></h2>
<input type="codiceFiscale"  id="cf"  class="form-control input-sm" name="cf" placeholder="Inserisci CodiceFiscale" required>
</div>
</div>
<div class="col-2">
<img id="tucano5" src="img1/tucano.png">
</div>
</div>
</div>


<div class="container">
  <div class="row">
  <div class="col-7">
<div class="form-group">

<fieldset>
<h2><span class="badge badge-warning">Sesso</span></h2>
  <select class="form-control input-sm" id="sesso" required>
   <option value="nonspecificato" selected="selected">Preferisco non specificare  </option>
   <option value="Uomo" selected="selected">Uomo  </option>
   <option value="Donna" selected="selected">Donna </option>
   <option value="seleziona" selected="selected">Seleziona</option>
  </select>
 </fieldset>
</div>
</div>
<div class="col-2">
<img id="tucano5" src="img1/tucano.png">
</div>
</div>
</div>

<div class="container">
  <div class="row">
  <div class="col-7">
<div class="form-group">



<h2><span class="badge badge-warning">Data di Nascita</span></h2>

  

    <input class="form-control" type="date" id="example-date-input">
  
</div>




  
<div class="col-2">
<img id="tucano5" src="img1/tucano.png">
</div>
</div>
</div>

<div class="container">
  <div class="row">
  <div class="col-5">
  </div>
 <div class="out"> 
<input type="submit" value="REGISTRATI">
</div>

<div class="col-2">
<img id="tucano5" src="img1/tucano.png">
</div>
 <div class="col-5">
  </div>
</div>
</div>
</div>
</form>
</div> 
</div> 
</body>

</html>