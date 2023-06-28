async function stuTableShow() {

    let response = await fetch(`https://qr-atendans.herokuapp.com/getDBStudent`, {
        method: `GET`,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }
    });
    let res = await response.json();

    let trs = "";
    for (let i = 0; i < res.Students.length; i++) {
        trs += `<tr class="stuTableRow">
                    <td>${res.Students[i].Name}</td>
                    <td>${res.Students[i].ID}</td>
                    <td>${res.Students[i].Email}</td>
                    <td><button onclick="deleteStudent()" class="btn btn-danger delete">Delete</button></td>
                </tr>`
    }
    document.getElementById("stuTable").innerHTML = trs;

    let id = Array.from(document.getElementsByClassName(`stuTableRow`));
    let Delete = Array.from(document.getElementsByClassName(`delete`));
    for (let i = 0; i < id.length; i++) {
        //console.log(id[i].children[1].innerHTML);
        for (let i = 0; i < Delete.length; i++) {
            Delete[i].addEventListener(`click`, function() {
                localStorage.setItem(`adminStuDelete`, JSON.parse(id[i].children[1].innerHTML));
            });
        }
    }
}

stuTableShow();

async function deleteStudent() {
    let ID = {
        ID: JSON.parse(localStorage.getItem(`adminStuDelete`))
    } 
    await fetch(`https://qr-atendans.herokuapp.com/deletStudent`, {
        method: `delete`,
        body: JSON.stringify(ID),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }
    });
    await stuTableShow();
}