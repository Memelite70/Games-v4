function fullscreen(){
  const frame = document.getElementById('gameframe_frame');
  frame.requestFullscreen();
  frame.contentWindow.focus();
}
function loadFrameGamesPage() {

    const iframe = document.getElementById('gameframe_frame');


    const storedSrc = localStorage.getItem('gameURL');

    if (storedSrc) {
        iframe.src = '/loader.html?game=' + storedSrc;
        getIframeTitle();
    } else {

        iframe.src = 'https://example.com'; 
    }
};
function getIframeTitle() {
  var iframe = document.getElementById("gameframe_frame");
  console.log(iframe.contentWindow.document.title);
}
function cloak() {
  const mainGameFrame = document.getElementById('gameframe_frame');
  const gameUrl = localStorage.getItem('gameURL');
  mainGameFrame.src = `paused.html?game=${gameUrl}`;
  const left = (screen.width - 1366) / 2;
  const top = (screen.height - 768) / 4;
  const win = window.open('', '_blank', `width=1366,height=768,top=${top},left=${left}`);
  if (window.focus) {
    win.focus();
  }
  win.document.body.style.margin = '0';
  win.document.body.style.height = '100vh';
  win.document.title = window.location.hostname;
  const iframe = win.document.createElement('iframe');
  iframe.style.border = 'none';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.margin = '0';
  iframe.src = gameUrl;
  win.document.body.appendChild(iframe);
  win.addEventListener('close', () => {
    mainGameFrame.src = iframe.src;
  });
}