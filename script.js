/// Seleccionar elementos del DOM
var botonCinco = document.querySelector(".cinco");
var botonDiez = document.querySelector(".diez");
var botonQuince = document.querySelector(".quince");
var botonVeinticinco = document.querySelector(".veinticinco");
var botonCincuenta = document.querySelector(".cincuenta");
var botonBorrar = document.querySelector(".reset");
var botonNuevo = document.querySelector(".nuevo");
var valor = document.querySelector(".valor-introducido");
var error = document.querySelector(".mensajeError")
var resultadoDescuento = document.querySelector(".resultado_uno");
var resultadoPersonas = document.querySelector(".resultado_dos");
var personas = document.querySelector(".numero_personas")

botonBorrar.addEventListener("click", borrar);

botonCinco.addEventListener("click", function(){
  calcularDescuento(0.05)
});
botonNuevo.addEventListener("keypress", function(event){
  if(event.key==="Enter"){
    calcularDescuento(botonNuevo.value)
  }
})
botonDiez.addEventListener("click", function(){
  calcularDescuento(0.10)
});
botonQuince.addEventListener("click", function(){
  calcularDescuento(0.15);
});
botonVeinticinco.addEventListener("click", function(){
  calcularDescuento(0.25)
})
botonCincuenta.addEventListener("click",function(){
  calcularDescuento(0.50)
})
function calcularDescuento(des){

  if( valor.value<=0 && valor.value<=0){
    return document.querySelector(".aviso2").style.display="block";
  }
  if(personas.value <=0){
    return error.style.display = "block";
  }
  var descuento = valor.value-(valor.value*des);
  reparticion = descuento/personas.value;
  resultadoDescuento.textContent = "$ " + descuento;
  resultadoPersonas.textContent =  "$ " + reparticion.toFixed(2);
}
document.querySelector(".ok2").addEventListener("click", function(){
    document.querySelector(".aviso2").style.display = "none"
});


botonDiez.addEventListener("click",  extraer);
function borrar() {
  valor.value="";
  resultadoDescuento.textContent = "$0.00";
  resultadoPersonas.textContent = "$0.00";
  personas.value="";
  error.style.display = "none"
}

