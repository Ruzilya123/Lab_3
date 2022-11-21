
// Task 1

let button1 = document.getElementById('button1'); 
// Находим родителя
button1.addEventListener('click', down); 
let time = setTimeout(down, 3000); 
 // добавляем прослушку 

function down(){ 
    setTimeout(() => { 
        window.scrollTo(0, 500)
    }, 3000); 
}
// прокрутка


// Task 2

function vert() {
    let window2 = window.pageYOffset ? alert("Есть") : alert("Нет"); 
    // если есть вертикальная прокрутка, выводим "Есть", иначе "Нет"
}


// Task 3

const btn3 = document.querySelector('#button');
// Находим родителя
btn3.addEventListener('click', () => {
    // если кликаем по кнопке, запускается функция
    const form3 = document.querySelector('#form');
    let sum = 0;
    // объявляем переменную суммы
    for (let i = 0; i < form3.elements.length; i += 1) {
        sum += Number(form3.elements[i].value);
        // складываем сумму с преобразованной строкой в число
    }
    console.log(sum);
});


// Task 4

const sity = {
    0: ['москва', 'елабуга', 'краснодар'],
    1: ['нью-йорк', 'чикаго', 'лос-анжелес'],
    2: ['шанхай', 'пекин', 'гуанчжоу']
};
// создаём список

const select4 = document.querySelector('#sel4');
// находим одного родителя
const div4 = document.querySelector('.div4');
// находим второго родителя
select4.addEventListener('change', func4);
// при выбранном у первого родителя, запускаем функцию func4
function func4() {
    div4.innerHTML = '';

    const sityies = sity[select4.selectedIndex];

    const sel4 = document.createElement('select');
    // создаём элемент select
    for (let i = 0; i < sityies.length; i += 1) {
        const opt4 = document.createElement('option');
        // создаём элемент option
        opt4.innerHTML = sityies[i];
        select4.appendChild(opt4);
    }
    div4.appendChild(sel4);
    // добавляем узел
};


// Task 5

const ol = document.querySelector('.ol');
// находим родителя
const li = document.createElement('li');
// создаем елемент li
li.innerHTML = 'пункт';
// добавляем текст
ol.appendChild(li);

ol.addEventListener('click', func5);
// При нажатии на текст запускается функция func5
function func5(event) {
    event.target.innerHTML = `${event.target.innerHTML} !`;
    // к элементу добавляется !
};



// Task 6

const hre = document.querySelectorAll('.hr');
// находим родителя
    for (let i = 0; i < hre.length; i += 1) {
        hre[i].addEventListener('mouseover', funchr);
        // на ребенка наведена мышь, запускаем функцию
    }

    function funchr() {
        this.innerHTML = this.innerHTML + `(${this.href})`;
        // выводим ссылку
}


// Task 7

function two1() {
    let p = document.querySelector('.a');
    // Находим елемент
    let p2 = Number(p.textContent) ** 2;
    // преобразовывем текст в квадратное число
    p.textContent = p2;
    // меняем текст
}
function two2() {
    let p3 = document.querySelector('.a2');
    // Находим елемент
    let p4 = Number(p3.textContent) ** 2;
    // преобразовывем текст в квадратное число
    p3.textContent = p4;
    // меняем текст
}
function two3() {
    let p5 = document.querySelector('.a3');
    // Находим елемент
    let p6 = Number(p5.textContent) ** 2;
    // преобразовывем текст в квадратное число
    p5.textContent = p6;
    // меняем текст
}


// Task 8

let clicks = +localStorage.getItem('clicks');
// сохараняем значение кликов
const button = document.querySelector('input[type="button"]');
// находим родителя
button.value = clicks;
// перезаписываем значение
function clicks() {
    localStorage.setItem('clicks', ++clicks);
    //   сохраняем клики в функции
    button.value = clicks;
    //   перезаписываем значение
}


// Task 9

var ul9 = document.querySelector('.task9');
// находим родителя ul
var btn9 = document.querySelector('.btn9');
// находим родителя кнопки
ul9.addEventListener('click', func9);
// при нажатии на ул происходит функция
btn9.addEventListener('click', func99);
// при нажатии на кнопку происходит функция
function func9(event) {
    event.target.innerHTML = `${event.target.innerHTML} !`;
    // добавляем !
};

function func99() {
    const li9 = document.createElement('li');
    // создаем элемент li
    li9.innerHTML = "пункт"
    // добавляем в новый li пункт
    ul9.appendChild(li9);
    // добавляем узел
};


// Task 10

const form10 = document.querySelector('.form10');
// ищем родителя формы
const table10 = document.querySelector('.task10');
// ищем родителя таблицы
form10.submit.addEventListener('click', func10);
// если нажать на элемент формы, запускается функция
table10.addEventListener('click', func1010);
// если нажать на элемент таблицы, запускается функция
function func1010(event) {
    const newVal = prompt("Поменять " + event.target.innerHTML, '');
    // меняем элемент в таблице
    event.target.innerHTML = newVal;
};

function func10(event) {
    event.preventDefault();
    // событие
    const crTd1 = document.createElement('td');
    // находим родителя
    crTd1.innerHTML = form10.firstname.value;
    // присваиваем значение имени 
    const crTd2 = document.createElement('td');
    // создаем элемент td
    crTd2.innerHTML = form10.lastname.value;
    // присваиваем значение фамилии
    const crTr = document.createElement('tr');
    // содаем элемент tr
    crTr.appendChild(crTd1);
    // добавляем узел
    crTr.appendChild(crTd2);
    // добавляем узел
    table10.appendChild(crTr);
    // добавляем узел
};
