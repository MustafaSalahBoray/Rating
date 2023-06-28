let stuId = document.getElementById(`stuId`);
let stuName = document.getElementById(`stuName`);
let stuEmail = document.getElementById(`stuEmail`);
let stuPassword = document.getElementById(`stuPassword`);
let stuLevel = document.getElementById(`stuLevel`);
let form = document.querySelector(`form`);
let formBtn = document.getElementById(`formBtn`);

form.addEventListener(`submit`, async function (e) {
    e.preventDefault();
    let addStudent = {
        ID: stuId.value,
        Name: stuName.value,
        Email: stuEmail.value,
        Password: stuPassword.value,
        Level: stuLevel.value
    };

        let response = await fetch(`https://qr-atendans.herokuapp.com/addStudent`, {
        method: `POST`,
        body: JSON.stringify(addStudent),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin':'*'
          }
    });
    let res = await response.json();
    console.log(res)

    if(res.message == 'Done') {
        document.getElementById("successAlert").classList.remove("visually-hidden");
        document.getElementById("failedAlert").classList.add("visually-hidden");
        formBtn.classList.add("disabled");
        clearform();
    }
    else {
        document.getElementById("failedAlert").classList.remove("visually-hidden");
        document.getElementById("successAlert").classList.add("visually-hidden");
        formBtn.classList.add("disabled");
        clearform();
    }
});

/* clear form */
function clearform() {
    stuName.value = stuEmail.value = stuId.value = stuPassword.value = stuLevel.value = '';
}
/* clear form */

/* form validation */

let nameRejex = /^[a-z A-Z]{3,20}$/;
let emailRejex = /^[a-zA-Z0-9.+_-]{3,64}@[a-zA-Z0-9.-]{1,253}[.][a-zA-Z]{2,63}$/;
let passwordRejex = /^[0-9]{6}$/;
let idRejex = /^11900[1-4]{1}[0-9]{3}$/;
let levelRejex = /^[1-6]{1}$/;


function disableRemove() {
    if (nameRejex.test(stuName.value) && emailRejex.test(stuEmail.value) && passwordRejex.test(stuPassword.value) && idRejex.test(stuId.value) && levelRejex.test(stuLevel.value)) {
        formBtn.classList.remove("disabled");
    }
    else {
        formBtn.classList.add("disabled");
    }
}

stuName.addEventListener("keyup", function () {
    if (nameRejex.test(stuName.value) || stuName.value == "") {
        document.getElementById("nameAlert").classList.add("visually-hidden");
        disableRemove();
    }
    else {
        document.getElementById("nameAlert").classList.remove("visually-hidden");
        disableRemove();
    }
});

stuEmail.addEventListener("keyup", function () {
    if (emailRejex.test(stuEmail.value) || stuEmail.value == "") {
        document.getElementById("emailAlert").classList.add("visually-hidden");
        disableRemove();
    }
    else {
        document.getElementById("emailAlert").classList.remove("visually-hidden");
        disableRemove();
    }
});

stuPassword.addEventListener("keyup", function () {
    if (passwordRejex.test(stuPassword.value) || stuPassword.value == "") {
        document.getElementById("passwordAlert").classList.add("visually-hidden");
        disableRemove();
    }
    else {
        document.getElementById("passwordAlert").classList.remove("visually-hidden");
        disableRemove();
    }
});

stuId.addEventListener("keyup", function () {
    if (idRejex.test(stuId.value) || stuId.value == "") {
        document.getElementById("IDAlert").classList.add("visually-hidden");
        disableRemove();
    }
    else {
        document.getElementById("IDAlert").classList.remove("visually-hidden");
        disableRemove();
    }
});

stuLevel.addEventListener("keyup", function () {
    if (levelRejex.test(stuLevel.value) || stuLevel.value == "") {
        document.getElementById("LevelAlert").classList.add("visually-hidden");
        disableRemove();
    }
    else {
        document.getElementById("LevelAlert").classList.remove("visually-hidden");
        disableRemove();
    }
});

/* Form validation */