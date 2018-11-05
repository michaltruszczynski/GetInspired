
$(function() {

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

//fill Listeners

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
  }

//Drag functions

function dragStart() {
    console.log('start');
    this.classList.add('hold');
    setTimeout(()=> (this.className='invisible'),1);
}

function dragEnd() {
    console.log('end');
    this.className = "fill";
}

function dragOver (event) {
    event.preventDefault();
    
}

function dragEnter (event) {
   event.preventDefault();
   this.classList.add('hovered');
}

function dragLeave () {
   this.classList.remove('hovered');
}

function dragDrop () {
   this.className = 'empty';
   this.append(fill)
}


});