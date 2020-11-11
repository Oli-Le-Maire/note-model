'use strict';

(function(exports) {
  function canReturnListHTMLForEmptyArray() {
    var noNotesList = {
      viewNotes: () => { return [] }
    };
    var noNoteListView = new NoteListView(noNotesList);
    
    assert.isTrue(noNoteListView.returnListHTML() === "<ul></ul>")
    console.log("#returnListHTML can give HTML (empty list) for an empty array");
  };
  canReturnListHTMLForEmptyArray();

  function canReturnListHTMLSingleNote() {
    var note1 = {
      showFullNote: () => { return "This is the first note!" }
    };
    var singleNotesList = {
      viewNotes: () => { return [note1] }
    }
    var singleNoteListView = new NoteListView(singleNotesList);
    var singleListHTML = "<ul><li><div>This is the first note!</div></li></ul>"
    
    assert.isTrue(singleNoteListView.returnListHTML() === singleListHTML)
    console.log("#returnListHTML can give HTML for a single note");
  };
  canReturnListHTMLSingleNote();

  function canReturnListHTMLMultipleNotes() {
    var note1 = {
      showFullNote: () => { return "This is the first note!" }
    };
    var note2 = {
      showFullNote: () => { return "The second note is better, though." }
    };
    var doubleNotesList = {
      viewNotes: () => { return [note1, note2] }
    };
  
    var doubleNoteListView = new NoteListView(doubleNotesList);
    var doubleListHTML = "<ul><li><div>This is the first note!</div></li><li><div>The second note is better, though.</div></li></ul>"

    assert.isTrue(doubleNoteListView.returnListHTML() === doubleListHTML)
    console.log("#returnListHTML can give HTML for multiple notes");
  };
  canReturnListHTMLMultipleNotes();

})(this);
