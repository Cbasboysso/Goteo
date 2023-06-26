







function enfe() {
         var selector =document.getElementById("menu");
        var selector2=selector.value;

       
var contenido1 =
"<form >"+
"<p ><label for='goteo' >Ingrese Horas a Pasar: </label><p class='espacios'>"+
"</p> <input id='caja1' class='cajas' type='text'></p>"+
"<p ><label for='goteo' >Ingrese Volumen Total </label><p class='espacios'>"+

"</p> <input  id='caja2' class='cajas' type='text'></p>"+
"<p  >"+
"<br>"+

"</p>"+


"<br>"+
"<input onclick='minutos()' class='boton' type='button' value='Calcular Opcion Seleccionada'>"+
"</p>"+
"</p>"+
" <a href='index.html'>Volver al index </a>"+
"</form>";

var contenido2 =
"<form >"+
"<p ><label for='goteo' >Ingrese minutos a Pasar: </label><p class='espacios'>"+
"</p> <input id='caja1' class='cajas' type='text'></p>"+
"<p ><label for='goteo' >Ingrese Volumen Total </label><p class='espacios'>"+

"</p> <input  id='caja2' class='cajas' type='text'></p>"+
"<p  >"+
"<br>"+

"</p>"+


"<br>"+
"<input onclick='minutosm()' class='boton' type='button' value='Calcular Opcion Seleccionada'>"+
"</p>"+
"</p>"+
" <a href='index.html'>Volver al index </a>"+
"</form>";

var contenido3 =
"<form >"+
"<p ><label for='goteo' >Ingrese Horas a Pasar: </label><p class='espacios'>"+
"</p> <input id='caja1' class='cajas' type='text'></p>"+
"<p ><label for='goteo' >Ingrese Volumen Total </label><p class='espacios'>"+

"</p> <input  id='caja2' class='cajas' type='text'></p>"+
"<p  >"+
"<br>"+

"</p>"+


"<br>"+
"<input onclick='microgotas()' class='boton' type='button' value='Calcular Opcion Seleccionada'>"+
"</p>"+
"</p>"+
" <a href='index.html'>Volver al index </a>"+
"</form>";
var contenido4 =
"<form >"+
"<p ><label for='goteo' >Ingrese Gotas a Pasar: </label><p class='espacios'>"+
"</p> <input id='caja1' class='cajas' type='text'></p>"+
"<p ><label for='goteo' >Ingrese tiempo a pasar </label><p class='espacios'>"+

"</p> <input  id='caja2' class='cajas' type='text'></p>"+
"<p  >"+
"<br>"+

"</p>"+


"<br>"+
"<input onclick='volumenh()' class='boton' type='button' value='Calcular Opcion Seleccionada'>"+
"</p>"+
"</p>"+
" <a href='index.html'>Volver al index </a>"+
"</form>";
var contenido5 =
"<form >"+
"<p ><label for='goteo' >Ingrese Gotas a Pasar: </label><p class='espacios'>"+
"</p> <input id='caja1' class='cajas' type='text'></p>"+
"<p ><label for='goteo' >Ingrese tiempo a pasar </label><p class='espacios'>"+

"</p> <input  id='caja2' class='cajas' type='text'></p>"+
"<p  >"+
"<br>"+

"</p>"+


"<br>"+
"<input onclick='volumenm()' class='boton' type='button' value='Calcular Opcion Seleccionada'>"+
"</p>"+
"</p>"+
" <a href='index.html'>Volver al index </a>"+
"</form>";
var contenido6 =
"<form >"+
"<p ><label for='goteo' >Ingrese goteo a Pasar: </label><p class='espacios'>"+
"</p> <input id='caja1' class='cajas' type='text'></p>"+
"<p ><label for='goteo' >Ingrese Volumen Total </label><p class='espacios'>"+

"</p> <input  id='caja2' class='cajas' type='text'></p>"+
"<p  >"+
"<br>"+

"</p>"+


"<br>"+
"<input onclick='tiempo()' class='boton' type='button' value='Calcular Opcion Seleccionada'>"+
"</p>"+
"</p>"+
" <a href='index.html'>Volver al index </a>"+
"</form>";
switch (selector2) {

case selector2="1":
    var cajonera=document.getElementById("mmm");
 cajonera.innerHTML=contenido1;
break;
case selector2="2":
 //window.open  ("gotasmin.html");
 var cajonera=document.getElementById("mmm");
 cajonera.innerHTML=contenido2;
break;
case selector2="3":
    var cajonera=document.getElementById("mmm");
    cajonera.innerHTML=contenido3;
break;
case selector2="4":
     var cajonera=document.getElementById("mmm");
 cajonera.innerHTML=contenido4;
break;
case selector2="5":
 var cajonera=document.getElementById("mmm");
 cajonera.innerHTML=contenido5;
break;
case selector2="6":
 var cajonera=document.getElementById("mmm");
 cajonera.innerHTML=contenido6;
break;
default:
alert(selector2);

break;
}

};

function minutos( ){
    var caja1=document.getElementById("caja1");
    var caja2=document.getElementById("caja2");
    var cuenta = caja2.value / (3*caja1.value);
    alert("El goteo al cual usted debe colocar es de: "+cuenta+" gotas por Minutos");

}
function minutosm( ){
    var caja1=document.getElementById("caja1");
    var caja2=document.getElementById("caja2");
    var cuenta = (caja2.value*20)/caja1.value;
    alert("El goteo al cual usted debe colocar es de: "+cuenta+" gotas por Minutos");

}
function microgotas( ){
    var caja1=document.getElementById("caja1");
    var caja2=document.getElementById("caja2");
    var cuenta = (caja2.value / caja1.value);
    alert("Las microgotas deberan ser  de: "+cuenta+" gotas por Minutos");

}
function volumenh( ){
    var caja1=document.getElementById("caja1");
    var caja2=document.getElementById("caja2");
    var cuenta =( caja2.value *3*caja1.value);
    alert("El volumen a pasar  es de: "+cuenta+" ml por hora");

}
function volumenm( ){
    var caja1=document.getElementById("caja1");
    var caja2=document.getElementById("caja2");
    var cuenta = (caja2.value *3*caja1.value);
    alert("El volumen a pasar  es de: "+cuenta+" ml por minuto");

}
function tiempo( ){
    var caja1=document.getElementById("caja1");
    var caja2=document.getElementById("caja2");
    var cuenta = caja2.value / (3*caja1.value);
    alert("El tiempo en el cual  se debera pasar la infucion es de: "+cuenta+" Hs");

}




