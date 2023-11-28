function iniciarJuego() {
    let currentElement = "";
    let list = document.getElementById("list");
    let initialX = 0,
        initialY = 0;
    
    

    const isTouchDevice = () => {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    };

    

    const getPosition = (value) => {
        let elementIndex;
        let listItems = document.querySelectorAll(".list-item");
        listItems.forEach((element, index) => {
            let elementValue = element.getAttribute("data-value");
            if (value == elementValue) {
                elementIndex = index;
            }
        });
        return elementIndex;
    };

    function dragStart(e) {
        initialX = isTouchDevice() ? e.touches[0].clientX : e.clientX;
        initialY = isTouchDevice() ? e.touches[0].clientY : e.clientY;
        currentElement = e.target;
    }

    function dragOver(e) {
        e.preventDefault();
    }

    const drop = (e) => {
        e.preventDefault();
        let newX = isTouchDevice() ? e.touches[0].clientX : e.clientX;
        let newY = isTouchDevice() ? e.touches[0].clientY : e.clientY;
        let targetElement = document.elementFromPoint(newX, newY);
        let currentValue = currentElement.getAttribute("data-value");
        let targetValue = targetElement.getAttribute("data-value");
        let [currentPosition, targetPosition] = [
            getPosition(currentValue),
            getPosition(targetValue),
        ];
        initialX = newX;
        initialY = newY;

        try {
            if (currentPosition < targetPosition) {
                targetElement.insertAdjacentElement("afterend", currentElement);
            } else {
                targetElement.insertAdjacentElement("beforebegin", currentElement);
            }
        } catch (err) {}
    };

    let respuestasAlet;

    

    window.onload = async () => {
        customElement = "";
        list.innerHTML = "";

        await creator(4);

        let listItems = document.querySelectorAll(".list-item");
        listItems.forEach((element) => {
            element.draggable = true;
            element.addEventListener("dragstart", dragStart, false);
            element.addEventListener("dragover", dragOver, false);
            element.addEventListener("drop", drop, false);
            element.addEventListener("touchstart", dragStart, false);
            element.addEventListener("touchmove", drop, false);
        });
    };

    

    

    // Llama a verificar() cuando sea necesario, por ejemplo, desde un botón
    // Ejemplo: document.getElementById("verificar-btn").addEventListener("click", verificar);
}
const recargarComponentes = () => {
    list.innerHTML = "";
    creator(4);
    let listItems = document.querySelectorAll(".list-item");
    listItems.forEach((element) => {
        element.draggable = true;
        element.addEventListener("dragstart", dragStart, false);
        element.addEventListener("dragover", dragOver, false);
        element.addEventListener("drop", drop, false);
        element.addEventListener("touchstart", dragStart, false);
        element.addEventListener("touchmove", drop, false);
    });
};
const ordenarDes = [
    [
        "Inicio<br>Real calif1, calif2, calif3, prom <br> Leer calif1, calif2, calif3 <br> prom <- (calif1 + calif2 + calif3)/3",
        "Si (prom >= 70) entonces<br>Escribir “alumno aprobado” ",
        "si no  <br>Escribir “alumno reprobado” ",
        " Fin-si <br>Fin "
    ],
    [
        "Inicio<br>Real compra, desc, tot_pag<br>Leer compra",
        "Si compra > 1000 entonces<br>desc <- compra * 0.20",
        "si no<br>desc <- 0<br>fin-si",
        "tot_pag <- compra – desc<br>Escribir tot_pag<br>Fin"
    ],
    [
        "Inicio<br>Entero num<br>Leer num",
        "Si(num mod 3 <> 0) entonces<br>Escribir “El número no es divisible entre 3”",
        "Sino<br>Escribir “El número es divisible entre 3”",
        "Fin"
    ]
    // ... otras matrices de ejercicios ...
];
let Pvect = 0;
function reasignar() {
    respuestasAlet = [
        ordenarDes[Pvect][2],
        ordenarDes[Pvect][0],
        ordenarDes[Pvect][1],
        ordenarDes[Pvect][3]
    ];
}
const creator = (count) => {
    reasignar();
    
    
    if(Pvect<ordenarDes.length){
        titulo.innerHTML = "Ordenar";
        for (let i = 0; i < count; i++) {
            list.innerHTML += `<li class="list-item" id="${i}" data-value="${i}">${respuestasAlet[i]} </li>`;
        }
    }else{
        titulo.innerHTML = "Ganaste";
        for (let i = 0; i < count; i++) {
            list.innerHTML += `<li class="list-item" id="${i}" data-value="${i}">${i} </li>`;
        }
    }
};
let titulo = document.getElementById("titulo");
function verificar () {
    let listItems = document.getElementsByClassName("list-item");

    let contenidoLista = [];
    for (let i = 0; i < listItems.length; i++) {
        contenidoLista.push(listItems[i].innerHTML.trim().replace(/&lt;/g, '<').replace(/&gt;/g, '>'));
    }

    let ordenarDesClean = ordenarDes[Pvect].map(item => item.trim().replace(/&lt;/g, '<').replace(/&gt;/g, '>'));

    const contenidoListaString = contenidoLista.join('');
    const ordenarDesString = ordenarDesClean.join('');

    if (contenidoListaString === ordenarDesString) {
        alert("Respuesta correcta");
        Pvect++;
        recargarComponentes();
    } else {
        alert("Respuesta incorrecta");
    }
}
iniciarJuego();