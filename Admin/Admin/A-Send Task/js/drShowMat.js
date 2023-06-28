let matObject = JSON.parse(localStorage.getItem(`Drmat`));
let courseList;
let courseListside;

for (let i = 0; i < matObject.length; i++) {
    $("#drMat").append(`<div class="inner col-lg-3 col-md-6">
    
        <div class="course d-flex flex-column mt-4 px-0">
            <div class="course-image">
                <img src="../../images/${i}.jpg">
            </div>

            <div class="course-info p-3 pb-0">
            <a href="#" class="text-decoration-none">
                <h4>${matObject[i].Name}</h4>
                </a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo minima
                    est
                    enim praesentium nemo?</p>
            </div>
            
        </div>
    
</div>`);

    $(`#dropdown-mat`).append(`<li>
<a class="dropdown-item list-icon" href="#">${matObject[i].Name}</a>
</li>`);

};

courseList = document.querySelectorAll(`.course h4`);
courseListside = document.querySelectorAll(`.dropdown-item`);

for (let i = 0; i < courseList.length; i++) {
    courseList[i].addEventListener(`click`, function () {
        let matName = courseList[i].innerHTML;
        localStorage.removeItem(`drmatname`);
        localStorage.setItem("drmatname", JSON.stringify(matName));
        for (let z = 0; z < matObject.length; z++) {
            if (matName == matObject[z].Name) {
                let matId = matObject[z].ID;
                localStorage.removeItem(`drmatid`);
                localStorage.setItem("drmatid", JSON.stringify(matId));
            }
        }
        open(`../../Teacher/T-Subject/subject.html`, `_self`);
    });
}

for (let i = 0; i < courseListside.length; i++) {
    courseListside[i].addEventListener(`click`, function () {
        let matNameside = courseListside[i].innerHTML;
        localStorage.removeItem(`drmatname`);
        localStorage.setItem("drmatname", JSON.stringify(matNameside));
        for (let z = 0; z < matObject.length; z++) {
            if (matNameside == matObject[z].Name) {
                let matId = matObject[z].ID;
                localStorage.removeItem(`drmatid`);
                localStorage.setItem("drmatid", JSON.stringify(matId));
            }
        }
        open(`../../Teacher/T-Subject/subject.html`, `_self`);
    });
}