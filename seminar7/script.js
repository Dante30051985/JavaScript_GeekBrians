"use strict";
/*///////////////////////////////////////////////////////////////////////////////////////////////////
[]()
[]()
1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", 
необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
[]()
2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у 
этого элемента, либо добавить, если такого класса у элемента не было.
[]()
3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
[]()
4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
`<a href="#">link</a>`
[]()
5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
[]()
6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" 
равный "dropdownMenuButton" используя dataset.
[]()
7. Удалите атрибут type у элемента с классом "dropdown-toggle".
*///////////////////////////////////////////////////////////////////////////////////////////////////


/*1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", 
необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
//////////////////////////////////////////////////////////////////////////////////////////////////*/

const array = Array.from(document.querySelectorAll('.dropdown-item'));
array.forEach(function(item) {
    item.classList.add('super-dropdown');
})

/////////////////////////////////////////////////////////////////////////////////////////////////////

/*2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у 
этого элемента, либо добавить, если такого класса у элемента не было. p.s. Маленько усложнил добавил 
таймер на 5 секунд*/
/////////////////////////////////////////////////////////////////////////////////////////////////////

const resultSecondary = 
        document.querySelectorAll('.btn')[0].classList.contains('btn-secondary');

function checkedClass(resultSecondary) {
if (resultSecondary) {
   
    setTimeout(() => removeClass(resultSecondary) , 5000);
        function removeClass(resultSecondary) {
            document.querySelectorAll('.btn')[0].classList.remove('btn-secondary')
            resultSecondary = false;
            checkedClass(resultSecondary)
        }
} else {
   
    setTimeout(() => addClass(resultSecondary), 5000)

    function addClass(resultSecondary) {
        resultSecondary = true;
        document.querySelectorAll('.btn')[0].classList.add('btn-secondary');
        checkedClass(resultSecondary);
    }
}
}

checkedClass(resultSecondary); 

//////////////////////////////////////////////////////////////////////////////////////////////////////

/*3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".*/
document.querySelectorAll('.menu')[0].classList.remove('dropdown-menu');
//////////////////////////////////////////////////////////////////////////////////////////////////////

/*4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
`<a href="#">link</a>`*/

document.querySelector('div.dropdown').insertAdjacentHTML('afterend', `<a href='#'>link</a>`);
//////////////////////////////////////////////////////////////////////////////////////////////////////

/*5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".*/
document.querySelector('#dropdownMenuButton').setAttribute('id', 'superDropdown');
//варианта с getElementByID - одно и тоже
document.getElementById('dropdownMenuButton').setAttribute('id', 'superDropdown');

/*6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" 
равный "dropdownMenuButton" используя dataset.*/

//1. вариант
document.querySelectorAll('[aria-labelledby=dropdownMenuButton]')[0].setAttribute('data-dd', 3);
//2. вариант
document.querySelectorAll('[aria-labelledby=dropdownMenuButton]')[0].dataset.dd = 3;

/*7. Удалите атрибут type у элемента с классом "dropdown-toggle".*/
document.querySelectorAll('.dropdown-toggle[type]')[0].removeAttribute('type');

