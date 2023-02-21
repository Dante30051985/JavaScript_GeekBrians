/*1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально 
отображаться в span. То есть при печати в input'е тег span также должен меняться.

2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
- добавить два класса: animate_animated и animate_fadeInLeftBig
- поставить данному элементу стиль visibility в значение 'visible'.

3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
- Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать./*

/*1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально 
отображаться в span. То есть при печати в input'е тег span также должен меняться.*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
const enterInput = document.querySelector('input#from');
const textDisplay = document.querySelector('input#from').nextElementSibling;

enterInput.oninput = () => {
    textDisplay.textContent = enterInput.value;
}

/*2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
- добавить два класса: animate_animated и animate_fadeInLeftBig
- поставить данному элементу стиль visibility в значение 'visible'.*/
///////////////////////////////////////////////////////////////////////////////////////////////////////
const btnMsg = document.querySelector('button.messageBtn');
const elMsg = document.querySelector('div.message');

btnMsg.onclick = () => {
    elMsg.classList.add('animate_animated');
    elMsg.classList.add('animate_fadeInLeftBig');
    elMsg.style.visibility = 'visible';
}

/*3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. 
Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены 
незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь 
начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
- Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
const clickSend = document.querySelectorAll('button')[1];
const formControl = document.querySelector('input.form-control');
const selectFormControl = document.querySelector('select.form-control');

clickSend.onclick = (e) => {
    
    if (!enterInput.value || !formControl.value ||   !selectFormControl.value) {
        e.preventDefault(); //останавливаю отправку
        if (!enterInput.value) {
            enterInput.style.background = 'red';
            enterInput.classList.add('error');
        }

        if (!formControl.value) {
            formControl.style.background = 'red';
            formControl.classList.add('error');
        }

        if (!selectFormControl.value) {
            selectFormControl.style.background = 'red';
            selectFormControl.classList.add('error');
        }     
    }

    if (enterInput.value) {
        enterInput.removeAttribute('style');
        enterInput.classList.remove('error');
    }

    if (formControl.value) {
        formControl.removeAttribute('style');
        formControl.classList.remove('error');
    }

    if (selectFormControl.value) {
        selectFormControl.removeAttribute('style');
        selectFormControl.classList.remove('error');
    }

}