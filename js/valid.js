// uId = user id;
let formInput = document.querySelectorAll('.form_input');
let checkLabel = document.querySelector('.checkLabel');

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function mes(selector, message) {
    let elem = document.querySelector(selector);
    elem.style.borderBottom = '1.5px solid rgb(228, 81, 81)';

    if (document.querySelector('.message')) { document.querySelector('.message').remove(); }
    elem.insertAdjacentHTML('afterend', `<p class='message'>${message}</p>`);
}

formInput.forEach((elem) => {
    elem.addEventListener('click', () => {
        elem.style.borderBottom = '1.5px solid #272727';
        if (document.querySelector('.message')) { document.querySelector('.message').remove(); }
    })
})

checkLabel.addEventListener('click', () => {
    document.querySelector('.checkbox').classList.remove('_error');
})


// ---------------authorization----------------//
function checkAutoForm() {
    let res1 = validateEmail($(".autoEmail").val());
    if (!res1) { mes('.autoEmail', 'Не верный Email'); return false; }

    let res2 = $(".autoPwd").val().length > 5;
    if (!res2) { mes('.autoPwd', 'Пароль должен быть от 6 символов'); return false; }

    if (res1 && res2) { return true; } else { return false; }
}

function sendAutoForm() {
    // let emlAutorez = $(".autoEmail").val().toLowerCase(),
    //     pwdAutorez = $(".autoPwd").val().toLowerCase();

    // if (!checkAutoForm()) { return false; }

    // uId = check_user(emlAutorez, pwdAutorez);

    // if (uId == 0) {
    //     if (document.querySelector('.message')) { document.querySelector('.message').remove(); }
    //     document.querySelector('.btnReg').insertAdjacentHTML('afterend', `<p class='message'>Такого пользователя не существует</p>`);
    // } else {
    //     setCookie("uId", uId, "/");
    //     getUserCookieFromDB();
    //     console.log("Yes");
        setTimeout(() => { window.location.href = "profile.html"; }, 500);
    //     return 2;
    // }
}

const btnAutoForm = document.querySelector('#btnAutoForm');
btnAutoForm.addEventListener('click', () => { sendAutoForm(); })
    // // ---------------registration----------------//

function checkRegForm() {
    const checkbox = document.querySelector('#formAgreement');
    let res1 = validateEmail($(".regEmail").val());
    if (!res1) { mes('.regEmail', 'Не верный Email'); return false; }

    let res2 = $(".regName").val().length > 1;
    if (!res2) { mes('.regName', 'Имя должно быть от 2 символов'); return false; }

    let res3 = $(".regTel").val().length === 18;
    if (!res3) { mes('.regTel', 'Поле телефона не заполнено'); return false; }

    let res4 = $(".regPwd").val().length > 5;
    if (!res4) { mes('.regPwd', 'Пароль должен быть от 6 символов'); return false; }

    let res5 = $(".regRepPwd").val() == $(".regPwd").val();
    if (!res5) { mes('.regRepPwd', 'Пароли не совпадают'); return false; }

    let res6 = checkbox.checked;
    if (!res6) { $(".checkbox").addClass("_error"); return false; }

    if (res1 && res2 && res3 && res4 && res5 && res6) { return true; } else { return false; }
}

$("#regTel").mask("+375(99) 999-99-99");

function sendRegistrForm() {
    let regEmail = $("#regEmail").val().toLowerCase(),
        regTel = $("#regTel").val().toLowerCase(),
        regPwd = $("#regPwd").val().toLowerCase(),
        regName = $("#regName").val();

    let res = checkRegForm();
    if (!res) { return false; }

    uId = check_user_email(regEmail);
    if (uId != 0) {
        console.log("такой user существует");
    } else {
        newId = create_item(regName, regPwd, regEmail, regTel);
        if (newId * 1 > 0) {
            send_email0(regName, regEmail);
            setCookie("uId", newId, "/");
            console.log("Вы зарегистрированы");
            $("#regEmail").val("");
            $("#regPwd").val("");
            $(".regTel").val("");
            $(".regRepPwd").val("");
            $("#regName").val("");
            getUserCookieFromDB();
        } else {
            showMess(multiText.autorezation[26].title[getCookie("lang")], "#fb5957"); // Such a user already exists
        }
    }
}

const btnRegForm = document.querySelector('#btnRegForm');
btnRegForm.addEventListener('click', () => { sendRegistrForm(); })

function getUserCookieFromDB() {
    setCookie("pwd", get_user_item("pwd", getCookie("uId")), "/");
    setCookie("title", get_user_item("title", getCookie("uId")), "/");
    setCookie("email", get_user_item("email", getCookie("uId")), "/");
    setCookie("phone", get_user_item("phone", getCookie("uId")), "/");
}