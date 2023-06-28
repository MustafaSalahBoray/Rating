let docId = document.getElementById(`docID`);
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
        dID: docId.value
    };

    const response = await fetch(`https://qr-atendans.herokuapp.com/addMatrialtoDoc`, {
        method: "post",
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
    else if (res == ` subject is added before `) {
        document.getElementById(`failedAlert`).classList.remove(`visually-hidden`);
    }
}

/* clear form */

function clearform() {
    matId.value = docId.value = '';
}

/* clear form */


/* form validation */

let docidRejex = /^11000[0-9]{3}$/;
let matidRejex = /^110[0-9]{2}$/;

function disableRemove() {
    if (docidRejex.test(docId.value) && matidRejex.test(matId.value)) {
        formBtn.classList.remove("disabled");
    }
    else {
        formBtn.classList.add("disabled");
    }
}

docId.addEventListener("keyup", function () {
    if (docidRejex.test(docId.value) || docId.value == "") {
        document.getElementById("docIDAlert").classList.add("visually-hidden");
        disableRemove();
    }
    else {
        document.getElementById("docIDAlert").classList.remove("visually-hidden");
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