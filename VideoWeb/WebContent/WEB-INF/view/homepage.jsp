<%@ page language="java" contentType="text/html; charset=ISO-8859-1" 
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
	 
	 <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.5.0/css/all.css' integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU' crossorigin='anonymous'>
	 
<script>
	 function mostraPassword() {
     var temp = document.getElementById("pwd1"); 
      
            if (temp.type === "password" ) { 
                temp.type = "text"; 
                pass.classList.add("fa-eye-slash");
                pass.classList.remove("fa-eye");
            } 
            else { 
                temp.type = "password"; 
                   pass.classList.remove("fa-eye-slash");
                 pass.classList.add("fa-eye");
            } 
        } 
		</script>
  <style>
body {
background: url('img1/Untitled.jpg');
background-repeat: no-repeat;
background-position: 0 0;
-moz-background-size: cover;
-webkit-background-size: cover;
background-size: cover;
}

img.col-5{width: 400px;
    height: 400px;}
img:hover {
	
	width: 400px;
    height: 500px;
}

img[id^="tucano"]{ height: 100px; width:100px; }
 input[type="submit"] {

  opacity: .99;
  width:120px;
  background: #08c;
  box-shadow: inset 0 1px 2px rgba(255,255,255, .35), 0px 1px 6px rgba(0,246,255,.5);
  border: 1px solid #0a5378;
  border-radius: 4px;
  color: #eee;
}

 .carousel-inner img {
      width: 100%;
      height: 100%;
  }

  #demo{ 
    width: 100%;
    height: 100%;
    
  }

  div[class="carousel slide"]{
  width: 100px;
  
  border: 30px solid transparent;
  border-image: url(img1/cornice.png) 20 round;
}


</style>
</head>

<body>
<taglib>

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
      <li class="nav-item">
	      <c:if test="${utenteloggato==false}">
	        <a class="nav-link" href="registrazione">Registrati</a>
		  </c:if>	
      </li>
      <li class="nav-item">
      
      <c:if test="${utenteloggato}">
        <a class="nav-link" href="gioco">Gioco</a>
      </c:if> 
       
      </li>   
       
    </ul>
    <ul class="navbar-nav ml-auto">
    <li class="nav-item">
      <c:if test="${utenteloggato}">
        <a class="nav-link" href="logout">Logout</a>
      </c:if>  
      </li>  
    <li class="nav-item">
    <c:if test="${utenteloggato==false}">
	    <a class="nav-link" href="#loginModal" data-toggle="modal">Login</a>
	    </li>
    </c:if>  
    </ul>
  </div>  
</nav>
    <br>
<div class="container">
<div class="row">
<div class="col"></div>	
<div class="col-5">
<c:if test="${utenteloggato}">
<h1>
<span class="badge badge-success">${utente.nickname}</span>
</h1>
</c:if>
</div>

<div class="col"></div>


</div>
 </div>
<div class="container">
<div class="row">
<div class="col"></div>	
<div class="col-5">
  <c:if test="${utenteloggato==false}"><h1><span class="badge badge-danger"> ${messaggioLogin}</span></h1></c:if> 
 </div>
<div class="col"></div>
</div>
 </div>
<div class="container">
<div class="row">
<div class="col"></div>
<div class="col-10">
<div id="demo" class="carousel slide" data-ride="carousel">

  <!-- Indicators -->
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  
  <!-- The slideshow -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img1/Cattura0.jpg" alt="Catturagame" width="1000" height="500">
    </div>
    <div class="carousel-item">
      <img src="img1/Cattura1.jpg" alt="Catturagame" width="1000" height="500">
    </div>
    <div class="carousel-item">
      <img src="img1/Cattura2.jpg" alt="Catturagame York" width="1000" height="500">
    </div>
  </div>
  
  <!-- Left and right controls -->
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
</div>
<div class="col"></div>


</div>
 </div>




<form method="get" action="login">
<div id="loginModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Accedi</h3>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
 <div class="modal-body">
  <div class="container">
     <div class="row">
       <div class="col-10">
         
<div class="form-group">
<h2><span class="badge badge-warning">NickName</span></h2>

<input type="text" class="form-control" name="nickname" placeholder="nickname" required maxlength="14">

</div>
</div>

</div>
</div>

<div class="container">
  <div class="row">
  <div class="col-10">
<div class="form-group">
<h2><span class="badge badge-warning">Password</span></h2>
<div class="input-group mb-3">
<input type="text"   class="form-control" id="pwd1" name="pwd1" placeholder="Inserisci password" required >
<div class="input-group-append">
   <button type="button" onclick="mostraPassword()"><i id="pass" class='far fa-eye-slash'></i></button>
   
  </div>
</div>


</div>
</div>

</div>
</div>
<div class="container-fluid">
  <div class="row">
  <div class="col-5">
  </div>
 <div class="out"> 
<input type="submit" value="ACCEDI">
</div>
</div>
</div>

</div>
 </div>
</div>
 </div>

</form>
</taglib>
</body>







</html>