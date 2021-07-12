const botondeinicio = document.getElementById('iniciar-btn');
const preguntasContenedorElemento=document.getElementById('contenedor-preguntas');
const preguntaElemento = document.getElementById('preguntas');
const respuestaBotonElemento = document.getElementById('preguntas-correctas');

let preguntasRandom,preguntaActualIndice;


botondeinicio.onclick = function(){
    iniciarJuego();
}


function iniciarJuego(){
//boton de inicio añade HIDE para esconder creada anteriormente en CSS
botondeinicio.classList.add('hide');
//el contenedor de preguntas se le elmina la clase hide
preguntasContenedorElemento.classList.remove('hide');
preguntasRandom = preguntas.sort(()=>Math.random()-0.5);
//se inicializa en 0 ya que iniciamos en la primera pregunta
preguntaActualIndice=0;
colocarPreguntas();
}

function colocarPreguntas(){
mostrarPreguntas(preguntasRandom[preguntaActualIndice]);
}

function mostrarPreguntas(question){
preguntaElemento.innerHTML = question.question;
}

function seleccionarRespuesta(){

}

const preguntas = [
{
    question:'Cuanto es 2 + 2?',
    respuestas:[
        {text:"4",correct:true},
        {text:"22",correct:false},
    ]
}
]