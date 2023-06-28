async function qrGenerate() {

    let topic = Array.from(document.getElementsByClassName(`topic`));
    let showQr = Array.from(document.getElementsByClassName(`showQR`));
    let Details = Array.from(document.getElementsByClassName(`details`));
    let qrImage = document.getElementById(`qrImage`);
    let drmatid = JSON.parse(localStorage.getItem(`drmatid`));
    let topicid;
    
    for (let i = 0; i < topic.length; i++) {
        for (let i = 0; i < showQr.length; i++) {
            showQr[i].addEventListener('click', function () {
                topicid = topic[i].children[4].innerHTML;
                localStorage.setItem(`topicId`, JSON.stringify(topicid));
            })
        }

        for (let i = 0; i < Details.length; i++) {
            Details[i].addEventListener('click', function () {
                topicid = topic[i].children[4].innerHTML;
                localStorage.setItem(`topicId`, JSON.stringify(topicid));
            })
        }
    }
    let localtopicid = JSON.parse(localStorage.getItem(`topicId`));
    let qr = {
        Mat_ID: drmatid,
        Topic_ID: localtopicid
    };

    const response = await fetch(`https://qr-atendans.herokuapp.com/GeneratQR`, {
        method: "post",
        body: JSON.stringify(qr),
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });

    let res = await response.json();
    qrImage.setAttribute(`src`, res.URL)

}