let matName = document.getElementById(`matName`);
let matObject = JSON.parse(localStorage.getItem(`Stumat`));
let courseListside;


matName.innerHTML = JSON.parse(localStorage.getItem(`stumatname`));

for (let i = 0; i < matObject.length; i++) {

    $(`#dropdown-mat`).append(`<li>
<a class="dropdown-item list-icon" href="#">${matObject[i].Name}</a>
</li>`);

};

courseListside = document.querySelectorAll(`.dropdown-item`);

for (let i = 0; i < courseListside.length; i++) {
    
    courseListside[i].addEventListener(`click`, function () {
        let matNameside = courseListside[i].innerHTML
        localStorage.removeItem(`stumatname`);
        localStorage.setItem("stumatname", JSON.stringify(matNameside));
        for (let z = 0; z < matObject.length; z++) {
            if (matNameside == matObject[z].Name) {
                let matId = matObject[z].ID;
                localStorage.removeItem(`stumatid`);
                localStorage.setItem("stumatid", JSON.stringify(matId));
            }
        }
        open(`../../Student/Subject/subject.html`,`_self`);
    });
};