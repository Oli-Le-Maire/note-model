'use strict';

(function(exports) {
  function returnListHTML() {

    var noNotesList = {
      viewNotes: () => { return [] }
    };
    var notelistview = new NoteListView(noNotesList);

    assert.isTrue(notelistview.returnListHTML === "<ul></ul>" )
  };
})(this);
