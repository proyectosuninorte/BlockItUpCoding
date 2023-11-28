
let page = 1;
let Pvect = 0;
let a = 0;
let tamano = 0;


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

    const preguntasExpresionPseu = [
        "Con el siguiente algoritmo si el usuario ingresa los siguientes números para las variablesnum1 y num2 diga si el programa se ejecutará correctamente: <br>num1= 4.5 <br>num2= 6 <br>Inicio  <br>int num1, num2, sum <br>Leer num1, num2 <br>sum<- num1* num2 <br>Escribir sum <br>Fin ",
        "Con el siguiente algoritmo si el usuario ingresa los siguientes números para las variables num1 y num2 diga que resultado arrojara el algoritmo:<br>num1 = 5<br>num2= 3<br>Inicio<br>int num1, num2, sum <br>Leer num1, num2 <br>sum<- num1+num2 <br>Escribir sum <br>Fin ",
        "Ponga en el espacio en blanco el número que logre satisfacer la siguiente condición, para que el algoritmo imprima “Bien hecho”: <br>Inicio<br>int A, B <br>Leer A, B  <br> Si (10 >= B) entonces  <br>Escribir “Bien hecho” <br>Sino <br>Escribir “No es la opcion correcta” Fin-si <br>Fin ",
        "Dado el siguiente algoritmo completa la condición con la respuesta correcta:<br>Inicio  <br>Entero num <br>Leer num <br>Si(num mod 2 = 0) entonces <br>Escribir “El número es par” <br>Sino <br> Escribir “El número es impar” <br>Fin"
    ];
    tamano = preguntasExpresionGame.length;
    const respuestaCorrectaExpresionPseu = ["No se va a ejecutar correctamente,<br>porque las variables están declaradas como enteras. ",
    "8",
    "9","2"];
    const respuestaIncorrectaExpresionPseu = [["Si se va a ejecutar correctamente, dará como resultado –1.5. ",
    "Si se va a ejecutar correctamente, porque no importa el tipo de dato con el que se declaren las variables,<br>DEellas se ejecutaran de forma correcta para dar la respuesta esperada."],
    ["10", "5"],["15","25"],["10","12"]];


    
        pregunta.innerHTML = preguntasExpresionPseu[Pvect];
        let divRespuestaCorrecta = Math.floor(Math.random() * 3) + 1;
        if (divRespuestaCorrecta == 1) {
            elemento1.innerHTML = respuestaCorrectaExpresionPseu[Pvect];
            elemento1.setAttribute('data-es-correcto', 'true');
            elemento2.innerHTML = respuestaIncorrectaExpresionPseu[Pvect][0];
            elemento3.innerHTML = respuestaIncorrectaExpresionPseu[Pvect][1];
        }
        if (divRespuestaCorrecta == 2) {
            elemento1.innerHTML = respuestaIncorrectaExpresionPseu[Pvect][0];
            elemento2.innerHTML = respuestaCorrectaExpresionPseu[Pvect];
            elemento2.setAttribute('data-es-correcto', 'true');
            elemento3.innerHTML = respuestaIncorrectaExpresionPseu[Pvect][1];
        }
        if (divRespuestaCorrecta == 3) {
            elemento1.innerHTML = respuestaIncorrectaExpresionPseu[Pvect][0];
            elemento2.innerHTML = respuestaIncorrectaExpresionPseu[Pvect][1];
            elemento3.innerHTML = respuestaCorrectaExpresionPseu[Pvect];
            elemento3.setAttribute('data-es-correcto', 'true');
        }
    
}

function comprobar() {
    const DivElement = document.getElementById('right');
    let respuestas = DivElement.children;

    if(Pvect<tamano-1){
        for (let i = 0; i < respuestas.length; i++) {
            if (respuestas[i].getAttribute('data-es-correcto') === 'true') {
                console.log('Respuesta correcta encontrada');
                alert("Respuesta correcta");
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
            else {
                alert("Respuesta incorrecta");
                canDrop = true;
                restablecerCanDrop();
                const leftContainer = document.getElementById('left');
                const rightContainer = document.getElementById('right');
    
        // Mover los elementos hijos del contenedor right de vuelta al left
        while (rightContainer.firstChild) {
            leftContainer.appendChild(rightContainer.firstChild);
        }
            }
            
        }
    }else{
        for (let i = 0; i < respuestas.length; i++) {
            if (respuestas[i].getAttribute('data-es-correcto') === 'true') {
                console.log('Respuesta correcta encontrada');
                Pvect=0;
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
