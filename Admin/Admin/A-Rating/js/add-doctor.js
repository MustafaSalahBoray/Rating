let docId = document.getElementById(`docID`);
let docName = document.getElementById(`docName`);
let docEmail = document.getElementById(`docEmail`);
let docPassword = document.getElementById(`docPassword`);
let form = document.querySelector(`form`);
let formBtn = document.getElementById(`formBtn`);

form.addEventListener(`submit`, async function (e) {
    e.preventDefault();
    let addDoctor = {
        ID: docId.value,
        Name: docName.value,
        Email: docEmail.value,
        Password: docPassword.value
    };

    let response = await fetch(`https://qr-atendans.herokuapp.com/addDoctor`, {
        method: `POST`,
        body: JSON.stringify(addDoctor),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }
    });
    let res = await response.json();
    console.log(res)

    if (res.message == 'Done') {
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
    docName.value = docEmail.value = docId.value = docPassword.value = '';
}
/* clear form */

/* form validation */

let nameRejex = /^[a-z A-Z]{3,20}$/;
let emailRejex = /^[a-zA-Z0-9.+_-]{3,64}@[a-zA-Z0-9.-]{1,253}[.][a-zA-Z]{2,63}$/;
let passwordRejex = /^[0-9]{6}$/;
let idRejex = /^11000[0-9]{3}$/;


function disableRemove() {
    if (nameRejex.test(docName.value) && emailRejex.test(docEmail.value) && passwordRejex.test(docPassword.value) && idRejex.test(docId.value)) {
        formBtn.classList.remove("disabled");
    }
    else {
        formBtn.classList.add("disabled");
    }
}

docName.addEventListener("keyup", function () {
    if (nameRejex.test(docName.value) || docName.value == "") {
        document.getElementById("nameAlert").classList.add("visually-hidden");
        disableRemove();
    }
    else {
        document.getElementById("nameAlert").classList.remove("visually-hidden");
        disableRemove();
    }
});

docEmail.addEventListener("keyup", function () {
    if (emailRejex.test(docEmail.value) || docEmail.value == "") {
        document.getElementById("emailAlert").classList.add("visually-hidden");
        disableRemove();
    }
    else {
        document.getElementById("emailAlert").classList.remove("visually-hidden");
        disableRemove();
    }
});

docPassword.addEventListener("keyup", function () {
    if (passwordRejex.test(docPassword.value) || docPassword.value == "") {
        document.getElementById("passwordAlert").classList.add("visually-hidden");
        disableRemove();
    }
    else {
        document.getElementById("passwordAlert").classList.remove("visually-hidden");
        disableRemove();
    }
});

docId.addEventListener("keyup", function () {
    if (idRejex.test(docId.value) || docId.value == "") {
        document.getElementById("IDAlert").classList.add("visually-hidden");
        disableRemove();
    }
    else {
        document.getElementById("IDAlert").classList.remove("visually-hidden");
        disableRemove();
    }
});

/* Form validation */