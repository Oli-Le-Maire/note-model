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

(function() {
  function canAddNotes() {
    var noteList = new NoteList;
    noteList.addNote("Hello world");

    if(noteList.listOfNotes.length === 1) {
      return console.log("Test passed: Array length is equal to one");
    } else {
      return "Test failed: expected array length to equal to one";
    }
  };
  canAddNotes();
})(this);

