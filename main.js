const btnKick = document.getElementById('btn-kick');
const btnKickHard = document.getElementById('btn-kick-hard');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
};

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
};

btnKick.addEventListener('click', function () {
    changeHP(random(20), character);
    changeHP(random(20), enemy);
});

btnKickHard.addEventListener('click', function () {
    changeHP(random(35), character);
    changeHP(random(35), enemy);
});

function random(num) {
    return Math.ceil(Math.random() * num);
}

function changeHP(count, person) {
    if (person.damageHP < count) {
        person.damageHP = 0;
        alert(person.name + ' проиграл бой!');
        btnKick.disabled = true;
        btnKickHard.disabled = true;
    } else {
        person.damageHP -= count;
    }
    renderHP(person);
}

function renderHP(person) {
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person) {
    const percent = (person.damageHP / person.defaultHP) * 100;
    person.elProgressbar.style.width = percent + '%';
    
    if (percent < 20) {
        person.elProgressbar.style.backgroundColor = '#f44336';
    } else if (percent < 60) {
        person.elProgressbar.style.backgroundColor = '#ffeb3b';
    } else {
        person.elProgressbar.style.backgroundColor = '#4caf50';
    }
}