async function matTableShow() {

    let response = await fetch(`https://qr-atendans.herokuapp.com/getDBMatrials`, {
        method: `GET`,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }
    });
    let res = await response.json();

    let trs = "";
    for (let i = 0; i < res.Matrials.length; i++) {
        trs += `<tr class="matTableRow">
                    <td>${res.Matrials[i].Name}</td>
                    <td>${res.Matrials[i].ID}</td>
                    <td>${res.Matrials[i].Code}</td>
                    <td><button onclick="deleteMatrial()" class="btn btn-danger delete">Delete</button></td>
                </tr>`
    }
    document.getElementById("matTable").innerHTML = trs;

    let id = Array.from(document.getElementsByClassName(`matTableRow`));
    let Delete = Array.from(document.getElementsByClassName(`delete`));
    for (let i = 0; i < id.length; i++) {
        //console.log(id[i].children[1].innerHTML);
        for (let i = 0; i < Delete.length; i++) {
            Delete[i].addEventListener(`click`, function () {
                localStorage.setItem(`adminMatDelete`, JSON.parse(id[i].children[1].innerHTML));
            });
        }
    }
}
matTableShow();

async function deleteMatrial() {
    let ID = {
        ID: JSON.parse(localStorage.getItem(`adminMatDelete`))
    } 
    await fetch(`https://qr-atendans.herokuapp.com/deletmat`, {
        method: `delete`,
        body: JSON.stringify(ID),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }
    });
    await matTableShow();
}