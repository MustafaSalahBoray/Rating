let adminId = document.getElementById(`adminId`);
let adminName = document.getElementById(`adminname`);
let adminEmail = document.getElementById(`adminEmail`);
let adminPassword = document.getElementById(`adminPassword`);
let form = document.querySelector(`form`);
let formBtn = document.getElementById(`formBtn`);

form.addEventListener(`submit`, async function (e) {
    e.preventDefault();
    let addAdmin = {
        ID: adminId.value,
        Name: adminName.value,
        Email: adminEmail.value,
        Password: adminPassword.value
    };

        let response = await fetch(`https://qr-atendans.herokuapp.com/addAdmin`, {
        method: `POST`,
        body: JSON.stringify(addAdmin),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin':'*'
          }
    });
    let res = await response.json();

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
    adminName.value = adminEmail.value = adminId.value = adminPassword.value = '';
}
/* clear form */

/* form validation */

let nameRejex = /^[a-z A-Z]{3,20}$/;
let emailRejex = /^[a-zA-Z0-9.+_-]{3,64}@[a-zA-Z0-9.-]{1,253}[.][a-zA-Z]{2,63}$/;
let passwordRejex = /^[0-9]{6}$/;
let idRejex = /^11[0-9]{2}$/;


function disableRemove() {
    if (nameRejex.test(adminName.value) && emailRejex.test(adminEmail.value) && passwordRejex.test(adminPassword.value) && idRejex.test(adminId.value)) {
        formBtn.classList.remove("disabled");
    }
    else {
        formBtn.classList.add("disabled");
    }
}

adminName.addEventListener("keyup", function () {
    if (nameRejex.test(adminName.value) || adminName.value == "") {
        document.getElementById("nameAlert").classList.add("visually-hidden");
        disableRemove();
    }
    else {
        document.getElementById("nameAlert").classList.remove("visually-hidden");
        disableRemove();
    }
});

adminEmail.addEventListener("keyup", function () {
    if (emailRejex.test(adminEmail.value) || adminEmail.value == "") {
        document.getElementById("emailAlert").classList.add("visually-hidden");
        disableRemove();
    }
    else {
        document.getElementById("emailAlert").classList.remove("visually-hidden");
        disableRemove();
    }
});

adminPassword.addEventListener("keyup", function () {
    if (passwordRejex.test(adminPassword.value) || adminPassword.value == "") {
        document.getElementById("passwordAlert").classList.add("visually-hidden");
        disableRemove();
    }
    else {
        document.getElementById("passwordAlert").classList.remove("visually-hidden");
        disableRemove();
    }
});

adminId.addEventListener("keyup", function () {
    if (idRejex.test(adminId.value) || adminId.value == "") {
        document.getElementById("IDAlert").classList.add("visually-hidden");
        disableRemove();
    }
    else {
        document.getElementById("IDAlert").classList.remove("visually-hidden");
        disableRemove();
    }
});

/* Form validation */