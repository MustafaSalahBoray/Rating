let userData = JSON.parse(localStorage.getItem("userData"));
$(`#userName`).text(userData.userName);
$(`#profileName`).text(userData.userName);
$(`#cardName`).text(userData.userName);
$(`#cardEmail`).text(userData.userEmail);
$(`#detailsEmail`).text(userData.userEmail);