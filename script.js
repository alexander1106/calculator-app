//Obtener los elementos
var botonCinco = document.querySelector(".cinco");
var botonDiez = document.querySelector(".diez");
var botonQuince = document.querySelector(".quince");
var botonVeinticinco = document.querySelector(".veinticinco");
var botonCincuenta = document.querySelector(".cincuenta");
var botonBorrar = document.querySelector(".reset");
var botonNuevo = document.querySelector(".nuevo");
var valor = document.querySelector(".valor-introducido");
var error = document.querySelector(".mensajeError");
var personas = document.querySelector(".numero_personas");

//Creamos un metodo para los descuentos 
function agregarEventoDescuento(boton, descuento){
  boton.addEventListener("click", function(){
    calcularDescuento(descuento)
  });
}

//Aplicamos el metodo en los botones 
agregarEventoDescuento(botonCinco,0.05)
agregarEventoDescuento(botonDiez, 0.10)
agregarEventoDescuento(botonQuince, 0.15)
agregarEventoDescuento(botonVeinticinco, 0.25)
agregarEventoDescuento(botonCincuenta, 0.50)


botonBorrar.addEventListener("click", borrar);


botonNuevo.addEventListener("keypress", function(event){
  if(event.key==="Enter"){
    calcularDescuento(botonNuevo.value)
  }
})

//Creamos la funcion para calcular los descuentos
function calcularDescuento(des){
  if(valor.value<=0 ){
    return document.querySelector(".contenedor-aviso2").style.display="block";
  } else if(personas.value <=0){ 
    return error.style.display = "block"; 
  }
  descuentoAplicado = valor.value-(valor.value*des);
  reparticion = descuentoAplicado/personas.value;
  document.querySelector(".resultado_uno").textContent = "$ " + descuentoAplicado;
  document.querySelector(".resultado_dos").textContent =  "$ " + reparticion.toFixed(2);
}

//Creamos una evento en el cual se limpiue el mensaje error
document.querySelector(".ok2").addEventListener("click", function(){
    document.querySelector(".contenedor-aviso2").style.display = "none"
});

//Creamos el metodo borrar
function borrar() {
  valor.value="";
  resultadoDescuento.textContent = "$0.00";
  resultadoPersonas.textContent = "$0.00";
  personas.value="";
  error.style.display = "none"
}

