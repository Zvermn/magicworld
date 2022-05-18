// выбор смены в форме
let selectShift = document.querySelector('.shift-selection');
let wrapLabel = document.querySelector('.wrap-label');
selectShift.addEventListener('click', activeLabel);

function activeLabel() {
    wrapLabel.classList.add('menu-active');
    selectShift.classList.add('open-shifts');
}

let shiftSelect = document.querySelector('.shift-selection');
let labels = document.querySelectorAll('.label-shift');

labels.forEach((lab) => {
    lab.addEventListener('click', (e) => {
        wrapLabel.classList.remove('menu-active');
        console.log(shiftSelect);
        shiftSelect.innerHTML = e.currentTarget.innerHTML;
        selectShift.classList.remove('open-shifts');
    })
});

document.addEventListener('click', (e) => {
    if (e.target !== selectShift) {
        wrapLabel.classList.remove('menu-active');
        selectShift.classList.remove('open-shifts');
    }
});






// Блок открытия списка вещей
let arrowBlock = document.querySelectorAll('.list-item-icon');
let lists = document.querySelectorAll('.list-item');
let openLists = document.querySelectorAll('.wrap-list-name');
openLists.forEach(element => {
    element.addEventListener('click', openList, true);
});

function openList(event) {
    for (let index = 0; index < openLists.length; index++) {
        const item = openLists[index];
        console.log(item);
        if (item === event.currentTarget) {
            lists[index].classList.toggle('active');
            arrowBlock[index].classList.toggle('active');
        }
    }

};

let nav = document.querySelector('.header-nav');
let openNav = document.querySelector('.nav-icon');
openNav.addEventListener('click', () => {
    nav.classList.toggle('active');
});