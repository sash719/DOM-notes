
const button = document.createElement('button');
button.innerHTML = 'Add new';

const input  = document.createElement('input');
input.type = 'text';
input.id = "notesInput";

const ul = document.createElement('ul');
ul.id="notesUL";
const li = document.createElement('li');


document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(ul);




function newElement() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("notesInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {

      alert("Заметка не может быть пустой");

    } else {

      document.getElementById("notesUL").appendChild(li);
    }
    document.getElementById("notesInput").value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode(" ✖");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let li = this.parentElement;
    li.style.display = "none";
  }}  

  };


button.addEventListener('click', newElement);
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('-removed');
  }
}, false) 



