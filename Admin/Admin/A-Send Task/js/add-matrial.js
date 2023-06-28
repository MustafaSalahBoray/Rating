let matId = document.getElementById(`matID`);
let matName = document.getElementById(`matName`);
let matCode = document.getElementById(`matCode`);
let matlevel = document.getElementById(`matLevel`);
let form = document.querySelector(`form`);
let formBtn = document.getElementById(`formBtn`);

form.addEventListener(`submit`, async function (e) {
    e.preventDefault();
    let addMatrial = {
        ID: matId.value,
        Name: matName.value,
        Code: matCode.value,
        Level: matlevel.value
    };

        let response = await fetch(`https://qr-atendans.herokuapp.com/addMatrial`, {
        method: `POST`,
        body: JSON.stringify(addMatrial),
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
    matId.value = matCode.value = matName.value = matlevel.value = '';
}
/* clear form */

/* form validation */

let nameRejex = /^[a-z A-Z]{3,40}$/;
let codeRejex = /^(cs|it|CS|IT)[-][0-9]{3}$/;
let LevelRejex = /^[0-6]{1}$/;
let idRejex = /^110[0-9]{2}$/;


function disableRemove() {
    if (nameRejex.test(matName.value) && idRejex.test(matId.value) && codeRejex.test(matCode.value) && LevelRejex.test(matlevel.value)) {
        formBtn.classList.remove("disabled");
    }
    else {
        formBtn.classList.add("disabled");
    }
}

matName.addEventListener("keyup", function () {
    if (nameRejex.test(matName.value) || matName.value == "") {
        document.getElementById("nameAlert").classList.add("visually-hidden");
        disableRemove();
    }
    else {
        document.getElementById("nameAlert").classList.remove("visually-hidden");
        disableRemove();
    }
});

matCode.addEventListener("keyup", function () {
    if (codeRejex.test(matCode.value) || matCode.value == "") {
        document.getElementById("codeAlert").classList.add("visually-hidden");
        disableRemove();
    }
    else {
        document.getElementById("codeAlert").classList.remove("visually-hidden");
        disableRemove();
    }
});

matId.addEventListener("keyup", function () {
    if (idRejex.test(matId.value) || matId.value == "") {
        document.getElementById("idAlert").classList.add("visually-hidden");
        disableRemove();
    }
    else {
        document.getElementById("idAlert").classList.remove("visually-hidden");
        disableRemove();
    }
});

matlevel.addEventListener("keyup", function () {
    if (LevelRejex.test(matlevel.value) || matlevel.value == "") {
        document.getElementById("levelAlert").classList.add("visually-hidden");
        disableRemove();
    }
    else {
        document.getElementById("levelAlert").classList.remove("visually-hidden");
        disableRemove();
    }
});

/* Form validation */