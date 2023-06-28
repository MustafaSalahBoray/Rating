let matName = document.getElementById(`matName`);
let matObject = JSON.parse(localStorage.getItem(`Drmat`));
let courseListside;


matName.innerHTML = JSON.parse(localStorage.getItem(`drmatname`));

for (let i = 0; i < matObject.length; i++) {

    $(`#dropdown-mat`).append(`<li>
<a class="dropdown-item list-icon" href="#">${matObject[i].Name}</a>
</li>`);

};

courseListside = document.querySelectorAll(`.dropdown-item`);

for (let i = 0; i < courseListside.length; i++) {
    
    courseListside[i].addEventListener(`click`, function () {
        let matNameside = courseListside[i].innerHTML
        localStorage.removeItem(`drmatname`);
        localStorage.setItem("drmatname", JSON.stringify(matNameside));
        for (let z = 0; z < matObject.length; z++) {
            if (matNameside == matObject[z].Name) {
                let matId = matObject[z].ID;
                localStorage.removeItem(`drmatid`);
                localStorage.setItem("drmatid", JSON.stringify(matId));
            }
        }
        open(`../../Teacher/T-Subject/subject.html`,`_self`);
    });
};