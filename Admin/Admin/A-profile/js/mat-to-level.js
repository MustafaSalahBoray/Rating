let matLevel = document.getElementById(`materialLevel`);
let matId = document.getElementById(`materialID`);
let form = document.querySelector(`form`);
let formBtn = document.getElementById(`formBtn`);


form.addEventListener(`submit`, function(e){
    e.preventDefault();
    matData();
    clearform();
    formBtn.classList.add("disabled");
});

let matData = async function() {
    let matdata = {
        mID: matId.value,
        sLv: matLevel.value
    };

    const response = await fetch(`https://qr-atendans.herokuapp.com/AddMatrialToAllStud`, {
        method: "PUT",
        body: JSON.stringify(matdata),
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });

    let res = await response.json();
    console.log(res)

    if (res.message == `Done`) {
        document.getElementById(`successAlert`).classList.remove(`visually-hidden`);
    }
}

/* clear form */

function clearform() {
    matId.value = matLevel.value = '';
}

/* clear form */


/* form validation */

let matLevelRejex = /^[1-6]{1}$/;
let matidRejex = /^110[0-9]{2}$/;

function disableRemove() {
    if (matLevelRejex.test(matLevel.value) && matidRejex.test(matId.value)) {
        formBtn.classList.remove("disabled");
    }
    else {
        formBtn.classList.add("disabled");
    }
}

matLevel.addEventListener("keyup", function () {
    if (matLevelRejex.test(matLevel.value) || matLevel.value == "") {
        document.getElementById("matLevelAlert").classList.add("visually-hidden");
        disableRemove();
    }
    else {
        document.getElementById("matLevelAlert").classList.remove("visually-hidden");
        disableRemove();
    }
});

matId.addEventListener("keyup", function () {
    if (matidRejex.test(matId.value) || matId.value == "") {
        document.getElementById("matIDAlert").classList.add("visually-hidden");
        disableRemove();
    }
    else {
        document.getElementById("matIDAlert").classList.remove("visually-hidden");
        disableRemove();
    }
});

/* Form validation */