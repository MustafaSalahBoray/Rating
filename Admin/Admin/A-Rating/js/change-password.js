let oldPass = document.getElementById(`changeOld`);
let newPass = document.getElementById(`changeNew`);
let confirmPass = document.getElementById(`changeConfirm`);
let passwordContainer = document.getElementById('change-password');
let passwordcardClose = document.getElementById('change-card-close');
let userchange = document.getElementById('change-password-list');
let profileContainerPassword = document.querySelector('.profile-container');
let form = document.querySelector(`form`);
let formBtn = document.getElementById(`formBtn`);
let userId =JSON.parse(localStorage.getItem("userData"));


userchange.addEventListener('click', function (e) {
    profileContainerPassword.classList.replace('d-flex', 'd-none');
    passwordContainer.classList.replace('d-none', 'd-flex');
});

function close () {
    passwordContainer.classList.replace('d-flex', 'd-none');
};

passwordcardClose.addEventListener('click', close);

form.addEventListener(`submit`, function(e){
    e.preventDefault();
    changePassword();
    clearform();
});

let changePassword = async function() {
    let changepassword = {
        oldPassword: oldPass.value,
        newPassword: newPass.value,
        cPassword: confirmPass.value,
        ID: userId.userId
    };

    const response = await fetch(`https://qr-atendans.herokuapp.com/changePassword`, {
        method: "PUT",
        body: JSON.stringify(changepassword),
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });

    let res = await response.json();
    console.log(res);

    if (res.message == 'Password Updated Suceccfully') {
        document.getElementById(`passwordAlert`).classList.remove(`visually-hidden`);
    }
};

/* clear form */
function clearform() {
    oldPass.value = newPass.value = confirmPass.value = '';
};
/* clear form */