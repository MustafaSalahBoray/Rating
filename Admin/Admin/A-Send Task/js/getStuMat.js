async function getStumat() {
    let studentID = JSON.parse(localStorage.getItem(`userData`));
    let getstumat = {
        sID: studentID.userId
    };

    const response = await fetch(`https://qr-atendans.herokuapp.com/getStmat`, {
        method: "post",
        body: JSON.stringify(getstumat),
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });

    let res = await response.json();
    localStorage.removeItem(`Stumat`);
    localStorage.setItem("Stumat", JSON.stringify(res.subjects));
};

