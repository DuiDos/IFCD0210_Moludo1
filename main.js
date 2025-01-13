let buttonContent = 0;
const selectedScore = (event) => {
    let clickedButton = event.target;

    clickedButton.classList.add('score-selected');
    document.querySelector('button.button_send').removeAttribute('disabled');
    buttonContent = clickedButton.textContent;
};

const scoreButtons = document.querySelectorAll('li button');
console.log(scoreButtons);

scoreButtons.forEach((scoreButton) => {
    scoreButton.classList.remove('score-selected');
    scoreButton.addEventListener('click', selectedScore);
});

const viewChanger = (Event) => {
    views.forEach((view) => view.classList.toggle('hidden'));
    const result = document.querySelector('p.result');
    result.textContent = 'Seleccionaste ' + buttonContent + ' de 5';
};

const changeViewButton = document.querySelector('button.button_send');
console.log(changeViewButton);
changeViewButton.addEventListener('click', viewChanger);

const views = document.querySelectorAll('section');
console.log(views);
