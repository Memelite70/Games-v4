
async function FetchHtml() {
     var p = window.location.pathname;
    let response = await fetch('/embed' + p);
    return await response.text(); 
}

async function Do() {
    let html = await FetchHtml();
    console.log(html);
    localStorage.setItem('gamesHTML', html);
    const DivToHaveGamesInserted = document.getElementById("divForGames");
    DivToHaveGamesInserted.innerHTML = localStorage.getItem('gamesHTML');
}

Do();
document.addEventListener('DOMContentLoaded', function () {
Do();
});