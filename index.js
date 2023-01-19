const contenedor = document.querySelector(".contenedor");
const square = document.getElementById("button-cuadrado")
const rectangle = document.getElementById("button-recta")
const circle = document.getElementById("button-circulo")
const triangle = document.getElementById("button-trian")
let i = 0;

const opctionsFigure = (className, name, id) => {
    const card = document.createElement('DIV');
    const figure = document.createElement('DIV');
    const title = document.createElement('H2');

    figure.className = className;
    title.textContent = name;
    card.className = 'card-options';
    card.addEventListener('click', e => {
        const figure = document.getElementById(id)
        figure.className = className;
        document.querySelector('.modal').removeChild(document.querySelector('.options-modal'));
    })

    card.appendChild(figure);
    card.appendChild(title);

    return card;
}

const createFigure = className => {
    const card = document.createElement('DIV');
    const options = document.createElement('DIV');
    const figure = document.createElement('DIV');
    const deleteBtn = document.createElement('BUTTON'); 
    const modifyBtn = document.createElement('BUTTON');

    card.className = 'card';
    card.id = `card${i}`

    options.className = 'options';
    
    figure.className = className;
    figure.id = i;
    
    deleteBtn.className = 'btn-delete';
    deleteBtn.textContent = 'Delete'; 
    deleteBtn.id = i;
    deleteBtn.addEventListener('click', e => {
        let id = parseInt(e.target.id);
        const card = document.getElementById(`card${id}`);
        contenedor.removeChild(card);
    })
    
    modifyBtn.className = 'btn-delete btn-blue';
    modifyBtn.textContent = 'Edit';
    modifyBtn.id = i;
    modifyBtn.addEventListener('click', e => {
        let id = parseInt(e.target.id);
        const editModal = updateFigure(id);
        document.querySelector('.modal').appendChild(editModal)
    })
    
    options.appendChild(figure);
    card.appendChild(options);
    card.appendChild(deleteBtn);
    card.appendChild(modifyBtn);
    contenedor.appendChild(card);
    
    i += 1;
}

const updateFigure = id => {
    const modal = document.createElement('DIV');
    const options = document.createElement('DIV');
    const title = document.createElement('H2');
    const cancelBtn = document.createElement('BUTTON');
    const square = opctionsFigure('shape-square', 'square', id)
    const recta = opctionsFigure('shape-recta', 'Rectangle', id)
    const circle = opctionsFigure('shape-circle', 'Circle', id)
    const trian = opctionsFigure('shape-trian', 'Triangle', id)

    modal.className = 'options-modal';

    options.className = 'options'

    title.className = 'title-options';
    title.textContent = 'Chose the new shape';
    
    cancelBtn.className = 'btn-delete';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', () => {
        document.querySelector('.modal').removeChild(modal);
    })

    modal.appendChild(title);
    options.appendChild(square);
    options.appendChild(recta);
    options.appendChild(circle);
    options.appendChild(trian);
    modal.appendChild(options)
    modal.appendChild(cancelBtn);

    return modal;
}

square.addEventListener('click', () => createFigure('shape-square'));

rectangle.addEventListener('click', () => createFigure('shape-recta'));

circle.addEventListener('click', () => createFigure('shape-circle'));

triangle.addEventListener('click', () => createFigure('shape-trian'));

