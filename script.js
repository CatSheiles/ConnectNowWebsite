const api = new XMLHttpRequest();
const url = "https://public.connectnow.org.uk/applicant-test/";
api.open("GET", url);
api.send();

api.onreadystatechange = (e) =>{
    let object = JSON.parse(api.responseText);

    for(let i = 0; i < object.length; i++){
        let date = new Date(object[i].first_release_date);

        date = date.getDate().toString() + '/' + date.getMonth().toString() + '/' + date.getFullYear().toString();

        let cardTemplate = `<div class='card'>` +
            `<div class="card-summary">` +
            `<h2>${object[i].name}</h2>` +
            `<h4>Release Date: ${date}</h4>` +
            `<p>${object[i].summary}</p>` +
            `</div>` +
            `<div class="score">${Math.round(object[i].rating/10)}</div>` +
            `</div>`;

        document.getElementById("gamebox").insertAdjacentHTML('beforeend', cardTemplate);
}
}


