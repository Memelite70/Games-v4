function loadgame(gameURL) {
  const element = document.getElementById("gameframe_frame");
  if (element !== null) {
    element.src = '/loader.html?game=' + gameURL;
    window.localStorage.setItem('gameURL', element.src);
    element.contentWindow.focus();
    element.scrollIntoView({ 
      behavior: "smooth" 
    }); 

     } else {
    localStorage.setItem("gameURL", gameURL);

    const text = gameURL;
    const snippet = "./assets/games/";
    const index = text.indexOf(snippet);
 
    let game2;
    if (index !== -1) {
      game2 = text.substring(index + snippet.length); 
    } else {
      console.log("Snippet not found.");
      game2 = gameURL;
    }
    window.location.href = "gameframe.html";
  }
}