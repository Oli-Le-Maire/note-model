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

(function(){
  function returnAllNotes() {
    var noteList = new NoteList;

    noteList.addNote("Hola Mundo!!!");

    if(noteList.viewNotes() === "Hola Mundo!!!") {
      return console.log("Test passed: Function returns the correct string");
    } else {
      return "Test failed: expected function to return correct string";
    }
  };
  returnAllNotes();
})(this);
