const addPlayerButton = document.querySelector("#add-button");

let playersList = [];
let IdCounter = 0;

addPlayerButton.onclick = createPlayerTemplate;

function createPlayerTemplate() {
    if (IdCounter >= 6) return;

    const playerTemplate = document.createElement('div');
    playerTemplate.className = 'Player-template';

    IdCounter++;

    const form = document.createElement('form');
    form.id = `input-${IdCounter}`;
    
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', `iname-${IdCounter}`);
    nameLabel.textContent = 'Nombre:';

    const nameInput = document.createElement('input');
    nameInput.id = `iname-${IdCounter}`;
    nameInput.type = 'text';
    nameInput.name = 'name';
    
    const submitNameButton = document.createElement('button');
    submitNameButton.className = 'UI';
    submitNameButton.textContent = 'Guardar nombre';
    submitNameButton.onclick = (event) => {
        event.preventDefault();
        handleFormSubmit(IdCounter);
    };

    const pointLabel = document.createElement('label');
    pointLabel.setAttribute('for', `ipoint-${IdCounter}`);
    pointLabel.textContent = 'Puntos:';

    const pointInput = document.createElement('input');
    pointInput.id = `ipoint-${IdCounter}`;
    pointInput.type = 'number';
    pointInput.name = 'name';
    
    const submitPointButton = document.createElement('button');
    submitPointButton.className = 'UI';
    submitPointButton.textContent = 'Guardar puntos';
    submitPointButton.onclick = (event) => {
        event.preventDefault();
        handlePointsSubmit(IdCounter);
    };

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(submitNameButton);

    playerTemplate.appendChild(document.createElement('br'));
    
    form.appendChild(pointLabel);
    form.appendChild(pointInput);
    form.appendChild(submitPointButton);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'UI';
    deleteButton.id = `delete-button-${IdCounter}`;
    deleteButton.textContent = '-';
    deleteButton.onclick = () => 
        {
            IdCounter--;
            playerTemplate.remove();
        }
    
    playerTemplate.appendChild(form);
    playerTemplate.appendChild(document.createElement('br'));
    playerTemplate.appendChild(deleteButton);

    const container = document.querySelector('.container');
    container.appendChild(playerTemplate);
}

function handleFormSubmit(id) {
    const form = document.getElementById(`input-${id}`);

    form.addEventListener('submit', function(event) {
        const nombre = document.getElementById(`iname-${id}`).value;
        playersList.push([[nombre], [0]]);
    });
}