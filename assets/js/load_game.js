function loadgame(gameURL){
  const element = document.getElementById("gameframe_frame");
  if (element !== null) {
    element.src = gameURL;
    window.
    localStorage.setItem('gameURL', element.src);
    element.contentWindow.focus();
    element.scrollIntoView({ 
      behavior: "smooth" 
    }); 
  }
  else{
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
    window.location.href = "gameframe.html#" + game2;
  }


}
const gameFrames = document.querySelectorAll('.gameframe');

gameFrames.forEach(gameFrame => {
  gameFrame.addEventListener('click', () => {
    // Find the h1 within the clicked gameFrame
    const h1 = gameFrame.querySelector('h1');

    // Get the text content of the h1
    const gameName = h1.textContent.trim();

    // Now you have the game name
    console.log("Game Name:", gameName);

    // You can use gameName for your loadgame function or other actions
    // loadgame(gameName); // Example
  });
});
