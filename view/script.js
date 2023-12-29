txt = document.querySelector("#snip")

codeset = document.getElementById("code")
runset = document.getElementById("run")
runner = document.getElementById("runner")
preset = document.getElementById("preview")

sureset = document.getElementById("sure")


htmlcode =   
  `
  
<html lang="en">
  <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
                
          <meta name="theme-color" content="#191919">
          <meta name="apple-mobile-web-app-capable" content="yes">
          <title>My site</title>
          <meta property="og:title" content="site">
          <meta property="og:description" content="My Site">
          <meta property="og:image" content="img/banner.png">
          <meta name="twitter:card" content="summary">
          <meta name="twitter:title" content="Me">
          <meta name="twitter:description" content="My Site">
          <meta name="twitter:image" content="img/banner.png">
          <meta name="twitter:image:alt" content="banner name">
      
      <meta property="title" content="Me">
      <meta property="author" content="Me">
      <meta property="image" content="/img/banner.png">
      <meta property="description" content="My Site">
          
      <link rel="shortcut icon" href="/img/icon.png" type="image/x-icon"> 

      <link rel="stylesheet" href="https://atstem.github.io/just.css/just.css"/>
      <link rel="stylesheet" href="https://atstem.github.io/just.css/anim.css"/>
      <link rel="stylesheet" href="https://atstem.github.io/just.css/fonts.css"/>
      
       <link rel="stylesheet" 
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.css"/>

      </head>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <style> .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp { font-variation-settings: 'FILL' 1,'wght' 500,'GRAD' 200, 'opsz' 48 } </style>
  <body>


  
   <script src="https://atstem.github.io/just.css/just.js">
  </script> 
  
  </body>
  </html>`


function datarevert() {
txt.value = localStorage.getItem("saved");
txt2.value = localStorage.getItem("saved2");
}

saver = setInterval(() => {
save()
}, 500)

function save() {
localStorage.setItem("saved", txt.value)
  
  }

function backup() {
  
  localStorage.setItem("backup", txt.value)
   
   
     }
function load() {
  txt.value = localStorage.getItem("backup");
  }

function starthtml() {
  txt.value += htmlcode;
  }

function code() {
   
  codeset.classList.remove("hide");
  runset.classList.add("hide");
  sureset.classList.add("hide");
  
  }

function sure() {
   
  codeset.classList.add("hide");
  runset.classList.add("hide");
  sureset.classList.remove("hide");
  
  }

function run() {
   
  viewport = `
  
   <iframe style="position:fixed; top:0;left:0;right:0; height: 90%;width: 100vw; bottom:0.65in;" src="https://actwu.github.io/code/view/re.html"
class="  center"
></iframe>

  `

  runset.classList.remove("hide");
  codeset.classList.add("hide");
  sureset.classList.add("hide"); 
  
  runner.innerHTML = viewport 
  }

function preview() {
   
  preset.innerHTML = localStorage.getItem("saved");
 
  }
  
function copy() {

  navigator.clipboard.writeText(txt.value);

}

function copyThis(copies) {

  navigator.clipboard.writeText(copies);

  

}

