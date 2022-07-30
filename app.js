const displayValorAnterior = document.getElementById("valorAnterior");
const displayValorActual = document.getElementById("valorActual");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach((boton) => {
  boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach((boton) => {
  boton.addEventListener("click", () => display.computar(boton.value));
});
