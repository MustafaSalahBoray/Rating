let courseListside;
let matObject = JSON.parse(localStorage.getItem(`Drmat`));
let profileCourseCard = document.getElementById(`profileCourseCard`);

for (let i = 0; i < matObject.length; i++) {

    $(`#dropdown-mat`).append(`<li>
<a class="dropdown-item list-icon" href="#">${matObject[i].Name}</a>
</li>`);

$(`#profileCourseCard`).append(`<dd> <a class="courseprofilecard text-decoration-none" 
href="../T-Subject/subject.html">${matObject[i].Name}</a>
</dd>`);

};

courseListside = document.querySelectorAll(`.dropdown-item`);
courseprofilecard = document.querySelectorAll(`.courseprofilecard`);

for (let i = 0; i < courseListside.length; i++) {
    
    courseListside[i].addEventListener(`click`, function () {
        let matNameside = courseListside[i].innerHTML
        localStorage.removeItem(`drmatname`);
        localStorage.setItem("drmatname", JSON.stringify(matNameside));
        open(`../../Teacher/T-Subject/subject.html`,`_self`);
    });
};


for (let i = 0; i < courseprofilecard.length; i++) {
    
    courseprofilecard[i].addEventListener(`click`, function () {
        let matNameside = courseprofilecard[i].innerHTML
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