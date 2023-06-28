var showQR = document.getElementsByClassName('showQR');
var qrContainer = document.querySelector('.qr-container');
var qrCardClose = document.getElementById('qr-card-close');
var qrCodeCancel = document.getElementById('qr-code-cancel');
var addNewTopic = document.getElementById('addNewTopic');
var topicContainer = document.querySelector('.new-topic-container');
var topicCardClose = document.getElementById('new-topic-close');
var topicCancle = document.getElementById('new-topic-cancel');
var details = document.getElementsByClassName('details');
var cardDetails = document.getElementById('card-details');
var detailsContainer = document.querySelector('.topic-details-container');
var detailsCardClose = document.getElementById('topic-details-close');
var detailsCancle = document.getElementById('topic-details-cancel');
let topiC = Array.from(document.getElementsByClassName(`topic`));
let topicid;
let attendlist = document.getElementById(`attendList`);

function showQr() {
    for (var i = 0; i < showQR.length; i++) {
        showQR[i].addEventListener('click', function () {
            qrContainer.classList.replace('d-none', 'd-flex');
        });
    }
}

async function attendList() {

    let attend = {
        Mat_ID: JSON.parse(localStorage.getItem(`drmatid`)),
        Topic_ID: JSON.parse(localStorage.getItem(`topicId`)),
    }

    const response = await fetch(`https://qr-atendans.herokuapp.com/attendansList`, {
        method: "post",
        body: JSON.stringify(attend),
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
    let res = await response.json();
    console.log(res.Attendans)
    for (let i = 0; i < res.Attendans.length; i++) {
        let trs = "";
        for (let i = 0; i < res.Attendans.length; i++) {
            trs += `<tr class="drAttendList">
                        <td>${res.Attendans[i].Name}</td>
                        <td>${res.Attendans[i].ID}</td>
                        <td><button onclick="deleteAttend()" class="btn btn-danger delete">Delete</button></td>
                    </tr>`
        }

        document.getElementById("attendList").innerHTML = trs;

        let id = Array.from(document.getElementsByClassName(`drAttendList`));
        let Delete = Array.from(document.getElementsByClassName(`delete`));

        for (let i = 0; i < id.length; i++) {
            //console.log(id[i].children[1].innerHTML);
            for (let i = 0; i < Delete.length; i++) {
                Delete[i].addEventListener(`click`, function () {
                    localStorage.setItem(`stuidattend`, JSON.stringify(id[i].children[1].innerHTML));
                    
                });
            }
        }
    }
}

async function deleteAttend() {
    let ID = {
        sID: JSON.parse(localStorage.getItem(`stuidattend`)),
        mID: JSON.parse(localStorage.getItem(`drmatid`)),
        tID: JSON.parse(localStorage.getItem(`topicId`))
    }
    await fetch(`https://qr-atendans.herokuapp.com/deletStudentfromattend`, {
        method: `delete`,
        body: JSON.stringify(ID),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }
    });
    window.location.replace(`../../Teacher/T-Subject/subject.html`)
}

function showDetails() {
    for (var s = 0; s < details.length; s++) {
        details[s].addEventListener('click', function () {
            detailsContainer.classList.replace('d-none', 'd-flex');
        });
    }
}

function close() {
    qrContainer.classList.replace('d-flex', 'd-none');
    topicContainer.classList.replace('d-flex', 'd-none');
    detailsContainer.classList.replace('d-flex', 'd-none');
}

qrCardClose.addEventListener('click', close);
qrCodeCancel.addEventListener('click', close);
topicCancle.addEventListener('click', close);
topicCardClose.addEventListener('click', close);
detailsCancle.addEventListener('click', close);
detailsCardClose.addEventListener('click', close);


addNewTopic.addEventListener(`click`, function () {
    topicContainer.classList.replace('d-none', 'd-flex');
});