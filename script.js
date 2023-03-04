'use strict';

const buttonFormEl = document.querySelector('.form__btn');

buttonFormEl.onclick = function () {
    const passFirstEl = document.querySelector('#password1').value;
    const passSecondEl = document.querySelector('#password2').value;
console.log(passFirstEl);
console.log(passSecondEl);
    if (passFirstEl == "") {
        document.getElementById('password1').style = 'border: 1px solid red';
        document.getElementById('password2').style = 'border: 1px solid red';
    } else if (passFirstEl != passSecondEl) {
        document.getElementById('password1').style = 'border: 1px solid red';
        document.getElementById('password2').style = 'border: 1px solid red';
        return false;
    } else if (passFirstEl == passSecondEl) {
        document.getElementById('password1').style = 'border: 1px solid green';
        document.getElementById('password2').style = 'border: 1px solid green';
    }
    return true;
};


const buttonStarEl = document.querySelectorAll('.form__rating_sign-input');

buttonStarEl.forEach((radio) => {
    radio.addEventListener('change', function () {
        const checkedNumber = document.querySelector('.form__rating_sign-input:checked').value || undefined;

        buttonStarEl.forEach((item) => {
            const currentLabel = item.previousElementSibling;
            (item.value <= checkedNumber) ? currentLabel.classList.add('check') : currentLabel.classList.remove('check');
        });
    })
});