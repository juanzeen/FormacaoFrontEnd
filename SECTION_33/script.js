const notesContainer = document.querySelector("#notes-container");
const noteInput = document.querySelector("#note-content");
const addNoteBtn = document.querySelector(".add-note");
const searchInput = document.querySelector("#search-input");
const exportBtn = document.querySelector("#export-notes");

const createNote = (id, content, fixed) => {
  const element = document.createElement("div");
  element.classList.add("note");
  const textarea = document.createElement("textarea");
  textarea.value = content;
  textarea.placeholder = "Adicione algum texto...";
  element.appendChild(textarea);

  const pinIcon = document.createElement("i");
  pinIcon.classList.add(...["bi", "bi-pin"]);
  element.appendChild(pinIcon);

  if (fixed) element.classList.add("fixed");

  element
    .querySelector(".bi-pin")
    .addEventListener("click", () => toggleFixNote(id));

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add(...["bi", "bi-x-lg"]);
  element.appendChild(deleteIcon);

  const duplicateIcon = document.createElement("i");
  duplicateIcon.classList.add(...["bi", "bi-file-earmark-plus"]);
  element.appendChild(duplicateIcon);


  element.querySelector("textarea").addEventListener("keyup", (e) =>{

    const noteContent = e.target.value;

    updateNote(id, noteContent);

  })

  element
    .querySelector(".bi-x-lg")
    .addEventListener("click", () => deleteNote(id, element));
  element
    .querySelector(".bi-file-earmark-plus")
    .addEventListener("click", () => duplicateNotes(id));
  
    return element;
};

const cleanNotes = () => notesContainer.replaceChildren([]);

const deleteNote = (id, element) => {
  const notes = getNotes().filter((note) => note.id !== id);
  saveNote(notes);

  notesContainer.removeChild(element);
};

const duplicateNotes = (id) => {
    const notes = getNotes();
    const targetNote = notes.filter((note) => note.id === id)[0];

    const noteObject = {
        id: generateId(),
        content: targetNote.content, 
        fixed: false
    }

    const noteElement = createNote(noteObject.id, noteObject.content, noteObject.fixed)
    notesContainer.appendChild(noteElement);

    notes.push(noteObject);
    saveNote(notes);
};

const updateNote = (id, newContent) =>{
    const notes = getNotes();

    const targetNote = notes.filter((note) => note.id === id)[0]

    targetNote.content = newContent;

    saveNote(notes);
}


const toggleFixNote = (id) => {
  const notes = getNotes();

  const targetNote = notes.filter((note) => note.id === id)[0];
  //passa [0] pois o array tem apenas um elemento, os IDs são únicos

  targetNote.fixed = !targetNote.fixed;
  saveNote(notes);

  loadStorageNotes();
};

const addNote = () => {
  const notes = getNotes();

  const noteObj = {
    id: generateId(),
    content: noteInput.value,
    fixed: false,
  };

  const noteElement = createNote(noteObj.id, noteObj.content);
  notesContainer.appendChild(noteElement);
  notes.push(noteObj);

  noteInput.value = "";
  noteInput.focus();

  saveNote(notes);
};

const saveNote = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

const searchNotes = (search) => {
    const searchResults = getNotes().filter((note) => note.content.includes(search));

    if(search !==""){
        cleanNotes();
        searchResults.forEach((note) =>{
            const noteElement = createNote(note.id, note.content);
            notesContainer.appendChild(noteElement);
        });
        return;
    }

    cleanNotes();

    loadStorageNotes();
}

const getNotes = () => {
  const notes = JSON.parse(localStorage.getItem("notes")) || "[]";
  console.log(notes)
  //quando compara bool, o true vira 1 e o false vira 0
  const orderedNotes = notes.sort((a, b) => (a.fixed > b.fixed ? -1 : 1)) ||[];

  return orderedNotes;
};

const generateId = () => Math.floor(Math.random() * 5000);

const loadStorageNotes = () => {
  cleanNotes();

  getNotes().forEach((note) => {
    const noteEl = createNote(note.id, note.content, note.fixed);
    notesContainer.appendChild(noteEl);
  });
};

const exportData = () =>{
    const notes = JSON.parse(localStorage.getItem("notes")) || "[]"

    //padrão CSV
    //separada dado por , e quebra linha com \n

    const csvString = [
        ["ID", "Conteúdo", "Fixado?"],
        ...notes.map((note) => [note.id, note.content, note.fixed])
    ].map((e)=> e.join(",")).join("\n")

    console.log(csvString);

    const element = document.createElement("a");
    element.href = "data:text/csv;charset=utf-8,"+encodeURI(csvString);

    element.target = "_blank"
    element.download = "notes.csv"
    element.click();
}

addNoteBtn.addEventListener("click", (e) => addNote());

noteInput.addEventListener("keydown", (e) => {
    if(e.key==="Enter") addNote();
})

searchInput.addEventListener("keyup", (e) => {
    const search = e.target.value;
    searchNotes(search)
})

exportBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    exportData();
})



loadStorageNotes();
