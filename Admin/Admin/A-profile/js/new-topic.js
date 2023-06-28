let topicSubmit = document.getElementById(`topicSubmit`);
let topicName = document.getElementById(`topicName`);
let topicDesc = document.getElementById(`topicDesc`);
let form = document.querySelector(`form`);
let matid = JSON.parse(localStorage.getItem(`drmatid`))

form.addEventListener(`submit`, function (e) {
    e.preventDefault();
    addTopic();
    clearform();
})

async function addTopic() {
    let topic = {
        Name: topicName.value,
        Discption: topicDesc.value,
        Mat_ID: matid
    };

    fetch(`https://qr-atendans.herokuapp.com/addTopic`, {
        method: "post",
        body: JSON.stringify(topic),
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
}

/* clear form */
function clearform() {
    topicName.value = topicDesc.value = '';
}
/* clear form */