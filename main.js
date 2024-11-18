const content = document.getElementById("content");
const create = document.getElementById("create");

function updateStorage(){
    localStorage.setItem("notes", content.innerHTML);
}

function showNotes(){
    content.innerHTML = localStorage.getItem("notes");
    addNoteListeners();
}

function addNoteListeners(){
    let notes = document.querySelectorAll(".note");
    notes.forEach(nt => {
        nt.onkeyup = function () {
            updateStorage();
        };
    });
}

function addNote(){
    let note = document.createElement("p");
    note.classList.add("note");
    note.contentEditable = "true";
    note.innerHTML = "New note";

    let img = document.createElement("img");
    img.src = "images/delete.png";

    note.appendChild(img);
    content.appendChild(note);

    updateStorage();
}

content.addEventListener("click", function(e){
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        addNoteListeners();
    }
});

showNotes();