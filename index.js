const contenedor = document.querySelector(".contenedor");
const cuadrado = document.getElementById("button-cuadrado")
const rectangulo = document.getElementById("button-recta")
const circulo = document.getElementById("button-circulo")
const triangulo = document.getElementById("button-trian")
let i = 0;

function createFigure(className) {
    const card = document.createElement('div');
    card.className = 'card';
    card.id = `card${i}`
    contenedor.appendChild(card)
    const figure = document.createElement('div');
    figure.className = className;
    card.appendChild(figure)
    const deleteBtn = document.createElement('button'); 
    deleteBtn.className = 'btn-delete';
    deleteBtn.setAttribute('onClick','Eliminar(this)')
    deleteBtn.id = i;
    deleteBtn.innerText = 'Eliminar'; 
    card.appendChild(deleteBtn);
    const modifyBtn = document.createElement('button');
    modifyBtn.className = 'btn-delete btn-blue'
    modifyBtn.id = `btn${i}`
    modifyBtn.innerText = 'Editar'
    card.appendChild(modifyBtn)
    i = i + 1;
}

function Eliminar(botonPulsado){
    let id = botonPulsado.id;
    const card = document.getElementById(`card${id}`);
    contenedor.removeChild(card)
}

cuadrado.onclick = function(){
    createFigure('shape-square')
}

rectangulo.onclick = function(){
    createFigure('shape-recta')
}

circulo.onclick = function(){
    createFigure('shape-circle')
}

triangulo.onclick = function(){
    createFigure('shape-trian')
}

