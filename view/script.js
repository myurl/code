txt = document.querySelector("#snip")

codeset = document.getElementById("code")
runset = document.getElementById("run")
runner = document.getElementById("runner")
preset = document.getElementById("preview")

sureset = document.getElementById("sure")


htmlcode =   
  `

  <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your Website Title</title>
<meta name="description" content="Brief description of your website, ideally including relevant keywords.">
<meta name="keywords" content="List of keywords related to your website content.">
<meta name="author" content="Your Name or Company Name">
<meta name="robots" content="index, follow">
<meta name="referrer" content="no-referrer-when-downgrade">
<meta name="googlebot" content="index, follow">
<meta name="bingbot" content="index, follow">
<meta property="og:title" content="Your Website Title">
<meta property="og:description" content="Brief description of your website, ideally including relevant keywords.">
<meta property="og:image" content="URL of an image representing your website for social sharing">
<meta property="og:url" content="URL of your website">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Website Title">
<meta name="twitter:description" content="Brief description of your website, ideally including relevant keywords.">
<meta name="twitter:image" content="URL of an image representing your website for social sharing">
<meta name="twitter:site" content="@YourTwitterHandle">
<meta name="twitter:creator" content="@YourTwitterHandle">
<meta name="application-name" content="Your Website Name">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="URL of your tile image">
<meta name="theme-color" content="#ffffff">
<link rel="stylesheet" href="https://actwu.github.io/ui/cute.css"/>
</head>
<body>

 
</body>
</html>

`


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

