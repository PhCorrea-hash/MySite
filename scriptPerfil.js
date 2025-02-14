const resumo = document.getElementById("button__resumo");
const habilidades = document.getElementById("button__habilidades");
const experiencias = document.getElementById("button__experiencias");
const formacao = document.getElementById("button__formacao");
const cursos = document.getElementById("button__cursos");
const certificados = document.getElementById("button__certificados");

resumo.addEventListener("click", () => {
  if (document.getElementById("lista_itens-resumo").style.display === "none") {
    document.getElementById("lista_itens-resumo").style.display = "block";
    document.getElementById("button__resumo").style.borderBottomLeftRadius = 0;
    document.getElementById("button__resumo").style.borderBottomRightRadius = 0;
    document.getElementById("button__resumo").style.borderBottom = "none";
  } else {
    document.getElementById("lista_itens-resumo").style.display = "none";
    document.getElementById("button__resumo").style.borderBottomLeftRadius = "1em";
    document.getElementById("button__resumo").style.borderBottomRightRadius = "1em";
    document.getElementById("button__resumo").style.borderBottom = "solid";
  }

})

habilidades.addEventListener("click", () => {
  if (document.getElementById("lista__itens-habilidades").style.display === "none") {
    document.getElementById("lista__itens-habilidades").style.display = "block";
    document.getElementById("button__habilidades").style.borderBottomLeftRadius = 0;
    document.getElementById("button__habilidades").style.borderBottomRightRadius = 0;
    document.getElementById("button__habilidades").style.borderBottom = "none";
  } else {
    document.getElementById("lista__itens-habilidades").style.display = "none";
    document.getElementById("button__habilidades").style.borderBottomLeftRadius = "1em";
    document.getElementById("button__habilidades").style.borderBottomRightRadius = "1em";
    document.getElementById("button__habilidades").style.borderBottom = "solid";
  }

})

experiencias.addEventListener("click", () => {
  if (document.getElementById("lista__itens-experiencias").style.display === "none") {
    document.getElementById("lista__itens-experiencias").style.display = "block";
    document.getElementById("button__experiencias").style.borderBottomLeftRadius = 0;
    document.getElementById("button__experiencias").style.borderBottomRightRadius = 0;
    document.getElementById("button__experiencias").style.borderBottom = "none";
  } else {
    document.getElementById("lista__itens-experiencias").style.display = "none";
    document.getElementById("button__experiencias").style.borderBottomLeftRadius = "1em";
    document.getElementById("button__experiencias").style.borderBottomRightRadius = "1em";
    document.getElementById("button__experiencias").style.borderBottom = "solid";
  }

})

formacao.addEventListener("click", () => {
  if (document.getElementById("lista__itens-formacao").style.display === "none") {
    document.getElementById("lista__itens-formacao").style.display = "block";
    document.getElementById("button__formacao").style.borderBottomLeftRadius = 0;
    document.getElementById("button__formacao").style.borderBottomRightRadius = 0;
    document.getElementById("button__formacao").style.borderBottom = "none";
  } else {
    document.getElementById("lista__itens-formacao").style.display = "none";
    document.getElementById("button__formacao").style.borderBottomLeftRadius = "1em";
    document.getElementById("button__formacao").style.borderBottomRightRadius = "1em";
    document.getElementById("button__formacao").style.borderBottom = "solid";
  }

})

cursos.addEventListener("click", () => {
  if (document.getElementById("lista__itens-cursos").style.display === "none") {
    document.getElementById("lista__itens-cursos").style.display = "block";
    document.getElementById("button__cursos").style.borderBottomLeftRadius = 0;
    document.getElementById("button__cursos").style.borderBottomRightRadius = 0;
    document.getElementById("button__cursos").style.borderBottom = "none";
  } else {
    document.getElementById("lista__itens-cursos").style.display = "none";
    document.getElementById("button__cursos").style.borderBottomLeftRadius = "1em";
    document.getElementById("button__cursos").style.borderBottomRightRadius = "1em";
    document.getElementById("button__cursos").style.borderBottom = "solid";
  }

})

certificados.addEventListener("click", () => {
  if (document.getElementById("lista__itens-certificados").style.display === "none") {
    document.getElementById("lista__itens-certificados").style.display = "block";
    document.getElementById("button__certificados").style.borderBottomLeftRadius = 0;
    document.getElementById("button__certificados").style.borderBottomRightRadius = 0;
    document.getElementById("button__certificados").style.borderBottom = "none";
  } else {
    document.getElementById("lista__itens-certificados").style.display = "none";
    document.getElementById("button__certificados").style.borderBottomLeftRadius = "1em";
    document.getElementById("button__certificados").style.borderBottomRightRadius = "1em";
    document.getElementById("button__certificados").style.borderBottom = "solid";
  }

})



