txt = document.querySelector("#snip")

codeset = document.getElementById("code")
runset = document.getElementById("run")
runner = document.getElementById("runner")
preset = document.getElementById("preview")

sureset = document.getElementById("sure")


htmlcode =   
  `

  <neo>
  <script src="https://purpos.web.app/ui/sen.js"></script>
  <script>
    set.title("Neo Sample App");
    set.info("A simple Neo app");
    set.key("neo, app, sample");
    set.view();
    set.cover(1);
    set.icon(1);
    ui();
  </script>

  <screen center>
    <cont bbg m2>
      <p mid [y]>Welcome to the Neo Sample App</p>
      <a onmousedown="alert('Hello!')">Click Me</a>
    </cont>
  </screen>
</neo>

`


function datarevert() {
txt.value = localStorage.getItem("saved");

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
    const udhd = localStorage.getItem("saved");
    
    if (udhd) {
        preset.innerHTML = udhd;
        const scripts = preset.getElementsByTagName('script');
        for (let script of scripts) {
            const newScript = document.createElement('script');
            newScript.text = script.innerHTML;
            document.body.appendChild(newScript);
        }
    }
}

  
function copy() {

  navigator.clipboard.writeText(txt.value);

}

function copyThis(copies) {

  navigator.clipboard.writeText(copies);
code();
}

