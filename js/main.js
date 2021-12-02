const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill Listeners 
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empties and call drag events 
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// Drag Functions 
function dragStart() {
    console.log('Start');
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0)

}

function dragEnd() {
    console.log('End');
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
    console.log('Over Me');
}

function dragEnter(e) {
    console.log('Now In Me');
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    console.log('You are Leaving Me');
    this.className = 'empty';
}

function dragDrop() {
    console.log('I am Dropped');
    this.className = 'empty';
    this.append(fill)
}