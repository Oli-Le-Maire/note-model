(function(exports) {
  function testNoteTextIsStored() {
    note = new Note('JavaScript is my favourite language');

    if(note.shownote() === 'JavaScript is my favourite language') {
      return console.log('test passed');
  } else {
      return 'test failed';
  }
  };
  testNoteTextIsStored();
})(this);
