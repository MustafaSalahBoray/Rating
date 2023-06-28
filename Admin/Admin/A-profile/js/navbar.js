var userImage = document.getElementById('user-photo');
var userBox = document.getElementById('user-box');
var profileContainer = document.querySelector('.profile-container');
var userCardImage = document.getElementById('user-card-image');
var cardClose = document.getElementById('card-close');

userBox.addEventListener('click', function (e) {
    var imgSrc = userImage.getAttribute('src');
    profileContainer.classList.replace('d-none', 'd-flex');
    userCardImage.setAttribute('src', imgSrc);
});

function close () {
    profileContainer.classList.replace('d-flex', 'd-none');
}

cardClose.addEventListener('click', close);