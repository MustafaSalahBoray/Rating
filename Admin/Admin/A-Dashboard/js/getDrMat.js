async function getDrmat() {
    let doctorID = JSON.parse(localStorage.getItem(`userData`));
    let getdrmat = {
        dID: doctorID.userId
    }
    const response = await fetch(`https://qr-atendans.herokuapp.com/getDrmat`, {
        method: "post",
        body: JSON.stringify(getdrmat),
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });

    let res = await response.json();
    localStorage.removeItem(`Drmat`);
    localStorage.setItem("Drmat", JSON.stringify(res.Supjects));
};