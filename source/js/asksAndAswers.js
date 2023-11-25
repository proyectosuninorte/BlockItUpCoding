// Vectores de preguntas, respuestas correctas e incorrectas
const preguntas = [
    "¿Cuál es la capital de Francia?",
    "¿En qué año comenzó la Primera Guerra Mundial?",
    // Agrega más preguntas aquí...
];

const respuestasCorrectas = [
    ["París", "Madrid", "Londres"],
    ["1914", "1905", "1918"],
    // Agrega más respuestas correctas aquí...
];

const respuestasIncorrectas = [
    [["Barcelona", "Berlín", "Roma"], ["Atenas", "Praga", "Varsovia"]],
    [["1920", "1939", "1917"], ["1910", "1925", "1945"]],
    // Agrega más opciones de respuestas incorrectas aquí...
];

// Asignar preguntas y respuestas a elementos HTML
const preguntaElement = document.querySelector('.pregunta p');
const listItems = document.querySelectorAll('.list');

// Mostrar la primera pregunta y las opciones de respuesta
let indicePregunta = 0;
mostrarPregunta();

function mostrarPregunta() {
    preguntaElement.textContent = preguntas[indicePregunta];
    
    const respuestas = respuestasCorrectas[indicePregunta].concat(respuestasIncorrectas[indicePregunta][0], respuestasIncorrectas[indicePregunta][1]);

    // Desordenar las respuestas
    respuestas.sort(() => Math.random() - 0.5);

    listItems.forEach((item, index) => {
        item.textContent = respuestas[index];
        item.setAttribute('draggable', true);
        item.addEventListener('dragstart', dragStart);
    });
}

// Resto del código de drag and drop y comprobación de respuestas es similar al proporcionado anteriormente.
// Asegúrate de adaptar el código de comprobación de acuerdo a tu estructura y necesidades específicas.
