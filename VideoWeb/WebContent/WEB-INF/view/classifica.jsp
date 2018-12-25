<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>

  <style>
body {
background: url('img1/Untitled.jpg');
background-repeat: no-repeat;
background-position: 0 0;
-moz-background-size: cover;
-webkit-background-size: cover;
background-size: cover;
}


@keyframes anim1 {
  0% {
   opacity:0.0;
  }
  50% {
    opacity:0.0;
   
  }
  100% {
    opacity:1;
   
  }

}


tr {
  background: #eee;
  border-bottom: 1px solid #ddd;
  
  
}
tr.table-danger{
  display: table-row;
  animation: anim1 1s ease;
}

tr.table-warning{
  display: table-row;
  animation: anim1 2s ease;
}
tr.table-success{
  display: table-row;
  animation: anim1 3s ease;
}

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
      
      <c:if test="${utenteloggato}">
        <a class="nav-link" href="gioco">Gioco</a>
      </c:if> 
      </li>     
    </ul>
    
  </div>  
</nav>
<br>
<br>
<div class="countainer">
<div class="row">
    <div class="col-sm-3">
    
    </div> 


<div class="col-sm-6">

  <div class="countainer">
      <table class="table table-light table-hover" style="background-color:#8cea8e" >
    <thead >
      <tr >
        <th>Posizione</th>
        <th>Nickname</th>
          <th>Punteggio</th>
        <th>Paese</th>
        
      </tr>
    </thead>
    <tbody>
      <tr class="table-success" id="primo">
        <td>1</td>
        <td>${nickname0}</td>
        <td>${punteggio0}</td>
         <td>${paese0}</td>
      </tr>
      <tr class="table-success">
        <td>2</td>
        <td>${nickname1}</td>
        <td>${punteggio1}</td>
         <td>${paese1}</td>
      </tr>
      <tr class="table-success">
        <td>3</td>
        <td>${nickname2}</td>
        <td>${punteggio2}</td>
         <td>${paese2}</td>
      </tr>
      <tr class="table-warning">
        <td>4</td>
        <td>${nickname3}</td>
        <td>${punteggio3}</td>
         <td>${paese3}</td>
      </tr>
      <tr class="table-warning">
        <td>5</td>
        <td>${nickname4}</td>
        <td>${punteggio4}</td>
         <td>${paese4}</td>
      </tr>
      <tr class="table-danger">
        <td>6</td>
        <td>${nickname5}</td>
        <td>${punteggio5}</td>
         <td>${paese5}</td>
      </tr>
      <tr class="table-danger"  >
        <td>7</td>
        <td>${nickname6}</td>
        <td>${punteggio6}</td>
         <td>${paese6}</td>
      </tr>
    </tbody>
  </table>
</div>



 </div>















    <div class="col-sm-3">
    
    </div> 



</div>
</div>
<br><br>

<br><br>

</body>
</html>

