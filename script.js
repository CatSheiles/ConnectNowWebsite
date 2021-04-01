const api = new XMLHttpRequest();
const url = "https://public.connectnow.org.uk/applicant-test/";
api.open("GET", url);
api.send();

let filterResults = "";
let object = [];
let  gameBox = document.getElementById("gamebox");

/*funky function to remove all games then insert games based on what user types into FilerResultsBox */
/*or you could install react to handle all this but this is a lightweight example */
function userTyped(input){
    filterResults = input.value;
    while(gameBox.firstChild)
    {
        gameBox.removeChild(gameBox.lastChild);
    }
    insertCards(object);
}

function insertCards(object)
{
    /*this is filtering based on user entering text in filter results box */
    /*note the 2 instances of toLowerCase handling if user types in upper&orLowercase */
    object = object.filter(gametitle => gametitle.name.toLowerCase().includes(filterResults.toLowerCase()));

    for(let i = 0; i < object.length; i++){
        let date = new Date(object[i].first_release_date);

        //changing date from unix timestamp to month/date/year
        date = date.getDate().toString() + '/' + date.getMonth().toString() + '/' + date.getFullYear().toString();

        let cardTemplate = `<div class='card'>` +
            `<div class="card-summary">` +
            `<h2>${object[i].name}</h2>` +
            `<h4>Release Date: ${date}</h4>` +
            `<p>${object[i].summary}</p>` +
            `</div>` +
            `<div class="score">${Math.round(object[i].rating/10)}</div>` + //rounding rating to 1number with no decimal
            `</div>`;

       gameBox.insertAdjacentHTML('beforeend', cardTemplate); /*this inserts whole file of games on page*/
    }
}

api.onreadystatechange = (e) =>{
    object = JSON.parse(api.responseText);
    insertCards(object);
}


