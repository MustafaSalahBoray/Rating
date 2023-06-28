let logout = document.getElementById(`logout`);
let userData = JSON.parse(localStorage.getItem("userData"));

$(`#adminName`).text(userData.userName);