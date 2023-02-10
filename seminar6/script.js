'use strict';
/*
///////////////////////////////////////////////////////////////////////////////////////////////////
1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент
 в консоль.
2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст
 внутри элемента на "ссылка".
3. Найти все элементы на странице с классом "card-link", которые лежат в 
 с классом "card-body" и вывести полученную коллекцию в консоль.
4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number 
со значением 50 и вывести его в консоль.
5. Выведите содержимое тега title в консоль.
6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало 
элемента, который имеет класс "card".
8. Удалите тег h6 на странице.

*///////////////////////////////////////////////////////////////////////////////////////////////////
//1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент
// в консоль.
////////////////////////////////////////////////////////////////////////////////////////////////////
/*1 вариант решения. Поиск элемента ID по наличию аттрибута.*/
////////////////////////////////////////////////////////////////////////////////////////////////////
const pageBody = document.body.children;
const elementsID = 'super_link';

function searchById(elementsID, pageBody) {
    for (let i = 0; i < pageBody.length; i++) {
        if (elementsID == pageBody[i].getAttribute('id'))
            console.log(pageBody[i]);
        if (pageBody[i].children.length > 0) {
            let firstNested = pageBody[i].children;
                for (let x = 0; x < firstNested.length; x++) {
                    if (elementsID == firstNested[x].getAttribute('id'))
                          console.log(firstNested[x]);
                    if (firstNested[x].children.length > 0) {
                        let twoNested = firstNested[x].children;
                            for (let z = 0; z < twoNested.length; z++) {
                               if (elementsID == twoNested[z].getAttribute('id'))
                                    console.log(twoNested[z]);
                        }
                    }
                }   
        }     
    }
}

searchById(elementsID, pageBody);
////////////////////////////////////////////////////////////////////////////////////////////////////
/*2 вариант решения. Поиск элемента ID черех QuerySelectorAll */
////////////////////////////////////////////////////////////////////////////////////////////////////
let elementID = document.querySelectorAll('#super_link');
  for (let elem of elementID) {
    console.log(elem);
}

////////////////////////////////////////////////////////////////////////////////////////////////////
/*3 вариант решения. поиск элемента ID через getElementsByID */
////////////////////////////////////////////////////////////////////////////////////////////////////
const elementID = document.getElementById('super_link');
if (elementID) console.log(elementID);

////////////////////////////////////////////////////////////////////////////////////////////////////
/* 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст
 внутри элемента на "ссылка". */
 ///////////////////////////////////////////////////////////////////////////////////////////////////
const cardLink = document.querySelectorAll('.card-link');
    for (let i = 0; i < cardLink.length; i++) {
    cardLink[i].textContent = 'ссылка';
}
////////////////////////////////////////////////////////////////////////////////////////////////////
/* 3. Найти все элементы на странице с классом "card-link", которые лежат в 
 с классом "card-body" и вывести полученную коллекцию в консоль.*/
////////////////////////////////////////////////////////////////////////////////////////////////////
const elem = document.querySelectorAll('.card-link');
    for (let i = 0; i < elem.length; i++) {
     let cardBody = elem[i].parentNode.getAttribute('class');
         if (cardBody == 'card-body') 
            console.log(elem[i]);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
/* 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number 
со значением 50 и вывести его в консоль. */
/////////////////////////////////////////////////////////////////////////////////////////////////////
//1. вариант решения задачи
/////////////////////////////////////////////////////////////////////////////////////////////////////
const pageBody = document.body.children;
const searchAttribute = 'data-number';
const currentMeaning = '50';

function searchByAttribute(searchAttribute, currentMeaning, pageBody) {
    for (let i = 0; i < pageBody.length; i++) {
        if (pageBody[i].getAttribute(searchAttribute)) console.log(pageBody[i]);
        if (pageBody[i].children.length > 0) {
            let oneNesting = pageBody[i].children;
            for (let x = 0; x < oneNesting.length; x++) {
                if (oneNesting[x].getAttribute(searchAttribute)) console.log(oneNesting[x]);
                if (oneNesting[x].children.length > 0) {
                    let twoNesting = oneNesting[x].children;
                    for (let z = 0; z < twoNesting.length; z++) {
                        if (twoNesting[z].getAttribute(searchAttribute)) { 
                           let meaning = twoNesting[z].getAttribute(searchAttribute);
                                if (meaning == currentMeaning) console.log(twoNesting[z]);   
                        }
                    }
                }
            }
        }
    }
}
searchByAttribute(searchAttribute, currentMeaning, pageBody);
///////////////////////////////////////////////////////////////////////////////////////////////////
/*2. вариант решения*/
///////////////////////////////////////////////////////////////////////////////////////////////////
const dataNumber = document.querySelectorAll('[data-number]');
const searchMeaning = '50';

function searchDataNumber(dataNumber, searchMeaning) {
for (let i = 0; i < dataNumber.length; i++) {
    let number = dataNumber[i].getAttribute('data-number');
    if (number == searchMeaning ) console.log(dataNumber[i]);
    }
}

searchDataNumber(dataNumber, searchMeaning)*/
///////////////////////////////////////////////////////////////////////////////////////////////////
/*3. вариант решения используя фильтр*/
///////////////////////////////////////////////////////////////////////////////////////////////////
let highArray = Array.from(document.querySelectorAll('[data-number]'));

highArray.filter((item) => {
    if (item.getAttribute('data-number') == 50) {
        console.log(item);
    }
})
///////////////////////////////////////////////////////////////////////////////////////////////////
/*5. Выведите содержимое тега title в консоль.*/
///////////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector('title').textContent;
//////////////////////////////////////////////////////////////////////////////////////////////////
/*6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.*/
console.log(document.getElementsByClassName('card-title')[0].parentNode);
//////////////////////////////////////////////////////////////////////////////////////////////////
/* 7. Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало 
элемента, который имеет класс "card". */
//////////////////////////////////////////////////////////////////////////////////////////////////
const card = document.querySelector('div.card');
const newEl = document.createElement('p');
      newEl.textContent = 'Привет';
      card.prepend(newEl);
///////////////////////////////////////////////////////////////////////////////////////////////////
/* 8. Удалите тег h6 на странице.*/
///////////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector('h6').remove();
