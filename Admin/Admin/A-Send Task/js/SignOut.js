let signout = document.getElementById(`cardSignOut`);
let logStatus = JSON.parse(localStorage.getItem(`logedIn`));

// signout.addEventListener(`click`, function() {
//     let logedin = {
//         login: false
//     };
//     localStorage.setItem(`logedIn`, JSON.stringify(logedin));
// });

// if (logStatus.login == false) {
//     window.location.replace(`../../Sign up - login page/login.html`)
// };