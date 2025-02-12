function gtagLoad(){
var script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-6FGFH50YKT'; 
        script.async = true;

         document.head.appendChild(script);

      
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

  
        gtag('config', 'G-6FGFH50YKT');
        console.log('Google Analytics Loaded');}
body.onload = gtagLoad();