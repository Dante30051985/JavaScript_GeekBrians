// Задание 1. Создайте функцию которая возводит переданное число в куб, необходимо вывести 
// в консоль результат 2^3 степени + 3 ^ 3 степени
/*--------------------------------------------------------*/

let digits = Number(2)
//Возведения математически в куб
function buildCubMathematically(digits) {
    resultBuildCub = (digits * digits * digits) + 3;
    console.log(`Результат выражения 2 ^ 3 + 3 будет равен: ${resultBuildCub}`);
}
buildCubMathematically(digits);

// //Возведение используя объект Math
function buildCubObjectMath(digits) {
    resultBuildCub = Math.pow(digits, 3) + 3;
    console.log(`Результат выражения 2 ^ 3 + 3 будет равен: ${resultBuildCub}`);    
}
buildCubObjectMath(digits);

// //Стрелочный вариант решения
const digit = (n) => { n = Math.pow(n, 3) + 3; return n;}
let result = digit(2);
console.log(`Результат выражения 2 ^ 3 + 3 будет равен: ${result}`);    

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль 
// текст "Размер заработной платы за вычетом налогов равен значение"
/*-------------------------------------------------------------------------------*/
const checkedError = () => {
        const enterUserNumber = Number(prompt('Введите число:'));
        if (isNaN(enterUserNumber)) { console.log('Задано неверно!') }
        else { payRollCallculation(enterUserNumber); }
}

const payRollCallculation = (enterUserNumber) => {
    rollCallculation = enterUserNumber*0.13;
    console.log(
        `Размер заработной платы составляет: ${enterUserNumber}
         Вычет налога 13% с зарабоной платы составит: ${rollCallculation}`);
}

checkedError();

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное 
// значение среди этих чисел

function startSearchMaximum() {
    let array = new Array; //создаём массив

    array.unshift(Number(prompt('Введите первое число:')));
    array.unshift(Number(prompt('Введите второе число:')));
    array.unshift(Number(prompt('Введите третье число:')));

    let maximum = array[0]; //переменная хранящая в себе максимальное значение по умолчанию 1 значение в массиве

    for (let i = 0; i < array.length+1; i++) {
        if (array[i] > maximum) maximum = array[i]; //пишу в переменную если это максимальное на даной иттерации
    }
    console.log(`Среди введёных значений пользователем ${array[0]}, ${array[1]}, ${array[2]}
    максимальным значением является ${maximum}`);
}

startSearchMaximum()

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из 
// операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); 
// должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут 
// отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность,
// функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда 
// передаются корректные числа, проверки на NaN, Infinity делать не нужно.

let additionDigits = (a, b) => { return result = a + b; }
let differenceDigits = (a, b) => { 
    min = a; max = b;
    if (a > b) { max = a; min = b;}
    return result = max - min;
 }
let multiplicationDigits = (a, b) => { return result = a*b; }
let divisionDigitsWithoutTrace = (a, b) => { return result = a/b;} 

console.log(`Сложение 2 и 6 будет равно: ${additionDigits(2, 6)}`);
console.log(`Разность чисел 6 и 2 равно: ${differenceDigits(2, 6)}`);
console.log(`Умножение чисел 2 и 6 равно: ${multiplicationDigits(2, 6)}`);
console.log(`Деление чисел 2 и 6 равно: ${divisionDigitsWithoutTrace(2, 6)}`);