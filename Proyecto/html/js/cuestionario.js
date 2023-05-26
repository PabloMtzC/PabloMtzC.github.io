

function calcularRespuestas() {
    // Obtenemos todas las preguntas del cuestionario
    var preguntas = document.getElementsByClassName('question');

    // Contador para respuestas correctas
    var respuestasCorrectas = 0;

    // Recorremos cada pregunta para verificar las respuestas seleccionadas
    for (var i = 0; i < preguntas.length; i++) {
        var pregunta = preguntas[i];
        var opciones = pregunta.getElementsByTagName('input');

        // Verificamos si alguna de las opciones está seleccionada y sumamos su valor
        for (var j = 0; j < opciones.length; j++) {
            var opcion = opciones[j];
            if (opcion.checked) {
                respuestasCorrectas += parseInt(opcion.value);
            }
        }
    }

    // Mostramos el resultado
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = 'Respuestas correctas: ' + respuestasCorrectas;
    alert("Respuestas Correctas: "+respuestasCorrectas + "/20");
}