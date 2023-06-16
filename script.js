const addTitle = document.getElementById('add-title');
const addText = document.getElementById('add-text');
const saveBtn = document.getElementById('save-note');
const addNote = document.getElementById('notes');
let notes = [];


// Function Call when
// Save Button is Clicked

function addNotes() {
    let notes = localStorage.getItem('notes'); //getting notes from local storage

    if(notes === null){
        notes = [];
    } else {
        notes = JSON.parse(notes);
    }

    if(addText.value == ''){
        alert("Please add note");
        return;
    }

    const noteObj = {
        title: addTitle.value,
        text: addText.value,
    }

    notes.push(noteObj); //pushing note object in notes array
    localStorage.setItem('notes', JSON.stringify(notes));  //setting notes in local storage
    showNotes();
}


//To save notes
//in local storage
function showNotes() {

    let html = '';
    let notes = localStorage.getItem('notes');
    if(notes === null){
        return;
    } else {
        notes = JSON.parse(notes);
    }

    for(let i = 0; i<notes.length; i++){
        html += ` <div class="note">
                    <button class = "detente" id = ${i} onclick="detente(${i})" >Delete</button>  
                   <div class = "title">${notes[i].title}</div>
                   <div class = "text">${notes[i].text}</div>
             </div>
        `
    }

    

    addNote.innerHTML = html;
}

function detente(idx){
        
    let notes = localStorage.getItem('notes');

    if(notes === null){
        return;
    } else {
        notes = JSON.parse(notes);
    }

    notes.splice(idx, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}


saveBtn.addEventListener('click', addNotes);
