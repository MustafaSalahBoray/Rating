async function drTableShow() {

    let response = await fetch(`https://qr-atendans.herokuapp.com/getDBDoctors`, {
        method: `GET`,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }
    });
    let res = await response.json();

    let trs = "";
    for (let i = 0; i < res.Doctors.length; i++) {
        trs += `<tr class="drTableRow">
                <td>${res.Doctors[i].Name}</td>
                <td>${res.Doctors[i].ID}</td>
                <td>${res.Doctors[i].Email}</td>
                <td><button onclick="deleteDoctor()" class="btn btn-danger delete">Delete</button></td>
            </tr>`
    }
    document.getElementById("drTable").innerHTML = trs;
    let id = Array.from(document.getElementsByClassName(`drTableRow`));
    let Delete = Array.from(document.getElementsByClassName(`delete`));
    for (let i = 0; i < id.length; i++) {
        //console.log(id[i].children[1].innerHTML);
        for (let i = 0; i < Delete.length; i++) {
            Delete[i].addEventListener(`click`, function() {
                localStorage.setItem(`adminDrDelete`, JSON.parse(id[i].children[1].innerHTML));
            });
        }
    }
}

drTableShow();


async function deleteDoctor() {
    let ID = {
        ID: JSON.parse(localStorage.getItem(`adminDrDelete`))
    } 
    await fetch(`https://qr-atendans.herokuapp.com/deletDoctor`, {
        method: `delete`,
        body: JSON.stringify(ID),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }
    });
    await drTableShow();
}