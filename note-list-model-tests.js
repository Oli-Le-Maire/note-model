'use strict';

(function(){
  function hasEmptyArray() {
    var noteList = new NoteList;

    if(noteList.listOfNotes.length === 0) {
      return console.log('Test for array length');
    } else {
      return 'Test for array failed';
    }
  };
  hasEmptyArray();
})(this);
