let selectShift = document.querySelector('.shift-selection');
let wrapLabel = document.querySelector('.wrap-label');
selectShift.addEventListener('click', activeLabel);

function activeLabel() {
    wrapLabel.classList.add('menu-active');
}

let shiftSelect = document.getElementById('shift-selection');
let labels = document.querySelectorAll('.label-shift');

labels.forEach((lab) => {
    lab.addEventListener('click', (e) => {
        wrapLabel.classList.remove('menu-active');
        console.log(shiftSelect);
        shiftSelect.innerHTML = e.target.innerHTML;
    })
});

document.addEventListener('click', (e) => {
    if (e.target != selectShift) {
        wrapLabel.classList.remove('menu-active');
    }
});

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