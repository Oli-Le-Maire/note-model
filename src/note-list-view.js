class NoteListView {

  #notesListModel
  #notesListArray

  constructor(notesListModel) {
    this.#notesListModel = notesListModel
    this.#notesListArray = notesListModel.viewNotes()
  }

  returnListHTML() {
    var htmlString = "<ul>";
    this.#notesListArray.forEach(
      note => htmlString += `<li><div>${note.showFullNote()}</div></li>`
    );
    return `${htmlString}</ul>`;
  }




};
