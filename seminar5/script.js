/* Задание 1
Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3. */
//////////////////////////////////////////////////////////////////////////////////////////////
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
    }
    
searchMoreEqualThree = (numbers) => {
    for (key in numbers)
    {
        if (numbers[key] >= 3) console.log(numbers[key]);
    }
}

searchMoreEqualThree(numbers);

/*
Задание 2
Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан
 комментарий, в консоль.
*/
/////////////////////////////////////////////////////////////////////////////////////////////
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

searchRecordInObject = (post, author, dislikes, userId, text) => {
    const field1 = 'author',
        field2 = 'dislikes',
        field3 = 'userId',
        field4 = 'text';

    for (key in post) { //бегу циклом по всем элементам объекта
        if (typeof(post[key]) == 'object') { //проверяю есть ли вложения в объект
            for (let i = 0; i < post[key].length; i++) { //пробегаю циклом по первому вложению объекта
                if (typeof(post[key][i]) == 'object') { // проверяю есть ли вложение есть ли?
                    for (nesting1 in post[key][i]) { //пробегаю циклом по второму вложению
                        if (field3 == nesting1 && post[key][i][nesting1] == userId) //сравниваю искомый элемент объекта с заданным и его значения с искомым
                            console.log(`userId: ${post[key][i][nesting1]}`);
                        if (field4 == nesting1 && post[key][i][nesting1] == text)
                            console.log(`text: ${post[key][i][nesting1]}`);
                        if (typeof(post[key][i][nesting1]) == 'object') {
                            for (nesting2 in post[key][i][nesting1]) { //пробегаю циклом по третьему вложению
                                if (field2 == nesting2 && post[key][i][nesting1][nesting2] == dislikes)
                                    console.log(`dislikes: ${post[key][i][nesting1][nesting2]}`);
                            }
                        }
                    }
                }
            }
        } else {
            if (field1 == key && post[key] == author)(console.log(`Author: ${post[key]}`));
        }
    }
}

searchRecordInObject(post, author = 'John', dislikes = 2, userId = 5, text = 'lorem ipsum 2');

/* Задание 3
Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.*/
/////////////////////////////////////////////////////////////////////////////////////////////////

const products = [{
    id: 3,
    price: 200,
},
{
    id: 4,
    price: 900,
},
{
    id: 1,
    price: 1000,
},
]; 

discountProducts = (products, discount) => {
    products.forEach(function(item , i) {
       
        sizeDiscount = products[i].price * discount;
        products[i].price = products[i].price - sizeDiscount;
    
    });
}

discountProducts(products, discount = 0.15);

console.log(products);



/*
Задание 4
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод 
filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, 
заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.*/
////////////////////////////////////////////////////////////////////////////////////////////////////

const products = [{
    id: 3,
    price: 127,
    photos: [
        "1.jpg",
        "2.jpg",
    ],
},
{
    id: 5,
    price: 499,
    photos: [],
},
{
    id: 10,
    price: 26,
    photos: [
        "3.jpg",
    ],
},
{
    id: 8,
    price: 78,
},
];
//4.1 задание
///////////////////////////////////////////////////////////////////////////////
searchPhoto = (products) => {
    let array = [];
    products.filter(function(item, i){
        if (products[i].photos != false && products[i].photos !=undefined) 
                console.log(products[i]);
    })
}
searchPhoto(products);
//4.2 задание
//////////////////////////////////////////////////////////////////////////////
sortArray = (products) => {
  res =  products.sort(function(a, b) {
       return (a.price - b.price);    
    })
    console.log(res);
}

sortArray(products);


/*
**Задание 5**
Дано 2 массива 
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
```
Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, 
а значения второго массива — значениями. */
/////////////////////////////////////////////////////////////////////////////////////////////////
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

mergeArray = (en, ru) => {
    const arr = new Map(); //создаю ассоциативный массив
        for (let i = 0; i < en.length; i++) {
            arr.set(en[i], ru[i]);
        }
        console.log(arr);
}

mergeArray(en, ru);




