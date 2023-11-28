let currentElement = "";
let list = document.getElementById("list");
let initialX = 0,initialY = 0;

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
];
function shuffleArray(array) {
    const newArray = array.slice(); // Creamos una copia del array original
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generamos un índice aleatorio
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Intercambiamos los elementos
    }
    return newArray;
}

function verificar(){
    
}
const isTouchDevice = () => {
try {
    
    document.createEvent("TouchEvent");
    return true;
} catch (e) {
    return false;
}
};

const creator = (count) => {
    for (let i = 0; i < count; i++) {
    list.innerHTML += `<li class="list-item" data-value ="${i}">${ordenarDes[0][i]} </li>`;
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

window.onload = async () => {
    customElement = "";
    list.innerHTML = "";

    const shuffledOrdenarDes = ordenarDes.map((subArray) => shuffleArray(subArray)).flat();

    await creator(shuffledOrdenarDes.length);

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

