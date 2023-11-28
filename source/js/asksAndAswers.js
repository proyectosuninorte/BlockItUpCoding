
let page = 1;
let Pvect = 0;
let a = 0;
let tamano = 0;
function cambiarIframe(nuevoArchivo) {
    console.log(nuevoArchivo);
    document.getElementById('miIframe').src = nuevoArchivo;
    if (nuevoArchivo == '/source/expresionGame.html') {
        page = 1;
    }
    if (nuevoArchivo == '/source/index.html') {
        page = 2;
    }
}

function obtenerUrlIframe() {
    return document.getElementById('miIframe').src;
}

function mostrarPregunta() {
    let pregunta = document.getElementById('pregunta');
    let elemento1 = document.getElementById('elemento1');
    let elemento2 = document.getElementById('elemento2');
    let elemento3 = document.getElementById('elemento3');

    const preguntasExpresionGame = [
        "Si d1=25, d2=7, d3=3, d4=1, d5=12, d6=4, d7=2 ¿Cuál es el resultado de la siguiente expresión? d1*d3+d6-d2/d5+d3-d4*d7 ",
        "Si d1=5, d2=7, d3=6, d4=1, d5=12, d6=4, d7=5 ¿Cuál es el resultado de la siguiente expresión? (5*6+4)-7/12+(6-1) *5 ",
        "Un empleado de un banco utiliza una clave de 4 dígitos (d1, d2, d3, d4) para ingresar a la bóveda de seguridad. Al regresar de sus vacaciones, no se acuerda muy bien de la clave y decide intentar con la secuencia 2, 4, 1, 8. Dado que solo tiene un intento para abrir la bóveda, indique si al evaluar la siguiente expresión, el empleado logra ingresar a la bóveda o activa la alarma."
    ];
    tamano = preguntasExpresionGame.length;
    const respuestaCorrectaExpresionGame = ["79.42", "58.42", "Alarma"];
    const respuestaIncorrectaExpresionGame = [["79.41", "a"],["58.41", ""],["Ingreso",""]];

    pregunta.innerHTML = preguntasExpresionGame[Pvect];

    if (page == 1) {
        let divRespuestaCorrecta = Math.floor(Math.random() * 3) + 1;
        if (divRespuestaCorrecta == 1) {
            elemento1.innerHTML = respuestaCorrectaExpresionGame[Pvect];
            elemento1.setAttribute('data-es-correcto', 'true');
            elemento2.innerHTML = respuestaIncorrectaExpresionGame[Pvect][0];
            elemento3.innerHTML = respuestaIncorrectaExpresionGame[Pvect][1];
        }
        if (divRespuestaCorrecta == 2) {
            elemento1.innerHTML = respuestaIncorrectaExpresionGame[Pvect][0];
            elemento2.innerHTML = respuestaCorrectaExpresionGame[Pvect];
            elemento2.setAttribute('data-es-correcto', 'true');
            elemento3.innerHTML = respuestaIncorrectaExpresionGame[Pvect][1];
        }
        if (divRespuestaCorrecta == 3) {
            elemento1.innerHTML = respuestaIncorrectaExpresionGame[Pvect][0];
            elemento2.innerHTML = respuestaIncorrectaExpresionGame[Pvect][1];
            elemento3.innerHTML = respuestaCorrectaExpresionGame[Pvect];
            elemento3.setAttribute('data-es-correcto', 'true');
        }
        
    }
    if(page == 2){
        
    }
}

function comprobar() {
    const DivElement = document.getElementById('right');
    let respuestas = DivElement.children;

    if(Pvect<tamano-1){
        for (let i = 0; i < respuestas.length; i++) {
            if (respuestas[i].getAttribute('data-es-correcto') === 'true') {
                console.log('Respuesta correcta encontrada');
                Pvect++;
                canDrop = true;
                restablecerCanDrop();
                const leftContainer = document.getElementById('left');
        const rightContainer = document.getElementById('right');
    
        // Mover los elementos hijos del contenedor right de vuelta al left
        while (rightContainer.firstChild) {
            leftContainer.appendChild(rightContainer.firstChild);
        }
                mostrarPregunta(); // Llamar a la función para mostrar la siguiente pregunta
                break; // Terminar bucle al encontrar la respuesta correcta
            }
        }
    }else{
        for (let i = 0; i < respuestas.length; i++) {
            if (respuestas[i].getAttribute('data-es-correcto') === 'true') {
                console.log('Respuesta correcta encontrada');
                Pvect++;
                const leftContainer = document.getElementById('left');
        const rightContainer = document.getElementById('right');
    
        // Mover los elementos hijos del contenedor right de vuelta al left
        while (rightContainer.firstChild) {
            leftContainer.appendChild(rightContainer.firstChild);
        }       
                pregunta.innerHTML = "¡Felicidades! Has terminado el juego";
                elemento1.innerHTML = "";
                elemento2.innerHTML = "";
                elemento3.innerHTML = "";
                break; // Terminar bucle al encontrar la respuesta correcta
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (a == 0) {
        mostrarPregunta(); // Mostrar la primera pregunta al cargar la página
        a++;
    }
    let lists = document.getElementsByClassName('list');

let rightBox = document.getElementById('right');

let leftBox = document.getElementById('left');
document.get
var canDrop = true;

for (list of lists){
    list.addEventListener('dragstart', function(e){
        let selected = e.target;

        if(canDrop){
            rightBox.addEventListener('dragover', function(e){
                e.preventDefault();
            });
            rightBox.addEventListener('drop', function(e){
                rightBox.appendChild(selected);
                selected= null;
                canDrop = false;
            });
        }

        leftBox.addEventListener('dragover', function(e){
            e.preventDefault();
        });
        leftBox.addEventListener('drop', function(e){
        leftBox.appendChild(selected);
            selected= null;
            canDrop = true;
        });
    })
}
});


